import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../todo.service';
import { todos } from '../todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos = todos;
  checkoutForm = this.formBuilder.group({
    description: '',
    completed: false
  })

  constructor(private todoService: TodoService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log('todos: ', todos);
    this.todoService.addTodos(this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
