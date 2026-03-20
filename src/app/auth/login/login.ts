import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { APP_CONST } from '../../config/constantes';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  authService = inject(AuthService);
  router = inject(Router);
  toastr = inject(ToastrService);

  login(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe({
      next: (respone) => {
        // On stocke le token quelque part
        localStorage.setItem(APP_CONST.authToken, respone.id);
        //On passe à la page d'accueuil
        this.router.navigate(['cv']);
      },
      error: (e) => {
        // Toast
        this.toastr.error('Veuillez vérifier vos identifiants');
      },
    })
  }
}
