import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private apiUrl = environment.apiUser;
  private postUrl = environment.apiPost;


  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl);
  }

  getPosts() {
    return this.http.get(this.postUrl);
  }
}
