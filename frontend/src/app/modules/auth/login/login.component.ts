import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username = '';
    password = '';

    constructor(private http: HttpClient, private router: Router) {}

    onSubmit() {
        this.http.post('http://localhost:3000/api/auth/login', { username: this.username, password: this.password })
            .subscribe((response: any) => {
                localStorage.setItem('token', response.token);
                this.router.navigate(['/candidates']);
            });
    }
}
