import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-toggle',
    templateUrl: './toggle.component.html',
    styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

    // Two-way binding thực chất là 1 input và output có cùng tên với input + Change;
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