import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CookbookService {
  url;
  constructor(private http: HttpClient) {
    this.url = '/api/';
  }

  getAPIData(): Observable<any> {
    return this.http.get(this.url + 'loadrecipes');
  }

  postAPIData(newRecipe): Observable<any> {
    console.log(newRecipe);
    return this.http.post(this.url + 'create', newRecipe);
  }
}
