//Moved to ng/ngx-directive.ts
import {AppComponent} from '../../ngx/app.component';
import {downgradeComponent} from "@angular/upgrade/static";
declare var angular: any;
var myJsApp = angular.module("myJsApp");
myJsApp.directive('ngxComponent', downgradeComponent({component: AppComponent}));
