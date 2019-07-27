import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private userService: UserService) {

  }
  createUser(): void {

    this.userService.createUser(this.user)
      .subscribe( dataUser => {
        this.router.navigate(['/show', this.user.id]);
      });
  }

  ngOnInit() {
  }

}
