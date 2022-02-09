import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, catchError } from 'rxjs';

import { User } from 'src/app/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL: String = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application-json');

  constructor(private http: HttpClient) { }

  signup(user: User): Observable<any>{
    return this.http.post(`${this.API_URL}/auth/signup`, user).pipe(
      catchError(this.handleError)
    )
  }
  
  handleError(error: HttpErrorResponse) {
    let msg=''
    if(error.error instanceof ErrorEvent) {
      msg = error.error.message;
    } else {
      msg = `Error code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }

}
