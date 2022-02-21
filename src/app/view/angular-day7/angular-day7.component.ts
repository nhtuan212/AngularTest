import { Component, OnInit } from '@angular/core';
import { authors } from '../../api/authorsAPI';

@Component({
    selector: 'app-angular-day7',
    templateUrl: './angular-day7.component.html',
    styleUrls: ['./angular-day7.component.scss']
})
export class AngularDay7Component implements OnInit {

    title = 'Angular Day 7';
    authors = authors;

    constructor() { }

    ngOnInit(): void {
    }

}
