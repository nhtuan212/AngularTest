import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'AngularTest';

    user = {
        name: "Hoàng Tuấn",
        age : 26,
    };

    authors = [
        {
            id       : 1,
            firstName: "Flora",
            lastName : "Twell",
            email    : "ftwell0@phoca.cz",
            gender   : "Female",
            ipAddress: "99.180.237.33",
            photo   : {
                url: "",
            }
        },
        {
            id       : 2,
            firstName: "Priscella",
            lastName : "Signe",
            email    : "psigne1@berkeley.edu",
            gender   : "Female",
            ipAddress: "183.243.228.65",
            photo   : {
                url: "https://via.placeholder.com/150x150",
            }
        },
    ];    
}