SampleApplicationModule
    .controller('promocodeController', function($rootScope, $scope, $location, $http, store, $timeout, $routeParams) {
        $scope.init = function() {
            $scope.businessSession = store.get('businessSession') || {};
        };
        $scope.init();
        
        $scope.imageURL = imageURL;

        $scope.goto = function(page) {
            $location.path(page);
        };
       
        //get payment history

        if ($routeParams.payment_id) {
            $scope.getTransactionDetails();
        }
        
//        $scope.viewPayment = function(id) {
//            $location.path('/view_user/' + id);
//        }

       
        $scope.addPromocode = function(updateusersfrm) {
        	
            if (updateusersfrm.$valid) {
                $http.post(baseURL + 'addPortalPromocode', $scope.promocode).success(function(res) {
                    if (res.status == true) {
                         console.log(res);
                         $location.path("/promocode");
                    } else {
                        console.log("err res:", res);
                    }
                }).error(function(error) {
                    console.log("error in save other 1", error);
                });
            }
        };
        
        $scope.allPromocodes = function() {
            $http.get(baseURL + 'getPortalPromocodes').success(function(res) {
                 
                _.each(res, function(someThing) {
                	var startDate = someThing.start_date.split('-');
                	var endDate = someThing.end_date.split('-');
                    someThing.start_date = startDate[2]+"-"+startDate[1]+"-"+startDate[0];
                    someThing.end_date = endDate[2]+"-"+endDate[1]+"-"+endDate[0];
                });
                
                $scope.promocodes = res;
                
            }).error(function(error) {
                console.log("Error getting user for business", error);
            });
        };
        $scope.allPromocodes();
        
//        if ($scope.businessSession.business_id) {
//            $http.get(baseURL + 'getPortalPromocodes').success(function(result) {           	
//                 
//            	console.log(result);
//
//            }).error(function(error) {
//                console.log("Error getting order status list", error);
//            });
//        };
        
        var id = $routeParams.id; 
        if (id) {
            $http.get(baseURL + 'getPortalPromocodeByID/' + id).success(function(res) {
            	
                $scope.promocode = res[0];
                $scope.promocode.start_date = new Date(res[0].start_date);
                $scope.promocode.end_date = new Date(res[0].end_date);
            }).error(function(error) {
                console.log("error getting single item", error);
            });
        }
        
        $scope.editpromocode = function(id) {
            $location.path('/edit_promocode/' + id);
        }
        
       $scope.updatePromocode = function(updateusersfrm) {
        	 
            if (updateusersfrm.$valid) {
                $http.post(baseURL + 'updatePortalPromocode', $scope.promocode).success(function(res) {
                    if (res.status == true) {
//                         console.log(res);
                         $location.path("/promocode");
                    } else {
                        console.log("err res:", res);
                    }
                }).error(function(error) {
                    console.log("error in save other 1", error);
                });
            }
        };
        
        $scope.onDeletePromocode = function(id){
        	$scope.idtodelete = id;
        }
        
        $scope.deletePromocode = function(id){
      
                $http.get(baseURL + 'deletePortalPromocode/' + id).success(function(res) {
                	
                	$scope.allPromocodes();
                    
                }).error(function(error) {
                    console.log("error getting single item", error);
                });
          
        }


        $scope.showhide = function(id) {
            if (document.getElementById(id).style.display == 'none') {
                document.getElementById(id).style.display = 'block';
            } else {
                document.getElementById(id).style.display = 'none';
            }
        };
    });
