import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userURL ="http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/auth/login";
  constructor(private http : HttpClient) { }

  getTokenAccess(email: string, password: string){
    let params = new HttpParams();
    if(email){
      params = params.set("email",email);
      if(password){
        params = params.set("password",password);
        return this.http.post<any>(this.userURL, {email: email, password: password}).subscribe(
          rep =>{
            if(rep.access_token != undefined){
              localStorage.setItem("ACCESS_TOKEN", rep.access_token);
              localStorage.setItem("EXPIRES_IN", rep.expires_in);
            }
          }
        );
      }
    }
  return false;
}
}
