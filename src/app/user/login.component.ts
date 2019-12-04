import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {

  constructor(private authService: AuthService, private router: Router){

  }

  login(formValues) {
    console.log('User Name: ' + formValues.userName + ', ' + 'Password:  ' + formValues.password);
    this.authService.loginUser(formValues.userName, formValues.password);

    this.router.navigate(['events']);

  }
  cancel() {
    console.log('Cancel clicked');
    this.router.navigate(['events']);
  }
}
