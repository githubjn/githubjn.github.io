import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {

  private url = 'http://localhost:5000/countries';

  constructor(private http: HttpClient) { }

  getCourses(){
    return ["Mathematics", "Physics", "Sport", "History"];
  }
  

  getCountries(): Observable<Country[]>{
    return this.http.get<Country[]>(this.url);
  }


}
