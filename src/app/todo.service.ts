import { Injectable } from '@angular/core';
import { Todo, todos } from './todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = todos;

  constructor() { }

  addTodos(todo: Todo) {
    console.log('adding');
    this.todos.push(todo);
  }
}
