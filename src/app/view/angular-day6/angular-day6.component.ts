import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angular-day6',
    templateUrl: './angular-day6.component.html',
    styleUrls: ['./angular-day6.component.scss']
})
export class AngularDay6Component implements OnInit {

    title = 'Angular Day 6';
    user = {
        name: "Hoàng Tuấn",
        age : 26,
    };

    constructor() { }

    ngOnInit(): void {
    }

}
