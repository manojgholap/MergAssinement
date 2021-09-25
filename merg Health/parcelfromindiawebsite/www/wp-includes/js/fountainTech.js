'use strict';
var app = angular.module('myApp', ['angularPayments']);
//    app.config(['storeProvider', function(storeProvider) {
//        storeProvider.setStore('sessionStorage');
//    }]);
// this is a small change
app.controller('contactus', function($scope, $http,$window,$location,$sce, $timeout) {	
var business_id='12';
if(document.location.hostname == "parcelfromindia.com" || document.location.hostname == "www.parcelfromindia.com"){
		var baseurl = "https://api.fountaintechies.com/api/";
		console.log(baseurl);
	} 
	else{
		// var baseurl = "https://api.fountaintechies.com/api/";
	 	 var baseurl = "http://localhost:2000/api/" ;
	}

$scope.data={
		name:"",
		email:"",
		phone:"",
		subject:"",
		message:"",
}

angular.element(document.querySelector("#apps")).removeClass("showMsg");
$scope.contactUS = function (code, result) {
	
		if($scope.data.name==="")
		{
			  	//angular.element(document.querySelector(".in_name")).addClass("has-error");
			  	 $scope.myForm.name.$invalid=true;
			  	 $scope.myForm.name.$pristine=false;
				  /* console.log($scope.myForm.f_name.$invalid);  */
    		 }
    		 if($scope.data.email==="")
    		 {
//    		angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.email.$invalid=true;
    			 $scope.myForm.email.$pristine=false;
    		 }
    		 if($scope.data.phone==="")
    		 {
//    		 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.phone.$invalid=true;
    			 $scope.myForm.phone.$pristine=false;
			 }
			 if($scope.data.subject==="")
    		 {
//    		 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.subject.$invalid=true;
    			 $scope.myForm.subject.$pristine=false;
    		 }
    		 if($scope.data.message==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.message.$invalid=true;
    			 $scope.myForm.message.$pristine=false;
			 }
			 
			 if($scope.data.name=="" && $scope.data.email=="" && $scope.data.phone=="" && $scope.data.last_name=="" && $scope.data.message=="")
    		{
    			 $scope.msg=false;
    			 $scope.msg1=true;
					 $scope.message1 = "Please fill required field."
				}
			else 
				{
				
			  console.log("API Call");
			
					if($scope.data.name!="" && $scope.data.email!="" && $scope.data.phone!=""  && $scope.data.message!="")
					{
					 $scope.data.business_id=business_id;
					 console.log(baseurl);
					 console.log($scope.data);
					 $http.post(baseurl+"simplecontact" ,$scope.data).success(function(res) {
					 
					   $scope.response = res;
					   console.log(res);
						  $scope.formhide=true;
						  $scope.msg1=true;
						   $scope.message = "Thank you for contacting us.Our Team will contact you real soon." ;
						   $scope.data={
								  name:"",
								  email:"",
								  phone:"",
								  subject:"",
								  message:"",
							 }
						   $scope.myForm.$setPristine();
  
					 }).error(function() {
						   // alert("Please check your internet connection or data source..");
					 });
					}
  
  
			}



	 }
	 $scope.getTracking = function(booking_no) {
		console.log("hhhhhhhhhhhhhhhhhhhhhhhhh");

		$http.get(baseurl + 'getparcelTracking/'+booking_no).success(function (res) {
			$scope.parcelsTracking = res.record;
			$scope.parceldata = res.parcel;
			$scope.showTrackTable  = true
			console.log("parcel data is ",$scope.parceldata)
		}).error(function (error) {
			console.log(error);
		});
	}

	$scope.showTrackTable = false

function addZero(num) {
	return ( num <  10 ? ("0" + num) : num )
}


$scope.submitSupport = function(data) {
	console.log("dhjdhfd hdfdjhf dhfdjhfj")
	$http.post(baseurl+"addSupport" ,data).success(function(res) {
		$scope.parcelsTracking = res.record;
		$scope.parceldata = res.parcel;
		$scope.showTrackTable  = true
		console.log("parcel data is ",$scope.parceldata)
		$scope.data = { 
			message : "",
			booking_no :"",
			name : "",
			email : "", 
			phone : "",
			subject :"",
		}
		$scope.myForm.$setPristine();
	}).error(function (error) {
		console.log(error);
	});
}


$scope.getDelivery = function (date) {
	var days = 15;
	var date = new Date(date);
	var res = date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	return $scope.getDate(res);
}
	 // date difference
	 $scope.getDate = function (date) {
		$scope.time =  addZero(new Date(date).getDate())+"/"+addZero(new Date(date).getMonth()+1)+'/'+addZero(new Date(date).getFullYear())+':'+addZero(new Date(date).getHours())+":"+ addZero(new Date(date).getMinutes());
		return $scope.time;
	}

	 $scope.booking = function (code, result) {
		
		
		if($scope.data.from_name==="")
    		 {
				 
  			//  angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_name.$invalid=true;
				 $scope.myForm.from_name.$pristine=false;
				/* console.log($scope.myForm.f_name.$invalid);  */
    		 }
    		 
    		 if($scope.data.from_country==="")
    		 {
    			//  angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_country.$invalid=true;
    			 $scope.myForm.from_country.$pristine=false;
    		 }
    		 if($scope.data.from_address==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_address.$invalid=true;
    			 $scope.myForm.from_address.$pristine=false;
			 }
			 if($scope.data.from_address2==="")
    		 {
//    			
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_address2.$invalid=true;
    			 $scope.myForm.from_address2.$pristine=false;
    		 }
    		 if($scope.data.from_postal==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_postal.$invalid=true;
    			 $scope.myForm.from_postal.$pristine=false;
			 }
			 if($scope.data.from_city==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_city.$invalid=true;
    			 $scope.myForm.from_city.$pristine=false;
			 }
			 if($scope.data.from_state==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_state.$invalid=true;
    			 $scope.myForm.from_state.$pristine=false;
			 }
			 if($scope.data.from_phone==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_phone.$invalid=true;
    			 $scope.myForm.from_phone.$pristine=false;
			 }
			 if($scope.data.from_email==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_email.$invalid=true;
    			 $scope.myForm.from_email.$pristine=false;
			 }

			 if($scope.data.to_name==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_name.$invalid=true;
    			 $scope.myForm.to_name.$pristine=false;
			 }
			 if($scope.data.to_country==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_country.$invalid=true;
    			 $scope.myForm.to_country.$pristine=false;
			 }
			 if($scope.data.to_address==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_address.$invalid=true;
    			 $scope.myForm.to_address.$pristine=false;
			 }
			 if($scope.data.to_address2==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_address2.$invalid=true;
    			 $scope.myForm.to_address2.$pristine=false;
			 }
			 if($scope.data.to_postal==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_postal.$invalid=true;
    			 $scope.myForm.to_postal.$pristine=false;
			 }
			 if($scope.data.to_city==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_city.$invalid=true;
    			 $scope.myForm.to_city.$pristine=false;
			 }
			 if($scope.data.to_state==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_state.$invalid=true;
    			 $scope.myForm.to_state.$pristine=false;
			 }
			 if($scope.data.to_phone==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_phone.$invalid=true;
    			 $scope.myForm.to_phone.$pristine=false;
			 }
			 if($scope.data.to_email==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_email.$invalid=true;
    			 $scope.myForm.to_email.$pristine=false;
			 }
			 if($scope.data.weight==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.weight.$invalid=true;
    			 $scope.myForm.weight.$pristine=false;
			 }
			 if($scope.data.boxess==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.boxess.$invalid=true;
    			 $scope.myForm.boxess.$pristine=false;
			 }
			 if($scope.data.parcelValues==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.parcelValues.$invalid=true;
    			 $scope.myForm.parcelValues.$pristine=false;
			 }
			 if($scope.data.packinglist==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.packinglist.$invalid=true;
    			 $scope.myForm.packinglist.$pristine=false;
			 }
			 if($scope.data.notes==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.notes.$invalid=true;
    			 $scope.myForm.notes.$pristine=false;
			 }
			 
			//  if($scope.data.name=="" && $scope.data.email=="" && $scope.data.phone=="" && $scope.data.last_name=="" && $scope.data.message=="")
			if($scope.data.form_name=="")
    		{

    			 $scope.msg=false;
    			 $scope.msg1=true;
				   $scope.message1 = "Please fill required field."
				  
			}

			else 
			{
				
			  console.log("API Call");
			
					if($scope.data.from_name!="")
					{
					 $scope.data.business_id=business_id;
					 console.log(baseurl);
					 console.log($scope.data);
					 $http.post(baseurl+"addParcels" ,$scope.data).success(function(res) {
					 
					   $scope.response = res;
					   console.log(res);
						  $scope.formhide=true;
						  $scope.msg1=true;
							let weight = $scope.data.weight
						   $scope.message = "Thank you for contacting us.Our Team will contact you real soon." ;
						   $scope.data={
							from_name:"",
							from_country:"",
							from_address:"",
							from_address2:"",
							from_postal:"",
							from_city:"",
							from_state:"",
							from_phone:"",
							from_email:"",

							to_name:"",
							to_country:"",
							to_address:"",
							to_address2:"",
							to_postal:"",
							to_city:"",
							to_state:"",
							to_phone:"",
							to_email:"",

							weight:"",
							boxess:"",
							packinglist:"",
							values:"",
							notes:"",
							owner:"",
							currentWeight:weight,
							orderId:res.record.insertId
							 }
						   $scope.myForm.$setPristine();
							 console.log("gghgh",weight,res)
							 localStorage.setItem('weight',weight)
							 localStorage.setItem('orderId',res.record.insertId)
							 window.location = '/response.html';
					 }).error(function() {
						   // alert("Please check your internet connection or data source..");
					 });
					}
  
			}
	 }

$scope.getDelivery = function (date) {
	var days = 15;
	var date = new Date(date);
	var res = date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	return $scope.getDate(res);
}
	 // date difference
	 $scope.getDate = function (date) {
		$scope.time =  addZero(new Date(date).getDate())+"/"+addZero(new Date(date).getMonth()+1)+'/'+addZero(new Date(date).getFullYear())+':'+addZero(new Date(date).getHours())+":"+ addZero(new Date(date).getMinutes());
		return $scope.time;
	}

	 $scope.oxybooking = function (code, result) {
		
		
		if($scope.data.from_name==="")
    		 {
				 
  			//  angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_name.$invalid=true;
				 $scope.myForm.from_name.$pristine=false;
				/* console.log($scope.myForm.f_name.$invalid);  */
    		 }
    		 
    		 if($scope.data.from_country==="")
    		 {
    			//  angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_country.$invalid=true;
    			 $scope.myForm.from_country.$pristine=false;
    		 }
    		 if($scope.data.from_address==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_address.$invalid=true;
    			 $scope.myForm.from_address.$pristine=false;
			 }
			 if($scope.data.from_address2==="")
    		 {
//    			
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_address2.$invalid=true;
    			 $scope.myForm.from_address2.$pristine=false;
    		 }
    		 if($scope.data.from_postal==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_postal.$invalid=true;
    			 $scope.myForm.from_postal.$pristine=false;
			 }
			 if($scope.data.from_city==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_city.$invalid=true;
    			 $scope.myForm.from_city.$pristine=false;
			 }
			 if($scope.data.from_state==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_state.$invalid=true;
    			 $scope.myForm.from_state.$pristine=false;
			 }
			 if($scope.data.from_phone==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_phone.$invalid=true;
    			 $scope.myForm.from_phone.$pristine=false;
			 }
			 if($scope.data.from_email==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.from_email.$invalid=true;
    			 $scope.myForm.from_email.$pristine=false;
			 }

			 if($scope.data.to_name==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_name.$invalid=true;
    			 $scope.myForm.to_name.$pristine=false;
			 }
			 if($scope.data.to_country==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_country.$invalid=true;
    			 $scope.myForm.to_country.$pristine=false;
			 }
			 if($scope.data.to_address==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_address.$invalid=true;
    			 $scope.myForm.to_address.$pristine=false;
			 }
			 if($scope.data.to_address2==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_address2.$invalid=true;
    			 $scope.myForm.to_address2.$pristine=false;
			 }
			 if($scope.data.to_postal==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_postal.$invalid=true;
    			 $scope.myForm.to_postal.$pristine=false;
			 }
			 if($scope.data.to_city==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_city.$invalid=true;
    			 $scope.myForm.to_city.$pristine=false;
			 }
			 if($scope.data.to_state==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_state.$invalid=true;
    			 $scope.myForm.to_state.$pristine=false;
			 }
			 if($scope.data.to_phone==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_phone.$invalid=true;
    			 $scope.myForm.to_phone.$pristine=false;
			 }
			 if($scope.data.to_email==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.to_email.$invalid=true;
    			 $scope.myForm.to_email.$pristine=false;
			 }
			 if($scope.data.weight==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.weight.$invalid=true;
    			 $scope.myForm.weight.$pristine=false;
			 }
			 if($scope.data.boxess==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.boxess.$invalid=true;
    			 $scope.myForm.boxess.$pristine=false;
			 }
			 if($scope.data.packinglist==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.packinglist.$invalid=true;
    			 $scope.myForm.packinglist.$pristine=false;
			 }
			 if($scope.data.notes==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.notes.$invalid=true;
    			 $scope.myForm.notes.$pristine=false;
			 }
			 
			//  if($scope.data.name=="" && $scope.data.email=="" && $scope.data.phone=="" && $scope.data.last_name=="" && $scope.data.message=="")
			if($scope.data.form_name=="")
    		{

    			 $scope.msg=false;
    			 $scope.msg1=true;
				   $scope.message1 = "Please fill required field."
				  
			}

			else 
			{
				
			  console.log("API Call");
			
					if($scope.data.from_name!="")
					{
					 $scope.data.business_id=business_id;
					 console.log(baseurl);
					 console.log($scope.data);
					 $http.post(baseurl+"oxygenShipping" ,$scope.data).success(function(res) {
					 
					   $scope.response = res;
					   console.log(res);
						  $scope.formhide=true;
						  $scope.msg1=true;
							let weight = $scope.data.weight
						   $scope.message = "Thank you for contacting us.Our Team will contact you real soon." ;
						   $scope.data={
							from_name:"",
							from_country:"",
							from_address:"",
							from_address2:"",
							from_postal:"",
							from_city:"",
							from_state:"",
							from_phone:"",
							from_email:"",

							to_name:"",
							to_country:"",
							to_address:"",
							to_address2:"",
							to_postal:"",
							to_city:"",
							to_state:"",
							to_phone:"",
							to_email:"",

							weight:"",
							boxess:"",
							packinglist:"",
							notes:"",
							currentWeight:weight,
							orderId:res.record.insertId
							 }
						   $scope.myForm.$setPristine();
							 console.log("gghgh",weight,res)
							 localStorage.setItem('weight',weight)
							 localStorage.setItem('orderId',res.record.insertId)
							 window.location = '/oxygenResponse.html';
					 }).error(function() {
						   // alert("Please check your internet connection or data source..");
					 });
					}
			}
	 }
});