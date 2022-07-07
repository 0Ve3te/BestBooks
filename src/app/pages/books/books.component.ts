import { AfterContentChecked, Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { Book } from 'src/app/model/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books: Observable<Book[]> | undefined;
  addedNewBook: boolean = false;
  addedNewGenere: boolean = false;
  searchBooks: string = '';

  constructor(private http: BooksService, private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.books = this.http.getBooks();

    //when parameters are updated in the same component - subscription
    this.router.paramMap.subscribe(params => {
      this.searchBooks = params.get('name')!
      this.changeBookList();
    });

    //when parameter is always the same - snapshot
    //this.searchBooks = this.router.snapshot.params['name'];

    if(this.router.snapshot.routeConfig?.path === 'books/addedNew')
      this.addedNewBook = true;

    if(this.router.snapshot.routeConfig?.path === 'books/addedNewGenere')
      this.addedNewGenere = true;
  }

  changeBookList() {
    if(this.searchBooks != '' && this.searchBooks !== null)
      this.books = this.http.getBooksContains(this.searchBooks);
    else
      this.books = this.http.getBooks();
  }
}
