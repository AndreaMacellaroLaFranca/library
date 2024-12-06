import { Injectable } from "@angular/core";
import { BookDetail } from "./book-detail";

@Injectable({
    providedIn: 'root'
})
export class BookService{
    private bookDetails: BookDetail[] = [
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

    getBookDetails(): BookDetail[]{
        return this.bookDetails;
    }
}