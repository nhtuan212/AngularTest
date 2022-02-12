import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-img',
    templateUrl: './img.component.html',
    styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

    @Input('src') imgURL?: string = '';
    @Input('alt') imgAlt?: string = '';
    @Input() imgError: string = 'https://place-hold.it/150x150/ddd/333?text=Noimage';
    @Input() imgMissing: boolean = false;
    
    constructor() {}

    ngOnInit(): void {
        if (!this.imgURL) {
            this.imgMissing = true;
            this.imgURL = this.imgError;
        }
    }
}
