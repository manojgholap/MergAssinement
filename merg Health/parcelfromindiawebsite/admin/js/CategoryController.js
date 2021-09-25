SampleApplicationModule.controller('CategoryController', function($rootScope, $scope, $location, $http, store, $timeout, $routeParams) {
    $scope.init = function() {
        $scope.businessSession = store.get('businessSession') || {};
    };
    $scope.init(); 

    $scope.category = {
        category_name: '',
        category_description: '',
        category_alias: '',
        business_id: $scope.businessSession.business_id
    };

    $scope.allcategorybyBusinessId = function() {
        $http.get(baseURL + 'categoriesbybusinessid/' + $scope.businessSession.business_id).success(function(res) {
            console.log(res);
            $scope.Category = res;
        }).error(function(error) {
            console.log("Error getting category for business", error);
        });
    };
  $scope.allcategorybyBusinessId();

    $scope.del = function(id) {
        $http.get(baseURL + 'deletecategory/' + id).success(function(res) {
            if (res.status === true) {
                $scope.deletemsg = 'category deleted';
                $scope.showdeletemsgmsg = true;
                $timeout(function() {
                    $scope.showdeletemsgmsg = false;
                }, 3000);
                $location.path('/category');
                $scope.allcategorybyBusinessId();
            } else {
                $scope.deleterrmsg = 'category not deleted';
                $scope.showdeleterrmsg = true;
                $timeout(function() {
                    $scope.showdeleterrmsg = false;
                }, 3000);
            }
        }).error(function() {
            console.log("Please check your internet connection or data source..");
        });
    };

    $scope.confirmcatdel = function(category_id) {
        $scope.categoryid = category_id;
    };

    $scope.addCategory = function(categoryform, category) {
        if (categoryform.$valid) {
            $http.post(baseURL + 'addcategory', $scope.category).success(function(res) {
                $scope.response = res;
                if (res.status === false) {
                    console.log(res.message);
                    $scope.addcaterrrmsg = res.message;
                    $scope.showaddcaterrrmsg = true;
                    $timeout(function() {
                        $scope.showaddcaterrrmsg = false;
                    }, 3000);
                } else {
                    $scope.addcatmsg = res.message;
                    $scope.showaddcatmsg = true;
                    $timeout(function() {
                        $scope.showaddcatmsg = false;
                        $location.path("/category");
                    }, 3000);
                }
            }).error(function(error) {
                console.log("error while adding category", error);
            });
        }
    };

    $scope.goto = function(page) {
        $location.path(page);
    };

    $scope.edit = function(id) {
        $location.path('/edit_category/' + id);
    };

    $scope.categorydata = function(id) {
        $location.path('/view_category/' + id);
    };

    var id = $routeParams.id;
    if (id) {
        $http.get(baseURL + 'singlecategory/' + id).success(function(res) {
            $scope.categorydata = res;
        }).error(function() {
            console.log("Please check your internet connection or data source..");
        });
    }

    $scope.editCategory = function(editcatform) {
        if (editcatform.$valid) {
            $scope.categorydata.business_id = $scope.businessSession.business_id;
            $http.post(baseURL + 'updateCategory', $scope.categorydata).success(function(res) {
                if (res.status === true) {
                    $scope.updatecatmsg = 'category updated';
                    $scope.showupdatecatmsg = true;
                    $timeout(function() {
                        $scope.showupdatecatmsg = false;
                        $location.path("/category");
                    }, 3000);
                } else {
                    $scope.updateerrcatmsg = 'category not updated';
                    $scope.showupdateerrcatmsg = true;
                    $timeout(function() {
                        $scope.showupdateerrcatmsg = false;
                    }, 3000);
                }
            }).error(function(error) {
                console.log("Error updating category", error);
            });
        }
    };

    $scope.showhide = function(id) {
        if (document.getElementById(id).style.display == 'none') {
            document.getElementById(id).style.display = 'block';
        } else {
            document.getElementById(id).style.display = 'none';
        }
    };

    //show all Product Categories
    $scope.categoryList = function () {
        $http.get(baseURL + 'getAllCategory').success(function (res) {
            $scope.category = res;
        }).error(function (error) {
            console.log(error);
        });
    };
    $scope.item = {
        'item_imagename': '',
        'item_image': ''
      };
      $scope.updateattachment = function () {
        var img = new Image();
        var newfile = document.getElementById("file_browse").files[0];
       // var fileDisplayArea = document.getElementById('fileDisplayArea');
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
    $scope.addProdCategory = function () {
        $location.path('/addCategory');
      };
      $scope.addNewCategory = function ( value) {
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1;
        var curr_year = d.getFullYear();
        var date = curr_date + "-" + curr_month + "-" + curr_year;
        value.date = date;
        value.item_image = $scope.item.item_image;
        value.item_imagename = $scope.item.item_imagename;
        // if (addProductForm.$valid) {
          $http.post(baseURL + 'createCategory', value).success(function (res) {
            window.localStorage.setItem('cate_id', res.insertId);
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
                $location.path("/categorylist");
              }, 3000);
            }
          }).error(function (error) {
            console.log("Add Category Form", error);
          });
        // }
      };
      $scope.getCategoryById = function () {
        var url = location.href;
        var url_param = url.split("editCategory/");
        var id = url_param[1];
        $http.get(baseURL + 'getProdCategoryById/' + id).success(function (res) {
          $scope.cate = res;
        }).error(function (error) {
          console.log(error);
        });
      };
      $scope.editcate = function (id) {
        $location.path('/editCategory/' + id);
      };
      $scope.editProdCategory = function (value,id) {
        var d = new Date();
        var curr_date = d.getDate();
        var curr_month = d.getMonth() + 1;
        var curr_year = d.getFullYear();
        var date = curr_date + "-" + curr_month + "-" + curr_year;
        value.id = id;
        value.date = date;
        value.item_image = $scope.item.item_image;
        value.item_imagename = $scope.item.item_imagename;
        // if (addProductForm.$valid) {
          $http.post(baseURL + 'editProdCategory', value).success(function (res) {
            // window.localStorage.setItem('cate_id', res.insertId);
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
                $location.path("/categorylist");
              }, 3000);
            }
          }).error(function (error) {
            console.log("Add Category Form", error);
          });
        // }
      };
    $scope.delCate = function (id) {
        window.localStorage.setItem('cate_id', id);
      };
      $scope.confirmDeleteCate = function () {
        var id = window.localStorage.getItem('cate_id');
        $http.get(baseURL + 'deleteProdCategory/' + id).success(function (res) {
          location.reload();
        });
      };

});
