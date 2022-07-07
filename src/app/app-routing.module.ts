import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { AddGenereComponent } from './pages/add-genere/add-genere.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';
import { BooksComponent } from './pages/books/books.component';
import { GenereComponent } from './pages/generes/genere/genere.component';
import { GeneresComponent } from './pages/generes/generes.component';

import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BooksComponent},
  {path: 'books/search/:name', component: BooksComponent},
  {path: 'books/addedNew', component: BooksComponent},
  {path: 'books/addedNewGenere', component: BooksComponent},
  {path: 'books/:id', component: BookDetailsComponent},
  {path: 'genre/:id', component: GenereComponent},
  {path: 'create/book', component: AddBookComponent, canActivate: [AuthGuard]},
  {path: 'create/genere', component: AddGenereComponent, canActivate: [AuthGuard]},
  {path: 'genre', component: GeneresComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
