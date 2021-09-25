SampleApplicationModule
    .controller('medicineController', 
        function ($rootScope, $scope, $location, $filter, $window, $http, store, $timeout, $routeParams, Upload) 
            {
      
              
      $scope.removeMedicineBooking = (m_id)=>{
        window.localStorage.setItem('m_id',m_id);
        console.log(m_id);
      }

      $scope.confRemoveMedicineBooking = ()=>{
        var id = window.localStorage.getItem('m_id');
        $http.get(baseURL + 'removeMedicineBooking/' + id).success(function (res) {
          $timeout(function () {
            location.reload();
            window.localStorage.removeItem('h_id');
          }, 2000);
        }).error(function (error) {
          console.log(error);
        });
      }

      $scope.updateMedicine = function (status,id) {
        console.log(status+ "  "+ id);
        const body = {
          id : id,
          status : status,
        }
        $http.post(baseURL + 'updateMedicineStatus/', body).success(function (res) {
          if (res.status == true) {
            $scope.updateMessage = res.message;
            $scope.showUpdateMessage = true;
            $timeout(function () {
              $scope.showUpdateMessage = false;
              location.reload();
            }, 3000);
          } else {
            $scope.updateMessage2 = res.message;
            $scope.showUpdateMessage2 = true,
              $timeout(function () {
                $scope.showUpdateMessage2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
      };

      $scope.updateMedicineWeight = function (id,weight) {
        console.log(weight+ "  "+ id);
        const body = {
          id : id,
          weight : weight,
        }
        $http.post(baseURL + 'updateMedicineWeight/', body).success(function (res) {
          if (res.status == true) {
            $scope.updateMessage = res.message;
            $scope.showUpdateMessage = true;
            $timeout(function () {
              $scope.showUpdateMessage = false;
              location.reload();
              }, 3000);
          } else {
            $scope.updateMessage2 = res.message;
            $scope.showUpdateMessage2 = true,
              $timeout(function () {
                $scope.showUpdateMessage2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
      };

      $scope.updateMedicineInvoicePayment = function (id,invoice_payment) {
        console.log(invoice_payment+ "  "+ id);
        const body = {
          id : id,
          invoice_payment : invoice_payment,
        }
        $http.post(baseURL + 'updateMedicineInvoicePayment/', body).success(function (res) {
          if (res.status == true) {
            $scope.updateMessage = res.message;
            $scope.showUpdateMessage = true;
            $timeout(function () {
              $scope.showUpdateMessage = false;
              location.reload();
              }, 3000);
          } else {
            $scope.updateMessage2 = res.message;
            $scope.showUpdateMessage2 = true,
              $timeout(function () {
                $scope.showUpdateMessage2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
      };

      $scope.updateMedicineInvoiceNo = function (id,invoice_no) {
        console.log(invoice_no+ "  "+ id);
        const body = {
          id : id,
          invoice_no : invoice_no,
        }
        $http.post(baseURL + 'updateMedicineInvoiceNo/', body).success(function (res) {
          if (res.status == true) {
            $scope.updateMessage = res.message;
            $scope.showUpdateMessage = true;
            $timeout(function () {
              $scope.showUpdateMessage = false;
              location.reload();
              }, 3000);
          } else {
            $scope.updateMessage2 = res.message;
            $scope.showUpdateMessage2 = true,
              $timeout(function () {
                $scope.showUpdateMessage2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
      };

      $scope.updateMedicineActualPayment = function (id,actual_payment) {
        console.log(actual_payment+ "  "+ id);
        const body = {
          id : id,
          actual_payment : actual_payment,
        }
        $http.post(baseURL + 'updateMedicineActualPayment/', body).success(function (res) {
          if (res.status == true) {
            $scope.updateMessage = res.message;
            $scope.showUpdateMessage = true;
            $timeout(function () {
              $scope.showUpdateMessage = false;
              location.reload();
              }, 3000);
          } else {
            $scope.updateMessage2 = res.message;
            $scope.showUpdateMessage2 = true,
              $timeout(function () {
                $scope.showUpdateMessage2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
      };

      $scope.updateMedicineBalancedPayment = function (id,balanced_payment) {
        console.log(balanced_payment+ "  "+ id);
        const body = {
          id : id,
          balanced_payment : balanced_payment,
        }
        $http.post(baseURL + 'updateMedicineBalancedPayment/', body).success(function (res) {
          if (res.status == true) {
            $scope.updateMessage = res.message;
            $scope.showUpdateMessage = true;
            $timeout(function () {
              $scope.showUpdateMessage = false;
              location.reload();
            }, 3000);
          } else {
            $scope.updateMessage = res.message;
            $scope.showUpdateMessage2 = true,
              $timeout(function () {
                $scope.showUpdateMessage2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
      };

      $scope.updateMedicinePaymentReceived = function (id,payment_received) {
        console.log(payment_received+ "  "+ id);
        const body = {
          id : id,
          payment_received : payment_received,
        }
        $http.post(baseURL + 'updateMedicinePaymentReceived/', body).success(function (res) {
          if (res.status == true) {
            $scope.updateMessage = res.message;
            $scope.showUpdateMessage = true;
            $timeout(function () {
              $scope.showUpdateMessage = false;
              location.reload();
            }, 3000);
          } else {
            $scope.updateMessage2 = res.message;
            $scope.showUpdateMessage2 = true,
              $timeout(function () {
                $scope.showUpdateMessage2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
      };

      $scope.updateMedicineStaff = function (staff,id) {
        console.log(staff+ "  "+ id);
        const body = {
          id : id,
          staff : staff,
        }
        $http.post(baseURL + 'updateMedicineStaff/', body).success(function (res) {
          if (res.status == true) {
            $scope.updateMessage = res.message;
            $scope.showUpdateMessage = true;
            $timeout(function () {
              $scope.showUpdateMessage = false;
              location.reload();
            }, 3000);
          } else {
            $scope.updateMessage2 = res.message;
            $scope.showUpdateMessage2 = true,
              $timeout(function () {
                $scope.showUpdateMessage2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
      };

      $scope.getMedicineBookings_shankar = ()=>{
        $http.get(baseURL + 'getMedicineBookings_shankar').success((res)=>{
          // console.log(res.record);
          $scope.medicineBookings = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.getMedicineBookings_barsha = ()=>{
        $http.get(baseURL + 'getMedicineBookings_barsha').success((res)=>{
          // console.log(res.record);
          $scope.medicineBookings = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.getMedicineBookings_arvind = ()=>{
        $http.get(baseURL + 'getMedicineBookings_arvind').success((res)=>{
          // console.log(res.record);
          $scope.medicineBookings = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.getMedicineBookings_amar = ()=>{
        $http.get(baseURL + 'getMedicineBookings_amar').success((res)=>{
          // console.log(res.record);
          $scope.medicineBookings = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.getMedicineBookings_kundan = ()=>{
        $http.get(baseURL + 'getMedicineBookings_kundan').success((res)=>{
          // console.log(res.record);
          $scope.medicineBookings = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.getMedicineBookings_kunal = ()=>{
        $http.get(baseURL + 'getMedicineBookings_kunal').success((res)=>{
          // console.log(res.record);
          $scope.medicineBookings = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.getMedicineBookings = ()=>{
        $http.get(baseURL + 'getMedicineBookings_6').success((res)=>{
          // console.log(res.record);
          $scope.medicineBookings = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.getMedicineBookings_61 = ()=>{
        $http.get(baseURL + 'getMedicineBookings_61').success((res)=>{
          // console.log(res.record);
          $scope.medicineBookings = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.getMedicineBookings_62 = ()=>{
        $http.get(baseURL + 'getMedicineBookings_62').success((res)=>{
          // console.log(res.record);
          $scope.medicineBookings = res.record;
        }).error((error)=>{
          console.log(error);
        });
      }

      $scope.medicineBooking = (medicinedata)=>{
        const data = {
          name : medicinedata.name,
          add1 : medicinedata.add1,
          add2 : medicinedata.add2,
          city : medicinedata.city,
          country : medicinedata.country,
          email : medicinedata.email,
          items : medicinedata.items,
          notes : medicinedata.notes,
          phone : medicinedata.phone,
          postal : medicinedata.postal,
          state : medicinedata.state,
          owner : $scope.bussiness_id,
        }
        // console.log(data);
        $http.post(baseURL + 'medicineBooking',data).success((res)=>{
          if (res.status == true) {
              $scope.addDriverMessage = res.message;
              $scope.showaddDriverMessage = true;
              $timeout(function () {
                $scope.showaddDriverMessage = false;
                location.reload();
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

    //Calculate Days

    $scope.days = function (date) {
      var today = new Date();
      // var dd = today.getDate();
      // var mm = today.getMonth() + 1; //January is 0!
      // var yyyy = today.getFullYear();
      // // if (dd < 10) {
      // //   dd = '0' + dd
      // // }
      // // if (mm < 10) {
      // //   mm = '0' + mm
      // // }
      // // today = dd + "-" + mm + "-" + yyyy;
      // // console.log(today);
      // // var date2 = new Date(today);
      // // console.log(date2);
      var date1 = new Date(date);
      var timeDiff = Math.abs(today.getTime() - date1.getTime());
      $scope.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return $scope.dayDifference;
    }

    //get details of parcel 
    
    $scope.getDetails = function (id) {
      $scope.goto('parcelDetails/' + id)
    }

    // left menu
    $scope.getLeftMenu = ()=>
    {
        const domain = window.localStorage.getItem('domain');
        const url = 'partials/left_menu/'+ domain +'.html'
        return url
    }
    
    // Top Menu
    $scope.getTopMenu = ()=>
    {
        const topmenu = window.localStorage.getItem('topmenu');
        const url = 'partials/top_menu/'+ topmenu +'.html'
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

    $scope.domainName = window.localStorage.getItem('domain');
    // console.log($scope.domain);
    $scope.username = window.localStorage.getItem('username');
    // console.log($scope.username);
    $scope.topmenu = window.localStorage.getItem('topmenu');
    // console.log($scope.topmenu);
    $scope.bussiness_id = window.localStorage.getItem('id');
    // console.log($scope.bussinessid);

});