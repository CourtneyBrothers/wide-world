//====================================================================================================================
// Module:    travelGuide
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/bookCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("bookCtrl",function($scope,guideFactory){

  });

}) (angular.module ('travelGuide', ['ngRoute']));



//====================================================================================================================
// Module:    travelGuide
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/bookCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("bookCtrl",function($scope,guideFactory){

  });

}) (angular.module ('travelGuide', ['ngRoute']));



//====================================================================================================================
// Module:    travelGuide
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";


//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/bookCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("bookCtrl",function($scope,guideFactory){
      guideFactory.getGuides()
      .then((guideData)=>{
          $scope.listGuides = guideData.data.guides;
          console.log($scope.listGuides);
      }); 
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/guideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("GuideFactory",function($q,$http){
      let getGuides = ()=>{
          return $q((resolve,reject)=>{
              $http
                  .get(".../data/guides.json")
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

}) (angular.module ('travelGuide', ['ngRoute']));



//====================================================================================================================
// Module:    travelGuide
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module

  .config($routeProvider => {
      $routeProvider
          .when("/",{
              templateUrl:"partials/partials.html",
              controller:"bookCtrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/bookCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("bookCtrl",function($scope,guideFactory){
      guideFactory.getGuides()
      .then((guideData)=>{
          $scope.listGuides = guideData.data.guides;
          console.log($scope.listGuides);
      }); 
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/guideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("GuideFactory",function($q,$http){
      let getGuides = ()=>{
          return $q((resolve,reject)=>{
              $http
                  .get(".../data/guides.json")
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

}) (angular.module ('travelGuide', ['ngRoute']));



//====================================================================================================================
// Module:    travelGuide
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module

  .config($routeProvider => {
      $routeProvider
          .when("/",{
              templateUrl:"partials/partials.html",
              controller:"bookCtrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/bookCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("bookCtrl",function($scope,guideFactory){
      guideFactory.getGuides()
      .then((guideData)=>{
          $scope.listGuides = guideData.data.guides;
          console.log($scope.listGuides);
      }); 
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/guideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("guideFactory",function($q,$http){
      let getGuides = ()=>{
          return $q((resolve,reject)=>{
              $http
                  .get(".../data/guides.json")
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

}) (angular.module ('travelGuide', ['ngRoute']));



//====================================================================================================================
// Module:    travelGuide
// Optimized: Yes
// File:      ./app/app.js
//====================================================================================================================

(function (module) {

  "use strict";

  module

  .config($routeProvider => {
      $routeProvider
          .when("/",{
              templateUrl:"partials/partials.html",
              controller:"bookCtrl"
          })
          .otherwise("/");
      });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/controllers/bookCtrl.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.controller("bookCtrl",function($scope,guideFactory){
      guideFactory.getGuides()
      .then((guideData)=>{
          $scope.listGuides = guideData.data.guides;
          console.log($scope.listGuides);
      }); 
  });
//--------------------------------------------------------------------------------------------------------------------
// File: ./app/factories/guideFactory.js
//--------------------------------------------------------------------------------------------------------------------

  "use strict";

  module.factory("guideFactory",function($q,$http){
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

}) (angular.module ('travelGuide', ['ngRoute']));


