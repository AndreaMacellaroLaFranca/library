import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookDetailComponent } from '../book-detail/book-detail.component';
import { BookDetail } from '../../model/book-detail';

@Component({
  selector: 'app-booklist',
  imports: [RouterModule, BookDetailComponent],
  templateUrl: './booklist.component.html',
  styleUrl: './booklist.component.css'
})
export class BooklistComponent {
  bookDetails: BookDetail[] = [
    {
      id: 2,
      title: 'The Life of Bobby',
      description: 'o meeeemo',
      imageUrl: 'img/bobbylife.jpeg',
      category: 'Action',
      numPages: 430,
      avgReview: 10
    },
    {
      id: 3,
      title: 'Indiana jones',
      description: 'Description of Indiana Jones',
      imageUrl: 'img/IndianaJones.jpeg',
      category: 'Adventure',
      numPages: 235,
      avgReview: 5
    },
    {
      id: 4,
      title: 'Pearl Harbor',
      description: 'Description of Pearl Harbor',
      imageUrl: 'img/pearlHarbor.jpeg',
      category: 'Action',
      numPages: 600,
      avgReview: 7.5
    }
  ];
}
