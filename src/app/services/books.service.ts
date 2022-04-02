import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bookc } from './../models/bookc';
import { Book } from '../models/book';


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  private id = 5;
  
  constructor(private http: HttpClient) { }

  getBook(){
    return this.http.get<Book>(this.url+ '/' + this.id);
  }

  getBookc(){
    return this.http.get<Bookc>(this.url+ '/' + this.id);
  }

  // getBooks(){
  //   return this.http.get<Book[]>(this.url,);
  // }

  getBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.url);
  }

}
