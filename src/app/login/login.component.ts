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
  showErrorMessage: boolean;
  string;
  user: any;
  private errorMessage: string;

  constructor( private authService: AuthService, private router: Router, private token: TokenStorage) { }

  login(formData: any): void {
    this.showErrorMessage = false;

    this.authService.sendCredential(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        console.log(this.token.getToken());

      }, (error) => {
        this.showErrorMessage = true;
      },
      () => {
        this.authService.getUserAllData().subscribe(
          data => {
            this.user = data;
            localStorage.setItem('id', this.user.id);
            localStorage.setItem('username', this.user.username);
            localStorage.setItem('photo', this.user.photo);
            this.router.navigate(['/pages/user']);

          },
        );
      },
    );

  }
  ngOnInit() {

  }

}

