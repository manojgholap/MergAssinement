    'use strict';
    var app = angular.module('myApp', ['angularPayments']);
//    app.config(['storeProvider', function(storeProvider) {
//        storeProvider.setStore('sessionStorage');
//    }]);
    app.controller('contactus', function($scope, $http,$window,$location,$sce, $timeout) {
	 
		
    	var business_id='12';
    	  if(document.location.hostname == "sparksinasia.com" || document.location.hostname == "www.sparksinasia.com" || document.location.hostname == "www.fountaintechies.com"){
			var baseurl = "https://www.fountaintechies.com/api/";
			console.log(baseurl);
          } else{
			// var baseurl = "http://localhost:6099/api/" ;
			var baseurl = "https://www.fountainlogistics.com/api/" ;
          }
    	$scope.data={
				first_name:"",
				last_name:"",
          		email:"",
          		phone:"",
          		message:"",
			  }
			  
/*	$scope.friend="test to friend";  */

    	 angular.element(document.querySelector("#apps")).removeClass("showMsg");
    	 $scope.contactUS = function (code, result) {
    		 console.log($scope.data);
    		 if($scope.data.first_name==="")
    		 {
				 
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.f_name.$invalid=true;
				 $scope.myForm.f_name.$pristine=false;
				/* console.log($scope.myForm.f_name.$invalid);  */
    		 }
    		 if($scope.data.last_name==="")
    		 {
				
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.l_name.$invalid=true;
    			 $scope.myForm.l_name.$pristine=false;
    		 }
    		 if($scope.data.email==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.email.$invalid=true;
    			 $scope.myForm.email.$pristine=false;
    		 }
    		 if($scope.data.phone==="")
    		 {
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
    			 $scope.myForm.phone.$invalid=true;
    			 $scope.myForm.phone.$pristine=false;
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
			  

//    	  alert('calling the api');
    		      if($scope.data.first_name!="" && $scope.data.last_name!="" && $scope.data.email!="" && $scope.data.phone!=""  && $scope.data.message!="")
    		      {
                   $scope.data.business_id=business_id;
                   console.log($scope.data);
                   $http.post(baseurl + 'realestate',$scope.data).success(function(res) {
				   
                     $scope.response = res;
					 console.log(res);
					    $scope.formhide=true;
						$scope.msg1=true;
                     	$scope.message = "Thank you for contacting us.Our Team will contact you real soon." ;
                     	$scope.data={
                        		first_name:"",
                        		email:"",
                        		phone:"",
                        		last_name:"",
								message:"",
					   	}
                     	$scope.myForm.$setPristine();

                   }).error(function() {
                         // alert("Please check your internet connection or data source..");
                   });
				  }


    	  }
    	  }

///____________________END______________________


		  $scope.contactUS1 = function (code, result) {
			console.log($scope.data);
			if($scope.data.first_name==="")
			{
				
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
				$scope.myForm.f_name.$invalid=true;
				$scope.myForm.f_name.$pristine=false;
			   /* console.log($scope.myForm.f_name.$invalid);  */
			}
			if($scope.data.last_name==="")
			{
			   
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
				$scope.myForm.l_name.$invalid=true;
				$scope.myForm.l_name.$pristine=false;
			}
			if($scope.data.email==="")
			{
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
				$scope.myForm.email.$invalid=true;
				$scope.myForm.email.$pristine=false;
			}
			if($scope.data.phone==="")
			{
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
				$scope.myForm.phone.$invalid=true;
				$scope.myForm.phone.$pristine=false;
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

//    	  alert('calling the api');
				 if($scope.data.first_name!="" && $scope.data.last_name!="" && $scope.data.email!="" && $scope.data.phone!=""  && $scope.data.message!="")
				 {
				  $scope.data.business_id=business_id;
				  console.log($scope.data);
				  $http.post(baseurl + 'ecommcontact',$scope.data).success(function(res) {
				  
					$scope.response = res;
					console.log(res);
					   $scope.formhide=true;
					   $scope.msg1=true;
						$scope.message = "Thank you for contacting us.Our Team will contact you real soon." ;
						$scope.data={
							   first_name:"",
							   email:"",
							   phone:"",
							   last_name:"",
							   message:"",
						  }
						$scope.myForm.$setPristine();

				  }).error(function() {
						// alert("Please check your internet connection or data source..");
				  });
				 }
	         }
	}


///____________________END______________________



$scope.contactUS2 = function (code, result) {
	console.log($scope.data);
	if($scope.data.first_name==="")
	{
		
        // angular.element(document.querySelector(".in_name")).addClass("has-error");
		$scope.myForm.f_name.$invalid=true;
		$scope.myForm.f_name.$pristine=false;
	   /* console.log($scope.myForm.f_name.$invalid);  */
	}
	if($scope.data.last_name==="")
	{
	   
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
		$scope.myForm.l_name.$invalid=true;
		$scope.myForm.l_name.$pristine=false;
	}
	if($scope.data.email==="")
	{
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
		$scope.myForm.email.$invalid=true;
		$scope.myForm.email.$pristine=false;
	}
	if($scope.data.phone==="")
	{
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
		$scope.myForm.phone.$invalid=true;
		$scope.myForm.phone.$pristine=false;
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

//    	  alert('calling the api');
		 if($scope.data.first_name!="" && $scope.data.last_name!="" && $scope.data.email!="" && $scope.data.phone!=""  && $scope.data.message!="")
		 {
		  $scope.data.business_id=business_id;
		  console.log($scope.data);
		  $http.post(baseurl + 'ecommcontact',$scope.data).success(function(res) {
		  
			$scope.response = res;
			console.log(res);
			   $scope.formhide=true;
			   $scope.msg1=true;
				$scope.message = "Thank you for contacting us.Our Team will contact you real soon." ;
				$scope.data={
					   first_name:"",
					   email:"",
					   phone:"",
					   last_name:"",
					   message:"",
					   packetqty:""
				  }
				$scope.myForm.$setPristine();

		  }).error(function() {
				// alert("Please check your internet connection or data source..");
		  });
		 }
	 }
}


///____________________END______________________


$scope.contactUS3 = function (code, result) {
	console.log($scope.data);
	if($scope.data.first_name==="")
	{
		
        // angular.element(document.querySelector(".in_name")).addClass("has-error");
		$scope.myForm.f_name.$invalid=true;
		$scope.myForm.f_name.$pristine=false;
	   /* console.log($scope.myForm.f_name.$invalid);  */
	}
	if($scope.data.last_name==="")
	{
	   
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
		$scope.myForm.l_name.$invalid=true;
		$scope.myForm.l_name.$pristine=false;
	}
	if($scope.data.email==="")
	{
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
		$scope.myForm.email.$invalid=true;
		$scope.myForm.email.$pristine=false;
	}
	if($scope.data.phone==="")
	{
//    			 angular.element(document.querySelector(".in_name")).addClass("has-error");
		$scope.myForm.phone.$invalid=true;
		$scope.myForm.phone.$pristine=false;
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

//    	  alert('calling the api');
		 if($scope.data.first_name!="" && $scope.data.last_name!="" && $scope.data.email!="" && $scope.data.phone!=""  && $scope.data.message!="")
		 {
		  $scope.data.business_id=business_id;
		  console.log($scope.data);
		  $http.post(baseurl + 'contactus',$scope.data).success(function(res) {
		  
			$scope.response = res;
			console.log(res);
			   $scope.formhide=true;
			   $scope.msg1=true;
				$scope.message = "Thank you for contacting us.Our Team will contact you real soon." ;
				$scope.data={
					   first_name:"",
					   email:"",
					   phone:"",
					   last_name:"",
					   message:"",
				  }
				$scope.myForm.$setPristine();

		  }).error(function() {
				// alert("Please check your internet connection or data source..");
		  });
		 }
	 }
}


///____________________END______________________




   $scope.newsletter = function () {
    	if($scope.news.news_email!=undefined && $scope.news.news_email!="")
    	{
    		 $scope.news.business_id='12';
                   console.log($scope.news);
                   $http.post(baseurl + 'newsletter',$scope.news).success(function(res) {
                     $scope.response = res;
                     console.log(res);


                   }).error(function() {
                         // alert("Please check your internet connection or data source..");
                   });
    	}

    	 }

    });
    app.controller('pricing', function($scope, $http,$window,$location,$sce, $timeout) {

    	$scope.addCart=function(type,price)
    	{
//    		alert(type);alert(price);
    		localStorage.setItem('type',type);
    		localStorage.setItem('price',price);
    		window.location.href='details.html';
    	}

    });
    app.controller('details', function($scope, $http,$window,$location,$sce, $timeout) {

//    	 $scope.data={
//    			 name:"",
//    			 phone:"",
//    			 email:"",
//    			 payment_type:"Credit Card",
//    			 address:"",
//    	 };
    	 
    	 $scope.data={};    			 
    	 $scope.data['payment_type'] = "Credit Card";
    	 
    	 $scope.orderFor = localStorage.getItem('type');
    	 $scope.orderPrice = localStorage.getItem('price');
    	 $scope.invalidName = false;
    	 $scope.invalidEmail = false;
    	 $scope.invalidPhone = false;
    	 
    	$scope.addYourDetails=function(){
    		
    		if(($scope.data.name=="" || typeof $scope.data.name=='undefined') || 
    		   (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test($scope.data.name) || ($scope.data.name.match(/^[0-9]+$/) != null)) ||
    		   ($scope.data.email=="" || typeof $scope.data.email=="undefined") || !(/\S+@\S+\.\S+/.test($scope.data.email)) ||
    		   ($scope.data.phone=="" || typeof $scope.data.phone=="undefined") || 
    		   !($scope.data.phone.match(/^[0-9]+$/) != null) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test($scope.data.phone) ||
    		   ($scope.data.address=="" || typeof $scope.data.address=="undefined")){
	   			 
		   			 if($scope.data.name=="" || typeof $scope.data.name=='undefined'){
			   			 $scope.add_details.in_name.$invalid=true;
			   			 $scope.add_details.in_name.$pristine=false;
			         }else if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test($scope.data.name) || ($scope.data.name.match(/^[0-9]+$/) != null)){
			   			 $scope.add_details.in_name.$invalid=true;
			   			 $scope.add_details.in_name.$pristine=false;
			   			$scope.invalidName = true;
			         }
		   			 
			   		 if($scope.data.email==="" || typeof $scope.data.email=='undefined'){
			   			 $scope.add_details.in_email.$invalid=true;
			   			 $scope.add_details.in_email.$pristine=false;
			   		 }else if(!(/\S+@\S+\.\S+/.test($scope.data.email))){
			   			 $scope.add_details.in_email.$invalid=true;
			   			 $scope.add_details.in_email.$pristine=false;
			   			 $scope.invalidEmail = true;
			         }
			   		 
			   		 if($scope.data.phone==="" || typeof $scope.data.phone=='undefined') {			
			   			 $scope.add_details.in_phone.$invalid=true;
			   			 $scope.add_details.in_phone.$pristine=false;
			   		 }else if(!($scope.data.phone.match(/^[0-9]+$/) != null) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test($scope.data.phone)){
			   			
			   			 $scope.add_details.in_phone.$invalid=true;
			   			 $scope.add_details.in_phone.$pristine=false;
			   			$scope.invalidPhone = true;
			         }
			   		 
			   		 if($scope.data.payment_type==="" || typeof $scope.data.payment_type=='undefined'){
			   			 $scope.add_details.type.$invalid=true;
			   			 $scope.add_details.type.$pristine=false;
			   		 }
			   		if($scope.data.address==="" || typeof $scope.data.address=='undefined'){
			   			 $scope.add_details.address.$invalid=true;
			   			 $scope.add_details.address.$pristine=false;
			   		}
    			
    	   }else{ 
    		    
		   		if($scope.data.payment_type=="Credit Card"){					 
					 if($scope.data.name!="" && $scope.data.email!="" && $scope.data.phone!="" && $scope.data.last_name!="" && $scope.data.message!="" && $scope.data.address!=""){
		    			 localStorage.setItem('userDetails',JSON.stringify($scope.data));
						 window.location.href='payment.html';
	    		      }
		    	}else if($scope.data.payment_type=="Bank Transfer"){
		    		
					 if($scope.data.name!="" && $scope.data.email!="" && $scope.data.phone!="" && $scope.data.last_name!="" && $scope.data.message!="" && $scope.data.address!=""){
		    			 localStorage.setItem('userDetails',JSON.stringify($scope.data));
						 window.location.href='bankUserDetails.html';
	    		      }
		    	}
		   		
    	   }

        }
});
    
    
    app.controller('payment', function($scope, $http,$window,$location,$sce, $timeout) {

    	Stripe.setPublishableKey('pk_test_f4AmpyV2vuql0QPEb2WHIQRo');
    	$scope.business_id='12';
    	if(document.location.hostname == "sparksinasia.com" || document.location.hostname == "www.sparksinasia.com" || document.location.hostname == "www.fountaintechies.com"){
            var baseurl = "https://www.sparksinasia.com/api/";
          } else{
            var baseurl = "https://www.sparksinasia.com/api/" ;
          }
    	
    	 $scope.orderFor = localStorage.getItem('type');
    	 $scope.orderPrice = localStorage.getItem('price');
    	 $scope.userDetails = JSON.parse(localStorage.getItem('userDetails'));
    	 $('#id_submit').show();
		 $('#id_loading').hide();
		 $scope.invalidName = false;
		 $scope.invalidCardNumber = false;
      	
       $scope.stripeCallback = function (code, result) {
    	             
    	              $('#id_error_meesage').text('');
    	              
    	              console.log(result);
    	   
//    	             if(($scope.name=="" || typeof $scope.name=='undefined') || 
//    	          		   (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test($scope.name) || ($scope.name.match(/^[0-9]+$/) != null)) ||
//    	          		   ($scope.cardNumber=="" || typeof $scope.cardNumber=="undefined") || 
//    	          		   !($scope.cardNumber.match(/^[0-9]+$/) != null) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test($scope.cardNumber) ||
//    	          		   ($scope.expiry=="" || typeof $scope.expiry=="undefined")||
//    	          		   ($scope.cvc=="" || typeof $scope.cvc=="undefined")){
    	             
    	              if(result.error){
    	            	   	  
    	            	  if(result.error != 'Invalid form submitted.'){
    	            		  $('#id_error_meesage').text(result.error.message);
    	            	  }else{
	    	            	 if($scope.name=="" || typeof $scope.name=='undefined'){
	    	            		 $scope.add_details.cardName.$invalid=true;
	    			   			 $scope.add_details.cardName.$pristine=false;	    	            	    	  	    	    	            	 
	    	    	             $('#id_error_meesage').text(result.error.message);
	    			         }else if(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test($scope.name) || ($scope.name.match(/^[0-9]+$/) != null)){
	    			        	 $scope.add_details.cardName.$invalid=true;
	    			   			 $scope.add_details.cardName.$pristine=false;
	    			   			 $scope.invalidName = true;
	    			         }
	    			   		 
	    			   		 if($scope.cardNumber=="" || typeof $scope.cardNumber=='undefined') {	    			   		
	    			   			 $scope.add_details.cardNumber.$invalid=true;
	    			   			 $scope.add_details.cardNumber.$pristine=false;    			
	    			   		 }else if(!($scope.cardNumber.match(/^[0-9]+$/) != null) || /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test($scope.cardNumber)){
	    			   			
	    			   			 $scope.add_details.cardNumber.$invalid=true;
	    			   			 $scope.add_details.cardNumber.$pristine=false;
	    			   			 $scope.invalidCardNumber = true;
	    			         }
	    			   		 
	    			   		if($scope.expiry=="" || typeof $scope.expiry=='undefined'){
	    			   			 $scope.add_details.expiry.$invalid=true;
	    			   			 $scope.add_details.expiry.$pristine=false;
		   			   		 }
		   			   		if($scope.cvc=="" || typeof $scope.cvc=='undefined'){
			   			   		$scope.add_details.cvc.$invalid=true;
	   			   			    $scope.add_details.cvc.$pristine=false;
		   			   		}
    	              }
    	                  			   		 
    	            }else{
    			   		 
    			   		if(typeof $scope.cardName=="undefined" && typeof $scope.cardNumber=="undefined" && typeof $scope.expiry=="undefined" && typeof $scope.cvc=="undefined"){
    						 $scope.msg=false;
    						 $scope.msg1=true;
    			          	$scope.message1 = "Please fill required field."
    					}else{
    						  
    						   $('#id_submit').hide();
    						   $('#id_loading').show();
    			    	    	  
    							var params = {};
    							
    							var userDetails = JSON.parse(localStorage.getItem('userDetails'));

    				            params.userid = 20;
	    				        params.business_fk = $scope.business_id;
	    				        params.status = 1;
	    				        params.token = result.id;
	    				        params.created_on = result.created;
	    				        params.cartPrice = parseInt(localStorage.getItem('price'));
	    				        params.name = userDetails.name;
	    				        params.order_shipping_id = 13;
	    				        params.email = userDetails.email;
	    				        params.mobile = userDetails.phone;
	    				        params.orderType = localStorage.getItem('type');
	
	    				        var token = result.id;
	    				        
	    				        $http.post(baseurl+'paybill1',params).success(function(res) {
	    				        	if(res.status == 200){
	    				        		 $('#id_submit').show();
	    	    						   $('#id_loading').hide();
	    				        		 window.location = 'thankyoupage.html';
	    				        	}else{
	    				        		  $('#id_submit').show();
	    	    						   $('#id_loading').hide();
	    				        		 alert('Something Went Wrong');
	    				        	}	    		                    
	
	    		                }).error(function() {
	    		                	$('#id_submit').show();
					       		    $('#id_loading').hide();
	    		                         // alert("Please check your internet connection or data source..");
	    		                });
    			    	    	      			    	     						    
    			   		
    					}
    	            }
                     
        };
        
    $scope.onBankTransfer = function () { 
            
						var params = {};
						$('#id_submit').hide();
						 $('#id_loading').show();
						
						var userDetails = JSON.parse(localStorage.getItem('userDetails'));
            
			            params.userid = 20;
				        params.business_fk = $scope.business_id;
				        params.status = 1;
				        params.created_on = new Date().toLocaleString().split(',')[0];
				        params.name = userDetails.name;
				        params.email = userDetails.email;
				        params.mobile = userDetails.phone;
				        params.cartPrice = parseInt(localStorage.getItem('price'));
				        
				        params.orderType = localStorage.getItem('type');
				        
				        $http.post(baseurl+'banktransfer',params).success(function(res) {
				        	if(res.status == 200){
				        		$('#id_submit').show();
				       		    $('#id_loading').hide();
				        		 window.location = 'thankyoupage.html';
				        	}else{
				        		$('#id_submit').show();
				       		    $('#id_loading').hide();
				        		 alert('Something Went Wrong');
				        	}
		                    


		                }).error(function() {
		                	$('#id_submit').show();
			       		    $('#id_loading').hide();
		                         // alert("Please check your internet connection or data source..");
		                });
		       
            
       };

});
