"use strict";

angular.module("travelGuide", ["ngRoute"])

.config($routeProvider => {
    $routeProvider
        .when("/",{
            templateUrl:"partials/partials.html",
            controller:"bookCtrl"
        })
        .otherwise("/");
    });