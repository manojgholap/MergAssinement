SampleApplicationModule.controller('SuperCategoryController', function($rootScope, $scope, $location, $http, store, $timeout, $routeParams) {
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
        $http.get(baseURL + 'supercategoriesbybusinessid/' + $scope.businessSession.business_id).success(function(res) {
            console.log(res);
        	$scope.superCategory = res;
        }).error(function(error) {
            console.log("Error getting category for business", error);
        });
    };
  $scope.allcategorybyBusinessId();

    $scope.del = function(id) {
        $http.get(baseURL + 'deletesupercategory/' + id).success(function(res) {
            if (res.status === true) {
                $scope.showdeletemsgmsg = true;
                $timeout(function() {
                    $scope.showdeletemsgmsg = false;
                }, 3000);
                $location.path('/supercategory');
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

    
    $scope.addSuperCategory = function(categoryform, category) {
    	
        if (categoryform.$valid) {
            $http.post(baseURL + 'addsupercategory', $scope.category).success(function(res) {
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
                        $location.path("/supercategory");
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
        $location.path('/edit_super_category/' + id);
    };

    $scope.categorydata = function(id) {
        $location.path('/view_super_category/' + id);
    };

    var id = $routeParams.id;
    if (id) {
        $http.get(baseURL + 'getsupercategorybyID/' + id).success(function(res) {
            $scope.categorydata = res;
        }).error(function() {
            console.log("Please check your internet connection or data source..");
        });
    }

    $scope.editCategory = function(editcatform) {
        if (editcatform.$valid) {
            $scope.categorydata.business_id = $scope.businessSession.business_id;
            $http.post(baseURL + 'updateSuperCategory', $scope.categorydata).success(function(res) {
                if (res.status === true) {
                    $scope.updatecatmsg = 'category updated';
                    $scope.showupdatecatmsg = true;
                    $timeout(function() {
                        $scope.showupdatecatmsg = false;
                        $location.path("/supercategory");
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

});
