import { inject, Injectable, Resource, Signal, signal, WritableSignal } from "@angular/core";
import { Todo } from "../model/todo";
import { HttpClient, httpResource, HttpResourceRef } from "@angular/common/http";
import { APP_API } from "../../config/api.config";
import { TodoApi } from "../model/todo-api";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  #todos = signal<Todo[]>([]);

  // Fournie moi le HttpClient qui va me permettre de faire des appels HTTP à mes API
  httpClient = inject(HttpClient);

  /**
   * Permet de récupérer le flux des TodoApis
   * Observable<TodoApi[]>
   */
  getTodosFromApi(): Observable<TodoApi[]> {
    // Flux , il peut intéresser * plusieurs observateurs
    return this.httpClient.get<TodoApi[]>(APP_API.todo);
  }

  getTodosResource(): Resource<TodoApi[]> {
    return httpResource(() => APP_API.todo, {
      defaultValue: []
    });
  }

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
      todo,
    ]);
  }

  /**
   * Delete le todo s'il existe
   *
   * @param todo: Todo
   */
  deleteTodo(todo: Todo): void {
    this.#todos.update((actualTodos) => actualTodos.filter((todoEnCours) => todoEnCours != todo));
  }

  /**
   * Logger la liste des todos
   * @returns void
   */
  logTodos() {
    console.log(this.#todos());
  }
}
