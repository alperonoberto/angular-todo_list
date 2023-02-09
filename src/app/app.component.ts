import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public newTodo: string;

  public agregarTarea(item: string) {
    if (item) {
      let todo = new Todo();
      todo.name = item;
      this.todos.push(todo);
      this.newTodo = '';
    } else {
      alert('Debe introducir una tarea.');
    }
  }

  public alternarTarea(id: number) {
    this.todos[id].isCompleted = !this.todos[id].isCompleted;
  }

  public eliminarTarea(id: number) {
    this.todos = this.todos.filter((todo, i) => i !== id);
  }
}
