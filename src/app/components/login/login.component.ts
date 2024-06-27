import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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
  constructor(
    private authService: AuthService
  ){

  }
  async login(){
    try {
      let resp = await this.authService.loginWithUsernameAndPassword(this.username, this.password)
      console.log(resp)
    //redirect
      }
    catch(error){
      console.error('error', error);
    }
  }
}
