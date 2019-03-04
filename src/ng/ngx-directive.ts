declare var angular: any;

import {AppComponent} from '../app.component';
import {downgradeComponent} from "@angular/upgrade/static";

var myJsApp = angular.module("myJsApp");
myJsApp.directive('ngxComponent', downgradeComponent({component: AppComponent}));