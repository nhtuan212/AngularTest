import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angular-day14',
    templateUrl: './angular-day14.component.html',
    styleUrls: ['./angular-day14.component.scss']
})
export class AngularDay14Component implements OnInit {
    title = 'Day 14 - ng-template, ngTemplateOutlet và ng-container trong Angular';
    counter = 1;
    navs = ['Active', 'Link 1', 'Link 2'];

    constructor() { }

    ngOnInit(): void {
    }

}
