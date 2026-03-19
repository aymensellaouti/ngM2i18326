import { Injectable, Signal, signal, WritableSignal } from "@angular/core";
import { Todo } from "../model/todo";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);

  /**
   * elle retourne la liste des todos
   *
   * @returns Todo[]
   */
  getTodos(): Signal<Todo[]> {
    return this.#todos.asReadonly();
  }

  /**
   *Elle permet d'ajouter un todo
   *
   * @param todo: Todo
   *
   */
  addTodo(todo: Todo): void {
    this.#todos.update((actualTodos) => [
      // ... récupére tous les éléments du tableau
      ...actualTodos,
      todo
    ]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   */
  deleteTodo(todo: Todo): void {
    this.#todos.update((actualTodos) =>
      actualTodos.filter(todoEnCours => todoEnCours != todo)
    )
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    console.log(this.#todos());
  }
}
