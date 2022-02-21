import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ToggleComponent } from '../../plugins/toggle/toggle.component';

@Component({
    selector: 'app-angular-day10',
    templateUrl: './angular-day10.component.html',
    styleUrls: ['./angular-day10.component.scss'],
})
export class AngularDay10Component implements OnInit {

    // Cách 1 truyền string
    // @ViewChild('clickMe') clickMe?: ToggleComponent;

    // Cách 2 truyền class Component
    // @ViewChild('clickMe') clickMe?: ToggleComponent;

    // static: true dùng để oninit nhận đc component
    @ViewChild('clickMe', {static: true}) clickMe?: ToggleComponent;

    // tương tác với template instact trong HTMl
    @ViewChild('clickBtn', {static: true}) clickBtn?: ElementRef<HTMLButtonElement>;
    @ViewChild('inputName', {static: true}) inputName?: ElementRef<HTMLInputElement>;

    // View Children
    @ViewChildren(ToggleComponent) clickMes ?: QueryList<ToggleComponent>;

    title = 'Angular Day 10: Template Variable và ViewChild/ViewChildren';
    active = true;
    showLast = false;

    constructor() { }

    ngOnInit(): void {
        setTimeout(() => {
            this.inputName?.nativeElement.focus();
        }, 3000);
        console.log('onInit', this.clickMe, this.clickBtn);
    }

    // ViewChild thường đi đôi với ngAfterViewInit
    ngAfterViewInit() {
        console.log('afterInit', this.clickMe);
        this.clickMes?.changes.subscribe(console.log);
    }

}
