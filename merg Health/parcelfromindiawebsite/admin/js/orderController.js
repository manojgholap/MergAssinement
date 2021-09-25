SampleApplicationModule
    .controller('orderController', function ($rootScope, $scope, $location, $http, store, $timeout, $routeParams) {
        $scope.init = function () {
            $scope.businessSession = store.get('businessSession') || {};
        };
        $scope.init();
        $scope.goto = function (page) {
            $location.path(page);
        };
        $scope.editOrder = function (order_id) {
            $location.path('/edit_order/' + order_id);
        };

        $scope.allOrders = function () {
            $http.get(baseURL + 'allgadgetsinasiaorders').success(function (res) {
                // $scope.orders = res;
                setTimeout(function() {
                    $scope.$apply(function() {
                        $scope.orders = res;
                    });
                  }, 3000);
            }).error(function (error) {
                console.log("Error getting all orders ", error);
            });
        };
        // update status 
        $scope.updateInvStatus = function (status,id) {
            var body = {
              status: status,
              id: id,
            }
            $http.post(baseURL + 'changeInvStatus/', body).success(function (res) {
                  $timeout(function () {
                    location.reload();
                  }, 3000);
            }).error(function (error) {
              console.log(error);
            });
          };
          // get data by selected status
        $scope.selectedInvStatus = function (status) {
            $http.get(baseURL + 'invdataByStatus/' + status).success(function (res) {
            $scope.orders = res;
            }).error(function (error) {
            console.log(error);
            });
        };
        $scope.orderById = function () {
            var url = location.href;
            var url_param = url.split("edit_order/");
            var id = url_param[1];
            $http.get(baseURL + 'gadgetsinasiaorderbyid/' + id).success(function (res) {
                $scope.order = res;
            }).error(function (error) {
                console.log("Error getting order details by id ", error);
            });
        };
        $scope.updateOrder = function (updateOrderForm, order) {
            $http.post(baseURL + 'clientOrderUpdate', order).success(function (res) {
                if (res.status == true) {
                    $scope.uppromsg = res.message;
                    $scope.showuppromsg = true;
                    $timeout(function () {
                        $scope.showuppromsg = false;
                        $location.path("/Invoices-List");
                    }, 3000);
                } else {
                    $scope.updateproerrmsg = res.message;
                    $scope.showupdateproerrmsg = true;
                    $timeout(function () {
                        $scope.showupdateproerrmsg = false;
                    }, 3000);
                }
            }).error(function (error) {
                console.log("Error Updating order details by id ", error);
            });
        };
        $scope.odrdel = function (order_id) {
            $scope.delId = order_id;
        };
        $scope.confirmOdrDel = function (order_id) {
            $http.get(baseURL + 'delorderbyorderid/' + order_id).success(function (res) {
                if (res.status == true) {
                    $scope.deletemsg = res.message;
                    $scope.showdeletemsgmsg = true;
                    $timeout(function () {
                        $scope.showdeletemsgmsg = false;
                        location.reload();;
                    }, 3000);
                } else {
                    $scope.deletemsg = res.message;
                    $scope.showdeletemsgmsg = true;
                    $timeout(function () {
                        $scope.showdeletemsgmsg = false;
                    }, 3000);
                }
            }).error(function (error) {
                console.log("Unable to Delete The Order By It's id ", error);
            });
        };
        // support status
        $scope.invoiceStatus=function(){
            $http.get(baseURL + 'getInvStatus').success(function(res){
            $scope.invStatus =res;
            }).error(function(error){
            console.log(error);
            });
        };

    // $scope.viewPO=function(wtb_lead_id,client_id){
    //     $location.path('/purchase_order/' + wtb_lead_id);
    //     window.localStorage.setItem('orderId',client_id);
    //     window.localStorage.setItem('Lead_id',wtb_lead_id);
    //   }
    //   $scope.clientById=function(){
    //     var client=window.localStorage.getItem('orderId');
    //     $http.get(baseURL+ 'clientsDetailsById/'+client).success(function(res){
    //       setTimeout(function() {
    //         $scope.$apply(function() {
    //           $scope.clientDetails=res;
    //         });
    //       }, 1000);
    //     }).error(function(error){
    //       console.log(error);
    //     });
    //   };
    //   $scope.poDetails=function(){
    //     var id=window.localStorage.getItem('Lead_id');
    //     console.log(id)
    //     $http.get(baseURL+ 'poProduct/'+id).success(function(res){
    //       $scope.btwHistory=res[0];
    //       console.log($scope.btwHistory)
    //     }).error(function(error){
    //       console.log(error);
    //     })
    //   };
      $scope.productStock = function (description, product_type, selling_price, product_id ) {
        $location.path('/stock-product');
        window.localStorage.setItem('p_t', description);
        window.localStorage.setItem('p_ty', product_type);
        window.localStorage.setItem('p_pri', selling_price);
        window.localStorage.setItem('p_id', product_id);
      };
      $scope.viewHistory = function (id) {
        window.localStorage.setItem('client_id',id);
        $location.path('/client-details/' + id);
    };

    $scope.redirectViewInvoice=function(inv_no,client_id){
        $location.path('/view-Invoice');
        window.localStorage.setItem('InvNo',inv_no);
        window.localStorage.setItem('Invcid',client_id);
      };
       // edit invoice
    $scope.editInvoice = function (inv_no,client_id) {
        window.localStorage.setItem('InvNo',inv_no);
        window.localStorage.setItem('Invcid',client_id);
        $location.path('/Edit-Invoice/' + inv_no);
    };


});
