import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { UpgradeModule } from '@angular/upgrade/static';

//Moved to ng/ngx-directive.ts
import {downgradeComponent} from "@angular/upgrade/static";
declare var angular: any;
var myJsApp = angular.module("myJsApp");
myJsApp.directive('ngxComponent', downgradeComponent({component: AppComponent}));


@NgModule({
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/