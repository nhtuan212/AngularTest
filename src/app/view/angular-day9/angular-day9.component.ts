import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angular-day9',
    templateUrl: './angular-day9.component.html',
    styleUrls: ['./angular-day9.component.scss']
})
export class AngularDay9Component implements OnInit {

    title = 'Angular Day 9: Two-way binding';
    name = 'Click Toggle';
    active = true;

    constructor() { }

    ngOnInit(): void {
    }

}
