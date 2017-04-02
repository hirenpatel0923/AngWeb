import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService{
    constructor(private http: Http){
        console.log('Login service...')
    }
    varifyUser(username: string, password: string) {
         return this.http.get('http://localhost:60321/api/login/validateuser?uname=' + username + '&pwd=' + password)
            .map(res => res.json());
    }
}