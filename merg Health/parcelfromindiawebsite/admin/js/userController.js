SampleApplicationModule
  .controller('userController', function ($rootScope, $window, $scope, $location, $http, store, $timeout, $routeParams, Upload) {

    $scope.edituser = function (id) {
      $location.path('/edit_user/' + id);
      window.localStorage.setItem('c_id', id);
    };

    $scope.viewuser = function (id) {
      $location.path('/view_user/' + id);
      window.localStorage.setItem('c_id', id);
    };
    $scope.addClient = function (id) {
      $location.path('/add_client');
    };

    $scope.goto = function (page) {
      $location.path(page);
    };
    $scope.allClients = function () {
      $http.get(baseURL + 'getAllClients').success(function (res) {
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.clients = res;
          });
        }, 1000);
      }).error(function (error) {
        console.log("Error getting user for business", error);
      });
    };
    $scope.allResellers = function () {
      $http.get(baseURL + 'getAllResellers').success(function (res) {
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.clients = res;
          });
        }, 1000);
      }).error(function (error) {
        console.log("Error getting user for business", error);
      });
    };
    $scope.viewHistory = function (id) {
      window.localStorage.setItem('client_id', id);
      $location.path('/client-details/' + id);
    };
    $scope.clintdel = function (id) {
      window.localStorage.setItem('cli_id', id);
    };
    $scope.confirmclientdel = function () {
      var id = window.localStorage.getItem('cli_id');
      $http.get(baseURL + 'deleteGEClient/' + id).success(function (res) {
        if (res.status === true) {
          $timeout(function () {
            location.reload();
            window.localStorage.clearItem('cli_id');
          }, 2000);
        }
      });
    };


    $scope.userByUserId = function () {
      var user_id = window.localStorage.getItem('c_id')
      $http.get(baseURL + "clientById/" + user_id).success(function (res) {
        $scope.user = res;
      }).error(function (error) {
        console.log('unable to query the user data with user id');
      });
    };

    $scope.updateuser = function (clientForm, user) {
      if (clientForm.$valid) {
        $http.post(baseURL + 'updateGeClientDetails', user).success(function (res) {
          console.log(user);
          if (res.status == true) {
            $scope.updateClient = res.message;
            $scope.showupdateClient = true;
            $timeout(function () {
              $scope.showupdateClient = false;
              $location.path("/users");
            }, 3000);

          } else {
            $scope.updateerrclientmsg = res.message;
            $scope.showupdateerrclientmsg = true;
            $timeout(function () {
              $scope.showupdateerrclientmsg = false;
            }, 3000);
          }
        }).error(function (error) {
          console.log("error in save other 1", error);
        });
      }
    };
    $scope.newclient = function (addClientForm, client) {
      client.website = client.website ? client.website : "";
      client.notes = client.notes ? client.notes : "";
      client.tag = client.tag ? client.tag : "";
      $http.post(baseURL + 'newGEClient', client).success(function (res) {
        if (res.status == true) {
          $scope.addClient = res.message;
          $scope.showaddClient = true;
          $timeout(function () {
            $scope.showupdateClient = false;
            $location.path("/users");
          }, 3000);
        } else {
          $scope.addeerrclientmsg = res.message;
          $scope.showaddeerrclientmsg = true;
          $timeout(function () {
            $scope.showaddeerrclientmsg = false;
          }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.brand2 = function () {
      $http.get(baseURL + 'brand').success(function (res) {
        $scope.brands = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    var productBrand;
    $scope.productBrand = function (val) {
      productBrand = val;
    };
    $scope.type2 = function () {
      $http.get(baseURL + 'type/' + productBrand).success(function (res) {
        $scope.types = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.description = function (product) {
      window.localStorage.setItem('productName', product.description)
      $http.get(baseURL + 'allTitles/' + productBrand).success(function (res) {
        $scope.titles = res;
        window.localStorage.setItem('p_id', res[0].id);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.selectedItemChanged = function (id) {
      $http.get(baseURL + 'productByProductId/' + id).success(function (res) {
        $scope.price = res[0].selling_price;
        $scope.description = res[0].description;
        $scope.ean = res[0].ean_number;
        window.localStorage.setItem('p_price', res[0].selling_price);
        window.localStorage.setItem('ean_number', res[0].ean_number);
        window.localStorage.setItem('p_description', res[0].description)
      }).error(function (error) {
        console.log(error);
      });
    };
    // add WTB by model in client
    $scope.modelAddWTB = function (id, company_name, email, contact) {
      window.localStorage.setItem('c_id', id);
      window.localStorage.setItem('c_company', company_name);
      window.localStorage.setItem('c_email', email);
      window.localStorage.setItem('c_contact', contact);
    };
    $scope.addWTBOrderByModel = function (poForm, product) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      product.date = date;
      var hr = d.getHours();
      var min = d.getMinutes();
      var last_update = curr_date + "-" + curr_month + "-" + curr_year + " " + "/" + " " + hr + ':' + min;
      product.last_update = last_update;
      var price = window.localStorage.getItem('p_price');
      var ean_number = window.localStorage.getItem('ean_number');
      var description = window.localStorage.getItem('p_description');
      var p_id = window.localStorage.getItem('p_id');
      var client_id = window.localStorage.getItem('c_id');
      var client = window.localStorage.getItem('c_company');
      var client_email = window.localStorage.getItem('c_email');
      var client_contact = window.localStorage.getItem('c_contact');
      product.price = price;
      product.p_id = p_id;
      product.ean_number = ean_number;
      product.description = description;
      product.client_id = client_id;
      product.client_email = client_email;
      product.client_contact = client_contact;
      product.client = client;
      console.log(product);
      $http.post(baseURL + 'addOrderWTBByModel', product).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            $timeout(function () {
              $scope.showaddpromsg = false;
              if (document.location.href == "http://localhost:6060/staffportal/#/stock-product" || document.location.href == "https://www.gadgetsinasia.com/staffportal/#/stock-product"
              ) {
                location.reload();
              } else {
                location.reload();
              }
            }, 3000);
        } else {
          $scope.addproductsemsg = res.message;
          $scope.showaddproductsemsg = true,
            $timeout(function () {
              $scope.showaddproductsemsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };

    // add wts by client model
    $scope.modelAddWTS = function (id, company_name, email, contact) {
      window.localStorage.setItem('c_id', id);
      window.localStorage.setItem('c_company', company_name);
      window.localStorage.setItem('c_email', email);
      window.localStorage.setItem('c_contact', contact);
    };
    $scope.addWTSModel = function (poForm, product) {
      var client_id = window.localStorage.getItem('c_id');
      var client = window.localStorage.getItem('c_company');
      var client_email = window.localStorage.getItem('c_email');
      var client_contact = window.localStorage.getItem('c_contact');
      var description = window.localStorage.getItem('p_description');
      product.description = description;
      product.client_id = client_id;
      product.client_email = client_email;
      product.client_contact = client_contact;
      product.client = client;
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      product.date = date;

      $http.post(baseURL + 'addWTSByModel', product).success(function (res) {
        console.log(product)
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            $timeout(function () {
              $scope.showaddpromsg = false;
              if (document.location.href == "http://localhost:6060/staffportal/#/stock-product" || document.location.href == "https://www.gadgetsinasia.com/staffportal/#/stock-product"
              ) {
                location.reload();
              } else {
                location.reload();
              }

            }, 3000);
        } else {
          $scope.addproductsemsg = res.message;
          $scope.showaddproductsemsg = true,
            $timeout(function () {
              $scope.showaddproductsemsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
  });
