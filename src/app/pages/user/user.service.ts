import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user.model';

const httpOptions = {
   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class UserService {
  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
      })};

  constructor(private http: HttpClient) {}

  private userUrl = 'http://localhost:8088/user';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl, this.httpOptions);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl +  user.id, this.httpOptions);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user, this.httpOptions);
  }

  public getUser(id) {
    return this.http.get<User>(this.userUrl + id, this.httpOptions);
  }
}
