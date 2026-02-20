import { Component, Input, OnInit, Renderer2, inject, HostListener } from '@angular/core';
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

    get hasPreviousImage(): boolean {
        if (!this.selectedBook || !this.selectedBook.galleryImages || !this.selectedImage) return false;
        const index = this.selectedBook.galleryImages.indexOf(this.selectedImage);
        return index > 0;
    }

    get hasNextImage(): boolean {
        if (!this.selectedBook || !this.selectedBook.galleryImages || !this.selectedImage) return false;
        const index = this.selectedBook.galleryImages.indexOf(this.selectedImage);
        return index !== -1 && index < this.selectedBook.galleryImages.length - 1;
    }

    previousImage(event?: Event) {
        if (event) event.stopPropagation();
        if (this.hasPreviousImage) {
            const index = this.selectedBook!.galleryImages!.indexOf(this.selectedImage!);
            this.selectedImage = this.selectedBook!.galleryImages![index - 1];
        }
    }

    nextImage(event?: Event) {
        if (event) event.stopPropagation();
        if (this.hasNextImage) {
            const index = this.selectedBook!.galleryImages!.indexOf(this.selectedImage!);
            this.selectedImage = this.selectedBook!.galleryImages![index + 1];
        }
    }

    @HostListener('window:keydown', ['$event'])
    handleKeyDown(event: KeyboardEvent) {
        if (this.selectedImage) {
            if (event.key === 'ArrowLeft') {
                this.previousImage();
            } else if (event.key === 'ArrowRight') {
                this.nextImage();
            } else if (event.key === 'Escape') {
                this.closeImageView();
            }
        } else if (this.selectedBook && event.key === 'Escape') {
            this.closeInspection();
        }
    }
}
