import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { User } from './user.model';
import { Observable } from 'rxjs/Observable';

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
    return this.http.post<User>(this.userUrl + '/add', user, this.httpOptions);
  }

  public getUser(id) {
    return this.http.get<User>(this.userUrl + id, this.httpOptions);
  }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', 'http://localhost:8088/cv/post', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
}
