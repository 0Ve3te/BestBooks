import { Component, OnInit, Sanitizer } from '@angular/core';
import { Book } from 'src/app/model/book';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  bookDetails: Observable<Book> | undefined;
  bookId: number = 0;

  constructor(private router: ActivatedRoute, private http: BooksService) { }

  ngOnInit(): void {
    this.bookId = this.router.snapshot.params['id'];
    this.bookDetails = this.http.getBook(this.bookId);
  }


}
