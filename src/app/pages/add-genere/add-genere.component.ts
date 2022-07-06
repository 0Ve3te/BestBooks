import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-genere',
  templateUrl: './add-genere.component.html',
  styleUrls: ['./add-genere.component.css']
})
export class AddGenereComponent implements OnInit {
  model: Partial<Category> = {};
  errorInfo = "";

  constructor(private bookService: BooksService,  private router: Router) { }

  ngOnInit(): void {
  }

  send() {
    this.bookService.addGenere(this.model as Category).subscribe(
      result => this.router.navigate(['./books/addedNewGenere']),
      error => this.errorInfo = error.status
    );
  }

}
