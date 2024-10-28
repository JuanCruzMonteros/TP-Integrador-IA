import { AuthAdapter } from '@auth/adapters';
import { AuthData, LoginResponse } from '@auth/models/auth.model';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = Inject(HttpClient)
  private readonly baseUrl = "http://localhost:4000/auth"

  login(user: AuthData): Observable<string> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, user).pipe(
      map(AuthAdapter)
    )
  }

  register(user: AuthData): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/login`, user)
  }
}
