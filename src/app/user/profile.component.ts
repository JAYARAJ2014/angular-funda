import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styles:  [`
      em { float: right; color: #E05C65; padding-left: 10px;}
      .error input {background-color:#ffcccc;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {

    this.profileForm = new FormGroup({
      firstName: new FormControl
        (this.authService.currentUser.firstName, Validators.required),
      lastName: new FormControl
        (this.authService.currentUser.lastName, Validators.required)
    });

  }
  cancelClick() {
    console.log('cancelClick invoked');
    this.router.navigate(['events']);
  }
  saveProfile(formValues) {
    console.log('saveProfile invoked');
    if (this.profileForm.valid) {
      console.log('form is valid. Saving data.....');
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
      this.router.navigate(['events']);
    }
  }

  validateFirstName(): boolean {
    let form = this.profileForm.controls;
    return (form.firstName.invalid && form.firstName.touched);
  }

  validateLastName(): boolean {
    let form = this.profileForm.controls;
    return (form.lastName.invalid && form.lastName.touched);
  }

}
