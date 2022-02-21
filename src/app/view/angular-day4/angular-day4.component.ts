import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-angular-day4',
    templateUrl: './angular-day4.component.html',
    styleUrls: ['./angular-day4.component.scss']
})
export class AngularDay4Component implements OnInit {
    
    title = 'Angular Day 4';
    user = {
        name: "Hoàng Tuấn",
        age : 26,
    };

    constructor() { }

    ngOnInit(): void {
    }

}
