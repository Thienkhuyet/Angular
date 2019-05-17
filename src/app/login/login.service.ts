import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly url = 'http://localhost:8081/oauth/token';
  constructor(
    private _router: Router, private http: HttpClient) { }


  public getTocken(login: any): Observable<any> {
    // const headers = new HttpHeaders().set('Authorization', 'Basic bXktdHJ1c3RlZC1jbGllbnQ6');
    let headers = {
      'Authorization': 'Basic ' + btoa('my-trusted-client:'),
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    }
    // headers.set('Content-Type', "application/x-www-form-urlencoded");
    return this.http.post<any>(this.url, login, { headers });
    ;
  }

  login(username, password) {

    let headers = {
      'Authorization': 'Basic bXktdHJ1c3RlZC1jbGllbnQ6',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    const body = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');
    return this.http.post(this.url, body.toString(), { headers: headers });
  }
  saveToken(token) {
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    localStorage.set("access_token", token.access_token, expireDate);
    this._router.navigate(['/']);
  }

  // getResource(resourceUrl) : Observable<Foo>{
  //   var headers = new Headers({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
  //     'Authorization': 'Bearer '+Cookie.get('access_token')});
  //   var options = new RequestOptions({ headers: headers });
  //   return this._http.get(resourceUrl, options)
  //                  .map((res:Response) => res.json())
  //                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
}






