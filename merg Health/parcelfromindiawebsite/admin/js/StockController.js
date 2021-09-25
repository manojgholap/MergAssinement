SampleApplicationModule
    .controller('StockController', function ($rootScope, $scope, $location, $http, store, $timeout, $routeParams, Upload) {

        $scope.goto = function (page) {
            $location.path(page);
        };

        $scope.userDetails=function(id){
            $location.path("/clientDetails/"+id);          
        }
        $scope.clientInfo=function(){
             var url=location.href;
             var url_param=url.split("/clientDetails/");
             var id=url_param[1];
            $http.get(baseURL+"clientDetailsById/"+id).success(function(data){
                $scope.clientInSeller=data.clientSeller;
                $scope.clientInBuyer=data.clientBuyer
                $scope.clientData=data.client

            }).error(function(error){
                console.log('Error while fetching data for User by User Id');
            })

        }

        $scope.sellerdata = function () {
            $http.get(baseURL + 'sellerData').success(function (res) {
                $scope.sellerData = res;

            }).error(function (error) {
                console.log("Error getting seller data", error);
            });
        }
        $scope.buyerdata = function () {
            $http.get(baseURL + 'buyerData').success(function (res1) {
                $scope.buyerData = res1;

            }).error(function (error) {
                console.log("Error getting buyer data", error);
            });
        }
        $scope.inventoryList = function () {
            $http.get(baseURL + 'productListWithInventory').success(function (data) {
                $scope.inventory = data;

            }).error(function (err) {
                console.log("error getting inventory list");
            })
        }
        $scope.viewInventory = function (pId) {
            $location.path("/inventory/" + pId);
        }
        $scope.productByProductName = function () {
            var url = location.href;
            var urlparam = url.split('/inventory/');
            var pId = urlparam[1];

            $http.get(baseURL + 'productByProductId/' + pId).success(function (data) {
                $scope.sellerData = data.data1;
                $scope.buyerData = data.data2;
                $scope.productData=data.data
            }).error(function (err) {
                console.log("error while fetching seller and buyer lead by product id");
            })

        }
    });





