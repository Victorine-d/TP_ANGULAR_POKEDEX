import { Component, OnInit } from '@angular/core';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  mail: string ='';
  password: string ='';
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  onClick(){
    const res =this.authService.getTokenAccess(this.mail, this.password)
    console.log(this.mail);
    console.log(this.password);
  }
}
