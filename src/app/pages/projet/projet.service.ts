import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Projet } from './projet.model';

@Injectable({
  providedIn: 'root'  // <- ADD THIS
})
export class ProjetService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + window.sessionStorage.getItem('AuthToken'),
    })};
  user: string;
  constructor(private http: HttpClient) {}

  private userUrl = 'http://localhost:8088/projet/';

  public getProjets() {
    return this.http.get<Projet[]>(this.userUrl, this.httpOptions);
  }

  public deleteUser(projet) {
    return this.http.delete(this.userUrl +  projet.id, this.httpOptions);
  }

  public createProjet(projet) {
    this.user = window.localStorage.getItem('id');
    return this.http.post<Projet>(this.userUrl + this.user, projet, this.httpOptions);
  }
}

