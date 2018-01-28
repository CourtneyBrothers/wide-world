"use strict";

angular.module("travelGuide").factory("guideFactory",function($q,$http){
    let getGuides = ()=>{
        return $q((resolve,reject)=>{
            $http
                .get("../data/guides.json")
                .then((guides)=>{
                    resolve(guides);
                    console.log("fb data",guides);
                })
                .catch((err)=>{
                    reject(err);
                });
        });
    };
    return { getGuides };
}); 