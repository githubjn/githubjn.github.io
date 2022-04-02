import { Bookc } from './../models/bookc';
import { Book } from './../models/book';
import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books.service';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  book: Book | undefined;
  bbook: Observable<Bookc> | undefined;//avec interfae (Book) ou class (Bookc) ca l'air de marcher
  
  books: Observable <Book[]> | undefined;
  
  
  gbook: Promise<Book>|null = null;
  promise: Promise<any>;

  
  constructor(private booksService: BooksService) {    
    this.promise = this.getPromise();
  }

  ngOnInit(): void {
    //this.books$ = this.booksService.getBooks();    
    this.showBook();
    this.showBooks();
    this.loadBook();
  }

  getPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Promise complete!");
        }
        , 3000
        );
    });
 }

  showBook() {
    this.booksService.getBook()
      .subscribe((data: Book) => this.book = {
          userId: data.userId,
          id: data.id,
          title: data.title,
          body: data.body
      });
  }

  loadBook(){
    this.bbook = this.booksService.getBookc();
  }

  showBooks(){
    // this.booksService.getBooks()
    //   .subscribe((data: Book[]) => this.books = data);
    this.books = this.booksService.getBooks();
  }

}