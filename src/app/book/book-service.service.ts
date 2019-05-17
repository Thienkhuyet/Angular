import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly url = 'http://localhost:8080/listbook';
  constructor(private http: HttpClient) { }
  getListBook(): Observable<any> {
    return this.http.get(`http://localhost:8080/listbook`)
  }
}
