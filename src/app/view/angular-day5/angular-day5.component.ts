import { Component, OnInit } from '@angular/core';
import { authors } from '../../api/authorsAPI';

@Component({
    selector: 'app-angular-day5',
    templateUrl: './angular-day5.component.html',
    styleUrls: ['./angular-day5.component.scss']
})
export class AngularDay5Component implements OnInit {

    title = 'Angular Day 5';
    authors = authors;

    constructor() { }

    ngOnInit(): void {
    }

}
