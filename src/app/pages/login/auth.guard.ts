import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate() {

      if (sessionStorage.getItem('ROLE') === 'ADMIN') {
          // this.router.navigate(['/users']);
        return true;
      } else {
        this.router.navigate(['/login']);
        console.log('unauthorized');
        return false;

      }

    }
  }
