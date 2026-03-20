import { Routes } from '@angular/router';
import { First } from './components/first/first';
import { TodoComponent } from './todo/todo/todo.component';
import { CvComponent } from './cv/cv-component/cv-component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { Second } from './components/second/second';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { Nf404 } from './components/nf404/nf404';
import { Login } from './auth/login/login';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { authGuard } from './auth/guards/auth-guard';

export const routes: Routes = [
  // todo
  {path: '', component: First},
  {path: 'todo', component: TodoComponent},
  {path: 'login', component: Login},
  {path: 'cv', component: CvComponent},
  {path: 'word', component: MiniWordComponent},
  // Todo: Ajouter la route du DetailsCv
  // Le guard permet de ne laisser l'accès que pour les personnes concernés : ici authentifié
  {path: 'cv/add', component: AddCvComponent, canActivate: [authGuard]},
  {path: 'cv/:id', component: DetailsCvComponent},
  {path: 'hello/:name/:firstname', component: Second},
  {path: '**', component: Nf404}
];
