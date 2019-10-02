import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { Area } from './area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  // URL to Web API path
  // private areasUrl = 'https://localhost:44371/Area';
  private areasUrl = '/api/Area'; // setted with a proxy file

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  // GET areas from the Web API (.Net Core server) ****
  getAreas(): Observable<Area[]> {
    return this.http.get<Area[]>(this.areasUrl);
  }
  // , error => console.error(error));

  // GET area by Id. Will 404 if id not found */
  getArea(id: number): Observable<Area> {
    const url = `${this.areasUrl}/${id}`;

    // return this.http.get<Area>(url).pipe();
    return this.http.get<Area>(url);
  }

  // POST: add a new Area to the server */
  addArea(area: Area): Observable<Area> {
    return this.http.post<Area>(this.areasUrl, area, this.httpOptions);
  }

  // PUT: update an Area on the server */
  updateArea(area: Area): Observable<Area> {
    return this.http
      .put<Area>(this.areasUrl, area, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  // DELETE: delete an Area from the server */
  // deleteArea(area: Area | number): Observable<Area> {
  //   const id = typeof area === 'number' ? area : area.id;
  //   const url = `${this.areasUrl}/${id}`;
  //   return this.http.delete<Area>(url, this.httpOptions);
  // }

  deleteArea(area: Area | number) {
    const id = typeof area === 'number' ? area : area.id;
    const url = `${this.areasUrl}/${id}`;

    return this.http
      .delete<Area>(url, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }


  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
