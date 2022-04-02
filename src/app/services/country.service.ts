import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  //private url = 'http://localhost:5000/countries';
  private url = 'http://192.168.0.29:5000/';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]>{
    
    // const lang = localStorage.getItem('lang' || 'en');
    
    // const headers= new HttpHeaders().set('Accept-Language', (lang as string));
    // console.log(headers);


    return this.http.get<Country[]>(this.url + localStorage.getItem('lang'),
      // ,{
      // headers: headers
    // }
    );
    // const headers = new HttpHeaders({
    //   'Accept-Language': lang
    // });  


  }


}
