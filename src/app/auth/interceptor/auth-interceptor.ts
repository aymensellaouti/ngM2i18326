import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { APP_CONST } from '../../config/constantes';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // Je crée mon header
      const headers = new HttpHeaders().set(
        APP_CONST.authHeaderName,
        localStorage.getItem(APP_CONST.authToken) ?? ''
      );
      const authService = inject(AuthService);
      // Si je suis authentifié je clone la requéte
      // J'y inject le token
      // jke la renvoi
      if (authService.isAuthenticated()) {
        const newReq = req.clone({
          headers
        });
        return next(newReq).subscribe({
          next: (response) => {
            // Je récupére la réponse et j'en fais ce que je veux
          }
        });
      }
      // Sinon je ne fais rien
      return next(req);
};
