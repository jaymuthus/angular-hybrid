"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Moved to ng/ngx-directive.ts
var app_component_1 = require("../../ngx/app.component");
var static_1 = require("@angular/upgrade/static");
var myJsApp = angular.module("myJsApp");
myJsApp.directive('ngxComponent', static_1.downgradeComponent({ component: app_component_1.AppComponent }));
//# sourceMappingURL=ngx-directives.js.map