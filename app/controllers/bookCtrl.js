"use strict";

angular.module("travelGuide").controller("bookCtrl",function($scope,guideFactory){
    guideFactory.getGuides()
    .then((guideData)=>{
        $scope.listGuides = guideData.data.guides;
        console.log($scope.listGuides);
    }); 
});