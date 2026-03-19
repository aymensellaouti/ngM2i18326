import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv-component/cv-component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { Second } from './components/second/second';

export const routes: Routes = [
  // todo
  {path: '', component: First},
  {path: 'todo', component: TodoComponent},
  {path: 'cv', component: CvComponent},
  {path: 'word', component: MiniWordComponent},
  // Todo: Ajouter la route du DetailsCv
  {path: 'hello/:name/:firstname', component: Second},
];
