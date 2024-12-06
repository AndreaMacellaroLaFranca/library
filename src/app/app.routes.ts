import { Routes } from '@angular/router';
import { BooklistComponent } from './book/booklist/booklist.component';
import { HomeComponent } from './home/home.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';

export const routes: Routes = [
    { path: '', component:HomeComponent},
    { path: 'search', component: BooklistComponent},
    { path: 'detail', component: BookDetailComponent}
];
