import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BestBooks';
  bookName: string = '';

  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService, private router: Router) {}

  searchBook() {
    this.router.navigate(['./books/search/', this.bookName]);
  }

}
