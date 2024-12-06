import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookDetail } from '../../model/book-detail';

@Component({
  selector: 'app-book-detail',
  imports: [RouterModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
  
export class BookDetailComponent {

  @Input({
    required: true
  })
  detail: BookDetail | null = null;
  
}
