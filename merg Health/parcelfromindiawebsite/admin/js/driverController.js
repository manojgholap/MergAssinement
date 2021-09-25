SampleApplicationModule
    .controller('driverController', 
        function ($rootScope, $scope, $location, $filter, $window, $http, store, $timeout, $routeParams, Upload) 
            {
    
    $scope.bussiness_id = window.localStorage.getItem('id');

    $scope.getPickupDrivers = ()=>{
      $http.get(baseURL + 'getPickupDriversList').success(function (res) {
        $scope.pickuplist = res.record;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.getDeliveryDrivers = ()=>{
      $http.get(baseURL + 'getDeliveryDriversList').success(function (res) {
        $scope.deliverylist = res.record;
      }).error(function (error) {
        console.log(error);
      });
    }
    
    $scope.driver = function () {
        $http.get(baseURL + 'getdrivers').success(function (res) {
          $scope.driverslist = res.record;
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.removeDriver = function (id) {
        window.localStorage.setItem('driver_id', id);
      };
  
      $scope.confRemoveDriver = function () {
        var id = window.localStorage.getItem('driver_id');
        $http.get(baseURL + 'removeDriver/' + id).success(function (res) {
          $timeout(function () {
            location.reload();
            window.localStorage.removeItem('driver_id');
          }, 2000);
        }).error(function (error) {
          console.log(error);
        });
      };

      $scope.listDriver = ()=>{
        $http.get(baseURL + 'getdrivers').success((res)=>{
          // console.log(res.record);
          $scope.drivers = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.listDriver_kundan = ()=>{
        $http.get(baseURL + 'getdrivers_kundan').success((res)=>{
          // console.log(res.record);
          $scope.drivers = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.listDriver_kunal = ()=>{
        $http.get(baseURL + 'getdrivers_kunal').success((res)=>{
          // console.log(res.record);
          $scope.drivers = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.listDriver_barsha = ()=>{
        $http.get(baseURL + 'getdrivers_barsha').success((res)=>{
          // console.log(res.record);
          $scope.drivers = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.listDriver_amar = ()=>{
        $http.get(baseURL + 'getdrivers_amar').success((res)=>{
          // console.log(res.record);
          $scope.drivers = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.listDriver_arvind = ()=>{
        $http.get(baseURL + 'getdrivers_arvind').success((res)=>{
          // console.log(res.record);
          $scope.drivers = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.listDriver_shankar = ()=>{
        $http.get(baseURL + 'getdrivers_shankar').success((res)=>{
          // console.log(res.record);
          $scope.drivers = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.listDriver_level62 = ()=>{
        $http.get(baseURL + 'getdrivers_level62').success((res)=>{
          // console.log(res.record);
          $scope.drivers = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.listDriver_level61 = ()=>{
        $http.get(baseURL + 'getdrivers_level61').success((res)=>{
          // console.log(res.record);
          $scope.drivers = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.listDriver_level6 = ()=>{
        $http.get(baseURL + 'getdrivers_level6').success((res)=>{
          // console.log(res.record);
          $scope.drivers = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.createDriver = (driverdata)=>{
        console.log(driverdata)
        const data =  {
          ac_no: driverdata.ac_no,
          add1 : driverdata.add1,
          add2 : driverdata.add2,
          bname : driverdata.bname,
          city : driverdata.city,
          country : driverdata.country ,
          email : driverdata.email,
          ifsc : driverdata.ifsc,
          name : driverdata.name,
          password : driverdata.password,
          phone : driverdata.phone,
          state : driverdata.state,
          username : driverdata.username,
          owner : $scope.bussiness_id, 
        }
        console.log(data)
        $http.post(baseURL + 'createdriver',data).success((res)=>{
          if (res.status == true) {
              $scope.addDriverMessage = res.message;
              $scope.showaddDriverMessage = true;
              $timeout(function () {
                $scope.showaddDriverMessage = false;
                $location.path('/list-driver');
              }, 3000);
            } else {
              $scope.addDriverMessage2 = res.message;
              $scope.showaddPortalMessage2 = true,
                $timeout(function () {
                  $scope.showaddDriverMessage2 = false;
                }, 3000);
            }
          }).error((error)=>{
            console.log(error);
          })
      }

//   Global Necessory Functions

    //get details of parcel 
    
    $scope.getDetails = function (id) {
      $scope.goto('parcelDetails/' + id)
    }

    //Top menu
    $scope.getTopMenu = ()=>
    {
        const topmenu = window.localStorage.getItem('topmenu');
        const url = 'partials/top_menu/'+ topmenu +'.html'
        return url
    }

    // left menu
    $scope.getLeftMenu = ()=>
    {
        const domain = window.localStorage.getItem('domain');
        const url = 'partials/left_menu/'+ domain +'.html'
        return url
    }
    
    //goto page function
    $scope.goto = function (page) 
    {
        $location.path(page);
    };

    //display date function
    $scope.setDate = function (date) 
    {
        $scope.time = (new Date(date).getDate()) + "/" + (new Date(date).getMonth() + 1) + '/' + new Date(date).getFullYear() + ':' + new Date(date).getHours() + ":" + new Date(date).getMinutes();
        console.log("scoper time", date)
        return $scope.time;
    }

});