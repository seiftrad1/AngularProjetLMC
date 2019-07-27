import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from '../pages/service/auth.service';
import { TokenStorage } from '../pages/service/token.storage';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  private credential = {'username': '', 'password' : ''};
  username: string;
  password: string;
  user: any;
  constructor( private authService: AuthService, private router: Router, private token: TokenStorage) { }

  login(): void {

    this.authService.sendCredential(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        console.log(this.token.getToken());

      },
      error => {
        console.log(error);

      },
      () => {
        this.authService.getUserAllData().subscribe(
          data => {
            this.user = data;
            localStorage.setItem('id', this.user.id);
            localStorage.setItem('username', this.user.username);
            this.router.navigate(['/pages/user']);

          },
        );
      },
    );

  }
  ngOnInit() {

  }

}

