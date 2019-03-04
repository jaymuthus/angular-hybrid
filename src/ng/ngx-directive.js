"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_component_1 = require("../app.component");
var static_1 = require("@angular/upgrade/static");
var myJsApp = angular.module("myJsApp");
myJsApp.directive('ngxComponent', static_1.downgradeComponent({ component: app_component_1.AppComponent }));
//# sourceMappingURL=ngx-directive.js.map