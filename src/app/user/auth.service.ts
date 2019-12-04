import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()

export class AuthService {

  currentUser: IUser;
  loginUser(userName: string, password: string) {

    // faking current user.
    this.currentUser = {

      id: 1,
      userName: 'john2019',
      firstName: 'John',
      lastName: 'Doe'
    };
  }
  isAuthenticated() {
    return !!this.currentUser;
  }

}
