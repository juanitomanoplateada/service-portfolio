import { Component, Input, OnInit, Renderer2, inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { ProjectBook } from '../../models/project-book.model';

@Component({
    selector: 'app-book-shelf',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './book-shelf.component.html',
    styleUrl: './book-shelf.component.scss'
})
export class BookShelfComponent implements OnInit {
    @Input() books: ProjectBook[] = [];

    shelves: ProjectBook[][] = [];
    selectedBook: ProjectBook | null = null;
    selectedImage: string | null = null;

    private renderer = inject(Renderer2);
    private document = inject(DOCUMENT);

    ngOnInit() {
        this.organizeShelves();
    }

    organizeShelves() {
        const shelfSize = 6;
        this.shelves = [];
        for (let i = 0; i < this.books.length; i += shelfSize) {
            this.shelves.push(this.books.slice(i, i + shelfSize));
        }
    }

    selectBook(book: ProjectBook) {
        this.selectedBook = book;
        this.renderer.addClass(this.document.body, 'header-hidden');
    }

    closeInspection() {
        this.selectedBook = null;
        this.renderer.removeClass(this.document.body, 'header-hidden');
    }

    viewImage(imageUrl: string) {
        this.selectedImage = imageUrl;
    }

    closeImageView() {
        this.selectedImage = null;
    }
}
