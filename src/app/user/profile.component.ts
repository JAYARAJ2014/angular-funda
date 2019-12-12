import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TOASTR_TOKEN, IToaster } from '../common/toastr.service';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
      em { float: right; color: #E05C65; padding-left: 10px;}
      .error input {background-color:#ffcccc;}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    @Inject(TOASTR_TOKEN) private toastr: IToaster) {
  }

  ngOnInit() {

    this.profileForm = new FormGroup({
      firstName: new FormControl
        (this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]),
      lastName: new FormControl
        (this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
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
      this.toastr.success('Profile Saved!', 'Success');
    }
  }

  validateFirstName(): boolean {
    const form = this.profileForm.controls;
    return (form.firstName.invalid && form.firstName.touched);
  }

  validateLastName(): boolean {
    const form = this.profileForm.controls;
    return (form.lastName.invalid && form.lastName.touched);
  }

}
