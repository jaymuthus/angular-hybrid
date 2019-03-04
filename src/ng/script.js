angular.module("myJsApp", []);
angular.module("myJsApp").component("jsApp", {
    template: "<p>Hello {{'AngularJS'}} </p> <ngx-component></ngx-component></span>",
    controller: function () {
        console.log("jsApp component started");
    }
});
//# sourceMappingURL=script.js.map