import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  loginData(data: any) {
    return this.http.post('http://localhost:5050/login', data);
  }

  forgotPassword(data:any){
    return this.http.post('http://localhost:8080/account/forgotPassword', data);
  }
  //saving data
  saveToken(token: string) {
    sessionStorage.setItem('key', token);
  }
}
