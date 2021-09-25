SampleApplicationModule
    .controller('paymentController', function($rootScope, $scope, $location, $http, store, $timeout, $routeParams) {
        $scope.init = function() {
            $scope.businessSession = store.get('businessSession') || {};
        };
        $scope.init();
        $scope.Order = {};

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

       
        

        if ($scope.businessSession.business_id) {
            $http.get(baseURL + 'getAllCredits').success(function(result) {           	
                 $scope.totalPayment = 0;
            	 _.each(result, function(someThing) {
            		 $scope.totalPayment = $scope.totalPayment+parseInt(someThing.amount);
                });
            	
            	$scope.allPayments = result;
            	
            	console.log($scope.allPayments);

            }).error(function(error) {
                console.log("Error getting order status list", error);
            });
        };

 

        $scope.showhide = function(id) {
            if (document.getElementById(id).style.display == 'none') {
                document.getElementById(id).style.display = 'block';
            } else {
                document.getElementById(id).style.display = 'none';
            }
        };
    });
