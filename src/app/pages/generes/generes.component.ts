import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/model/category';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-generes',
  templateUrl: './generes.component.html',
  styleUrls: ['./generes.component.css']
})
export class GeneresComponent implements OnInit {
  generes: Observable<Category[]> | undefined

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.generes = this.bookService.getGeneres();
  }

}
