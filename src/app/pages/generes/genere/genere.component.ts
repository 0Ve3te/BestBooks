import { Component, OnInit } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BooksService } from 'src/app/services/books.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-genere',
  templateUrl: './genere.component.html',
  styleUrls: ['./genere.component.css']
})
export class GenereComponent implements OnInit {
  books: Observable<Book[]> | undefined;
  genreId: number = 0;
  genre: Observable<Category> | undefined;

  constructor(private router: ActivatedRoute, private http: BooksService) { }

  ngOnInit(): void {
    this.genreId = this.router.snapshot.params['id'];
    this.books = this.http.getBooksInGenre(this.genreId);
    this.genre = this.http.getGenre(this.genreId);
  }

}
