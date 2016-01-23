import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {UserRepository} from '../../services/user_repository/user_repository';

@Component({
  selector: 'login',
  templateUrl: './components/login/login.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class LoginCmp {
  username: string;
  password: string;

  constructor(public userRepository: UserRepository) {}

  login(): boolean {
    //if (this.username === 'username' && this.password === 'password')
    this.userRepository.setToken(this.password);
    return false;
  }
}
