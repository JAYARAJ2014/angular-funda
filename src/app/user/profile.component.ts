import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {

    this.profileForm = new FormGroup({
      firstName: new FormControl
        (this.authService.currentUser.firstName),
      lastName: new FormControl
        (this.authService.currentUser.lastName)
    });

  }
  cancelClick() {
    console.log('cancelClick invoked');
    this.router.navigate(['events']);
  }
  saveProfile(formValues) {
    console.log('saveProfile invoked');
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
  }

}
