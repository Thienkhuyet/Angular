import { Component, OnInit } from '@angular/core';
import { BookService } from '../book-service.service';

@Component({
  selector: 'app-book-detai',
  templateUrl: './book-detai.component.html',
  styleUrls: ['./book-detai.component.scss']
})
export class BookDetaiComponent implements OnInit {

  constructor(private bookService: BookService) { }
  books = [];
  ngOnInit() {
    this.bookService.getListBook().subscribe(res => {
      this.books = res;
    })
  }

}
