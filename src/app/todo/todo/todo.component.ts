import { Component, inject, signal } from "@angular/core";
import { Todo } from "../model/todo";
import { TodoService } from "../service/todo.service";
import { FormsModule } from "@angular/forms";
import { TodoApi } from "../model/todo-api";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  imports: [FormsModule],
})
export class TodoComponent {
  // State
  todo = signal(new Todo());
  todoService = inject(TodoService);
  todos = this.todoService.getTodos();
  todosApi = signal<TodoApi[]>([]);
  todosResource = this.todoService.getTodosResource();
  constructor() {
    console.log('construct Todo');

    this.todoService.getTodosFromApi().subscribe({
      next: (todosFromApi) => {
        // ce que je veux faire avec les todos
        this.todosApi.set(todosFromApi);
      },
      error: (e) => {
        // ce que je fais en cas d'erreur
        console.log(e);
      },
      complete: () => {
        // je définis ce que je veux faire quand ca se termine
        console.log('Job fini :D');
      }
    })
  }
  addTodo() {
    this.todoService.addTodo(this.todo());
    this.todo.set(new Todo());
  }
  deleteTodo(todo: Todo) {
    this.todoService.deleteTodo(todo);
  }
}
