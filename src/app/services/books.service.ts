import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Book } from '../model/book';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url = 'https://best-book-web-api.herokuapp.com/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.url + '/' + id);
  }

  getBooksContains(str: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.url + '/?search=' + str);
  }

  getGenre(id: number): Observable<Category> {
    return this.http.get<Category>('https://best-book-web-api.herokuapp.com/api/categories/' + id);
  }

  getGeneres(): Observable<Category[]> {
    return this.http.get<Category[]>('https://best-book-web-api.herokuapp.com/api/categories');
  }

  getGenere(id: number): Observable<Category> {
    return this.http.get<Category>('https://best-book-web-api.herokuapp.com/api/categories' + id);
  }

  getBooksInGenre(id: number): Observable<Book[]> {
    return this.getBooks().pipe(map(b => b.filter(book => book.categoryId == id)));
  }

  addBook(book: Book) {
    return this.http.post(this.url, book);
  }

  addGenere(genere: Category) {
    return this.http.post('https://best-book-web-api.herokuapp.com/api/categories', genere);
  }

}
