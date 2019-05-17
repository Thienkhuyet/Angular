import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly url = 'http://localhost:8081/vuong';
  constructor(private http: HttpClient) { }
  public getUer(): Observable<any> {

    let headers = new HttpHeaders({
      'Authorization': window.sessionStorage.getItem('tocken')
    });
    let options = {
      headers: headers
    }
    return this.http.get<any>(this.url, options);
    ;
  }
}
