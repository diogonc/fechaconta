import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  Router,
  ROUTER_DIRECTIVES
} from 'angular2/router';
// import {HTTP_PROVIDERS} from 'angular2/http';

import {HomeCmp} from '../home/home';
import {LoginCmp} from '../login/login';
import {AboutCmp} from '../about/about';
import {NameList} from '../../services/name_repository/name_list';
import {UserRepository} from '../../services/user_repository/user_repository';


@Component({
  selector: 'app',
  viewProviders: [NameList, UserRepository],
  templateUrl: './components/app/app.html',
  styleUrls: ['./components/app/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: LoginCmp, as: 'Login' },
  { path: '/Home', component: HomeCmp, as: 'Home' },
  { path: '/about', component: AboutCmp, as: 'About' }
])

export class AppCmp {
    constructor(private user_repository: UserRepository, private  router: Router) {}

    isLogged(): boolean {
        return this.user_repository.isLogged();
    }

    isNotLogged(): boolean {
        return !this.isLogged();
    }

    logoff(): void {
        this.user_repository.deleteToken();
        this.router.navigate(['/']);
    }
}
