import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookDetail } from '../../model/book-detail';
import { BookService } from '../../model/book-service';

@Component({
  selector: 'app-booklist',
  imports: [RouterModule, BookDetailComponent],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent implements OnInit{
  
  bookDetails!: BookDetail[];
  //injection💉
  constructor(private bookService: BookService) {
  }
  
  ngOnInit(): void {
    this.bookDetails = this.bookService.getBookDetails();
  }

  onBookSelected(book: BookDetail) {
    console.log(book);
  }
}
