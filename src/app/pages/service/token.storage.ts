import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';

@Injectable({
    providedIn: 'root'
  })
export class TokenStorage {

  constructor() { }

  public signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
    // à optimiser
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
}
