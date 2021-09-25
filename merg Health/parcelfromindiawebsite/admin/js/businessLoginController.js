SampleApplicationModule.controller('businessLoginController', function ($rootScope, $scope, $location, $http, $routeParams, $timeout, store) {

    $rootScope.islogin = false;

    $scope.getLeftMenu = ()=>{
        const domain = window.localStorage.getItem('domain');
        const url = 'partials/left_menu/'+ domain +'.html'
        return url
      }

      $scope.reload = ()=>{
        location.reload()
      }

    $scope.createPortal = (portal)=>{
        console.log(portal);
        $http.post(baseURL + 'createportal',portal).success((res)=>{
            if (res.status == true) {
                $scope.addPortalMessage = res.message;
                $scope.showaddPortalMessage = true;
                $timeout(function () {
                  $scope.showaddPortalMessage = false;
                  $location.path("/list-portal");
                }, 3000);
              } else {
                $scope.addPortalMessage2 = res.message;
                $scope.showaddPortalMessage2 = true,
                  $timeout(function () {
                    $scope.showaddPortalMessage2 = false;
                  }, 3000);
              }
            }).error((error)=>{
              console.log(error);
            })
    }

    $scope.init = function () {
        $scope.businessSession = store.get('businessSession') || {};
    };

    $scope.user = {
        username: '',
        password: ''
    };

    // $scope.business_name = {
    //     business_name: '',
    //     business_address: '',
    //     email_id: '',
    //     business_username: '',
    //     business_password: ''
    // };

    $("#alertmsg").hide();

    $scope.domain = function () {
        $http.get(baseURL + 'alldomains').success(function (res) {
          $scope.brands = res.record;
        //   console.log(res)
        }).error(function (error) {
          console.log(error);
        });
      };

      $scope.login = function (signinform, user) {
        $('#alertmsg').text('');
        if (signinform.$valid) {
            $http.post(baseURL + 'staffportallogin', user).success(function (res) {
                window.localStorage.setItem('id', res.val[0].id);
                window.localStorage.setItem('username', res.val[0].username);
                window.localStorage.setItem('domain', res.val[0].domain);
                window.localStorage.setItem('topmenu', res.val[0].topmenu);
                const username = window.localStorage.getItem('username');
                if (res.status === false) {
                    $('#alertmsg').text(res.message);
                    $("#alertmsg").show('slow');
                } else if (res.status == true) 
                {
                    if(username == "admin"){
                        $location.path("/parcels");
                    }else if (username == "inadmin"){
                        $location.path("/parcelsOfIndia");
                    }else if (username == "sgadmin"){
                        $location.path("/parcelsOfSingapore");
                    }else if (username == "level1"){
                        $location.path("/parcels");
                    }else if (username == "level2"){
                        $location.path("/parcels");
                    }else if (username == "level3"){
                        $location.path("/parcels");
                    }else if (username == "level4"){
                        $location.path("/parcels");
                    }else if (username == "level5"){
                        $location.path("/parcels");
                    }else if (username == "level6"){
                        $location.path("/list_medicines_6");
                    }else if (username == "level61"){
                        $location.path("/list_medicines_61");
                    }else if (username == "level62"){
                        $location.path("/list_medicines_62");
                    }else if (username == "Kunal"){
                        $location.path("/list_medicines_kunal");
                    }else if (username == "Kundan"){
                        $location.path("/list_medicines_kundan");
                    }else if (username == "Barsha"){
                        $location.path("/list_medicines_barsha");
                    }else if (username == "Amar"){
                        $location.path("/list_medicines_amar");
                    }else if (username == "Shankar"){
                        $location.path("/list_medicines_shankar");
                    }else if (username == "Arvind"){
                        $location.path("/list_medicines_arvind");
                    }else{
                        $location.path("/parcels");
                    }
                }
                else {
                    $('#alertmsg').text(res.message);
                    $("#alertmsg").show('slow');
                }
            }).error(function () {
                window.alert("Please check your internet connection or data source..");
            });
        }
    };

    $scope.domainName = window.localStorage.getItem('domain');
    // console.log($scope.domain);
    $scope.username = window.localStorage.getItem('username');
    // console.log($scope.username);
    $scope.topmenu = window.localStorage.getItem('topmenu');
    // console.log($scope.topmenu);
    $scope.bussinessid = window.localStorage.getItem('id');
    // console.log($scope.bussinessid);

    $scope.signup = function (signupfrm) {
        if (signupfrm.$valid) {
            $http.post(baseURL + 'addbusiness', $scope.businessdata).success(function (res) {
                if (res.status === true) {
                    $scope.signupmsg = 'Account Created.Please Login In';
                    $scope.showsuccess = true;
                    $timeout(function () {
                        $scope.showsuccess = false;
                    }, 2000);
                    document.getElementById("signupfrmid").reset();
                    $scope.signupfrm.$setPristine();
                } else {
                    $scope.alradyregistermsg = 'username already register';
                    $scope.showalreadyregimsg = true;
                    $timeout(function () {
                        $scope.showalreadyregimsg = false;
                    }, 2000);
                }
            }).error(function (error) {
                console.log("error creating account", error);
            });
        } else {
            //console.log("all fields area compulsory ..");
        }

    };

    $scope.logout = function () {
        $location.path('/businesslogin');
        window.localStorage.removeItem('id');
        window.localStorage.removeItem('domain');
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('topmenu');
    };
});