import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv-component/cv-component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';

export const routes: Routes = [
  {path: '', component: First},
  {path: 'todo', component: TodoComponent},
  {path: 'cv', component: CvComponent},
  {path: 'word', component: MiniWordComponent}
];
