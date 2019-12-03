import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {


  login(formValues) {
    console.log('User Name: ' + formValues.userName);
    console.log('Password:  ' + formValues.password);
  }
}
