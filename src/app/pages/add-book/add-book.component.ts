import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { Category } from 'src/app/model/category';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  model: Partial<Book> = {};
  generes: Category[] = [];
  errorInfo = "";

  constructor(private bookService: BooksService, private router: Router,public auth: AuthService) { }

  ngOnInit(): void {
    this.bookService.getGeneres().subscribe(generes => this.generes = generes);
  }

  send() {
    this.bookService.addBook(this.model as Book).subscribe(
      result => this.router.navigate(['./books/addedNew']),
      error => this.errorInfo = error.status
    );
  }

}
