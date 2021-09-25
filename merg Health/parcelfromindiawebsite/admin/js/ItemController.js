SampleApplicationModule
    .controller('itemController', function ($rootScope, $scope, $location, $http, store, $timeout, $routeParams, Upload) {


        $scope.init = function () {
            $scope.businessSession = store.get('businessSession') || {};
        };

        $scope.init();

        $scope.imageURL = imageURL;

        $scope.item = {
            'item_name': "",
            'item_description': "",
            'item_price': "",
            'item_imagename': "",
            'item_image': "",
            'item_category': "",
            'category_id': '',
            'business_id': $scope.businessSession.business_id
        };

        $scope.colorobj = [];
        $scope.itemsizeobj = [];
        $scope.findcategory = {};


        $scope.allitembyBusinessId = function () {
            $http.get(baseURL + 'portalitemsbybusinessid/' + $scope.businessSession.business_id).success(function (res) {
                $scope.items = res;
            }).error(function (error) {
                console.log("Error getting item for business", error);
            });
        };


        $scope.allitembyBusinessId();



        $scope.allcategorybyBusinessId = function () {
            $http.get(baseURL + 'categoriesbybusinessid/' + $scope.businessSession.business_id).success(function (res) {
                $scope.Category = res;
            }).error(function (error) {
                console.log("Error getting category for business", error);
            });
        };
        $scope.allcategorybyBusinessId();


        $scope.allcategorybyBusinessIdAcc = function () {
            $http.get(baseURL + 'categoriesbybusinessidAcc/' + $scope.businessSession.business_id).success(function (res) {
                $scope.CategoryAcc = res;
            }).error(function (error) {
                console.log("Error getting category for business", error);
            });
        };

        $scope.allcategorybyBusinessIdAcc();


        $scope.del = function (id) {
            $http.get(baseURL + 'deleteitem/' + id).success(function (res) {
                if (res.status === true) {
                    $scope.deletemsg = 'item deleted';
                    $scope.showdeletemsgmsg = true;
                    $timeout(function () {
                        $scope.showdeletemsgmsg = false;
                    }, 3000);
                    $location.path('/item');
                    $scope.allitembyBusinessId();
                } else {
                    $scope.deleterrmsg = 'item not deleted';
                    $scope.showdeleterrmsg = true;
                    $timeout(function () {
                        $scope.showdeleterrmsg = false;
                    }, 3000);
                }
            }).error(function () {
                console.log("Please check your internet connection or data source..");
            });
        };

        $scope.confirmcatdel = function (item_id) {
            $scope.itemid = item_id;
        };





        $scope.additem = function (itemform, item) {
            console.log(item);
            itemform.$submitted = true;
            if (itemform.$valid) {
                $http.post(baseURL + 'additem', $scope.item).success(function (res) {
                    $scope.response = res;
                    if (res.status === false) {
                        $scope.addcaterrrmsg = res.message;
                        $scope.showaddcaterrrmsg = true;
                        $timeout(function () {
                            $scope.showaddcaterrrmsg = false;
                        }, 3000);
                    } else {
                        $scope.addcatmsg = res.message;
                        $scope.showaddcatmsg = true;
                        $timeout(function () {
                            $scope.showaddcatmsg = false;
                            $location.path("/item");
                        }, 3000);

                    }

                }).error(function (error) {
                    console.log("error while adding item", error);
                });
            }
        };




        $scope.allitembyBusinessId1 = function () {
            $http.get(baseURL + 'portalitemsbybusinessid1/' + $scope.businessSession.business_id).success(function (res) {
                $scope.items1 = res;
            }).error(function (error) {
                console.log("Error getting item for business", error);
            });
        };
        $scope.allitembyBusinessId1();

        //add item1

        $scope.additem1 = function (itemform, item) {
            itemform.$submitted = true;
            if (itemform.$valid) {
                $http.post(baseURL + 'additem1', $scope.item).success(function (res) {
                    $scope.response = res;
                    if (res.status === false) {
                        $scope.addcaterrrmsg = res.message;
                        $scope.showaddcaterrrmsg = true;
                        $timeout(function () {
                            $scope.showaddcaterrrmsg = false;
                        }, 3000);
                    } else {
                        $scope.addcatmsg = res.message;
                        $scope.showaddcatmsg = true;
                        $timeout(function () {
                            $scope.showaddcatmsg = false;
                            $location.path("/item");
                        }, 3000);

                    }

                }).error(function (error) {
                    console.log("error while adding item", error);
                });
            }
        };

        //End add item1

        $scope.addfeatureditem = function (itemform, item) {
            itemform.$submitted = true;
            if (itemform.$valid) {
                $scope.item.colorobj = $scope.colorobj;
                $scope.item.itemsizeobj = $scope.itemsizeobj;
                $http.post(baseURL + 'addfeatureditem', $scope.item).success(function (res) {
                    $scope.response = res;
                    if (res.status === false) {
                        $scope.addcaterrrmsg = res.message;
                        $scope.showaddcaterrrmsg = true;
                        $timeout(function () {
                            $scope.showaddcaterrrmsg = false;
                        }, 3000);
                    } else {
                        $scope.addcatmsg = res.message;
                        $scope.showaddcatmsg = true;
                        $timeout(function () {
                            $scope.showaddcatmsg = false;
                            $location.path("/featured_item");
                        }, 3000);

                    }

                }).error(function (error) {
                    console.log("error while adding item", error);
                });
            }
        };

        $scope.goto = function (page) {
            $location.path(page);
        };

        $scope.edit = function (id) {
            $location.path('/edit_item/' + id);
        };

        $scope.edit1 = function (id) {
            $location.path('/edit_item1/' + id);
        };


        $scope.itemdata = function (id) {
            $location.path('/view_item/' + id);
        };

        var id = $routeParams.id;
        if (id) {

            $http.get(baseURL + 'getItemById/' + id).success(function (res) {
                $scope.itemdata = res;
                $scope.findcategory['category_id'] = res.category_id;
            }).error(function (error) {
                console.log("error getting single item", error);
            });
        }


        //portal mobiles

        $scope.edititem = function (editcatform, itemform1, itemform2, itemform3, itemform4, itemform5, itemform6, itemform7, itemform8, itemform9, itemform10) {

            itemform1.$submitted = true;
            itemform2.$submitted = true;
            itemform3.$submitted = true;
            itemform4.$submitted = true;
            itemform5.$submitted = true;
            itemform6.$submitted = true;
            itemform7.$submitted = true;
            itemform8.$submitted = true;
            itemform9.$submitted = true;
            itemform10.$submitted = true;

            if (editcatform.$valid && itemform1.$valid && itemform2.$valid && itemform3.$valid &&
                itemform4.$valid && itemform5.$valid && itemform6.$valid && itemform7.$valid &&
                itemform8.$valid && itemform9.$valid && itemform10.$valid) {
                $scope.itemdata.business_id = $scope.businessSession.business_id;
                $scope.itemdata.category_id = $scope.findcategory.category_id;


                $http.post(baseURL + 'updateitem', $scope.itemdata).success(function (res) {
                    if (res.status === true) {
                        $scope.updatecatmsg = 'item updated';
                        $scope.showupdatecatmsg = true;
                        $timeout(function () {
                            $scope.showupdatecatmsg = false;
                            $location.path("/item");
                            $scope.allitembyBusinessId();
                            $scope.allcategorybyBusinessId();

                        }, 3000);
                    } else {
                        $scope.updateerrcatmsg = 'item not updated';
                        $scope.showupdateerrcatmsg = true;
                        $timeout(function () {
                            $scope.showupdateerrcatmsg = false;
                        }, 3000);
                    }
                }).error(function (error) {
                    console.log("Error updating item", error);
                });
            }
        };




        //portal Accesories
        $scope.edititemAccessories = function () {
            $scope.itemdata.business_id = $scope.businessSession.business_id;
            $scope.itemdata.category_id = $scope.findcategory.category_id;


            $http.post(baseURL + 'updateitemAccesories', $scope.itemdata).success(function (res) {
                if (res.status === true) {
                    $scope.updatecatmsg = 'item updated';
                    $scope.showupdatecatmsg = true;
                    $timeout(function () {
                        $scope.showupdatecatmsg = false;
                        $location.path("/item1");
                        $scope.allitembyBusinessId();
                        $scope.allcategorybyBusinessId();

                    }, 3000);
                } else {
                    $scope.updateerrcatmsg = 'item not updated';
                    $scope.showupdateerrcatmsg = true;
                    $timeout(function () {
                        $scope.showupdateerrcatmsg = false;
                    }, 3000);
                }
            }).error(function (error) {
                console.log("Error updating item", error);
            });

        };


        $scope.allitembyBusinessId2 = function () {
            $http.get(baseURL + 'portalitemsbybusinessid2/' + $scope.businessSession.business_id).success(function (res) {
                $scope.itemdata = res;
            }).error(function (error) {
                console.log("Error getting item for business", error);
            });
        };
        $scope.allitembyBusinessId2();









        $scope.showhide = function (id) {
            console.log('showhide')
            if (document.getElementById(id).style.display == 'none') {
                document.getElementById(id).style.display = 'block';
            } else {
                document.getElementById(id).style.display = 'none';
            }
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
            } else { }
        };

        $scope.updateattachment1 = function () {
            var img = new Image();
            var newfile = document.getElementById("file_browse1").files[0];
            var fileDisplayArea = document.getElementById('fileDisplayArea');
            var imageType = /image.*/;
            if (newfile.type.match(imageType)) {
                var oFReader = new FileReader();
                oFReader.onload = function (oFREvent) {
                    $scope.attachname1 = document.getElementById("file_browse1").files[0].name;
                    $scope.attachmentfile1 = oFReader.result;
                    $scope.$apply();
                    var reqObj = {
                        'item_imagename': $scope.attachname1,
                        'item_image': $scope.attachmentfile1,
                        'item_id': $scope.itemdata.item_id,
                        'business_id': $scope.itemdata.business_id
                    };

                    $http.post(baseURL + 'updateitemimage', reqObj).success(function (res) {
                        //                        $scope.itemdata.item_imagename = res.imagename;
                        $scope.itemdata.item_image = res.imagename;
                        //                        $scope.itemdata.item_image = $scope.attachmentfile1;
                        $scope.itemdata.item_image_data = $scope.attachmentfile1;

                    }).error(function (error) {
                        console.log("Error updating item image", error);
                    });
                    img.src = $scope.attachmentfile1;
                };
                oFReader.readAsDataURL(newfile);
            } else { }
        };

        $scope.clearImage = function () {
            $scope.item.item_imagename = '';
            $scope.item.item_image = '';
        };


        $scope.clearEditImage = function () {
            $scope.itemdata.item_imagename = '';
            $scope.itemdata.item_image = '';
            $http.post(baseURL + 'removeitemimage', $scope.itemdata).success(function (res) { }).error(function (error) {
                console.log("Error removing item image", error);
            });
        };


        $scope.viewitemproperties = function (item) {
            $location.path('/viewitemproperties/' + item.item_id);
        }


        $scope.itemsdetails = {};

        $scope.gotoitemproperties = function () {
            $location.path('/itemproperties');
        }

        //get single items and ithes properties
        $scope.GerSingleItemProperties = function () {
            $http.get(baseURL + 'getsingleitem/' + $routeParams.item_id).success(function (res) {
                $scope.itemdetails = res[0];
                $http.get(baseURL + 'getItemPropByItemid/' + $routeParams.item_id).success(function (res) {
                    $scope.ItemPropertiesArray = res;
                    if ($scope.ItemPropertiesArray) {
                        $scope.colorarray = _.where($scope.ItemPropertiesArray, {
                            item_property: "color"
                        });
                        $scope.sizearray = _.where($scope.ItemPropertiesArray, {
                            item_property: "size"
                        });
                        $scope.colorImgarray = _.where($scope.ItemPropertiesArray, {
                            item_property: "colorimage"
                        });
                    }

                }).error(function (error) {
                    console.log("Error in getItemPropByItemid api");
                });
            }).error(function (error) {
                console.log("Error");
            });

        }



        if ($routeParams.item_id) {
            $scope.GerSingleItemProperties();
        }

        //get item properties list
        $scope.getitemproperties = function () {
            var business_id = $scope.businessSession.business_id;
            $http.get(baseURL + 'getitemproperties/' + business_id).success(function (res) {
                $scope.itemproperty = res;
                $scope.uniqueitemname = _.uniq(res, function (x) {
                    return x.item_id;
                });
            }).error(function (error) {
                console.log("Error removing item image", error);
            });
        };
        if ($scope.businessSession.business_id) {
            $scope.getitemproperties();
        }



        //add color for item
        var Itemctrl = this;
        Itemctrl.color = [];
        $scope.Imagefiles = {};

        $scope.additemProperties = function (additemPropertiesForm, item) {

            if (Itemctrl.color.length > 0) {
                var itempropdata = {
                    "item_id": item.item_id,
                    "business_id": $scope.businessSession.business_id,
                    "colorarray": Itemctrl.color,
                    "sizearray": Itemctrl.size
                }

                $http.post(baseURL + 'additempropertyByItemid', itempropdata).success(function (res) {
                    if (res.status == 1) {
                        $location.path('itemproperties');
                    } else {
                        console.log("Item properties not added");
                    }

                }).error(function (error) {
                    console.log("Error removing item image", error);
                });
            } else {

                if ($scope.file.length > 0) {

                    var files = [];
                    async.each($scope.file, function (image, nextimage) {
                        convertImgToBase64(image, function (response) {
                            var file = {
                                'file': response,
                                'type': 'image',
                                'item_property': 'colorimage',
                                'item_id': item.item_id,
                                'business_id': $scope.businessSession.business_id
                            };
                            files.push(file);

                            nextimage();
                        });
                    }, function done(error) {
                        $scope.Imagefiles.images = files;

                        $http.post(baseURL + 'additempropertyByItemid', $scope.Imagefiles).success(function (res1) {
                            console.log(res1)
                            if (res1.status == true) {
                                $location.path('itemproperties');
                            } else {
                                console.log("Item properties not added");
                            }

                        }).error(function (error) {
                            console.log("Error removing item image", error);
                        });

                    });

                    //  convert image to  base64
                    function convertImgToBase64(blob, callback) {
                        var reader = new window.FileReader();
                        reader.readAsDataURL(blob);
                        reader.onloadend = function () {
                            callback(reader.result);
                        };
                    }
                } else {
                    console.log("some select image colour or item code");
                }
            }

        }

        Itemctrl.addcolor = function () {
            if (Itemctrl.colorText != undefined && Itemctrl.colorText.length > 0) {
                Itemctrl.color.push({ color: Itemctrl.colorText, done: false });
                Itemctrl.colorText = '';
            }
        };

        Itemctrl.remaining = function () {
            var count = 0;
            angular.forEach(Itemctrl.color, function (colorname) {
                count += colorname.done ? 0 : 1;
            });
            return count;
        };

        Itemctrl.archive = function () {
            var oldTodos = Itemctrl.color;
            Itemctrl.color = [];
            angular.forEach(oldTodos, function (colorname) {
                if (!colorname.done) Itemctrl.color.push(colorname);
            });
        };

        //add size for item
        Itemctrl.size = [];

        Itemctrl.addsize = function () {
            if (Itemctrl.sizeText != undefined && Itemctrl.sizeText.length > 0) {
                Itemctrl.size.push({ size: Itemctrl.sizeText, done: false });
                Itemctrl.sizeText = '';
                console.log("Itemctrl.size:", Itemctrl.size);
            }
        };

        Itemctrl.sizecount = function () {
            var count1 = 0;
            angular.forEach(Itemctrl.size, function (sizem) {
                count1 += sizem.done ? 0 : 1;
            });
            return count1;
        };

        Itemctrl.archive1 = function () {
            var oldTodos1 = Itemctrl.size;
            Itemctrl.size = [];
            angular.forEach(oldTodos1, function (sizem) {
                if (!sizem.done) Itemctrl.size.push(sizem);
            });
        };

        //delete item properties
        $scope.DeleteItemPro = function () {
            $http.get(baseURL + 'deleteItemProperties/' + $scope.itemId).success(function (res) {
                if (res.status == 1) {
                    $scope.getitemproperties();
                } else {
                    console.log("Item properties not deleted");
                }
            }).error(function (error) {
                console.log("Error in deleteitem properties");
            })
        }

        $scope.ConfirmDelItemPro = function (id) {
            $scope.itemId = id;
        }

        $scope.gotoeditproperties = function (item_id) {
            $location.path('edititemproperty/' + item_id);
        }

        //delete single item properties
        $scope.deletesinglepro = function (propobj) {
            $http.get(baseURL + 'delSingleItemProperties/' + propobj.item_pro_id).success(function (res) {
                if (res.status == 1) {
                    $scope.GerSingleItemProperties();
                } else {
                    console.log("Item property not deleted");
                }
            }).error(function (error) {
                console.log("Error in deleteitem properties");
            })
        }

        //function for single item color
        $scope.AddItemcolor = function (AddItemcolorForm, colorinfo) {
            if (AddItemcolorForm.$valid) {
                var colordata = {
                    "business_id": $scope.businessSession.business_id,
                    "item_id": $routeParams.item_id,
                    "item_property": 'color',
                    "value": colorinfo.color
                }
                $http.post(baseURL + 'AddItemcolor', colordata).success(function (res) {
                    if (res.status == 1) {
                        $scope.Colorinfo = {};
                        $scope.AddItemcolorForm.$setPristine();
                        $scope.GerSingleItemProperties();
                    } else {
                        console.log("color not added");
                    }
                }).error(function (error) {
                    console.log("Error in Item color");
                });
            }

        }


        //function for single item size
        $scope.AddItemsize = function (AddItemsizeForm, sizeinfo) {
            if (AddItemsizeForm.$valid) {
                var sizeobj = {
                    "business_id": $scope.businessSession.business_id,
                    "item_id": $routeParams.item_id,
                    "item_property": 'size',
                    "value": sizeinfo.size
                }
                $http.post(baseURL + 'AddItemsize', sizeobj).success(function (res) {
                    if (res.status == 1) {
                        $scope.Sizeinfo = {};
                        $scope.AddItemsizeForm.$setPristine();
                        $scope.GerSingleItemProperties();
                    } else {
                        console.log("item size not added");
                    }
                }).error(function (error) {
                    console.log("Error in Item AddItemsize function");
                });
            }

        };

        $scope.deleteItemSingleColour = function (img) {
            console.log("img:", img);
            $http.post(baseURL + 'deleteitemcolorImage/', img).success(function (res) {
                if (res.status == true) {
                    $scope.GerSingleItemProperties();
                } else {
                    console.log("color image not deleted");
                }
            }).error(function () {
                console.log("Please check your internet connection or data source..");
            });
        };

        $scope.udpateIMGfile = {};
        $scope.UpdatedImagefiles = {};

        //function for upload new color images for item
        $scope.updatecolorImg = function () {

            console.log("udpateIMGfile:", $scope.udpateIMGfile);
            if ($scope.udpateIMGfile.length > 0) {
                var files = [];
                async.each($scope.udpateIMGfile, function (image, nextimage) {
                    convertImgToBase64(image, function (response) {
                        var file = {
                            'file': response,
                            'type': 'image',
                            'item_property': 'colorimage',
                            'item_id': $routeParams.item_id,
                            'business_id': $scope.businessSession.business_id
                        };
                        files.push(file);

                        nextimage();
                    });
                }, function done(error) {
                    $scope.UpdatedImagefiles.images = files;
                    $http.post(baseURL + 'uptitempropIMGByItemid', $scope.UpdatedImagefiles).success(function (res1) {
                        console.log(res1)
                        if (res1.status == true) {
                            $scope.GerSingleItemProperties();
                            $scope.udpateIMGfile = {};
                        } else {
                            console.log("Item properties not added");
                        }

                    }).error(function (error) {
                        console.log("Error removing item image", error);
                    });

                });

                //  convert image to  base64
                function convertImgToBase64(blob, callback) {
                    var reader = new window.FileReader();
                    reader.readAsDataURL(blob);
                    reader.onloadend = function () {
                        callback(reader.result);
                    };
                }
            }
        };

    });
