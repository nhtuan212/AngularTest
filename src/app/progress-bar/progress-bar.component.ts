import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

    @Input() backgroundColor: string = '';
    @Input() progressColor: string = '';
    @Input() progress: number = 0;
    constructor() {}

    ngOnChanges(changes: SimpleChanges) {
        if ("progress" in changes) {
            if (typeof changes["progress"].currentValue !== "number") {
                const progress = Number(changes["progress"].currentValue);
                    if (Number.isNaN(progress)) {
                    this.progress = 0;
                } else {
                    this.progress = progress;
                }
            }
        }
    }

    ngOnInit() {}

}
