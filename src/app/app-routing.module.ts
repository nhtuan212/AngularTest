import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './view/index/index.component';
import { AngularDay4Component } from './view/angular-day4/angular-day4.component';
import { AngularDay5Component } from './view/angular-day5/angular-day5.component';
import { AngularDay6Component } from './view/angular-day6/angular-day6.component';
import { AngularDay7Component } from './view/angular-day7/angular-day7.component';
import { AngularDay8Component } from './view/angular-day8/angular-day8.component';
import { AngularDay9Component } from './view/angular-day9/angular-day9.component';
import { AngularDay10Component } from './view/angular-day10/angular-day10.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'day-4', component: AngularDay4Component },
    { path: 'day-5', component: AngularDay5Component },
    { path: 'day-6', component: AngularDay6Component },
    { path: 'day-7', component: AngularDay7Component },
    { path: 'day-8', component: AngularDay8Component },
    { path: 'day-9', component: AngularDay9Component },
    { path: 'day-10', component: AngularDay10Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
