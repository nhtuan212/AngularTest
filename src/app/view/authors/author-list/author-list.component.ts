import { Component, OnInit } from '@angular/core';
import { authors, authors2, Author } from '../../../api/authorsListAPI';

@Component({
    selector: 'app-author-list',
    templateUrl: './author-list.component.html',
    styleUrls: ['./author-list.component.scss']
})
export class AuthorListComponent implements OnInit {
    authors = authors;
    authors2 = authors2;
    currentAuthor = authors[0];
    deleteAuthor = authors[0];
    constructor() {}

    ngOnInit(): void {}

    handleSelected(value: Author) {
        this.currentAuthor = value;
    }
    handleDelete(value: Author) {
        this.authors = this.authors.filter(item => item.id !== value.id);
        if(this.currentAuthor.id === value.id)
        {
            this.currentAuthor = this.authors[0]
        }
        this.deleteAuthor = value;
    }
}