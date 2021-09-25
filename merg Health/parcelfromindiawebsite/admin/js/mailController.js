SampleApplicationModule
    .controller('mailController', function ($rootScope, $scope, $location, $http, store, $timeout, $routeParams, Upload) {
        $scope.goto = function (page) {
            $location.path(page);
        };
        $scope.tags=function(){
            $http.get(baseURL+"allTags").success(function(data){
                $scope.allTags=data;
            }).error(function(error){
                console.log("Error while getting tags");
            })
        }
       

        $scope.mailClients=function(data){
            var body={
                subject:data.sub,
                message:data.msz,
                tag:data.tag
            }
            console.log(body);
            $http.post(baseURL+"mail",body).success(function(data) {
                if(data.status=="success"){
                    $scope.message="Mail has been sent";
                    
                    $timeout(function () {
                        
                    }, 3000);
                    location.reload();
                }
                     
            }).error(function(error){
                console.log("error while sending mail");
            });         
        }
 
    });





