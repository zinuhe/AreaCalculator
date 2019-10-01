import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
    return this.http.post<Area>(this.areasUrl, Area, this.httpOptions);
  }

  // PUT: update an Area on the server */
  updateArea(area: Area): Observable<any> {
    return this.http.put(this.areasUrl, Area, this.httpOptions);
  }

  // DELETE: delete an Area from the server */
  deleteArea(area: Area | number): Observable<Area> {
    const id = typeof area === 'number' ? area : area.id;
    const url = `${this.areasUrl}/${id}`;

    return this.http.delete<Area>(url, this.httpOptions);
  }
}
