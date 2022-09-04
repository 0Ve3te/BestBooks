import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './pages/books/books.component';
import { BookDetailsComponent } from './pages/books/book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule} from '@angular/material/list';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatTabsModule} from '@angular/material/tabs';
import { SafePipe } from './safe.pipe';
import { FormsModule } from '@angular/forms';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { AddGenereComponent } from './pages/add-genere/add-genere.component';
import { GeneresComponent } from './pages/generes/generes.component';
import { GenereComponent } from './pages/generes/genere/genere.component';
import {MatInputModule} from '@angular/material/input';
import {NgxPaginationModule} from 'ngx-pagination';

//Import the module from th SDK Auth0
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailsComponent,
    SafePipe,
    AddBookComponent,
    AddGenereComponent,
    GeneresComponent,
    GenereComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatGridListModule,
    MatCardModule,
    FlexLayoutModule,
    HttpClientModule,
    MatListModule,
    MatTooltipModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    NgxPaginationModule,

    AuthModule.forRoot({
      domain: 'dev-d72-3hx4.us.auth0.com',
      clientId: 'PZ7cUYrEOlP3uN91LCxHQ871z3lDHPwH'
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
