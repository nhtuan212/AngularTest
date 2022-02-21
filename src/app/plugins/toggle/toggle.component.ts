import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

    @Input() active = false;
    @Output() activeChange = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit(): void {
    }

    addClass() {
        this.active = !this.active;
        this.activeChange.emit(this.active);
    }
}