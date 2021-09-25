SampleApplicationModule
    .controller('launchGadgetController', function($rootScope, $scope, $location, $http, store, $timeout, $routeParams , Upload) {

        
        $scope.init = function() {
            $scope.businessSession = store.get('businessSession') || {};
        };

        $scope.init();

        $scope.imageURL = imageURL;
        $scope.authorImageURL = authorImageURL;     

        $scope.allLaunchedGadgets = function() {
        	
            $http.get(baseURL + 'getlaunchedgadgets').success(function(res) {
            	console.log(res);
                $scope.launchedGadgets = res;
            }).error(function(error) {
                console.log("Error getting item for business", error);
            });
        };
        
               
        $scope.allLaunchedGadgets();


        $scope.del = function(id) {
            $http.get(baseURL + 'deleteLaunchGadget/' + id).success(function(res) {
            	console.log(res);
                if (res.status === true) {
                	$scope.allLaunchedGadgets();
                } else {
                    
                }
            }).error(function() {
                console.log("Please check your internet connection or data source..");
            });
        };

        $scope.confirmcatdel = function(id) {
            $scope.itemid = id;
        };

        

        $scope.addnews = function(itemform,news) {
        	itemform.$submitted = true;

            if (itemform.$valid) {      
        	    
            	console.log($scope.newsObject);
                $scope.item.colorobj = $scope.colorobj;
                $scope.item.itemsizeobj = $scope.itemsizeobj;
                $http.post(baseURL + 'addnews', $scope.newsObject).success(function(res) {
                    $scope.response = res;
                    if (res.status === false) {
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
                            $location.path("/news");
                        }, 3000);
                           
                    }
                                            
                }).error(function(error) {
                    console.log("error while adding item", error);
                });
            }
        };
              
        $scope.goto = function(page) {
            $location.path(page);
        };

        $scope.edit = function(id) {
            $location.path('/edit_news/' + id);
        };

        $scope.itemdata = function(id) {
            $location.path('/view_launchedgadget/' + id);
        };

        var id = $routeParams.id; 
        if (id) {

            $http.get(baseURL + 'getLaunchedGadgetByID/' + id).success(function(res) {
            	console.log(res);
                 $scope.gadget = res[0];
            }).error(function(error) {
                console.log("error getting single item", error);
            });
        }

        $scope.editnews = function(editcatform) {
               	
        	if (editcatform.$valid) {    
                $scope.itemdata.business_id = $scope.businessSession.business_id;
                              
                $http.post(baseURL + 'updateNews', $scope.newsObject).success(function(res) {
                    if (res.status === true) {
                        $scope.addcatmsg = 'News updated';
                        $scope.showaddcatmsg = true;
                        $timeout(function() {
                            $scope.showaddcatmsg = false;
                            $location.path("/news");
                            $scope.allnews();

                        }, 3000);
                    } else {
                        $scope.updateerrcatmsg = 'news not updated';
                        $scope.showupdateerrcatmsg = true;
                        $timeout(function() {
                            $scope.showupdateerrcatmsg = false;
                        }, 3000);
                    }
                }).error(function(error) {
                    console.log("Error updating news", error);
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

        $scope.updateattachment = function() {
            var img = new Image();
            var newfile = document.getElementById("file_browse").files[0];
            var fileDisplayArea = document.getElementById('fileDisplayArea');
            var imageType = /image.*/;
            if (newfile.type.match(imageType)) {
                var oFReader = new FileReader();
                oFReader.onload = function(oFREvent) {
                    $scope.attachname = document.getElementById("file_browse").files[0].name;
                    $scope.attachmentfile = oFReader.result;
                    $scope.item.item_imagename = $scope.attachname;
                    $scope.item.item_image = $scope.attachmentfile;
                    $scope.$apply();
                    img.src = $scope.attachmentfile;
                };
                oFReader.readAsDataURL(newfile);
            } else {}
        };
        
        $scope.addauthorimage = function() {
            var img = new Image();
            var newfile = document.getElementById("file_browse1").files[0];
            var fileDisplayArea = document.getElementById('fileDisplayArea');
            var imageType = /image.*/;
            if (newfile.type.match(imageType)) {
                var oFReader = new FileReader();
                oFReader.onload = function(oFREvent) {
                    $scope.attachname = document.getElementById("file_browse1").files[0].name;
                    $scope.attachmentfile = oFReader.result;
                    $scope.item.author_imagename = $scope.attachname;
                    $scope.item.author_image = $scope.attachmentfile;
                    $scope.$apply();
                    img.src = $scope.attachmentfile;
                };
                oFReader.readAsDataURL(newfile);
            } else {}
        };
        
        $scope.updateauthorimage = function() {
            var img = new Image();
            var newfile = document.getElementById("file_browse3").files[0];
            
            var fileDisplayArea = document.getElementById('fileDisplayArea');
            var imageType = /image.*/;
            if (newfile.type.match(imageType)) {
                var oFReader = new FileReader();
                oFReader.onload = function(oFREvent) {
                    $scope.attachname1 = document.getElementById("file_browse3").files[0].name;
                    $scope.attachmentfile1 = oFReader.result;
                    $scope.$apply();
                    var reqObj = {
                        'author_imagename': $scope.attachname1,
                        'author_pic': $scope.attachmentfile1,
                        'item_id': $scope.itemdata.item_id,
                        'business_id': $scope.itemdata.business_id
                    };
                    
                    console.log(reqObj);

                    $http.post(baseURL + 'updateauthorimage', reqObj).success(function(res) {
                        $scope.itemdata.author_imagename = res.imagename;
                        $scope.itemdata.author_pic = $scope.attachmentfile1;
                       
                    }).error(function(error) {
                        console.log("Error updating item image", error);
                    });
                    img.src = $scope.attachmentfile1;
                };
                oFReader.readAsDataURL(newfile);
            } else {}
        };


        $scope.updateattachment1 = function() {
            var img = new Image();
            var newfile = document.getElementById("file_browse2").files[0];
            var fileDisplayArea = document.getElementById('fileDisplayArea');
            var imageType = /image.*/;
            if (newfile.type.match(imageType)) {
                var oFReader = new FileReader();
                oFReader.onload = function(oFREvent) {
                    $scope.attachname1 = document.getElementById("file_browse2").files[0].name;
                    $scope.attachmentfile1 = oFReader.result;
                    $scope.$apply();
                    var reqObj = {
                        'item_imagename': $scope.attachname1,
                        'item_image': $scope.attachmentfile1,
                        'item_id': $scope.itemdata.item_id,
                        'business_id': $scope.itemdata.business_id
                    };

                    $http.post(baseURL + 'updateitemimage', reqObj).success(function(res) {
//                        $scope.itemdata.item_imagename = res.imagename;
                        $scope.itemdata.item_image = res.imagename;
//                        $scope.itemdata.item_image = $scope.attachmentfile1;
                        $scope.itemdata.item_image_data = $scope.attachmentfile1;
                       
                    }).error(function(error) {
                        console.log("Error updating item image", error);
                    });
                    img.src = $scope.attachmentfile1;
                };
                oFReader.readAsDataURL(newfile);
            } else {}
        };

  
  

    });
