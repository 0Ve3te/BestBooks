import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private http: BooksService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.books = this.http.getBooks();
    if(this.router.snapshot.routeConfig?.path === 'books/addedNew')
      this.addedNewBook = true;
    if(this.router.snapshot.routeConfig?.path === 'books/addedNewGenere')
      this.addedNewGenere = true;
  }

}
