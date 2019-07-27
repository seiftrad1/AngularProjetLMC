import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { UserService } from './user.service';

@Component({
  selector: 'ngx-user',
  templateUrl: './user.component.html',
  styleUrls: [],
})
export class UserComponent implements OnInit {

  users: User[];
  user: string;
  constructor(private router: Router, private userService: UserService) {

  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });
    this.user = window.sessionStorage.getItem('id');

  }
  onSelect(user: User) {
    this.router.navigate(['/user' , user.id ]);

  }



}
