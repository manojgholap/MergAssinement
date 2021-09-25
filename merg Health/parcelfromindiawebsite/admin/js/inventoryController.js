SampleApplicationModule
  .controller('inventoryController', function ($rootScope, $scope, $location, $filter, $window, $http, store, $timeout, $routeParams, Upload) {
    $scope.goto = function (page) {
      $location.path(page);
    };

    $scope.inquiry = (inq)=>{
      $http.post(baseURL + 'addinquery/', inq).success((res)=>{
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
    }

    $scope.allParcelsPhillipines = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcelsphillipines').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.updateParcelNotes = function (id,notes) {
      var body = {
        notes : notes,
        id:id ,
      }
      $http.post(baseURL + 'updateParcelNotes/', body).success((res)=>{
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
    }

    $scope.staffamol = function () {
      $http.get(baseURL + 'get_staffamol').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffpavan = function () {
      $http.get(baseURL + 'get_staffpavan').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffsneha = function () {
      $http.get(baseURL + 'get_staffsneha').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffmanisha = function () {
      $http.get(baseURL + 'get_staffmanisha').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffshradha = function () {
      $http.get(baseURL + 'get_staffshradha').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffbarsha = function () {
      $http.get(baseURL + 'get_staffbarsha').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffajay = function () {
      $http.get(baseURL + 'get_staffajay').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffsm = function () {
      $http.get(baseURL + 'get_staffsm').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffkd = function () {
      $http.get(baseURL + 'get_staffkd').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffselva = function () {
      $http.get(baseURL + 'get_staffselva').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffgagan = function () {
      $http.get(baseURL + 'get_staffgagan').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffkundan = function () {
      $http.get(baseURL + 'get_staffkundan').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffgauravm = function () {
      $http.get(baseURL + 'get_staffgauravm').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffpc = function () {
      $http.get(baseURL + 'get_staffpc').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffdtdc = function () {
      $http.get(baseURL + 'get_staffdtdc').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.stafftrackon = function () {
      $http.get(baseURL + 'get_stafftrackon').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffdhl = function () {
      $http.get(baseURL + 'get_staffdhl').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffdpex = function () {
      $http.get(baseURL + 'get_staffdpex').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffaircargo = function () {
      $http.get(baseURL + 'get_staffaircargo').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.staffshipcargo = function () {
      $http.get(baseURL + 'get_staffshipcargo').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    
    $scope.phstaffamol = function () {
      $http.get(baseURL + 'get_phstaffamol').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffpavan = function () {
      $http.get(baseURL + 'get_phstaffpavan').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffsneha = function () {
      $http.get(baseURL + 'get_phstaffsneha').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffmanisha = function () {
      $http.get(baseURL + 'get_phstaffmanisha').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffshradha = function () {
      $http.get(baseURL + 'get_phstaffshradha').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffbarsha = function () {
      $http.get(baseURL + 'get_phstaffbarsha').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffajay = function () {
      $http.get(baseURL + 'get_phstaffajay').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffsm = function () {
      $http.get(baseURL + 'get_phstaffsm').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffkd = function () {
      $http.get(baseURL + 'get_phstaffkd').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffselva = function () {
      $http.get(baseURL + 'get_phstaffselva').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffgagan = function () {
      $http.get(baseURL + 'get_phstaffgagan').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffkundan = function () {
      $http.get(baseURL + 'get_phstaffkundan').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffgauravm = function () {
      $http.get(baseURL + 'get_phstaffgauravm').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffpc = function () {
      $http.get(baseURL + 'get_phstaffpc').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffdtdc = function () {
      $http.get(baseURL + 'get_phstaffdtdc').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstafftrackon = function () {
      $http.get(baseURL + 'get_phstafftrackon').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffdhl = function () {
      $http.get(baseURL + 'get_phstaffdhl').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffdpex = function () {
      $http.get(baseURL + 'get_phstaffdpex').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffaircargo = function () {
      $http.get(baseURL + 'get_phstaffaircargo').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.phstaffshipcargo = function () {
      $http.get(baseURL + 'get_phstaffshipcargo').success(function (res) {
        $scope.parcels = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.assignStaff = (id,staff)=>{
      data = {
        id : id,
        staff : staff,
      }
      // alert(id + " " + staff);
      $http.post(baseURL + 'assignStaff',data).success((res)=>{
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
    }

    $scope.staff = function () {
      $http.get(baseURL + 'allStaffs').success(function (res) {
        $scope.staffs = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.assigned_parcels_amar = ()=>{
      $scope.parcels = null;
      $http.get(baseURL + 'assignedparcels_amar').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.assigned_parcels_arvind = ()=>{
      $scope.parcels = null;
      $http.get(baseURL + 'assignedparcels_arvind').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.assigned_parcels_barsha = ()=>{
      $scope.parcels = null;
      $http.get(baseURL + 'assignedparcels_barsha').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.assigned_parcels_kunal = ()=>{
      $scope.parcels = null;
      $http.get(baseURL + 'assignedparcels_kunal').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.assigned_parcels_kundan = ()=>{
      $scope.parcels = null;
      $http.get(baseURL + 'assignedparcels_kundan').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.assigned_parcels_shankar = ()=>{
      $scope.parcels = null;
      $http.get(baseURL + 'assignedparcels_shankar').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.assigned_parcels_level6 = ()=>{
      $scope.parcels = null;
      $http.get(baseURL + 'assignedparcels_level6').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.assigned_parcels_level61 = ()=>{
      $scope.parcels = null;
      $http.get(baseURL + 'assignedparcels_level61').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.assigned_parcels_level62 = ()=>{
      $scope.parcels = null;
      $http.get(baseURL + 'assignedparcels_level62').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.assignBookingTo = (franchise,id)=>{
      // alert( franchise + " "+ id + "  Love You");
      data = {
        assign_booking_to : franchise,
        id : id,
      }
      $http.post(baseURL + 'assignbookingto',data).success((res)=>{
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
    }

    $scope.domain = function () {
      $http.get(baseURL + 'alldomains').success(function (res) {
        $scope.brands = res.record;
      //   console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.bussiness_id = window.localStorage.getItem('id');
    $scope.username = window.localStorage.getItem('username');
    $scope.domainName = window.localStorage.getItem('domain');

    // 

    $scope.allParcels_Kunal = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcels_kunal').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.allParcels_Kundan = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcels_kundan').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.allParcels_Barsha = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcels_barsha').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.allParcels_Amar = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcels_amar').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.allParcels_Shankar = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcels_shankar').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.allParcels_Arvind = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcels_arvind').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };

    // 

    $scope.allParcels_level6 = function () {
      const id = $scope.bussiness_id;
      $scope.parcels = null;
      $http.get(baseURL + 'getparcels_level6' , id).success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.allParcels_level61 = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcels_level61').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.allParcels_level62 = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcels_level62').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.parcelBooking = (parcel)=>{
        const owner = $scope.bussiness_id;
        const data = {
        boxess: parcel.boxess,
        from_address: parcel.from_address,
        from_city: parcel.from_city,
        from_address2: parcel.from_address2,
        from_country: parcel.from_country,
        from_email: parcel.from_email,
        from_name: parcel.from_name,
        from_phone: parcel.from_phone,
        from_postal: parcel.from_postal,
        from_state: parcel.from_state,
        notes: parcel.notes,
        packinglist: parcel.packinglist,
        parcelValues: parcel.parcelValues,
        to_address: parcel.to_address,
        to_address2: parcel.to_address2,
        to_city: parcel.to_city,
        to_country: parcel.to_country,
        to_email: parcel.to_email,
        to_name: parcel.to_name,
        to_phone: parcel.to_phone,
        to_postal: parcel.to_postal,
        to_state: parcel.to_state,
        weight: parcel.weight,
        owner : owner,
      }
      console.log(data);

      $http.post(baseURL + 'addParcels',data).success((res)=>{
        if (res.status == true) {
            $scope.addParcelMessage = res.message;
            $scope.showAddParcelMessage = true;
            $timeout(function () {
              $scope.showAddParcelMessage = false;
              location.reload();
            }, 3000);
          } else {
            $scope.addParcelMessage2 = res.message;
            $scope.showAddParcelMessage2 = true,
              $timeout(function () {
                $scope.showAddParcelMessage2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
    }

    $scope.driver = function () {
      $http.get(baseURL + 'getdrivers').success(function (res) {
        $scope.driverslist = res.record;
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.assignPickup = (pdriver,parcel)=>{
      const pickup = {
        pdriver : pdriver,
        booking_no : parcel.id,
        from_address : parcel.from_address,
        from_address2 : parcel.from_address2,
        from_city : parcel.from_city,
        from_country : parcel.from_country,
        from_email : parcel.from_email,
        from_name : parcel.from_name,
        from_phone : parcel.from_phone,
        from_postal : parcel.from_postal,
        from_state : parcel.from_state,
      };
      // console.log(pickup);
      $http.post(baseURL + 'assignPickup',pickup).success((res)=>{
        if (res.status == true) {
            $scope.pickupAssigned = res.message;
            $scope.showPickupAssigned = true;
            $timeout(function () {
              $scope.showPickupAssigned = false;
              location.reload();
            }, 3000);
          } else {
            $scope.pickupAssigned2 = res.message;
            $scope.showPickupAssigned2 = true,
              $timeout(function () {
                $scope.showPickupAssigned2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
    }

    $scope.assignDelivery = (ddriver,parcel)=>{
      const delivery = {
        ddriver : ddriver,
        booking_no : parcel.id,
        to_address : parcel.from_address,
        to_address2 : parcel.from_address2,
        to_city : parcel.from_city,
        to_country : parcel.from_country,
        to_email : parcel.from_email,
        to_name : parcel.from_name,
        to_phone : parcel.from_phone,
        to_postal : parcel.from_postal,
        to_state : parcel.from_state,
      };
      $http.post(baseURL + 'assignDelivery',delivery).success((res)=>{
        if (res.status == true) {
            $scope.deliveryAssigned = res.message;
            $scope.showDeliveryAssigned = true;
            $timeout(function () {
              $scope.showDeliveryMessage = false;
              location.reload();
            }, 3000);
          } else {
            $scope.deliveryAssigned2 = res.message;
            $scope.showDeliveryAssigned2 = true,
              $timeout(function () {
                $scope.showDeliveryAssigned2 = false;
              }, 3000);
          }
        }).error((error)=>{
          console.log(error);
        })
    }

    $scope.removePortal = function (id) {
      window.localStorage.setItem('portal_id', id);
    };

    $scope.confRemovePortal = function () {
      var id = window.localStorage.getItem('portal_id');
      $http.get(baseURL + 'removePortal/' + id).success(function (res) {
        $timeout(function () {
          location.reload();
          window.localStorage.removeItem('portal_id');
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    };



    $scope.listPortal = ()=>{
      $http.get(baseURL + 'getportals').success((res)=>{
        console.log(res.record);
        $scope.portals = res.record;
      }).error((error)=>{
        console.log(error);
      });
    }

    $scope.getLeftMenu = ()=>{
      const domain = window.localStorage.getItem('domain');
      const url = 'partials/left_menu/'+ domain +'.html'
      return url
    }

    $scope.getTopMenu = ()=>
    {
        const topmenu = window.localStorage.getItem('topmenu');
        const url = 'partials/top_menu/'+ topmenu +'.html'
        return url
    }


    $scope.updateActivity = function (assign_to,booking_no) {
      console.log(assign_to + booking_no);
      const body = {
        assign_to : assign_to,
        booking_no : booking_no,
      }
      $http.post(baseURL + 'updateActivity/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.setDate = function (date) {
      $scope.time = (new Date(date).getDate()) + "/" + (new Date(date).getMonth() + 1) + '/' + new Date(date).getFullYear() + ':' + new Date(date).getHours() + ":" + new Date(date).getMinutes();
      console.log("scoper time", date)
      return $scope.time;
    }

    $scope.getFeatures = ()=>{
      $http.get(baseURL + 'getfeatures').success((res)=>{
        console.log(res.record);
        $scope.features = res.record;
      }).error((error)=>{
        console.log(error);
      });
    };

    $scope.addFeatures = (feature)=>{
      $http.post(baseURL + 'addfeatures',feature).success((res)=>{
        if (res.status == true) {
          $scope.addfeaturemsg = res.message;
          $scope.showaddfeaturemsg = true;
          $timeout(function () {
            $scope.showaddfeaturemsg = false;
            location.reload();
          }, 3000);
        } else {
          $scope.addfeaturemsg2 = res.message;
          $scope.showaddfeaturemsg2 = true,
            $timeout(function () {
              $scope.showaddfeaturemsg = false;
            }, 3000);
        }
      }).error((error)=>{
        console.log(error);
      })
    }

    $scope.updateBalPayment = function (id,bal_payment) {
        var body = {
          bal_payment : bal_payment,
          id:id ,
        }
      $http.post(baseURL + 'updateBalPayment/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.updateActualPayment = function (id,actual_payment) {
        var body = {
          actual_payment : actual_payment,
          id:id ,
        }
      $http.post(baseURL + 'updateActualPayment/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.updatePaymentReceived = function (id,payment_received) {
        var body = {
          payment_received: payment_received,
          id:id ,
        }
      $http.post(baseURL + 'updatePaymentReceived/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.removeActivity = function (id) {
      window.localStorage.setItem('s_id', id);
    };

    $scope.confremoveActivity = function () {
      var id = window.localStorage.getItem('s_id');
      $http.get(baseURL + 'removeActivity/' + id).success(function (res) {
        $timeout(function () {
          location.reload();
          window.localStorage.removeItem('s_id');
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getActivityById = ()=>{
      $http.get(baseURL + 'getActivityById' , id).success((res)=>{
        $scope.activity = res;
        console.log($scope.activity);
      }).error(()=>{
        console.log(error);
      })
    }

    $scope.uploadAcitivityDocument = (activity,document)=>{
      const images = $scope.items;
      const booking_no = activity.booking_no;
      const assign_to = activity.assign_to
      const loc = activity.location;
      const email = window.localStorage.getItem('email');
      const date = new Date();
      const data = {
        item_image : images.item_image,
        item_imagename : images.item_imagename,
        message : activity.message,
        file : document.file,
        booking_no : booking_no,
        loc : loc,
        assign_to : assign_to,
        date : date,
        email : email,
      }
      console.log(data)
      $http.post(baseURL + 'uploadParcelDocument', data).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.openImg = (imgName)=>{
      $scope.imgName = imgName;
    }
    
    $scope.listActivity = ()=>{
      console.log("listActivity() function initialised.....")
      $http.get(baseURL + 'getActivityList').success((res)=>{
        $scope.activity = res;
      }).error((error)=>{
        console.log(error);
      })
    }

    $scope.addActivity = (id,email)=>{
      console.log(id);
      console.log(email);
      window.localStorage.setItem('p_id', id);
      window.localStorage.setItem('email', email);
    }

    $scope.items = {
      'item_imagename': '',
      'item_image': ''
    };
    $scope.updateattachment2 = function () {
      var img = new Image();
      var newfile = document.getElementById("document-file").files[0];
      var fileDisplayArea = document.getElementById('fileDisplayArea');
      var imageType = /image.*/;
      if (newfile.type.match(imageType)) {
          var oFReader = new FileReader();
          oFReader.onload = function (oFREvent) {
          $scope.attachname = document.getElementById("document-file").files[0].name;
          $scope.attachmentfile = oFReader.result;
          $scope.items.item_imagename = $scope.attachname;
          $scope.items.item_image = $scope.attachmentfile;
          $scope.$apply();
          img.src = $scope.attachmentfile;
        };
        oFReader.readAsDataURL(newfile);
      } else {
        $scope.items.item_imagename = '';
        $scope.items.item_image = '';
      }
    };

    $scope.uploadDocuments = function (uploadDocumentsForm, document) {
      const images = $scope.items;
      const id = window.localStorage.getItem('p_id');
      const email = window.localStorage.getItem('email');
      const date = new Date();
      const data = {
        item_image : images.item_image,
        item_imagename : images.item_imagename,
        message : document.message,
        file : document.file,
        booking_no : id,
        date : date,
        email : email,
      }
      console.log(data);;
      $http.post(baseURL + 'uploadParcelDocument', data).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.reload = ()=>{
      location.reload()
    }

    $scope.productBrand = function (val) {
      product_brand = val;
    };
    $scope.addInventory = function (value) {

      if (value.product_new == undefined) {
        var body = {
          product_brand: value.brand,
          product_title: value.productName,
          product_type: value.productType,
          product_usd: 'US $' + value.product_usd,
          seller_id: value.seller_id,
          product_qty: value.product_qty,
          warehouse: value.warehouse,
          ean_number: value.ean_number
        };
      } else {
        var body = {
          product_brand: value.brand,
          product_title: value.product_new,
          product_type: value.product_type,
          product_usd: 'US $' + value.product_usd,
          seller_id: value.seller_id,
          product_qty: value.product_qty,
          warehouse: value.warehouse,
          ean_number: value.ean_number
        };
      }
      $http.post(baseURL + "addStocks", body).then(
        function (res) {
          $location.path("/item");
        },
        function (error) {
          console.log("unable to add Inventory");
        }
      );
    };
    $scope.newProduct = function (addProductForm, value) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      value.date = date;
      value.item_image = $scope.item.item_image;
      value.item_imagename = $scope.item.item_imagename;
      if (addProductForm.$valid) {
        $http.post(baseURL + 'addNewProduct', value).success(function (res) {
          window.localStorage.setItem('pro_id', res.insertId);
          if (res.status === false) {
            $scope.addproductsemsg = res.message;
            $scope.showaddproductsemsg = true;
            $timeout(function () {
              $scope.showaddcoursemsg = false;
            }, 3000);
          } else {
            $scope.addpromsg = res.message;
            $scope.showaddpromsg = true;
            $timeout(function () {
              $scope.showaddpromsg = false;
              $location.path("/products");
            }, 3000);
          }
        }).error(function (error) {
          console.log("Add Product Form", error);
        });
      }
    };
    $scope.description = function (product) {
      window.localStorage.setItem('productName', product.description)
      $http.get(baseURL + 'allTitles/' + productBrand).success(function (res) {
        $scope.titles = res;
      }).error(function (error) {
        console.log(error);
      });
    };






    $scope.selectedItemChanged = function (id) {
      $http.get(baseURL + 'productByProductId/' + id).success(function (res) {
        $scope.price = res[0].selling_price;
        $scope.description = res[0].description;
        $scope.ean = res[0].ean_number;
        window.localStorage.setItem('p_id', res[0].id);
        window.localStorage.setItem('p_price', res[0].selling_price);
        window.localStorage.setItem('ean_number', res[0].ean_number);
        window.localStorage.setItem('p_description', res[0].description)
        console.log(res[0].description)
      }).error(function (error) {
        console.log(error);
      });
    };
    // $scope.color = function () {
    //   var id=window.localStorage.getItem('p_id');
    //   $http.get(baseURL + 'allColors/' + id).success(function (res) {
    //     $scope.pcolor = res;
    //     console.log($scope.pcolor);
    //   }).error(function (error) {
    //     console.log(error);
    //   });
    // };
    $scope.checkStatus = function () {
      $http.get(baseURL + 'allStatuslist').success(function (res) {
        $scope.allStatus = res;
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
    $scope.brand3 = function () {
      $http.get(baseURL + 'allavailablebrand').success(function (res) {
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
    $scope.type3 = function () {
      $http.get(baseURL + 'type/').success(function (res) {
        $scope.types = res;
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.productType = function () {
      console.log(baseURL + "productTypeByBrandFilter/" + product_brand);
      $http({
        method: "GET",
        url: baseURL + "productTypeByBrandFilter/" + product_brand
      }).then(
        function (response) {
          $scope.allProductType = response.data;
        },
        function (error) {
          console.log("error while fetching data for brand filter");
        }
      );
    };
    $scope.productTitle = function () {
      $http({
        method: "GET",
        url: baseURL + "productTitleByBrandFilter/" + product_brand
      }).then(
        function (response) {
          $scope.allProductTitle = response.data;
        },
        function (error) {
          console.log("error while fetching data for brand filter");
        }
      );
    };
    $scope.brand = function () {
      $http({
        method: "GET",
        url: baseURL + "allBrands"
      }).then(
        function (response) {
          $scope.allBrands = response.data;
        },
        function (error) {
          console.log("Error! Please check API code of all distinct brand");
        }
      );
    };
    $scope.allProducts = function () {
      $http({
        method: "GET",
        url: baseURL + "allProducts"
      }).then(
        function (response) {
          // $scope.allproducts = response.data;
          setTimeout(function () {
            $scope.$apply(function () {
              $scope.allproducts = response.data;
            });
          }, 3000);
        },
        function (error) {
          console.log("Error! Please check API code of all distinct brand");
        }
      );

    };
    $scope.editProduct = function (id) {
      $location.path('/edit_product/' + id);
      window.localStorage.setItem('pId', id);
    };
    $scope.editSubProduct = function (id) {
      $location.path('/edit_subproduct/' + id);
      window.localStorage.setItem('pId', id);
    };
    $scope.viewProduct = function (id, product_title) {
      $location.path('/productView/' + id);
      window.localStorage.setItem('pId', id);
      window.localStorage.setItem('pId', product_title);
    };

    $scope.productByproductId = function () {
      var id = window.localStorage.getItem('pId');
      $http({
        method: "GET",
        url: baseURL + "productByProductId/" + id
      }).then(
        function (response) {
          $scope.productData = response.data;
          console.log($scope.productData);
        },
        function (error) {
          console.log("Error! Please check API code of all distinct brand");
        }
      );
    };
    // update product table by row
    $scope.saveProductRowItem = function (data, id) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      var product = {
        data: data,
        id: id,
        date: date
      };
      $http.post(baseURL + 'productRowUpdate', product).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };
    // $scope.productByproductTitle = function () {
    //   var id = window.localStorage.getItem('pId');
    //   $http({
    //     method: "GET",
    //     url: baseURL + "productsByProductTitle/" + id
    //   }).then(
    //     function (response) {
    //       $scope.productData = response.data;
    //     },
    //     function (error) {
    //       console.log("Error! Please check API code of all distinct brand");
    //     }
    //   );
    // };
    $scope.previousURL = '';
    $rootScope.$on('$locationChangeStart', function (event, current, previous) {
      previousURL = previous;
    });
    $scope.brand_types = {};
    $scope.allBrandAndType = function () {
      $http.get(baseURL + 'brandandtypes').success(function (res) {
        $scope.brand_types = res;

      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.newBrand = function (addBrandForm, btdata) {
      const data = $scope.item; 
      const bt = {
        item_image : data.item_image,
        item_imagename : data.item_imagename,
        brand : btdata.brand,
        brand_img : btdata.brand_img
      }
      console.log(bt);
      $http.post(baseURL + 'addNewBrand', bt).success(function (res) {
        if (res.status == false) {
          $scope.addbrandsemsg = res.message;
          $scope.showaddbrandsemsg = true;
          $timeout(function () {
            $scope.showaddbrandmsg = false;
            $location.path('/brands');
          }, 3000);
        } else {
          $scope.addbrandmsg = res.message;
          $scope.showaddbrandmsg = true;
          $timeout(function () {
            $scope.showaddbrandmsg = false;
            $location.path('/brands');
          }, 3000);

        }
      }).error(function (error) {
        console.log(error);
      });

    };

    $scope.addBrand = function () {
      $location.path('/add_brand');
    };
    $scope.getShipping = function () {
      $http.get(baseURL + 'allShipplist').success(function (res) {
        $scope.allShippinglist = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.getIncomingShipping = function () {
      $http.get(baseURL + 'incomingShipping').success(function (res) {
        $scope.incomingShippinglist = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // $scope.updateProduct = function (productForm, value) {
    //   var id = window.localStorage.getItem('pId');
    //   value.item_image = $scope.item.item_image;
    //   value.item_imagename = $scope.item.item_imagename;
    //   value.p_id = id;
    //   value.product_number = value.product_number ? value.product_number : "";
    //   value.qty = value.qty ? value.qty : "";
    //   value.color = value.color ? value.color : "";
    //   value.condition = value.condition ? value.condition : "";
    //   value.warranty_period = value.warranty_period ? value.warranty_period : "";
    //   value.packaging = value.packaging ? value.packaging : "";
    //   value.tech_support_by = value.tech_support_by ? value.tech_support_by : "";
    //   value.regulatory_approval = value.regulatory_approval ? value.regulatory_approval : "";
    //   value.country_of_origin = value.country_of_origin ? value.country_of_origin : "";
    //   value.unit_dimensions = value.unit_dimensions ? value.unit_dimensions : "";
    //   value.each_unit_weighs = value.each_unit_weighs ? value.each_unit_weighs : "";
    //   value.each_master_box_has = value.each_master_box_has ? value.each_master_box_has : "";
    //   value.master_box_dims_are = value.master_box_dims_are ? value.master_box_dims_are : "";
    //   value.each_master_box_weighs = value.each_master_box_weighs ? value.each_master_box_weighs : "";
    //   value.each_pallet_has = value.each_pallet_has ? value.each_pallet_has : "";
    //   value.each_pallet_weighs = value.each_pallet_weighs ? value.each_pallet_weighs : "";
    //   value.specifications = value.specifications ? value.specifications : "";
    //   value.includes = value.includes ? value.includes : "";
    //   value.additional = value.additional ? value.additional : "";
    //   value.priority = value.additional ? value.priority : "";
    //   $http.post(baseURL + "editProductByProductId", value).then(
    //     function (res) {
    //       if (res.data.status === false) {
    //         $scope.upproductsemsg = res.data.message;
    //         $scope.showupproductsemsg = true;
    //         $timeout(function () {
    //           $scope.showupproductsemsg = false;
    //         }, 3000);
    //       } else {
    //         $scope.uppromsg = res.data.message;
    //         $scope.showuppromsg = true;
    //         $timeout(function () {
    //           $scope.showuppromsg = false;
    //           if (previousURL == "http://localhost:6060/staffportal/#/trading-bench" || previousURL == "https://www.gadgetsinasia.com/staffportal/#/trading-bench") {
    //             $location.path("/trading-bench");
    //           } else {
    //             $location.path("/products");
    //           }

    //         }, 3000);
    //       }
    //     },
    //     function (error) {
    //       console.log("unable to add Inventory");
    //     }
    //   );
    // };


    $scope.addProduct = function () {
      $location.path('/add_product');
    };


    $scope.item = {
      'item_imagename': '',
      'item_image': ''
    };
    $scope.updateattachment = function () {
      var img = new Image();
      var newfile = document.getElementById("file_browse").files[0];
      var fileDisplayArea = document.getElementById('fileDisplayArea');
      var imageType = /image.*/;
      if (newfile.type.match(imageType)) {
        var oFReader = new FileReader();
        oFReader.onload = function (oFREvent) {
          $scope.attachname = document.getElementById("file_browse").files[0].name;
          $scope.attachmentfile = oFReader.result;
          $scope.item.item_imagename = $scope.attachname;
          $scope.item.item_image = $scope.attachmentfile;
          $scope.$apply();
          img.src = $scope.attachmentfile;
        };
        oFReader.readAsDataURL(newfile);
      } else {
        $scope.item.item_imagename = '';
        $scope.item.item_image = '';
      }
    };
    $scope.prodel = function (id) {
      window.localStorage.setItem('del_pro', id);
    };

    $scope.confirmcatdel = function () {
      var id = window.localStorage.getItem('del_pro');
      $http.get(baseURL + 'deleteGEProduct/' + id).success(function (res) {
        if (res.status === true) {
          $timeout(function () {
            location.reload();
            window.localStorage.clearItem('del_pro');
          }, 2000);
        }
      });
    };
    // delete Shipping, PO and All same PO id List
    $scope.incDel = function (po_id) {
      window.localStorage.setItem('delId', po_id);
    };
    $scope.incomingShippDel = function () {
      var id = window.localStorage.getItem('delId');
      $http.get(baseURL + 'delIncomingShipp/' + id).success(function (res) {
        if (res.status === true) {
          $timeout(function () {
            location.reload();
            window.localStorage.clearItem('delId');
          }, 2000);
        }
      });
    };
    // delete Shipping, inv_id in order and All same invoice id List
    $scope.outDelete = function (inv_id) {
      window.localStorage.setItem('InvId', inv_id);
    };
    $scope.outShippDel = function () {
      var id = window.localStorage.getItem('InvId');
      $http.get(baseURL + 'outgoingShippDel/' + id).success(function (res) {
        if (res.status === true) {
          $timeout(function () {
            location.reload();
            window.localStorage.clearItem('InvId');
          }, 2000);
        }
      });
    };
    $scope.subProdel = function (id) {
      window.localStorage.setItem('del_spro', id);
    };
    $scope.confirmdel = function () {
      var id = window.localStorage.getItem('del_spro');
      $http.get(baseURL + 'deleteSubPro/' + id).success(function (res) {
        if (res.status === true) {
          $timeout(function () {
            location.reload();
            window.localStorage.clearItem('del_pro');
          }, 2000);
        }
      });
    };
    $scope.editCollection = (id) => {
      $location.path('/editcollection/' + id);
      window.localStorage.setItem('collectionId', id);
    };
    $scope.collectionDel = (id) => {
      window.localStorage.setItem('collectionId', id);
    };
    $scope.specsDel = (id) => {
      window.localStorage.setItem('specsId', id);
    };
    $scope.confirmSpecificationdel = () => {
      var id = window.localStorage.getItem('specsId');
      $http.get(baseURL + 'deleteProductSpecificationsBySpecId/' + id).success(function (res) {
        if (res.status == true) {
          $scope.cnfDelSpec = true;
          $scope.delSpecifi = res.message;
          $timeout(function () {
            location.reload();
            window.localStorage.clearItem('specsId');
          }, 3000);
        }
      });
    };
    $scope.overviewDel = (id) => {
      window.localStorage.setItem('overViewId', id);
    };
    $scope.confirmOverviewdel = () => {
      var id = window.localStorage.getItem('overViewId');
      $http.get(baseURL + 'deleteProductOverviewByOverviewId/' + id).success(function (res) {
        if (res.status == true) {
          $scope.cnfDelOverView = true;
          $scope.delOverview = res.message;
          $timeout(function () {
            location.reload();
            window.localStorage.clearItem('overViewId');
          }, 3000);
        }
      });
    };
    $scope.keyfeatureDel = (id) => {
      window.localStorage.setItem('keyId', id);
    };
    $scope.boxItemsDel = (id) => {
      window.localStorage.setItem('boxItemId', id);
    };
    $scope.confirmKeyFeaturesdel = () => {
      var id = window.localStorage.getItem('keyId');
      $http.get(baseURL + 'deleteKeyFeatureById/' + id).success(function (res) {
        if (res.status == true) {
          $scope.cnfDelKeyF = true;
          $scope.delKeyF = res.message;
          $timeout(function () {
            $scope.cnfDelKeyF = false;
            location.reload();
            window.localStorage.clearItem('keyId');

          }, 3000);
        }
      });
    };
    $scope.confirmBoxItemsdel = () => {
      var id = window.localStorage.getItem('boxItemId');
      $http.get(baseURL + 'deleteBoxItemsById/' + id).success(function (res) {
        if (res.status == true) {
          $scope.cnfDelBoxItems = true;
          $scope.delBoxItems = res.message;
          $timeout(function () {
            location.reload();
            window.localStorage.clearItem('boxItemId');
          }, 3000);
        }
      });
    };
    $scope.boxQuestionDel = (id) => {
      window.localStorage.setItem('boxQuesId', id);
    };
    $scope.confirmQuestionDel = () => {
      var id = window.localStorage.getItem('boxQuesId');
      $http.get(baseURL + 'deleteQuestionById/' + id).success(function (res) {
        if (res.status == true) {
          $scope.cnfDelQues = true;
          $scope.delQues = res.message;
          $timeout(function () {
            location.reload();
            window.localStorage.clearItem('boxQuesId');
          }, 3000);
        }
      });
    };
    $scope.confirmCollectiondel = function () {
      var id = window.localStorage.getItem('collectionId');
      $http.get(baseURL + 'deleteCollection/' + id).success(function (res) {
        if (res.status == true) {
          $scope.cnfDelCollection = true;
          $scope.delCollection = res.message;
          $timeout(function () {
            location.reload();
            window.localStorage.clearItem('collectionId');
          }, 3000);
        }
      });
    };

    $scope.collectionById = () => {
      let id = window.localStorage.getItem('collectionId');
      $http.get(baseURL + "collectionById/" + id).success(function (res) {
        $scope.user = res;
      }).error(function (error) {
        console.log('unable to query the user data with user id');
      });
    };
    $scope.updateCollection = (form, collection) => {
      $http.post(baseURL + "updateCollection", collection).success(function (res) {
        if (res.status == true) {
          $scope.updateClient = res.message;
          $scope.showupdateClient = true;
          $timeout(() => {
            $scope.showupdateClient = false;
            $location.path('/collections');
          }, 3000);
        } else {
          $scope.updateerrclientmsg = res.message;
          $scope.showupdateerrclientmsg = true;
          $timeout(() => {
            $scope.showupdateerrclientmsg = false;
            location.reload();
          }, 3000);
        }

      }).error(function (error) {
        console.log('unable to query the user data with user id');
      });
    };
    $scope.addCollection = (collectionForm, collectionDetails) => {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      collectionDetails.date = date;
      $http.post(baseURL + 'addCollection', collectionDetails).success(function (res) {

        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            $timeout(function () {
              $scope.showaddpromsg = false;
              $location.path("/collections");
            }, 3000);
        } else {
          $scope.addproductsemsg = res.message;
          $scope.showaddproductsemsg = true,
            $timeout(function () {
              $scope.showaddproductsemsg = false;
              location.reload();
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });

    };
    $scope.purchaseOrder = function (poForm, product) {
      if (document.location.href == "http://localhost:6100/#/stock-product" || document.location.href == "https://portal.gadgetsinasia.com/#/stock-product"
      ) {
        product.description = window.localStorage.getItem('p_t');
        product.brand = window.localStorage.getItem('p_b');
        product.type = window.localStorage.getItem('p_ty');
      }
      product.item_image = $scope.item.item_image;
      product.item_imagename = $scope.item.item_imagename;
      product.ean_number = product.ean_number ? product.ean_number : "";
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      product.date = date;
      var description = window.localStorage.getItem('p_description');
      var p_id = window.localStorage.getItem('p_id');
      product.p_id = p_id;
      product.description = description;
      $http.post(baseURL + 'purchaseOrder', product).success(function (res) {
        console.log(product)
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            $timeout(function () {
              $scope.showaddpromsg = false;
              if (document.location.href == "http://localhost:6100/#/stock-product" || document.location.href == "https://portal.gadgetsinasia.com/#/stock-product"
              ) {
                location.reload();
              } else {
                $location.path("/wts-list");
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
    $scope.addProductCollection = function (poForm, collection) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      collection.date = date;
      collection.productId = window.localStorage.getItem('p_id');
      collection.productTitle = window.localStorage.getItem('p_t');
      $http.post(baseURL + 'productCollection', collection).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            $timeout(function () {
              $scope.showaddpromsg = false;
              if (document.location.href == "http://localhost:6100/#/stock-product" || document.location.href == "https://portal.gadgetsinasia.com/#/stock-product"
              ) {
                location.reload();
              } else {
                // $location.path("/wts-list");
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
    $scope.addWTBByStockModel = function (poForm, product) {
      if (document.location.href == "http://localhost:6100/#/stock-product" || document.location.href == "https://portal.gadgetsinasia.com/#/stock-product"
      ) {
        product.description = window.localStorage.getItem('p_t');
        product.type = window.localStorage.getItem('p_ty');
      }
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      product.date = date;
      product.id = window.localStorage.getItem('p_id');
      $http.post(baseURL + 'addProductWTBByStock', product).success(function (res) {
        console.log(product);
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            $timeout(function () {
              $scope.showaddpromsg = false;
              if (document.location.href == "http://localhost:6100/#/stock-product" || document.location.href == "https://portal.gadgetsinasia.com/#/stock-product"
              ) {
                location.reload();
              } else {
                // $location.path("/wts-list");
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
    $scope.purchaseOrderWTB = function (poForm, product) {
      if (document.location.href == "http://localhost:6100/#/stock-product" || document.location.href == "https://portal.gadgetsinasia.com/#/stock-product"
      ) {
        product.description = window.localStorage.getItem('p_t');
        product.brand = window.localStorage.getItem('p_b');
        product.type = window.localStorage.getItem('p_ty');
      }
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
      product.price = price;
      product.p_id = p_id;
      product.ean_number = ean_number;
      product.description = description;
      $http.post(baseURL + 'purchaseOrderWTB', product).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            $timeout(function () {
              $scope.showaddpromsg = false;
              if (document.location.href == "http://localhost:6100/#/stock-product" || document.location.href == "https://portal.gadgetsinasia.com/#/stock-product"
              ) {
                location.reload();
              } else {
                $location.path("/wtb-list");
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

    // add sub product
    $scope.modelAddSubPro = function (id) {
      window.localStorage.setItem('pro', id);
    };
    $scope.addModelSubProduct = function (poForm, product) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var hr = d.getHours();
      var min = d.getMinutes();
      var date = curr_date + "-" + curr_month + "-" + curr_year + " " + "/" + " " + hr + ':' + min;
      product.date = date;
      var id = window.localStorage.getItem('pro');
      product.p_id = id;
      $http.post(baseURL + 'addSubProduct', product).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            localStorage.removeItem('pro');
          $timeout(function () {
            $scope.showaddpromsg = false;
            location.reload();
            // $location.path("/sub-products");
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
    $scope.addSubProduct = function (poForm, product) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var hr = d.getHours();
      var min = d.getMinutes();
      var date = curr_date + "-" + curr_month + "-" + curr_year + " " + "/" + " " + hr + ':' + min;
      product.date = date;
      var id = window.localStorage.getItem('pro_id');
      product.p_id = id;
      $http.post(baseURL + 'addSubProduct', product).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            localStorage.removeItem('pro');
          $timeout(function () {
            $scope.showaddpromsg = false;
            $location.path("/sub-products");
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
    $scope.addSubImage = function () {
      var img = new Image();
      var newfile = document.getElementById("file_browseImg").files[0];
      var fileDisplayArea = document.getElementById("fileDisplayArea1");
      var imageType = /image.*/;
      if (newfile.type.match(imageType)) {
        var oFReader = new FileReader();
        oFReader.onload = function (oFREvent) {
          $scope.attachname1 = document.getElementById("file_browseImg").files[0].name;
          $scope.attachmentfile1 = oFReader.result;
          $scope.$apply();
          var reqObj = {
            item_imagename: $scope.attachname1,
            img: $scope.attachmentfile1,
            id: window.localStorage.getItem('pId'),
          };
          $http.post(baseURL + "addSubImg", reqObj).success(function (res) {
            $scope.product.img = res.imagename;
            $scope.product.item_image_data = $scope.attachmentfile1;
          })
            .error(function (error) {
              console.log("Error Add Product Image", error);
            });
          img.src = $scope.attachmentfile1;
        };
        oFReader.readAsDataURL(newfile);
      } else {
      }
    };
    $scope.allCollections = function () {
      $http.get(baseURL + "allCollections").success(function (res) {
        $scope.allCollection = res.result;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.allResellersPackingOrders = function () {
      $http.get(baseURL + "allResellersPackingOrders").success(function (res) {
        $scope.allOrders = res.result;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.allResellersDirectBuyOrders = function () {
      $http.get(baseURL + "allResellersDirectBuyOrders").then((response) => {
        console.log(response);
        $scope.directBuyOrders = response.data.result;
      }).catch((error) => console.log(error));
    };



    $scope.productsByBrand = function (brand) {
      window.localStorage.setItem('brand', brand);
      $location.path('/productbybrand');
    };
    $scope.allProductsByBrand = function () {
      var brand = window.localStorage.getItem('brand');
      $http.get(baseURL + "allProductsByBrandSuperAdmin/" + brand).success(function (res) {
        $scope.allproducts = res;
      }).error(function (error) {
        console.log(error);
      });

    };
    $scope.allSubProducts = function () {
      $http.get(baseURL + 'getsubproducts').success(function (res) {
        $scope.subproduct = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.subProductsById = function (id) {
      var id = window.localStorage.getItem('pId');
      $http.get(baseURL + 'subProductsById/' + id).success(function (res) {
        $scope.subproduct = res[0];
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.updateSubProducts = function (data) {
      var id = window.localStorage.getItem('pId');
      $http.post(baseURL + 'updateSubProduct/' + id, data).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message,
            $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              window.location.href = previousURL;
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message,
            $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.updateStockProduct = function (data) {
      var id = window.localStorage.getItem('p_id');
      console.log(data);
      $http.post(baseURL + 'updateStockProductByTitle/' + id, data).success(function (res) {
        console.log(data);

        if (res.status == true) {
          $scope.uppromsg = res.message,
            $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              location.reload();
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message,
            $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    // update product img
    $scope.updateImg = function () {
      var img = new Image();
      var newfile = document.getElementById("file_browseImg1").files[0];
      var fileDisplayArea = document.getElementById("imgDisplay");
      var imageType = /image.*/;
      if (newfile.type.match(imageType)) {
        var oFReader = new FileReader();
        oFReader.onload = function (oFREvent) {
          $scope.attachname1 = document.getElementById("file_browseImg1").files[0].name;
          $scope.attachmentfile1 = oFReader.result;
          $scope.$apply();
          var reqObj = {
            item_imagename: $scope.attachname1,
            product_image: $scope.attachmentfile1,
            id: window.localStorage.getItem('p_id'),
          };
          $http.post(baseURL + "addProductImg", reqObj).success(function (res) {
            $scope.stockProductDetails.product_image = res.imagename;
            $scope.stockProductDetails.item_image_data = $scope.attachmentfile1;
          })
            .error(function (error) {
              console.log("Error Add Product Image", error);
            });
          img.src = $scope.attachmentfile1;
        };
        oFReader.readAsDataURL(newfile);
      } else {
      }
    };

    $scope.addClient = function (poForm, client) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      client.created_date = date;
      $http.post(baseURL + 'addNewClient', client).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true;
          $timeout(function () {
            location.reload();
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

    //$scope.clientList = [];
    $scope.client2 = function () {
      $http.get(baseURL + 'getAllClients').success(function (res) {
        $scope.clients = res;

      }).error(function (error) {
        console.log(error);
      });
    };
    // all wtb list
    $scope.allWTS = function () {
      $http.get(baseURL + 'allWTSList').success(function (res) {
        $scope.wtsLists = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.allWTB = function () {
      $http.get(baseURL + 'allWTBList').success(function (res) {
        $scope.wtbLists = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.redirecttobrandHistory = function (brand) {
      window.localStorage.setItem('brand', brand);
      $location.path('/History-By-Brand/' + brand);
    };
    $scope.clienthistoryBybrand = function () {
      var brand = window.localStorage.getItem('brand');
      $http.get(baseURL + 'clientsBybrand/' + brand).success(function (res) {
        $scope.wtbLists = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.SelectStaff = function () {
      $http.get(baseURL + 'selectedStaff').success(function (res) {
        $scope.allStaff = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.SelectAllStaff = function (team) {
      $http.get(baseURL + 'dataByStaff/' + team).success(function (res) {
        $scope.wtbLists = res;
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.wtbLists = res;
          });
        }, 1000);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.selectedStatus = function (team) {
      $http.get(baseURL + 'dataByStatus/' + team).success(function (res) {
        $scope.wtbLists = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.allInquiries = function () {
      $http.get(baseURL + 'allInqueryList').success(function (res) {
        $scope.wtbLists = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.viewWts = function (id) {
      $location.path('/view_wts/' + id);
      window.localStorage.setItem('wts_id', id);
    };
    $scope.viewHistory = function (id) {
      window.localStorage.setItem('client_id', id);
      $location.path('/client-details/' + id);
    };
    // $location.path('/client-details/' + id);
    // window.localStorage.setItem('client_id', id);
    $scope.viewWtb = function (id) {
      $location.path('/view_wtb/' + id);
      window.localStorage.setItem('wtb_id', id);
    };
    $scope.wtsById = function () {
      var id = window.localStorage.getItem('wts_id');
      $http.get(baseURL + 'purchaseOrderWTSDetailsById/' + id).success(function (res) {
        $scope.purchaseOrderWTSData = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.wtbById = function () {
      var id = window.localStorage.getItem('wtb_id');
      $http.get(baseURL + 'purchaseOrderWTBDetailsById/' + id).success(function (res) {
        $scope.purchaseOrderWTSData = res;
        window.localStorage.setItem('client_id', res.client_id);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.productStockByProductTitle = function () {
      var id = window.localStorage.getItem('p_id');
      $http.get(baseURL + 'productStockByProductTitle/' + id).success(function (res) {
        $scope.results = res.v;
        $scope.results1 = res.v1;
        $scope.p_id = window.localStorage.getItem('p_id');
        $scope.p_t = window.localStorage.getItem('p_t');
        $scope.p_ty = window.localStorage.getItem('p_ty');
        $scope.p_pri = window.localStorage.getItem('p_pri');
        // window.localStorage.setItem('wtb_id', res.v[0].id);
        // window.localStorage.setItem('client_id', res.v[0].client_id);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.productOverviewByProductId = () => {
      let productId = localStorage.getItem('productTitle');
      $http.get(baseURL + 'listProductOverviewByProductId/' + productId).success(function (res) {
        $scope.productOverView = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.productSpecificationByProductId = () => {
      let productId = localStorage.getItem('productTitle');
      $http.get(baseURL + 'listProductSpecificationsByProductIdId/' + productId).success(function (res) {
        $scope.productSpecification = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.productboxItesByproductId = () => {
      let productId = localStorage.getItem('productTitle');
      $http.get(baseURL + 'listBoxItemsByProductId/' + productId).success(function (res) {
        $scope.productBoxItems = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.keyFeaturesByProductId = () => {
      let productId = localStorage.getItem('productTitle');
      $http.get(baseURL + 'listKeyFeaturesByProductId/' + productId).success(function (res) {
        $scope.keyfeatures = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.productQuestionsByproductId = () => {
      let productId = localStorage.getItem('productTitle');
      $http.get(baseURL + 'listProductQuestionsByproductId/' + productId).success(function (res) {
        $scope.productQuestions = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.addProductBoxItems = (boxItemForm, boxItemData) => {
      let productId = localStorage.getItem('p_id');
      boxItemData.productId = productId;
      $http.post(baseURL + 'addBoxItems', boxItemData).success(function (res) {
        if (res.status == true) {
          $scope.showaddboxmsg = true;
          $scope.addboxmsg = res.message;
          $timeout(() => {
            $scope.showaddboxmsg = false;
            location.reload();
          }, 2000);

        } else {
          $scope.showaddboxemsg = true;
          $scope.addboxemsg = "Box Items are not added !";
          $timeout(() => {
            $scope.showaddboxemsg = false;
            location.reload();
          }, 2000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.addProductOverview = (overviewForm, overviewData) => {
      let productId = localStorage.getItem('p_id');
      overviewData.productId = productId;
      $http.post(baseURL + 'addProductOverviewByProductId', overviewData).success(function (res) {
        if (res.status == true) {
          $scope.showaddovrmsg = true;
          $scope.addovrmsg = res.message;
          $timeout(() => {
            $scope.showaddovrmsg = false;
            location.reload();
          }, 2000);

        } else {
          $scope.showaddovremsg = true;
          $scope.addovremsg = "Overview Not added !";
          $timeout(() => {
            $scope.showaddovremsg = false;
            location.reload();
          }, 2000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.addKeyfeatures = (keyFeatureForm, keyFeatureData, product) => {
      keyFeatureData.product = product;
      $http.post(baseURL + 'addKeyFeature', keyFeatureData).success(function (res) {
        if (res.status == true) {
          $scope.showaddkeymsg = true;
          $scope.addkeymsg = res.message;
          $timeout(() => {
            $scope.showaddkeymsg = false;
            location.reload();
          }, 2000);

        } else {
          $scope.showaddkeyemsg = true;
          $scope.addkeyemsg = "Key Features Not added !";
          $timeout(() => {
            $scope.showaddkeyemsg = false;
            location.reload();
          }, 2000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.addProductSpecification = (specificationForm, specificationData) => {
      let productId = localStorage.getItem('p_id');
      specificationData.productId = productId;
      $http.post(baseURL + 'addProductSpecificationsByProductId', specificationData).success(function (res) {
        if (res.status == true) {
          $scope.showaddspemsg = true;
          $scope.addspemsg = res.message;
          $timeout(() => {
            $scope.showaddspemsg = false;
            location.reload();
          }, 2000);

        } else {
          $scope.showaddspecsemsg = true;
          $scope.addspecsemsg = "Specification Not added !";
          $timeout(() => {
            $scope.showaddspecsemsg = false;
            location.reload();
          }, 2000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.productCollectionProductTitle = () => {
      let title = localStorage.getItem('p_t').replace(/ /g, '-');
      $http.get(baseURL + 'collectionPointsByTitle/' + title).success(function (res) {
        $scope.productCollections = res;
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.showhide = function(id) {
      if (document.getElementById(id).style.display == 'none') {
          document.getElementById(id).style.display = 'block';
      } else {
          document.getElementById(id).style.display = 'none';
      }
  };

    $scope.productByTitle = function () {
      var id = window.localStorage.getItem('p_id');
      $http.get(baseURL + 'stockProductDetails/' + id).success(function (res) {
        $scope.stockProductDetails = res;
        localStorage.setItem('productTitle', res.title);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.IsVisible = false;
    $scope.ShowHide = function () {
      //If DIV is visible it will be hidden and vice versa.
      $scope.IsVisible = $scope.IsVisible ? false : true;
    };
    $scope.clientById = function () {
      var client = window.localStorage.getItem('client_id');
      $http.get(baseURL + 'clientsDetailsById/' + client).success(function (res) {
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.clientDetails = res;
          });
        }, 1000);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.invoiceclientById = function () {
      var client = window.localStorage.getItem('wtsClientId');
      // var client=window.localStorage.getItem('Invcid');
      $http.get(baseURL + 'clientsDetailsById/' + client).success(function (res) {
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.clientDetails = res;
          });
        }, 1000);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.clientBTWHistory = function () {
      var id = window.localStorage.getItem('wtsClientId');
      $http.get(baseURL + 'clientbtwhistory/' + id).success(function (res) {
        $scope.btwHistory = res.v;
        $scope.btsHistory = res.v1;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.CliBTWHistory = function () {
      var id = window.localStorage.getItem('client_id');
      $http.get(baseURL + 'resellerPackingOrdersBYId/' + id).success(function (res) {
        $scope.clientAllOrders = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.resellerPaymentHistory = () => {
      var id = window.localStorage.getItem('client_id');
      $http.get(baseURL + 'resellerPaymentHistory/' + id).then((res) => {
        $scope.history = res.data;
      }).catch((error) => {
        console.log(error);
      });
    };
    $scope.resellerDepositHistory = () => {
      var id = window.localStorage.getItem('client_id');
      $http.get(baseURL + 'resellerDepositHistory/' + id).then((res) => {
        $scope.depositHistory = res.data;
      }).catch((error) => {
        console.log(error);
      });
    };
    $scope.dc = "Deduct Credits";
    $scope.deductBalance = (client, amount, costAmount, orderId) => {
      $scope.dc = "Deducting";
      client.deductCredit = costAmount;
      client.orderId = orderId;
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      client.date = date;
      $http.post(baseURL + 'deductcredtis', client).then((res) => {
        if (res.status == 200) {
          $scope.deductCreditsMessage = "Credits Updated for the clients";
          $scope.dc = "Deducted";
          $timeout(() => {
            location.reload();
          }, 1000);
        } else {
          $scope.deductCreditsMessage = "Unable to Update credits for the client. Please try again";
        }
      }).catch((err) => {
        console.log(err);
      });
    };
    $scope.cliProductGrandPrice = function () {
      var id = window.localStorage.getItem('client_id');
      $http.get(baseURL + 'clientgrandprice/' + id).success(function (res) {
        $scope.wtbgrand = res.v;
        $scope.grandPriceWTS = res.v1;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.clientProductGrandPrice = function () {
      var id = window.localStorage.getItem('wtsClientId');
      $http.get(baseURL + 'clientgrandprice/' + id).success(function (res) {
        $scope.grandPrice = res.v;
        $scope.grandPriceWTS = res.v1;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.notesById = function () {
      var id = window.localStorage.getItem('pro_id');
      var id = window.localStorage.getItem('InvNo');
      $http.get(baseURL + 'notesByProduct/' + id).success(function (res) {
        setTimeout(function () {
          $scope.$apply(function () {
            $scope.noteLists = res;
          });
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.notesByIdForPacking = function () {
      var id = localStorage.getItem('shippNo')
      $http.get(baseURL + 'notesByProduct/' + id).success(function (res) {
        $scope.noteLists = res;

      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.allStaffNotes = function () {
      $http.get(baseURL + 'allNotes').success(function (res) {
        $scope.noteLists = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.editWts = function (id) {
      $location.path('/edit_wts/' + id);
      window.localStorage.setItem('wts_id', id);
    };
    $scope.editWtb = function (id, client_id, p_id) {
      $location.path('/edit_wtb/' + id);
      window.localStorage.setItem('wtb_id', id);
      window.localStorage.setItem('pro_id', p_id);
      window.localStorage.setItem('client_id', client_id);
    };
    $scope.redirectViewInvoice = function (inv_no, client_id) {

      $location.path('/view-Invoice');
      window.localStorage.setItem('InvNo', inv_no);
      window.localStorage.setItem('Invcid', client_id);
    };
    $scope.redirectInvPacking = function (inv_no, client_id) {
      $location.path('/Outgoing-Packing');
      window.localStorage.setItem('InvNo', inv_no);
      window.localStorage.setItem('Invcid', client_id);
    };
    $scope.InvoiceDetails = function () {
      var p_id = window.localStorage.getItem('InWTB_Lead_id');
      $http.get(baseURL + 'invoiceProduct/' + p_id).success(function (res) {
        $scope.btwHistory = res[0];
      }).error(function (error) {
        console.log(error);
      })
    }
    // save Invoice
    $scope.saveInvoice = function (clientDetails, Invoicedata, amount) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      var out_shipno = curr_date + "" + d.getHours() + "" + d.getMinutes() + "" + d.getSeconds() + "" + d.getMilliseconds();
      clientDetails.date = date;
      clientDetails.out_shipno = out_shipno;
      clientDetails.Invoicedata = Invoicedata;
      clientDetails.amount = amount;
      $http.post(baseURL + 'addToOrderList/', clientDetails).success(function (res) {
        if (res.status == true) {
          $scope.success_msg = res.message;
          $scope.showaddpromsg = true;
          $timeout(function () {
            $scope.showaddpromsg = false;
            $location.path('/Invoices-List');
          }, 2000);
        } else {
          $scope.error_msg = res.message;
          $scope.showaddproductsemsg = true;
          $timeout(function () {
            $scope.showaddproductsemsg = false;
          }, 2000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.editNotes = function (id) {
      $location.path('/edit_notes/' + id);
      window.localStorage.setItem('nid', id);
    };
    $scope.viewWtb = function (id) {
      $location.path('/view_notes/' + id);
      window.localStorage.setItem('notes_id', id);
    };
    $scope.staffNotesById = function () {
      var id = window.localStorage.getItem('notes_id');
      $http.get(baseURL + 'staffnotesById/' + id).success(function (res) {
        $scope.viewNotes = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.getNotesById = function () {
      var id = window.localStorage.getItem('nid');
      $http.get(baseURL + 'notesById/' + id).success(function (res) {
        $scope.getNotes = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // change client address
    $scope.updateClientAddr = function (id, address) {
      var body = {
        id: id,
        address: address,
      }
      $http.post(baseURL + 'changeClientAddr/', body).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              location.reload();
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    // update outgoing status
    $scope.updateOutStatus = function (inv_num, status) {
      var body = {
        inv_num: inv_num,
        status: status,
      }
      $http.post(baseURL + 'changeOutStatus/', body).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              location.reload();
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    // update incoming shipping status
    $scope.updateIncStatus = function (po_num, status) {
      var body = {
        po_num: po_num,
        status: status,
      }
      console.log(body);
      $http.post(baseURL + 'changeIncStatus/', body).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              location.reload();
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.saveNotes = function (p_notes, p_id, client_id, id) {
      var body = {
        p_notes: p_notes,
        p_id: p_id,
        client_id: client_id,
        id: id
      }
      $http.post(baseURL + 'inplaceUpdateNoteWTB/', body).success(function (res) {
        console.log(res);
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              location.reload();
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.wtsNotes = function (p_notes, p_id, client_id) {
      var body = {
        p_notes: p_notes,
        p_id: p_id,
        client_id: client_id
      }
      $http.post(baseURL + 'inplaceUpdateNoteWTS/', body).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              location.reload();
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    // update wts status
    $scope.updateWtsStatus = function (status, id) {
      var body = {
        status: status,
        id: id,
      }
      $http.post(baseURL + 'changeWtsStatus/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };
    // update wtb status
    $scope.updateWtbStatus = function (status, id) {
      var body = {
        status: status,
        id: id,
      }
      $http.post(baseURL + 'changeWtbStatus/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };
    // Update WTS Quantity
    $scope.updateWTSQuantity = function (id, qty, selling_price) {
      var body = {
        id: id,
        qty: qty,
        selling_price: selling_price,
      }
      $http.post(baseURL + 'updateWTSQty/', body).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              location.reload();
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    // Update WTB Quantity
    $scope.updateWTBQuantity = function (id, qty, price) {
      var body = {
        id: id,
        qty: qty,
        price: price,
      }
      $http.post(baseURL + 'updateWTBQty/', body).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              location.reload();
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.updateNotes = function (viewNotes) {
      var id = window.localStorage.getItem('nid');
      $http.post(baseURL + 'updateStaffNotes/' + id, viewNotes).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              window.location.href = previousURL;
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }

      }).error(function (error) {
        console.log(error);
      });
    };
    // Inquiry
    $scope.inquiryById = function () {
      var id = window.localStorage.getItem('inq_id');
      $http.get(baseURL + 'purchaseOrderWTBDetailsById/' + id).success(function (res) {
        $scope.inquiryData = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.editInquiry = function (id) {
      $location.path('/edit_inquiry/' + id);
      window.localStorage.setItem('inq_id', id);
    };
    $scope.updateInquiry = function (poForm, data) {
      var id = window.localStorage.getItem('inq_id');
      $http.post(baseURL + 'updatePOOrderWTB/' + id, data).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message,
            $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              window.location.href = previousURL;
              //$location.path("/wtb-list");
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message,
            $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
              window.location.href = previousURL;
              // $location.path("/wts-list");
            }, 3000);
        }

      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.viewInquiry = function (id) {
      $location.path('/view_inquiry/' + id);
      window.localStorage.setItem('inq_id', id);
    };


    $scope.previousURL = '';
    $rootScope.$on('$locationChangeStart', function (event, current, previous) {
      previousURL = previous;
    });
    $scope.updatePurchaseOrder = function (poForm, data) {
      var id = window.localStorage.getItem('wts_id');
      console.log(data)
      $http.post(baseURL + 'updatePOOrder/' + id, data).success(function (res) {
        console.log(data)
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              window.location.href = previousURL;
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
              window.location.href = previousURL;
              // $location.path("/wts-list");
            }, 3000);
        }

      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.updatePurchaseOrderWTB = function (poForm, data) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var hr = d.getHours();
      var min = d.getMinutes();
      var date = curr_date + "-" + curr_month + "-" + curr_year + " " + "/" + " " + hr + ':' + min;
      data.last_update = date;
      var id = window.localStorage.getItem('wtb_id');
      $http.post(baseURL + 'updatePOOrderWTB/' + id, data).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message,
            $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              window.location.href = previousURL;
              //$location.path("/wtb-list");
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message,
            $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
              window.location.href = previousURL;
              // $location.path("/wts-list");
            }, 3000);
        }

      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.updateClients = function (clientForm, user) {
      var id = window.localStorage.getItem('client_id');
      $http.post(baseURL + 'updateClientsById/' + id, user).success(function (res) {
        console.log(user)
        if (res.status == true) {
          $scope.successmsg = res.message,
            $scope.showmsg = true,
            $timeout(function () {
              $scope.showmsg = false;
              location.reload();
            }, 3000);
        } else {
          $scope.errormsg = res.message,
            $scope.showerrmsg = true;
          $timeout(function () {
            $scope.showerrmsg = false;
          }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };


    $scope.delNotes = function (id) {
      window.localStorage.setItem('notes_id', id);
    }
    $scope.confirmDelNotes = function () {
      var id = window.localStorage.getItem('notes_id');
      $http.get(baseURL + 'removeNotes/' + id).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.poDel = function (id) {
      window.localStorage.setItem('wts_id', id);
    };

    $scope.confirmPoDel = function () {
      var id = window.localStorage.getItem('wts_id');
      $http.get(baseURL + 'removepoWTSOrder/' + id).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.confirmPoDelWTB = function () {
      var id = window.localStorage.getItem('wtb_id');
      $http.get(baseURL + 'removepoWTBOrder/' + id).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.productStock = function (title, type, price, id) {
      $location.path('/stock-product');
      window.localStorage.setItem('p_t', title);
      window.localStorage.setItem('p_ty', type);
      window.localStorage.setItem('p_pri', price);
      window.localStorage.setItem('p_id', id);
    };

    $scope.edituser = function (id) {
      $location.path('/edit_user/' + id);
      window.localStorage.setItem('c_id', id);
    };
    $scope.brandById = function () {
      var url = location.href;
      var url_param = url.split("edit_brand/");
      var id = url_param[1];
      $http.get(baseURL + 'brandAndTypeById/' + id).success(function (res) {
        $scope.bt = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.editBrand = function (id) {
      $location.path('/edit_brand/' + id);
    };
    $scope.updateBrand = function (editBrandForm, bt) {
      var url = location.href;
      var url_param = url.split("edit_brand/");
      var id = url_param[1];
      bt.item_image = $scope.item.item_image;
      bt.item_imagename = $scope.item.item_imagename;
      $http.post(baseURL + 'brandUpdate/' + id, bt).success(function (res) {
        if (res.status == true) {
          $scope.updatebrandmsg = res.message;
          $scope.showupdatebrandmsg = true;
          $timeout(function () {
            $scope.showupdatebrandmsg = false;
            $location.path('/brands');
          }, 2000);
        } else {
          $scope.updatebrandsemsg = res.message;
          $scope.showupdatebrandsemsg = true;
          $timeout(function () {
            $scope.showupdatebrandsemsg = false;
            $location.path('/brands');
          }, 2000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.branddel = function (id) {
      window.localStorage.setItem('brand_id', id);
    };
    $scope.confirmbranddel = function () {
      var id = window.localStorage.getItem('brand_id');
      $http.get(baseURL + 'deleteBrand/' + id).success(function (res) {
        location.reload();
      });
    };
    $scope.editInvoiceForPackingList = function (shipNo, resellerid) {
      console.log(shipNo, resellerid);
      window.localStorage.setItem('shippNo', shipNo);
      window.localStorage.setItem('resellerid', resellerid);
      $location.path('/updateinvoice/' + shipNo);
    }
    $scope.directBuyOrderinvoice = function (shipNo, resellerid) {
      window.localStorage.setItem('shippNo', shipNo);
      window.localStorage.setItem('resellerid', resellerid);
      $location.path('/directbuyorderinvoice/' + shipNo);
    }
    $scope.getUser = function () {
      var resellerId = window.localStorage.getItem('resellerid');
      $http.get(baseURL + 'clientById/' + resellerId).success(function (res) {
        $scope.client = res;
      });
    }
    $scope.addNotesByStaff = function (notes) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var h = d.getHours();
      var min = d.getMinutes();
      var date = curr_date + "-" + curr_month + "-" + curr_year + " " + "/" + " " + h + ':' + min;
      notes.date = date;
      var product_id = window.localStorage.getItem('pro_id');
      notes.product_id = product_id;
      var client = window.localStorage.getItem('client_id');
      notes.client_id = client;
      $http.post(baseURL + 'addNotes', notes).success(function (res) {
        console.log(notes);
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true;
          $timeout(function () {
            location.reload();
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
    $scope.productNotes = function () {
      var product_title = window.localStorage.getItem('p_t');
      $http.get(baseURL + 'discussion/' + product_title).success(function (res) {
        // if (res.length > 0) {
        //   $scope.view = true;
        //   $scope.proNotes = res;
        // } else {
        //   $scope.view = false;
        // }
        // $scope.proNotes = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.clientNotesByStaff = function (notes) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var h = d.getHours();
      var min = d.getMinutes();
      var date = curr_date + "-" + curr_month + "-" + curr_year + " " + "/" + " " + h + ':' + min;
      notes.date = date;
      var product_id = window.localStorage.getItem('wtb_id');
      notes.product_id = product_id;
      $http.post(baseURL + 'addNotes', notes).success(function (res) {
        console.log(notes)
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true;
          $timeout(function () {
            location.reload();
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
    $scope.viewWTBHistory = function (id, client_id) {
      $location.path('/Add-Cart-Invoice/' + id);
      window.localStorage.setItem('wtsLead_id', id);
      window.localStorage.setItem('wtsClientId', client_id);
    }
    $scope.viewWTSHistory = function (id, client_id) {
      $location.path('/Add-Cart/' + id);
      window.localStorage.setItem('wtsLead_id', id);
      window.localStorage.setItem('wtsClientId', client_id);
    }
    // add to cart WTS
    $scope.cart = [];
    $scope.addItem = function (id, date, p_id, brand, product_type, product_title, color, selling_price, qty, total_price) {
      var body = {
        id: id,
        p_id: p_id,
        date: date,
        brand: brand,
        product_type: product_type,
        product_title: product_title,
        color: color,
        selling_price: selling_price,
        qty: qty,
        total_price: total_price
      }
      $scope.cart.push(angular.copy(body));
      window.localStorage.setItem('POCart', JSON.stringify($scope.cart));
    };
    $scope.removeItemWTS = function (item) {
      var index = $scope.cart.indexOf(item);
      $scope.cart.splice(index, 1);
    };
    $scope.viewPO = function (id) {
      $location.path('/purchase_order');
    };
    $scope.clientByIdPO = function () {
      var client = window.localStorage.getItem('wtsClientId');
      $http.get(baseURL + 'clientsDetailsById/' + client).success(function (res) {
        $scope.clientDetails = res;
        $scope.clientDetails.shipto = {
          shiptocompanyName: 'Evergo Logistics(Hong Kong) Limited',
          shiptoAddress: 'Flat E & F, 11/F, Wah Lik Industrial Centre, 459-469 Castle Peak Road, Tsuen Wan, N.T',
          shiptoNumber: '+6592408380',
          shiptoMail: 'sales@fountaintechies.com'
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.updateclientByIdPO = function (clientDetails, amount, btsHistory) {
      var id = window.localStorage.getItem('wtsClientId');
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      var inc_shipno = curr_date + "" + d.getHours() + "" + d.getMinutes() + "" + d.getSeconds() + "" + d.getMilliseconds();
      clientDetails.date = date;
      clientDetails.inc_shipno = inc_shipno;
      clientDetails.btsHistory = btsHistory;
      clientDetails.amount = amount;
      $http.post(baseURL + 'purchaseOrderlist/' + id, clientDetails).success(function (res) {
        if (res.status == true) {
          $scope.updatemsg = res.message;
          $scope.showupdatemsg = true;
          $timeout(function () {
            $location.path('/purchaseOrder');
          }, 3000);
        } else {
          $scope.errmsg = res.message;
          $scope.showerrmsg = true,
            $timeout(function () {
              $scope.showerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    // update PO status
    $scope.updatePOStatus = function (status, id) {
      var body = {
        status: status,
        id: id,
      }
      $http.post(baseURL + 'changePOstatus/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.poDetails = function () {
      var id = window.localStorage.getItem('wtsClientId');
      $http.get(baseURL + 'poProduct/' + id).success(function (res) {
        $scope.AllbtsHistory = res;
      }).error(function (error) {
        console.log(error);
      })
    };
    $scope.redirectViewPO = function (po_no, client_id) {
      $location.path('/view-PO');
      window.localStorage.setItem('POno', po_no);
      window.localStorage.setItem('POcid', client_id);
    };
    $scope.redirectPOpacking = function (po_no, client_id) {
      $location.path('/Incoming-Packing');
      window.localStorage.setItem('POno', po_no);
      window.localStorage.setItem('POcid', client_id);
      console.log(po_no);
    }
    $scope.viewPODetails = function () {
      var po_no = window.localStorage.getItem('POno');
      var client_id = window.localStorage.getItem('POcid');
      $http.get(baseURL + 'viewPODetail/' + po_no + '/' + client_id).success(function (res) {
        $scope.viewpurchaseorder = res;
        window.localStorage.removeItem('POno');
        window.localStorage.removeItem('POcid');
      }).error(function (err) {
        console.log(err);
      });
    };
    $scope.viewPOgrandprice = function () {
      var po_no = window.localStorage.getItem('POno');
      var client_id = window.localStorage.getItem('POcid');
      $http.get(baseURL + 'viewPOGrandPrice/' + po_no + '/' + client_id).success(function (res) {
        $scope.viewPOPrice = res;
        $timeout(function () {
          window.localStorage.removeItem('POno');
          window.localStorage.removeItem('POcid');
        }, 3000);
      }).error(function (err) {
        console.log(err);
      });
    };
    $scope.AllPOData = function () {
      var PO = localStorage.getItem('POCart');
      $scope.POdata = JSON.parse(PO);
    };
    $scope.getTotal = function () {
      var total = 0;
      for (var i = 0; i < $scope.POdata.length; i++) {
        total += parseFloat($scope.POdata[i].total_price);
      }
      return total;
    }
    // wtb Invoice Add cart
    $scope.wtbcart = [];
    $scope.addItemWTB = function (id, date, p_id, brand, product_type, product_title, colour, price, qty, total_price) {
      var body = {
        id: id,
        p_id: p_id,
        date: date,
        brand: brand,
        product_type: product_type,
        product_title: product_title,
        colour: colour,
        price: price,
        qty: qty,
        total_price: total_price
      }
      $scope.wtbcart.push(angular.copy(body));
      window.localStorage.setItem('InvoiceCart', JSON.stringify($scope.wtbcart));
    };
    $scope.removeItemWTB = function (item) {
      var index = $scope.wtbcart.indexOf(item);
      $scope.wtbcart.splice(index, 1);
    };
    $scope.viewInvoice = function (id) {
      $location.path('/invoice');
    };
    $scope.AllInvoiceData = function () {
      var Invoice = localStorage.getItem('InvoiceCart');
      $scope.Invoicedata = JSON.parse(Invoice);
    };
    $scope.getWTBTotal = function () {
      var total = 0;
      for (var i = 0; i < $scope.Invoicedata.length; i++) {
        total += parseFloat($scope.Invoicedata[i].total_price);
      }
      return total;
    }
    // invoice pdf
    $scope.invoiceExport = function () {
      html2canvas(document.getElementById('exportthis'), {
        letterRendering: 1, allowTaint: false, useCORS: true, onrendered: function (canvas) {
          var data = canvas.toDataURL('image/png');
          var docDefinition = {
            content: [{
              image: data,
              width: 500,
            }]
          };
          pdfMake.createPdf(docDefinition).download("Invoice.pdf");
        }
      });
    }
    // PO pdf
    $scope.poExport = function () {
      html2canvas(document.getElementById('exportthisSection'), {
        letterRendering: 1, allowTaint: false, useCORS: true, onrendered: function (canvas) {
          var data = canvas.toDataURL('image/png');
          var docDefinition = {
            content: [{
              image: data,
              width: 500,
            }]
          };
          pdfMake.createPdf(docDefinition).download("PO.pdf");
        }
      });

    }
    //  add staff
    $scope.addStaff = function (poForm, staff) {
      $http.post(baseURL + 'addStaffMember', staff).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            $timeout(function () {
              $scope.showaddpromsg = false;
              $location.path("/staff-list");
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

    // add support desk
    $scope.addSupport = function (support) {

      var date = new Date();
      console.log(date);
      support.date = date;
      $http.post(baseURL + 'addSupport', support).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true,
            $timeout(function () {
              $scope.showaddpromsg = false;
              $location.path("/Support");
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

    // orders group by
    // $scope.selectedOrders = function (select) {
    //   console.log("Selected Orders Function.......");
    //   const sdata = document.getElementById(select);
    //   if(sdata.value == 'gid')
    //   {
    //     const groupOrders = ['id','from_name','from_city','to_name','created_at','status'];
    //   }
    // for (var order in groupOrders) 
    // {
    //     if (groupOrders.hasOwnProperty(order)) 
    //     {
    //         var pair = groupOrders[order];
    //         var checkbox = document.createElement("input");
    //         checkbox.type = "checkbox";
    //         checkbox.name = pair;
    //         checkbox.value = pair;
    //         s2.appendChild(checkbox);
    //         var label = document.createElement('label')
    //         label.htmlFor = pair;
    //         label.appendChild(document.createTextNode(pair));
    //         s2.appendChild(label);
    //         s2.appendChild(document.createElement("br"));    
    //       }
    // }
    // }

    // all parcels list
    $scope.allParcels = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcels').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };

// parcels list of india

    $scope.allParcelsIndia = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcelsindia').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    }; 

    // parcels list of singapore

    $scope.allParcelsSingapore = function () {
      $scope.parcels = null;
      $http.get(baseURL + 'getparcelssingapore').success(function (res) {
        $scope.parcels = res.record;
        $scope.canReset = false
        $scope._selectedStatus = ''
        $scope._selectedStaff = ''
      }).error(function (error) {
        console.log(error);
      });
    };


    $scope.updateParcelDetails = function 
                        (id,packinglist,notes,from_name,from_country,from_address,from_address2,from_postal,
                        from_city,from_state,from_phone,from_email,weight,to_name,to_country,to_address,
                        to_address2,to_postal,to_city,to_state,to_phone,to_email,parcelValues) 
                        {

      var body = {
              id:id ,
              packinglist: packinglist,
              notes:notes,
              from_name:from_name,
              from_country:from_country,
              from_address:from_address,
              from_address2:from_address2,
              from_postal:from_postal,
              from_city:from_city,
              from_state:from_state,
              from_phone:from_phone,
              from_email:from_email,
              weight:weight,
              to_name:to_name,
              to_country:to_country,
              to_address:to_address,
              to_address2:to_address2,
              to_postal:to_postal,
              to_city:to_city,
              to_state:to_state,
              to_phone:to_phone,
              to_email:to_email,
              parcelValues:parcelValues,
        }
        console.log(body);
      $http.post(baseURL + 'updateParcelDetails/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getEmailInfo = function (){
      var getURL = window.location.href.slice(42);
      // var getURL = window.location.href.slice(37);
      getURL = getURL.replace(/=/g,'":"');
      getURL = getURL.replace(/&/g,'","');
      getURL = getURL.replace(/%20/g,' ');
      getURL = '{"'+ getURL+'"}' ;
      obj = JSON.parse(getURL);
      $scope.data = obj;
      console.log($scope.data);
    }

    $scope.sendMail2 = function (data) {
      var body = {
        email: data.email,
        subject: data.subject,
        message :data.message,
      }
      console.log(body);
    $http.post(baseURL + 'sendCustomEmail2/', body).success(function (res) {
      $timeout(function () {
        location.reload();
      }, 3000);
    }).error(function (error) {
      console.log(error);
    });
  };


    $scope.sendMail = function (data) {
        var body = {
          email: data.email,
          subject: data.subject,
          message :data.message,
          from_name : data.from_name,
        }
        console.log(body);
      $http.post(baseURL + 'sendCustomEmail/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

    // update parcels status
    $scope.updateWeight = function (weight,id) {
      console.log(id);
      console.log(weight);
        var body = {
          weight: weight,
          id:id ,
        }
        console.log(body);
      $http.post(baseURL + 'updateWeight/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

    // update parcels status
    $scope.updateParcel = function (data, id, type) {
      if (type && type == 'staff') {
        var body = {
          data: { assigned_to: data },
          id: id,
        }
      }
      else {
        var body = {
          data: { status: data },
          id: id,
        }
      }

      $http.post(baseURL + 'updateParcel/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.addTracking = function (trackForm, trackData) {
      trackData.booking_no = $scope.returnId();
      trackData.date.setHours(trackData.time.getHours());
      trackData.date.setMinutes(trackData.time.getMinutes())
      $http.post(baseURL + 'addParcelTracking/', trackData).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.downloadCSV = function () {
      // FUNCTION DOWNLOADS CSV
      var csv = Papa.unparse($scope.parcels)
      if (!csv) alert('No record to generate CSV.');
      openSaveFileDialog(csv, 'CSVFile.csv', 'text/csv')
    }

    function openSaveFileDialog(data, filename, mimetype) {

      if (!data) return;

      var blob = data.constructor !== Blob
        ? new Blob([data], { type: mimetype || 'application/octet-stream' })
        : data;

      if (navigator.msSaveBlob) {
        navigator.msSaveBlob(blob, filename);
        return;
      }

      var lnk = document.createElement('a'),
        url = window.URL,
        objectURL;

      if (mimetype) {
        lnk.type = mimetype;
      }

      lnk.download = filename || 'untitled';
      lnk.href = objectURL = url.createObjectURL(blob);
      lnk.dispatchEvent(new MouseEvent('click'));
      setTimeout(url.revokeObjectURL.bind(url, objectURL));

    }


    $scope.returnId = function () {
      var url = location.href;
      var url_param = url.split("parcelDetails/");
      var id = url_param[1];
      return id
    }

    $scope.getTrackingInfo = function () {
      $http.get(baseURL + 'getparcelTracking/' + $scope.returnId()).success(function (res) {
        $scope.parcelsTracking = res.record;
      }).error(function (error) {
        console.log(error);
      });
    }

    $scope.getDetails = function (id) {
      $scope.goto('parcelDetails/' + id)
    }

    $scope.filterParcels = function () {
      if (arguments[1]) {
        $scope.parcels = null;
        let _filter = arguments[1] ? ('?' + arguments[0] + '=' + arguments[1]) : ''
        let __filter = arguments[3] ? ('&' + arguments[2] + '=' + arguments[3]) : ''
        $http.get(baseURL + 'getCompletedParcel' + _filter + __filter).success(function (res) {
          $scope.canReset = true
          $scope.parcels = res.record;
        }).error(function (error) {
          console.log(error);
        });
      }
      else alert('Please select status')
    }

    $scope.allCompletedParcels = function (status) {
        $scope.parcels = null;
        $http.get(baseURL + 'getCompletedParcel?status=' + status).success(function (res) {
          $scope.canReset = true
          $scope.parcels = res.record;
        }).error(function (error) {
          console.log(error);
        });
    }

    //status wise parcels details function

    $scope.getStatusOpen = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusOpen').success(function (res) {
        $scope.canReset = true
        $scope.open = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusAir1 = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusAir1').success(function (res) {
        $scope.canReset = true
        $scope.air1 = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusAir2 = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusAir2').success(function (res) {
        $scope.canReset = true
        $scope.air2 = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusAir3 = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusAir3').success(function (res) {
        $scope.canReset = true
        $scope.air3 = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusAir4 = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusAir4').success(function (res) {
        $scope.canReset = true
        $scope.air4 = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusAir5 = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusAir5').success(function (res) {
        $scope.canReset = true
        $scope.air5 = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusBangShip = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusBangShip').success(function (res) {
        $scope.canReset = true
        $scope.bang = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusNet1 = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusNet1').success(function (res) {
        $scope.canReset = true
        $scope.net1 = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusNet2 = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusNet2').success(function (res) {
        $scope.canReset = true
        $scope.net2 = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusNet3 = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusNet3').success(function (res) {
        $scope.canReset = true
        $scope.net3 = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusNet4 = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusNet4').success(function (res) {
        $scope.canReset = true
        $scope.net4 = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusNet5 = function () {
      $scope.open = null;
      $http.get(baseURL + 'getStatusNet5').success(function (res) {
        $scope.canReset = true
        $scope.net5 = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusPayment = function () {
      $scope.payment = null;
      $http.get(baseURL + 'getStatusPayment').success(function (res) {
        $scope.canReset = true
        $scope.payment = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusPending = function () {
      $scope.pending = null;
      $http.get(baseURL + 'getStatusPending').success(function (res) {
        $scope.canReset = true
        $scope.pending = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusAssigned = function () {
      $scope.assigned = null;
      $http.get(baseURL + 'getStatusAssigned').success(function (res) {
        $scope.canReset = true
        $scope.assigned = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusPickCompleted = function () {
      $scope.pickcompleted = null;
      $http.get(baseURL + 'getStatusPickCompleted').success(function (res) {
        $scope.canReset = true
        $scope.pickcompleted = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusPune = function () {
      $scope.pune = null;
      $http.get(baseURL + 'getStatusPune').success(function (res) {
        $scope.canReset = true
        $scope.pune = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusSG = function () {
      $scope.SG = null;
      $http.get(baseURL + 'getStatusSG').success(function (res) {
        $scope.canReset = true
        $scope.SG = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusNet = function () {
      $scope.net = null;
      $http.get(baseURL + 'getStatusNet').success(function (res) {
        $scope.canReset = true
        $scope.net = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusKolkatta = function () {
      $scope.kolkatta = null;
      $http.get(baseURL + 'getStatusKolkatta').success(function (res) {
        $scope.canReset = true
        $scope.kolkatta = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusIntTran = function () {
      $scope.inttran = null;
      $http.get(baseURL + 'getStatusIntTran').success(function (res) {
        $scope.canReset = true
        $scope.inttran = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusDelWare = function () {
      $scope.delware = null;
      $http.get(baseURL + 'getStatusDelWare').success(function (res) {
        $scope.canReset = true
        $scope.delware = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusDomTran = function () {
      $scope.domtran = null;
      $http.get(baseURL + 'getStatusDomTran').success(function (res) {
        $scope.canReset = true
        $scope.domtran = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusDelivered = function () {
      $scope.delivered = null;
      $http.get(baseURL + 'getStatusDelivered').success(function (res) {
        $scope.canReset = true
        $scope.delivered = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusCompleted = function () {
      console.log('entered in function')
      $scope.completed = null;
      $http.get(baseURL + 'getStatusCompleted').success(function (res) {
        $scope.canReset = true
        $scope.completed = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusMedicine = function () {
      $scope.medicine = null;
      $http.get(baseURL + 'getStatusMedicine').success(function (res) {
        $scope.canReset = true
        $scope.medicine = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.getStatusCanceled = function () {
      $scope.canceled = null;
      $http.get(baseURL + 'getStatusCanceled').success(function (res) {
        $scope.canReset = true
        $scope.canceled = res.record;
        console.log(res);
      }).error(function (error) {
        console.log(error);
      });
    };

    //status wise parcels details function of singapore ends

       //status wise parcels details function of india starts

       $scope.ingetStatusOpen = function () {
        $scope.open = null;
        $http.get(baseURL + 'ingetStatusOpen').success(function (res) {
          $scope.canReset = true
          $scope.open = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusKunal1 = function () {
        $scope.open = null;
        $http.get(baseURL + 'ingetStatusKunal1').success(function (res) {
          $scope.canReset = true
          $scope.kunal1 = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };

      $scope.ingetStatusKunal2 = function () {
        $scope.open = null;
        $http.get(baseURL + 'ingetStatusKunal2').success(function (res) {
          $scope.canReset = true
          $scope.kunal2 = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };

      $scope.ingetStatusKunal3 = function () {
        $scope.open = null;
        $http.get(baseURL + 'ingetStatusKunal3').success(function (res) {
          $scope.canReset = true
          $scope.kunal3 = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };

      $scope.ingetStatusPayment = function () {
        $scope.payment = null;
        $http.get(baseURL + 'ingetStatusPayment').success(function (res) {
          $scope.canReset = true
          $scope.payment = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusPending = function () {
        $scope.pending = null;
        $http.get(baseURL + 'ingetStatusPending').success(function (res) {
          $scope.canReset = true
          $scope.pending = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusAssigned = function () {
        $scope.assigned = null;
        $http.get(baseURL + 'ingetStatusAssigned').success(function (res) {
          $scope.canReset = true
          $scope.assigned = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusPickCompleted = function () {
        $scope.pickcompleted = null;
        $http.get(baseURL + 'ingetStatusPickCompleted').success(function (res) {
          $scope.canReset = true
          $scope.pickcompleted = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusPune = function () {
        $scope.pune = null;
        $http.get(baseURL + 'ingetStatusPune').success(function (res) {
          $scope.canReset = true
          $scope.pune = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };

      $scope.ingetStatusSG = function () {
        $scope.SG = null;
        $http.get(baseURL + 'ingetStatusSG').success(function (res) {
          $scope.canReset = true
          $scope.SG = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };

      $scope.ingetStatusKunal = function () {
        $scope.kunal = null;
        $http.get(baseURL + 'ingetStatusKunal').success(function (res) {
          $scope.canReset = true
          $scope.kunal = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusKolkatta = function () {
        $scope.kolkatta = null;
        $http.get(baseURL + 'ingetStatusKolkatta').success(function (res) {
          $scope.canReset = true
          $scope.kolkatta = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusIntTran = function () {
        $scope.inttran = null;
        $http.get(baseURL + 'ingetStatusIntTran').success(function (res) {
          $scope.canReset = true
          $scope.inttran = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusDelWare = function () {
        $scope.delware = null;
        $http.get(baseURL + 'ingetStatusDelWare').success(function (res) {
          $scope.canReset = true
          $scope.delware = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusDomTran = function () {
        $scope.domtran = null;
        $http.get(baseURL + 'ingetStatusDomTran').success(function (res) {
          $scope.canReset = true
          $scope.domtran = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusDelivered = function () {
        $scope.delivered = null;
        $http.get(baseURL + 'ingetStatusDelivered').success(function (res) {
          $scope.canReset = true
          $scope.delivered = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusCompleted = function () {
        console.log('entered in function')
        $scope.completed = null;
        $http.get(baseURL + 'ingetStatusCompleted').success(function (res) {
          $scope.canReset = true
          $scope.completed = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusMedicine = function () {
        $scope.medicine = null;
        $http.get(baseURL + 'ingetStatusMedicine').success(function (res) {
          $scope.canReset = true
          $scope.medicine = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      $scope.ingetStatusCanceled = function () {
        $scope.canceled = null;
        $http.get(baseURL + 'ingetStatusCanceled').success(function (res) {
          $scope.canReset = true
          $scope.canceled = res.record;
          console.log(res);
        }).error(function (error) {
          console.log(error);
        });
      };
  
      //status wise parcels details function




      
    $scope.allPickupParcels = function (status) {
      $scope.parcels = null;
      $http.get(baseURL + 'getPickupparcels').success(function (res) {
        $scope.canReset = true
        $scope.parcels = res.record;
      }).error(function (error) {
        console.log(error);
      });
  }
 
    $scope.getparcelDetails = function () {
      var url = location.href;
      var url_param = url.split("/parcelDetails");
      var id = url_param[1];
      console.log(id)
      $http.get(baseURL + 'getparcelInfo' + id).success(function (res) {
        $scope.parcelsData = res.record;
        console.log("parcledetials", res)
      }).error(function (error) {
        console.log(error);
      });
      $http.get(baseURL + 'getSupportInfo' + id).success(function (res) {
        $scope.supportData = res.record;
        console.log("support detials", res)
      }).error(function (error) {
        console.log(error);
      });
      $http.get(baseURL + 'getActivityById' + id).success(function (res) {
        $scope.activity = res.record;
        console.log("Activity detials", res)
      }).error(function (error) {
        console.log(error);
      });
      $http.get(baseURL + 'getparcelHistory' + id).success(function (res) {
        $scope.parcelhistoryData = res.record;
        console.log("parcel history detials", res)
      }).error(function (error) {
        console.log(error);
      });
      $http.get(baseURL + 'getSupportNotes' + id).success(function (res) {
        $scope.supportnotesdata = res.record;
        console.log("parcel history detials", res)
      }).error(function (error) {
        console.log(error);
      });
      $http.get(baseURL + 'getPickupDrivers' + id).success(function (res) {
        $scope.pickupDrivers = res.record;
        console.log("parcel Pickup Driver detials", res)
      }).error(function (error) {
        console.log(error);
      });
      $http.get(baseURL + 'getDeliveryDrivers' + id).success(function (res) {
        $scope.deliveryDrivers = res.record;
        console.log("parcel Delivery Driver detials", res)
      }).error(function (error) {
        console.log(error);
      });
    }

    
    $scope.addParcelHistory = (overviewForm, overviewData) => {
      var url = location.href;
      var url_param = url.split("parcelDetails/");
      var id = url_param[1];
      overviewData.booking_no = id;
      console.log("data that are oing to sent", overviewData)
      overviewData.date.setHours(overviewData.time.getHours());
      overviewData.date.setMinutes(overviewData.time.getMinutes())
      console.log("ate time picker****", overviewData);
      $http.post(baseURL + 'addParcelHistory', overviewData).success(function (res) {
        if (res.status == true) {
          $scope.showaddovrmsg = true;
          $scope.addovrmsg = res.message;
          $timeout(() => {
            $scope.showaddovrmsg = false;
            location.reload();
          }, 2000);

        } else {
          $scope.showaddovremsg = true;
          $scope.addovremsg = "Parcel History Not added !";
          $timeout(() => {
            $scope.showaddovremsg = false;
            location.reload();
          }, 2000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };


    // all support list
    $scope.allSupport = function () {
      $http.get(baseURL + 'allSupportList').success(function (res) {
        $scope.desk = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // support status
    $scope.supportStatus = function () {
      $http.get(baseURL + 'getSuppStatus').success(function (res) {
        $scope.suppStatus = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // support status
    $scope.outgoingStatus = function () {
      $http.get(baseURL + 'getOutStatus').success(function (res) {
        $scope.outStatus = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // wts status
    $scope.supportWtsStatus = function () {
      $http.get(baseURL + 'getWtsStatus').success(function (res) {
        $scope.wtsStatus = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // get data by selected status
    $scope.selectedSuppStatus = function (team) {
      $http.get(baseURL + 'suppdataByStatus/' + team).success(function (res) {
        $scope.desk = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // get outgoing data by selected status
    $scope.selectedOutStatus = function (team) {
      $http.get(baseURL + 'outdataByStatus/' + team).success(function (res) {
        $scope.allShippinglist = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // get data by selected wts status
    $scope.selectedWTSStatus = function (status) {
      $http.get(baseURL + 'wtsdataByStatus/' + status).success(function (res) {
        $scope.wtsLists = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // add support notes by model
    $scope.addSuppModel = function (id, assign_to, req_user,booking_no) {
      window.localStorage.setItem('s_id', id);
      window.localStorage.setItem('assign', assign_to);
      window.localStorage.setItem('reqU', req_user);
      window.localStorage.setItem('booking_no', booking_no);
      console.log(id)
      console.log(assign_to)
      console.log(req_user)
      console.log(booking_no)
    };

    $scope.addSupportNotes = function (desk) {
      var mydata = {
        id: window.localStorage.getItem('s_id'),
        assign_to: window.localStorage.getItem('assign'),
        req_user: window.localStorage.getItem('reqU'),
        booking_no: window.localStorage.getItem('booking_no'),
      };
      desk.mydata = mydata;
      console.log(mydata)
      $http.post(baseURL + 'addSuppNotes', desk).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true;
          window.localStorage.removeItem('assign');
          window.localStorage.removeItem('s_id');
          window.localStorage.removeItem('reqU');
          window.localStorage.removeItem('booking_no');
          $timeout(function () {
            $scope.showaddpromsg = false;
            location.reload();
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
    // notes for parcels
    $scope.addNotes = function (id, assign_to, req_user) {
      window.localStorage.setItem('s_id', id);
      window.localStorage.setItem('assign', assign_to);
      window.localStorage.setItem('reqU', req_user);

    };
    $scope.addParcelsNotes = function (desk) {
      var mydata = {
        id: window.localStorage.getItem('s_id'),
        assign_to: window.localStorage.getItem('assign'),
        req_user: window.localStorage.getItem('reqU'),
      };
      desk.mydata = mydata;
      $http.post(baseURL + 'addParcelsNotes', desk).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true;
          window.localStorage.removeItem('assign');
          window.localStorage.removeItem('s_id');
          window.localStorage.removeItem('reqU');
          $timeout(function () {
            $scope.showaddpromsg = false;
            location.reload();
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


    // all support notes list
    $scope.allSupportNotes = function () {
      $http.get(baseURL + 'allSuppNotesList').success(function (res) {
        $scope.supportNotes = res;
        console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };

    //all support notes
    $scope.allParcelsNotes = function () {
      $http.get(baseURL + 'allParcelsNotesList').success(function (res) {
        $scope.parcelsNotes = res;
        console.log(res)
      }).error(function (error) {
        console.log(error);
      });
    };


    // update support status
    $scope.updateSupportStatus = function (status, id) {
      var body = {
        status: status,
        id: id,
      }
      $http.post(baseURL + 'updateSuppstatus/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };
    // update support Assign to
    $scope.updateSupportAssign = function (assign, id) {
      var body = {
        assign: assign,
        id: id,
      }
      $http.post(baseURL + 'updateSuppAssign/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };
    // update support department
    $scope.updateSupportDepart = function (department, id) {
      var body = {
        department: department,
        id: id,
      }
      $http.post(baseURL + 'updateSuppDepart/', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

    // date difference
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

    // date difference
    $scope.getDate = function (date) {
      $scope.time = new Date(date).getDate() + "/" + (new Date(date).getMonth() + 1) + '/' + new Date(date).getFullYear() + ':' + new Date(date).getHours() + ":" + new Date(date).getMinutes();
      console.log("scoper time", date)
      return $scope.time;
    }

    $scope.getDelivery = function (date) {
      var days = 15;
      var date = new Date(date);
      var res = date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      return $scope.getDate(res);
    }

    // delete support
    $scope.SuppDel = function (id) {
      window.localStorage.setItem('s_id', id);
    };
    $scope.confSuppDel = function () {
      var id = window.localStorage.getItem('s_id');
      $http.get(baseURL + 'removeSupport/' + id).success(function (res) {
        $timeout(function () {
          location.reload();
          window.localStorage.removeItem('s_id');
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    };

    //delete history
    $scope.HistoryDel = function (booking_no) {
      window.localStorage.setItem('h_id', booking_no);
    };
    $scope.confHistoryDel = function () {
      var booking_no = window.localStorage.getItem('h_id');
      console.log(booking_no)
      $http.get(baseURL + 'removeHistory/' + booking_no).success(function (res) {
        $timeout(function () {
          location.reload();
          window.localStorage.removeItem('h_id');
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    };

    //delete tracking
    $scope.TrackingDel = function (booking_no) {
      console.log(booking_no);
      window.localStorage.setItem('t_id', booking_no);
    };
    $scope.confTrackingDel = function () {
      console.log('t_id')
      var booking_no = window.localStorage.getItem('t_id');
      console.log(booking_no)
      $http.get(baseURL + 'removeTracking/' + booking_no).success(function (res) {
        $timeout(function () {
          location.reload();
          window.localStorage.removeItem('t_id');
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.removeparcel = function (id) {
      window.localStorage.setItem('s_id', id);
    };
    $scope.confremoveparcel = function () {
      var id = window.localStorage.getItem('s_id');
      $http.get(baseURL + 'removeparcel/' + id).success(function (res) {
        $timeout(function () {
          location.reload();
          window.localStorage.removeItem('s_id');
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.viewInvoiceDetails = function () {
      var inv_no = window.localStorage.getItem('InvNo');
      var client_id = window.localStorage.getItem('Invcid');
      $http.get(baseURL + 'viewInvDetails/' + inv_no + '/' + client_id).success(function (res) {
        $scope.viewInv = res;
      }).error(function (err) {
        console.log(err);
      });
    };
    $scope.getInvoiceById = function () {
      var inv_no = window.localStorage.getItem('InvNo');
      $http.get(baseURL + 'getInvoiceById/' + inv_no).success(function (res) {
        $scope.InvData = res;
      }).error(function (err) {
        console.log(err);
      });
    };
    $scope.resellerDetails = () => {
      var resellerId = window.localStorage.getItem('resellerid');
      $http.get(baseURL + 'clientById/' + id).then((res) => {
        $scope.resellerData = res.data;
        console.log($scope.resellerData);
      }).catch((err) => {
        console.log(err);
      })
    }
    $scope.getPackingListInvoiceById = function () {
      var shippNo = window.localStorage.getItem('shippNo');
      var resellerId = window.localStorage.getItem('resellerid');
      $http.get(baseURL + 'getPackingListInvoiceById/' + shippNo + '/' + resellerId).success(function (res) {
        $scope.InvData = res;
        $scope.shippingCost = res.reduce((sum, item) => {
          return sum + (item.qty * 5);
        }, 0)
        $scope.trackingNumber = res[0].trackingNumber;
      }).error(function (err) {
        console.log(err);
      });
    };
    $scope.directBuyOrderItems = function () {
      var shippNo = window.localStorage.getItem('shippNo');
      var resellerId = window.localStorage.getItem('resellerid');
      $http.get(baseURL + 'directBuyOrderItems/' + shippNo + '/' + resellerId).success(function (res) {
        $scope.orderItems = res;
        $scope.shippingCost = res.reduce((sum, item) => {
          return sum + (item.qty * 5);
        }, 0)
        $scope.trackingNumber = res[0].trackingNumber;
      }).error(function (err) {
        console.log(err);
      });
    };
    $scope.viewInvoicegrandprice = function () {
      var inv_no = window.localStorage.getItem('shippNo');
      $http.get(baseURL + 'viewInvGrandPrice/' + inv_no).success(function (res) {
        $scope.viewInvPrice = res;
      }).error(function (err) {
        console.log(err);
      });
    };
    // all staff
    $scope.allStaff = function () {
      $http.get(baseURL + 'allStaffList').success(function (res) {
        $scope.allstaff = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // edit staff
    $scope.editStaff = function (id) {
      $location.path('/edit_staff/' + id);
      window.localStorage.setItem('staff_id', id);
    };
    // staff by id
    $scope.staffById = function () {
      var id = window.localStorage.getItem('staff_id');
      $http.get(baseURL + 'staffById/' + id).success(function (res) {
        $scope.staffdata = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // update staff
    $scope.updateStaff = function (poForm, staffdata) {
      var id = window.localStorage.getItem('staff_id');
      $http.post(baseURL + 'updateStaffMember/' + id, staffdata).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              window.location.href = previousURL;
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
              window.location.href = previousURL;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    // delete staff
    $scope.staffDel = function (id) {
      window.localStorage.setItem('staff_id', id);
    };
    $scope.confirmDelStaff = function () {
      var id = window.localStorage.getItem('staff_id');
      $http.get(baseURL + 'removeStaff/' + id).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 2000);
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
              if (document.location.href == "http://localhost:6100/#/stock-product" || document.location.href == "https://portal.gadgetsinasia.com/#/stock-product"
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
    $scope.addPoints = function (credits, resellerId) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      credits.date = date;
      credits.id = resellerId;
      $http.post(baseURL + 'addPointsToResellerById', credits).success(function (res) {
        if (res.status == true) {
          $scope.respo = true;
          $scope.messageRespo = res.message;
          $timeout(function () {
            location.reload();
          }, 2000)
        }
      }).error(function (err) {
        console.log(err);
      });
    }
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
              if (document.location.href == "http://localhost:6100/#/stock-product" || document.location.href == "https://portal.gadgetsinasia.com/#/stock-product"
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
    // get All PO
    $scope.allPurchaseOurder = function () {
      $http.get(baseURL + 'getAllPO').success(function (res) {
        $scope.AllListPO = res;
      }).error(function (err) {
        console.log(err);
      });
    };
    $scope.invoicePdf = function () {
      html2canvas(document.getElementById('exportthis'), {
        letterRendering: 1, allowTaint: false, useCORS: true, onrendered: function (canvas) {
          var data = canvas.toDataURL('image/png');
          var docDefinition = {
            content: [{
              image: data,
              width: 500,
            }]
          };
          pdfMake.createPdf(docDefinition).download("Invoice.pdf");
        }
      });
    };

    $scope.purchaseOrderDel = function (id) {
      window.localStorage.setItem('purOr_id', id);
    };
    $scope.confirmPurchaseOrder = function () {
      var id = window.localStorage.getItem('purOr_id');
      $http.get(baseURL + 'removepoPurchaseOrder/' + id).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    };

    $scope.paymentdiscount = {
      discount: 'Payment: 10% Advance 90% Againts Inspection',
    }

    // advance price PO
    $scope.advancePOPrice = function (p_t, id, aprice) {
      $http.post(baseURL + 'poAdvancePrice/' + p_t + '/' + id + '/' + aprice).success(function (res) {
        if (res.status == true) {
          $scope.uppromsg = res.message;
          $scope.showuppromsg = true,
            $timeout(function () {
              $scope.showuppromsg = false;
              location.reload();
            }, 3000);
        } else {
          $scope.updateproerrmsg = res.message;
          $scope.showupdateproerrmsg = true,
            $timeout(function () {
              $scope.showupdateproerrmsg = false;
            }, 3000);
        }
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.dueAmount = function () {
      var id = window.localStorage.getItem('wtsLead_id');
      $http.post(baseURL + 'poDueAmount/' + id).success(function (res) {
        $scope.amount = res;
      }).error(function (error) {
        console.log(error);
      });
    };
    // update invoice items
    $scope.saveInvoiceItem = function (data, id) {
      var InvData = {
        data: data,
        id: id,
      }
      $http.post(baseURL + 'updateInvItem', InvData).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };
    $scope.statuses = [
      { value: 1, option: 'Pending' },
      { value: 2, option: 'Confirmed' },
      { value: 3, option: 'Goods Packed' },
      { value: 4, option: 'Ship to Client ' },
      { value: 5, option: 'Completed' },
      // {value: 6, option: 'Ship To Client'},
      // {value: 7, option: 'Order Confirmed  - Order is confirmed'},
      // {value: 8, option: 'Advance Payment Pending - Waiting for advance payment'},
      // {value: 8, option: 'Completed'}
    ];
    $scope.changeShipStatus = function (id, status) {
      var InvData = {
        status: status,
        id: id,
      }
      $http.post(baseURL + 'updateShipStatus', InvData).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    }
    $scope.changeShipStatusForPackingOrders = function (id, status) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      var InvData = {
        status: status,
        id: id,
        date: date
      }
      $http.post(baseURL + 'changeShipStatusForPackingOrders', InvData).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    }
    // update shipping type
    $scope.Shiptypes = [
      { value: 1, text: 'Hold Goods In Our Warehouse' },
      { value: 2, text: 'Hold Goods In Our Warehouse But Do Not Add To Inventory' },
      { value: 3, text: 'Ship Items To Your Warehouse' },
    ];
    $scope.updateShippingC = function (invoiceNumber, shippingC, totalAmount) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;

      var InvData = {
        invoiceNumber: invoiceNumber,
        shippingC: shippingC,
        lastUpdatedDate: date,
        totalAmount: totalAmount
      }
      $http.post(baseURL + 'updateShippingC', InvData).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    }
    function currentDate() {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var date = curr_date + "-" + curr_month + "-" + curr_year;
      return date;
    }
    $scope.updateTrackingNumber = function (invoiceNumber, trackingNumber, client) {
      var date = currentDate();
      var body = {
        invoiceNumber: invoiceNumber,
        trackingNumber: trackingNumber,
        date: date,
        client: client
      }
      $http.post(baseURL + 'updateTrackingNumber', body).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 2000);
      }).error(function (error) {
        console.log(error);
      });
    }

    // Invoice Notes
    $scope.invoiceNotes = function (notes, id) {
      var d = new Date();
      var curr_date = d.getDate();
      var curr_month = d.getMonth() + 1;
      var curr_year = d.getFullYear();
      var h = d.getHours();
      var min = d.getMinutes();
      var date = curr_date + "-" + curr_month + "-" + curr_year + " " + "/" + " " + h + ':' + min;
      notes.date = date;
      notes.id = id;
      $http.post(baseURL + 'addInvoiceNotes', notes).success(function (res) {
        if (res.status == true) {
          $scope.addpromsg = res.message;
          $scope.showaddpromsg = true;
          $timeout(function () {
            location.reload();
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
    // wholesaller status
    $scope.ws_status = [
      { value: 1, option: 'Review - Needs To Be Reviewed' },
      { value: 2, option: 'Published - Shown on Website' },
      { value: 3, option: 'Sold Out - Goods Sold' },
      { value: 4, option: 'Reject - WTS Rejected' },
    ];
    // Wholeseller WTS status update
    $scope.changeWSWtsStatus = function (id, status) {
      var wsStatus = {
        status: status,
        id: id,
      }
      $http.post(baseURL + 'updateWSWtsStatus', wsStatus).success(function (res) {
        $timeout(function () {
          location.reload();
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    }
    $scope.redirectWSProducts = function (id) {
      $location.path('/WS-WTS-Products');
      window.localStorage.setItem('WsId', id);
    };
    $scope.viewWSWtsProList = function () {
      $http.get(baseURL + 'viewWSWtsProductList').success(function (res) {
        $scope.viewWSList = res;
      }).error(function (err) {
        console.log(err);
      });
    };
    $scope.wsWtsDel = function (id) {
      window.localStorage.setItem('ws_id', id);
    };
    $scope.confirmWsWTSDel = function () {
      var id = window.localStorage.getItem('ws_id');
      $http.get(baseURL + 'removeWSWTSOrder/' + id).success(function (res) {
        $timeout(function () {
          location.reload();
          window.localStorage.removeItem('ws_id');
        }, 3000);
      }).error(function (error) {
        console.log(error);
      });
    };

  });

 


