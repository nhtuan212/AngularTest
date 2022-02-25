import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './plugins/progress-bar/progress-bar.component';
import { ImgComponent } from './plugins/img/img.component';
import { AuthorListComponent } from './view/authors/author-list/author-list.component';
import { AuthorDetailComponent } from './view/authors/author-detail/author-detail.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './plugins/toggle/toggle.component';

import { IndexComponent } from './view/index/index.component';
import { AngularDay4Component } from './view/angular-day4/angular-day4.component';
import { AngularDay6Component } from './view/angular-day6/angular-day6.component';
import { AngularDay7Component } from './view/angular-day7/angular-day7.component';
import { AngularDay5Component } from './view/angular-day5/angular-day5.component';
import { AngularDay8Component } from './view/angular-day8/angular-day8.component';
import { AngularDay9Component } from './view/angular-day9/angular-day9.component';
import { AngularDay10Component } from './view/angular-day10/angular-day10.component';
import { AngularDay13Component } from './view/angular-day13/angular-day13.component';
import { AngularDay14Component } from './view/angular-day14/angular-day14.component';
import { TabsComponent } from './plugins/tabs/tabs.component';
import { AngularDay15Component } from './view/angular-day15/angular-day15.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ImgComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
    IndexComponent,
    AngularDay4Component,
    AngularDay7Component,
    AngularDay6Component,
    AngularDay5Component,
    AngularDay8Component,
    AngularDay9Component,
    AngularDay10Component,
    AngularDay13Component,
    AngularDay14Component,
    TabsComponent,
    AngularDay15Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
