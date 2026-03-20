import { inject, Injectable } from "@angular/core";
import { Credentials } from "../dto/credentials.dto";
import { Observable } from "rxjs";
import { LoginResponseDto } from "../dto/login-response.dto";
import { HttpClient } from "@angular/common/http";
import { APP_API } from "../../config/api.config";
import { APP_CONST } from "../../config/constantes";

@Injectable({providedIn: 'root'})
export class AuthService {
  httpClient = inject(HttpClient);
  login(credentials: Credentials): Observable<LoginResponseDto> {
    return this.httpClient.post<LoginResponseDto>(APP_API.login, credentials);
  }

  logout() {
    localStorage.removeItem(APP_CONST.authToken);
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem(APP_CONST.authToken)) return true;
    return false;
  }
}
