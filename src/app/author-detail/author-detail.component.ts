import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from "../authors";

@Component({
    selector: 'app-author-detail',
    templateUrl: './author-detail.component.html',
    styleUrls: ['./author-detail.component.scss']
})
export class AuthorDetailComponent implements OnInit {
    @Input() author?: Author;
    @Input() author2?: Author;
    @Output() selectAuthor = new EventEmitter<Author>();
    @Output() deleteAuthor = new EventEmitter<Author>();

    constructor() { }
    ngOnInit(): void { }

    handleDelete() {
        this.deleteAuthor.emit(this.author);
    }
    handleSelect() {
        this.selectAuthor.emit(this.author);
    }
}