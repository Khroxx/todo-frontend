import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  wrongCredentials = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ){

  }
  async login(){
    try {
      let resp: any = await this.authService.loginWithUsernameAndPassword(this.username, this.password)
      console.log(resp)
      localStorage.setItem('token', resp['token'])
      this.wrongCredentials = false
      this.router.navigateByUrl('/todos')
    //redirect
      }
    catch(error){
      console.error('error', error);
      this.wrongCredentials = true
    }
  }
}
