import {Component} from '@angular/core';
import {LoginService} from '../services/login.service';
import 'rxjs/add/operator/map';

@Component({
    selector: 'login',
    //template: '<h1 class="page-header">Login Screen</h1>'
    templateUrl: './login.html',
    providers: [LoginService]
})
export class LoginComponent {
    username: string;
    password: string;
    errormsg: string;
    user: LoginFlag;
   //  loginService: LoginService;

    constructor(private loginService: LoginService) {
    }
     checkUser() {
        this.loginService.varifyUser(this.username, this.password).subscribe(res => { 
            this.user = res;
            if (this.user.Data === true) {
                this.errormsg = 'Correct';
            }
            else{
                this.errormsg = 'Wrong username and password';
            }
        });
        // console.log(this.user.Data);
        /*if (this.user.Data ==  this.username) {
            this.errormsg = 'Congrats';
        }*/
       // this.loginService.getuser();
    }
}
interface LoginFlag {
   Data: boolean;
}
