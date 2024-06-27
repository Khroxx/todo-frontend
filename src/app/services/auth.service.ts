import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public loginWithUsernameAndPassword(username:string, password:string){
    const url = environment.baseUrl + '/login/';
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        "username": username,
        "password": password
      }
    };
    return lastValueFrom(this.http.post(url, options));
  }
}
