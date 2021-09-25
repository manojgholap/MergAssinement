
var ApplicationModuleName = 'BusinessApp';

var SampleApplicationModule = angular.module('BusinessApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'ngMessages',
    'angular-storage',
    'ngTagsInput',
    'ngSanitize',
    'xeditable',
    'textAngular',
    'xeditable',
    'ngFileUpload',
    'ng.ckeditor', 'ui.grid', 'ui.grid.edit', 'ui.grid.cellNav'
]);

SampleApplicationModule.run(function (editableOptions) {
    editableOptions.theme = 'bs3', 'default';
});
SampleApplicationModule.config(['$routeProvider', 'storeProvider', function ($routeProvider, storeProvider) {

    $routeProvider.otherwise({ redirectTo: '/businesslogin' });

    $routeProvider
        .when('/inq-form', {  
            templateUrl: 'partials/all_create_pages/inq_form.html',
            controller: 'inventoryController'
        })
        .when('/parcels', {  
            templateUrl: 'partials/allParcels.html',
            controller: 'inventoryController'
        })
        .when('/parcels2', {  
            templateUrl: 'partials/allParcels2.html',
            controller: 'inventoryController'
        })
        .when('/parcel_booking', {  
            templateUrl: 'partials/all_create_pages/parcel_booking.html',
            controller: 'inventoryController'
        })
        .when('/pl6', {  
            templateUrl: 'partials/all_list_pages/all_parcels_level6.html',
            controller: 'inventoryController'
        })
        .when('/pl61', {  
            templateUrl: 'partials/all_list_pages/all_parcels_level61.html',
            controller: 'inventoryController'
        })
        .when('/pl62', {  
            templateUrl: 'partials/all_list_pages/all_parcels_level62.html',
            controller: 'inventoryController'
        })
        .when('/pkdl', {  
            templateUrl: 'partials/all_list_pages/all_parcels_kundan.html',
            controller: 'inventoryController'
        })
        .when('/pkul', {  
            templateUrl: 'partials/all_list_pages/all_parcels_kunal.html',
            controller: 'inventoryController'
        })
        .when('/pbl', {  
            templateUrl: 'partials/all_list_pages/all_parcels_barsha.html',
            controller: 'inventoryController'
        })
        .when('/pamrl', {  
            templateUrl: 'partials/all_list_pages/all_parcels_amar.html',
            controller: 'inventoryController'
        })
        .when('/pshnrl', {  
            templateUrl: 'partials/all_list_pages/all_parcels_shankar.html',
            controller: 'inventoryController'
        })
        .when('/parvndl', {  
            templateUrl: 'partials/all_list_pages/all_parcels_arvind.html',
            controller: 'inventoryController'
        })

        //  Staff Wise Parcels
        
        .when('/staffamol', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_amol.html',
            controller: 'inventoryController'
        })
        .when('/staffpavan', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_pavan.html',
            controller: 'inventoryController'
        })
        .when('/staffsneha', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_sneha.html',
            controller: 'inventoryController'
        })
        .when('/staffmanisha', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_manisha.html',
            controller: 'inventoryController'
        })
        .when('/staffshradha', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_shradha.html',
            controller: 'inventoryController'
        })
        .when('/staffbarsha', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_barsha.html',
            controller: 'inventoryController'
        })
        .when('/staffajay', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_ajay.html',
            controller: 'inventoryController'
        })
        .when('/staffsm', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_shankar_mumbai.html',
            controller: 'inventoryController'
        })
        .when('/staffkd', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_kirti_delhi.html',
            controller: 'inventoryController'
        })
        .when('/staffselva', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_selva.html',
            controller: 'inventoryController'
        })
        .when('/staffgagan', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_gagan.html',
            controller: 'inventoryController'
        })
        .when('/staffkundan', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_kundan.html',
            controller: 'inventoryController'
        })
        .when('/staffgauravm', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_gaurav_medicines.html',
            controller: 'inventoryController'
        })
        .when('/staffpc', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_professional_courier.html',
            controller: 'inventoryController'
        })
        .when('/staffdtdc', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_dtdc.html',
            controller: 'inventoryController'
        })
        .when('/stafftrackon', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_trackon.html',
            controller: 'inventoryController'
        })
        .when('/staffdhl', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_dhl.html',
            controller: 'inventoryController'
        })
        .when('/staffdpex', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_dpex.html',
            controller: 'inventoryController'
        })
        .when('/staffaircargo', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_air_cargo.html',
            controller: 'inventoryController'
        })
        .when('/staffshipcargo', {  
            templateUrl: 'partials/staff_wise_parcels/all_parcels_ship_cargo.html',
            controller: 'inventoryController'
        })

        //  Ph Staff Wise Parcels.
        
        .when('/phstaffamol', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_amol.html',
            controller: 'inventoryController'
        })
        .when('/phstaffpavan', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_pavan.html',
            controller: 'inventoryController'
        })
        .when('/phstaffsneha', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_sneha.html',
            controller: 'inventoryController'
        })
        .when('/phstaffmanisha', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_manisha.html',
            controller: 'inventoryController'
        })
        .when('/phstaffshradha', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_shradha.html',
            controller: 'inventoryController'
        })
        .when('/phstaffbarsha', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_barsha.html',
            controller: 'inventoryController'
        })
        .when('/phstaffajay', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_ajay.html',
            controller: 'inventoryController'
        })
        .when('/phstaffsm', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_shankar_mumbai.html',
            controller: 'inventoryController'
        })
        .when('/phstaffkd', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_kirti_delhi.html',
            controller: 'inventoryController'
        })
        .when('/phstaffselva', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_selva.html',
            controller: 'inventoryController'
        })
        .when('/phstaffgagan', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_gagan.html',
            controller: 'inventoryController'
        })
        .when('/phstaffkundan', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_kundan.html',
            controller: 'inventoryController'
        })
        .when('/phstaffgauravm', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_gaurav_medicines.html',
            controller: 'inventoryController'
        })
        .when('/phstaffpc', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_professional_courier.html',
            controller: 'inventoryController'
        })
        .when('/phstaffdtdc', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_dtdc.html',
            controller: 'inventoryController'
        })
        .when('/phstafftrackon', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_trackon.html',
            controller: 'inventoryController'
        })
        .when('/phstaffdhl', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_dhl.html',
            controller: 'inventoryController'
        })
        .when('/phstaffdpex', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_dpex.html',
            controller: 'inventoryController'
        })
        .when('/phstaffaircargo', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_air_cargo.html',
            controller: 'inventoryController'
        })
        .when('/phstaffshipcargo', {  
            templateUrl: 'partials/ph_staff_wise_parcels/all_parcels_ship_cargo.html',
            controller: 'inventoryController'
        })


        //  Drivers

        .when('/create_driver', {  
            templateUrl: 'partials/all_create_pages/create_driver.html',
            controller: 'driverController'
        })
        .when('/dllevel6', {  
            templateUrl: 'partials/all_list_pages/driver_list_level6.html',
            controller: 'driverController'
        })
        .when('/dllevel61', {  
            templateUrl: 'partials/all_list_pages/driver_list_level61.html',
            controller: 'driverController'
        })
        .when('/dllevel62', {  
            templateUrl: 'partials/all_list_pages/driver_list_level62.html',
            controller: 'driverController'
        })
        .when('/dlamar', {  
            templateUrl: 'partials/all_list_pages/driver_list_amar.html',
            controller: 'driverController'
        })
        .when('/dlarvind', {  
            templateUrl: 'partials/all_list_pages/driver_list_arvind.html',
            controller: 'driverController'
        })
        .when('/dlbarsha', {  
            templateUrl: 'partials/all_list_pages/driver_list_barsha.html',
            controller: 'driverController'
        })
        .when('/dlkunal', {  
            templateUrl: 'partials/all_list_pages/driver_list_kunal.html',
            controller: 'driverController'
        })
        .when('/dlkundan', {  
            templateUrl: 'partials/all_list_pages/driver_list_kundan.html',
            controller: 'driverController'
        })
        .when('/dlshankar', {  
            templateUrl: 'partials/all_list_pages/driver_list_shankar.html',
            controller: 'driverController'
        })

        //Assigned Parcels
        .when('/aplevl6', {  
            templateUrl: 'partials/all_list_pages/assigned_parcels_level6.html',
            controller: 'inventoryController'
        })
        .when('/aplevel61', {  
            templateUrl: 'partials/all_list_pages/assigned_parcels_level61.html',
            controller: 'inventoryController'
        })
        .when('/aplevel62', {  
            templateUrl: 'partials/all_list_pages/assigned_parcels_levl62.html',
            controller: 'inventoryController'
        })
        .when('/apamar', {  
            templateUrl: 'partials/all_list_pages/assigned_parcels_amar.html',
            controller: 'inventoryController'
        })
        .when('/aparvind', {  
            templateUrl: 'partials/all_list_pages/assigned_parcels_arvind.html',
            controller: 'inventoryController'
        })
        .when('/apbarsha', {  
            templateUrl: 'partials/all_list_pages/assigned_parcels_barsha.html',
            controller: 'inventoryController'
        })
        .when('/apkunal', {  
            templateUrl: 'partials/all_list_pages/assigned_parcels_kunal.html',
            controller: 'inventoryController'
        })
        .when('/apkundan', {  
            templateUrl: 'partials/all_list_pages/assigned_parcels_kundan.html',
            controller: 'inventoryController'
        })
        .when('/apshankar', {  
            templateUrl: 'partials/all_list_pages/assigned_parcels_shankar.html',
            controller: 'inventoryController'
        })


//medicine booking
.when('/medicine_booking', {  
    templateUrl: 'partials/all_create_pages/medicine_booking.html',
    controller: 'medicineController'
})
.when('/list_medicines_6', {  
    templateUrl: 'partials/all_list_pages/list_medicine_6.html',
    controller: 'medicineController'
})
.when('/list_medicines_61', {  
    templateUrl: 'partials/all_list_pages/list_medicine_61.html',
    controller: 'medicineController'
})
.when('/list_medicines_62', {  
    templateUrl: 'partials/all_list_pages/list_medicine_62.html',
    controller: 'medicineController'
})
.when('/list_medicines_shankar', {  
    templateUrl: 'partials/all_list_pages/list_medicine_shankar.html',
    controller: 'medicineController'
})
.when('/list_medicines_barsha', {  
    templateUrl: 'partials/all_list_pages/list_medicine_barsha.html',
    controller: 'medicineController'
})
.when('/list_medicines_kundan', {  
    templateUrl: 'partials/all_list_pages/list_medicine_kundan.html',
    controller: 'medicineController'
})
.when('/list_medicines_kunal', {  
    templateUrl: 'partials/all_list_pages/list_medicine_kunal.html',
    controller: 'medicineController'
})
.when('/list_medicines_arvind', {  
    templateUrl: 'partials/all_list_pages/list_medicine_arvind.html',
    controller: 'medicineController'
})
.when('/list_medicines_amar', {  
    templateUrl: 'partials/all_list_pages/list_medicine_amar.html',
    controller: 'medicineController'
})

//driver section
        .when('/drivers', {  
            templateUrl: 'partials/add_drivers1.html',
            controller: 'driverController'
        })
        .when('/add-driver', {  
            templateUrl: 'partials/add_drivers.html',
            controller: 'driverController'
        })
        .when('/list-driver', {  
            templateUrl: 'partials/driverList.html',
            controller: 'driverController'
        })
        .when('/list-pickup', {  
            templateUrl: 'partials/all_list_pages/pickuplist.html',
            controller: 'driverController'
        })
        .when('/list-delivery', {  
            templateUrl: 'partials/all_list_pages/deliverylist.html',
            controller: 'driverController'
        })

//portal section
        .when('/create-portal', {  
            templateUrl: 'partials/createportal.html',
            controller: 'businessLoginController'
        })
        .when('/list-portal', {  
            templateUrl: 'partials/portalList.html',
            controller: 'inventoryController'
        })

        .when('/parcelsOfSingapore', {  
            templateUrl: 'partials/parcelsOfSingapore.html',
            controller: 'inventoryController'
        })
        .when('/parcelsOfPhillipines', {  
            templateUrl: 'partials/parcelsOfPhillipines.html',
            controller: 'inventoryController'
        })
        .when('/parcelsOfIndia', {  
            templateUrl: 'partials/parcelsOfIndia.html',
            controller: 'inventoryController'
        })
        .when('/parcelDetails/:id', {  
            templateUrl: 'partials/parcelDetails.html',
            controller: 'inventoryController'
        })
        .when('/pickupParcel', {  
            templateUrl: 'partials/pickupparcel.html',
            controller: 'inventoryController'
        })

//email section
        .when('/email', {  
            templateUrl: 'partials/email.html',
            controller: 'inventoryController'
        })
        .when('/compose-email', {  
            templateUrl: 'partials/custEmail.html',
            controller: 'inventoryController'
        })

//activity section
        .when('/activity-list', {  
            templateUrl: 'partials/activityList.html',
            controller: 'inventoryController'
        })
        .when('/add-activity', {  
            templateUrl: 'partials/add_activity.html',
            controller: 'inventoryController'
        })

//features section
        .when('/add-features',{
            templateUrl : 'partials/add_features.html',
            controller : 'inventoryController'
        })
        .when('/features-list',{
            templateUrl:'partials/features.html',
            controller: 'inventoryController'
        })

        // status wise parcels detais of singapore

        .when('/open', { 
            templateUrl: 'partials/status/open.html',
            controller: 'inventoryController'
        })
        .when('/payment', { 
            templateUrl: 'partials/status/payment.html',
            controller: 'inventoryController'
        })
        .when('/pickup-pending', { 
            templateUrl: 'partials/status/pickup-pending.html',
            controller: 'inventoryController'
        })
        .when('/pickup-assigned', { 
            templateUrl: 'partials/status/pickup-assigned.html',
            controller: 'inventoryController'
        })
        .when('/pickup-completed', { 
            templateUrl: 'partials/status/pickup-completed.html',
            controller: 'inventoryController'
        })
        .when('/pune-warehouse', { 
            templateUrl: 'partials/status/pune-warehouse.html',
            controller: 'inventoryController'
        })
        .when('/network-warehouse', { 
            templateUrl: 'partials/status/network-warehouse.html',
            controller: 'inventoryController'
        })
        .when('/sg-warehouse', { 
            templateUrl: 'partials/status/sg-warehouse.html',
            controller: 'inventoryController'
        })
        .when('/kolkatta-warehouse', { 
            templateUrl: 'partials/status/kolkatta-warehouse.html',
            controller: 'inventoryController'
        })
        .when('/international-transit', { 
            templateUrl: 'partials/status/international-transit.html',
            controller: 'inventoryController'
        })
        .when('/delivery-warehouse', { 
            templateUrl: 'partials/status/delivery-warehouse.html',
            controller: 'inventoryController'
        })
        .when('/domestic-transit', { 
            templateUrl: 'partials/status/domestic-transit.html',
            controller: 'inventoryController'
        })
        .when('/delivered', { 
            templateUrl: 'partials/status/delivered.html',
            controller: 'inventoryController'
        })
        .when('/completed', { 
            templateUrl: 'partials/status/completed.html',
            controller: 'inventoryController'
        })
        .when('/medicine', { 
            templateUrl: 'partials/status/medicine.html',
            controller: 'inventoryController'
        })
        .when('/canceled', { 
            templateUrl: 'partials/status/canceled.html',
            controller: 'inventoryController'
        })
        .when('/banglore-shipment', { 
            templateUrl: 'partials/status/banglore-shipment.html',
            controller: 'inventoryController'
        })
        .when('/network-1', { 
            templateUrl: 'partials/status/network1.html',
            controller: 'inventoryController'
        })
        .when('/network-2', { 
            templateUrl: 'partials/status/network2.html',
            controller: 'inventoryController'
        })
        .when('/network-3', { 
            templateUrl: 'partials/status/network3.html',
            controller: 'inventoryController'
        })
        .when('/network-4', { 
            templateUrl: 'partials/status/network4.html',
            controller: 'inventoryController'
        })
        .when('/network-5', { 
            templateUrl: 'partials/status/network5.html',
            controller: 'inventoryController'
        })
        .when('/air-cargo-1', { 
            templateUrl: 'partials/status/air-cargo-1.html',
            controller: 'inventoryController'
        })
        .when('/air-cargo-2', { 
            templateUrl: 'partials/status/air-cargo-2.html',
            controller: 'inventoryController'
        })
        .when('/air-cargo-3', { 
            templateUrl: 'partials/status/air-cargo-3.html',
            controller: 'inventoryController'
        })
        .when('/air-cargo-4', { 
            templateUrl: 'partials/status/air-cargo-4.html',
            controller: 'inventoryController'
        })
        .when('/air-cargo-5', { 
            templateUrl: 'partials/status/air-cargo-5.html',
            controller: 'inventoryController'
        })
        // status wise parcels detais of singapore ends

        // status wise parcels detais of india starts

            .when('/inopen', { 
            templateUrl: 'partials/instatus/open.html',
            controller: 'inventoryController'
            })
            .when('/inpayment', { 
                templateUrl: 'partials/instatus/payment.html',
                controller: 'inventoryController'
            })
            .when('/inpickup-pending', { 
                templateUrl: 'partials/instatus/pickup-pending.html',
                controller: 'inventoryController'
            })
            .when('/inpickup-assigned', { 
                templateUrl: 'partials/instatus/pickup-assigned.html',
                controller: 'inventoryController'
            })
            .when('/inpickup-completed', { 
                templateUrl: 'partials/instatus/pickup-completed.html',
                controller: 'inventoryController'
            })
            .when('/inpune-warehouse', { 
                templateUrl: 'partials/instatus/pune-warehouse.html',
                controller: 'inventoryController'
            })
            .when('/inkunal-warehouse', { 
                templateUrl: 'partials/instatus/kunal-warehouse.html',
                controller: 'inventoryController'
            })
            .when('/insg-warehouse', { 
                templateUrl: 'partials/instatus/sg-warehouse.html',
                controller: 'inventoryController'
            })
            .when('/inkolkatta-warehouse', { 
                templateUrl: 'partials/instatus/kolkatta-warehouse.html',
                controller: 'inventoryController'
            })
            .when('/ininternational-transit', { 
                templateUrl: 'partials/instatus/international-transit.html',
                controller: 'inventoryController'
            })
            .when('/indelivery-warehouse', { 
                templateUrl: 'partials/instatus/delivery-warehouse.html',
                controller: 'inventoryController'
            })
            .when('/indomestic-transit', { 
                templateUrl: 'partials/instatus/domestic-transit.html',
                controller: 'inventoryController'
            })
            .when('/indelivered', { 
                templateUrl: 'partials/instatus/delivered.html',
                controller: 'inventoryController'
            })
            .when('/incompleted', { 
                templateUrl: 'partials/instatus/completed.html',
                controller: 'inventoryController'
            })
            .when('/inmedicine', { 
                templateUrl: 'partials/instatus/medicine.html',
                controller: 'inventoryController'
            })
            .when('/incanceled', { 
                templateUrl: 'partials/instatus/canceled.html',
                controller: 'inventoryController'
            })
            .when('/kunal1', { 
                templateUrl: 'partials/instatus/kunal1.html',
                controller: 'inventoryController'
            })
            .when('/kunal2', { 
                templateUrl: 'partials/instatus/kunal2.html',
                controller: 'inventoryController'
            })
            .when('/kunal3', { 
                templateUrl: 'partials/instatus/kunal3.html',
                controller: 'inventoryController'
            })

            // status wise parcels details of india ends

        .when('/parcelHistory', {  
            templateUrl: 'partials/parcelHistory.html',
            controller: 'inventoryController'
        })
        //orders api routing
        .when('/orders', {  
            templateUrl: 'partials/orders.html',
            controller: 'ordersController'
         })
         .when('/orderDetails/:id', {  
             templateUrl: 'partials/orderDetail.html',
             controller: 'ordersController'
         })


        .when('/businesslogin', {
            templateUrl: 'partials/businesslogin.html',
            controller: 'businessLoginController'
        })
        .when('/login', {
            templateUrl: 'partials/businesslogin2.html',
            controller: 'businessLoginController'
        })
        //category
        .when('/category', {
            templateUrl: 'partials/category.html',
            controller
                : 'CategoryController'
        })
        .when('/add_category', {
            templateUrl: 'partials/add_category.html',
            controller: 'CategoryController'
        })
        .when('/add_product', {
            templateUrl: 'partials/add_product.html',
            controller: 'inventoryController'
        })
        .when('/addcollection', {
            templateUrl: 'partials/add_collection.html',
            controller: 'inventoryController'
        })
        .when('/editcollection/:id', {
            templateUrl: 'partials/editcollection.html',
            controller: 'inventoryController'
        })
        .when('/collections', {
            templateUrl: 'partials/collections.html',
            controller: 'inventoryController'
        })
        .when('/edit_category/:id', {
            templateUrl: 'partials/edit_category.html',
            controller: 'CategoryController'
        })

        .when('/view_category/:id', {
            templateUrl: 'partials/view_category.html',
            controller: 'CategoryController'
        })
        .when('/purchase_order', {
            templateUrl: 'partials/purchase_order.html',
            controller: 'inventoryController'
        })
        .when('/invoice', {
            templateUrl: 'partials/invoice.html',
            controller: 'inventoryController'
        })
        .when('/History-By-Brand/:id', {
            templateUrl: 'partials/brand_history.html',
            controller: 'inventoryController'
        })
        .when('/categoryAcc', {
            templateUrl: 'partials/categoryAcc.html',
            controller: 'CategoryAccController'
        })
        .when('/purchaseOrder', {
            templateUrl: 'partials/purchaseOrderList.html',
            controller: 'inventoryController'
        })
        .when('/userOrder', {
            templateUrl: 'partials/userOrderList.html',
            controller: 'inventoryController'
        })
        .when('/directBuyOrders', {
            templateUrl: 'partials/directbuyorders.html',
            controller: 'inventoryController'
        })
        .when('/Add-Cart/:id', {
            templateUrl: 'partials/add_cart_po.html',
            controller: 'inventoryController'
        })
        .when('/view-PO', {
            templateUrl: 'partials/view_po.html',
            controller: 'inventoryController'
        })
        .when('/view-Invoice', {
            templateUrl: 'partials/view_invoice.html',
            controller: 'inventoryController'
        })
        .when('/Add-Cart-Invoice/:id', {
            templateUrl: 'partials/add_cart_invoice.html',
            controller: 'inventoryController'
        })
        .when('/add_categoryAcc', {
            templateUrl: 'partials/add_categoryAcc.html',
            controller: 'CategoryAccController'
        })
        .when('/edit_Accecategory/:id', {
            templateUrl: 'partials/edit_Accecategory.html',
            controller: 'CategoryAccController'
        })
        .when('/Outgoing-Shipping', {
            templateUrl: 'partials/out_shipping.html',
            controller: 'inventoryController'
        })
        .when('/Incoming-Shipping', {
            templateUrl: 'partials/inc_shipping.html',
            controller: 'inventoryController'
        })
        .when('/Incoming-Packing', {
            templateUrl: 'partials/inc_packinglist.html',
            controller: 'inventoryController'
        })
        .when('/Outgoing-Packing', {
            templateUrl: 'partials/out_packinglist.html',
            controller: 'inventoryController'
        })
        .when('/Support', {
            templateUrl: 'partials/support.html',
            controller: 'inventoryController'
        })
        .when('/productbybrand', {
            templateUrl: 'partials/productbybrand.html',
            controller: 'inventoryController'
        })
        .when('/Support-Notes', {
            templateUrl: 'partials/support_notes.html',
            controller: 'inventoryController'
        })
        .when('/parcels-Notes', {
            templateUrl: 'partials/parcels_notes.html',
            controller: 'inventoryController'
        })
        .when('/Add-Support', {
            templateUrl: 'partials/add_support.html',
            controller: 'inventoryController'
        })
        .when('/view_Accecategory/:id', {
            templateUrl: 'partials/view_Accecategory.html',
            controller: 'CategoryAccController'
        })

        //super category
        .when('/supercategory', {
            templateUrl: 'partials/super_category.html',
            controller: 'SuperCategoryController'
        })

        .when('/add_super_category', {
            templateUrl: 'partials/add_super_category.html',
            controller: 'SuperCategoryController'
        })

        .when('/edit_super_category/:id', {
            templateUrl: 'partials/edit_super_category.html',
            controller: 'SuperCategoryController'
        })

        .when('/view_super_category/:id', {
            templateUrl: 'partials/view_super_category.html',
            controller: 'SuperCategoryController'
        })
        .when('/item1', {
            templateUrl: 'partials/item1.html',
            controller: 'itemController'
        })
        .when('/add_item1', {
            templateUrl: 'partials/add_item1.html',
            controller: 'itemController'
        })

        .when('/edit_item1/:id', {
            templateUrl: 'partials/edit_item1.html',
            controller: 'itemController'
        })

        .when('/stockList', {
            templateUrl: 'partials/stockList.html',
            controller: 'StockController'
        })
        .when('/inventory/:id', {
            templateUrl: 'partials/inventory.html',
            controller: 'StockController'
        })

        // items

        .when('/item', {
            templateUrl: 'partials/item.html',
            controller: 'itemController'
        })

        .when('/add_item', {
            templateUrl: 'partials/add_item.html',
            controller: 'itemController'
        })

        .when('/edit_item/:id', {
            templateUrl: 'partials/edit_item.html',
            controller: 'itemController'
        })

        .when('/view_item/:id', {
            templateUrl: 'partials/view_item.html',
            controller: 'itemController'
        })


        // featured items 

        .when('/featured_item', {
            templateUrl: 'partials/featured_item.html',
            controller: 'featuredItemController'
        })

        .when('/add_featured_item', {
            templateUrl: 'partials/add_featured_item.html',
            controller: 'featuredItemController'
        })

        .when('/edit_featured_item/:id', {
            templateUrl: 'partials/edit_featured_item.html',
            controller: 'featuredItemController'
        })

        .when('/view_featured_item/:id', {
            templateUrl: 'partials/view_featureditem.html',
            controller: 'featuredItemController'
        })

        //News

        .when('/news', {
            templateUrl: 'partials/news.html',
            controller: 'newsController'
        })

        .when('/add_news', {
            templateUrl: 'partials/add_news.html',
            controller: 'newsController'
        })

        .when('/edit_news/:id', {
            templateUrl: 'partials/edit_news.html',
            controller: 'newsController'
        })

        .when('/view_news/:id', {
            templateUrl: 'partials/view_news.html',
            controller: 'newsController'
        })

        //Launched Gadgets

        .when('/launchedgadgets', {
            templateUrl: 'partials/launchedGadgets.html',
            controller: 'launchGadgetController'
        })
        .when('/view_launchedgadget/:id', {
            templateUrl: 'partials/view_launchedgadget.html',
            controller: 'launchGadgetController'
        })


        //item properties 
        .when('/viewitemproperties/:item_id', {
            templateUrl: 'partials/viewitemproperties.html',
            controller: 'itemController'
        })

        .when('/itemproperties', {
            templateUrl: 'partials/itemproperties.html',
            controller: 'itemController'
        })

        .when('/add_item_property', {
            templateUrl: 'partials/add_item_property.html',
            controller: 'itemController as Itemctrl'
        })

        .when('/edititemproperty/:item_id', {
            templateUrl: 'partials/edititemproperty.html',
            controller: 'itemController'
        })

        //Users
        .when('/users', {
            templateUrl: 'partials/user.html',
            controller: 'userController'
        })
        .when('/resellers', {
            templateUrl: 'partials/resellers.html',
            controller: 'userController'
        })
        .when('/add_client', {
            templateUrl: 'partials/add_client.html',
            controller: 'userController'
        })


        .when('/view_user/:id', {
            templateUrl: 'partials/view_user.html',
            controller: 'userController'
        })
        .when('/edit_product/:id', {
            templateUrl: 'partials/edit_product.html',
            controller: 'inventoryController'
        })
        .when('/productView/:id', {
            templateUrl: 'partials/productView.html',
            controller: 'inventoryController'
        })
        .when('/WS-WTS', {
            templateUrl: 'partials/ws_wts.html',
            controller: 'inventoryController'
        })
        .when('/wts', {
            templateUrl: 'partials/wts.html',
            controller: 'inventoryController'
        })
        .when('/wts-list', {
            templateUrl: 'partials/wts-list.html',
            controller: 'inventoryController'
        })
        .when('/view_wts/:id', {
            templateUrl: 'partials/view_wts.html',
            controller: 'inventoryController'
        })
        .when('/edit_wts/:id', {
            templateUrl: 'partials/edit_wts.html',
            controller: 'inventoryController'
        })
        .when('/wtb-list', {
            templateUrl: 'partials/wtb-list.html',
            controller: 'inventoryController'
        })
        .when('/wtb', {
            templateUrl: 'partials/wtb.html',
            controller: 'inventoryController'
        })
        .when('/view_wtb/:id', {
            templateUrl: 'partials/view_wtb.html',
            controller: 'inventoryController'
        })
        .when('/edit_wtb/:id', {
            templateUrl: 'partials/edit_wtb.html',
            controller: 'inventoryController'
        })
        .when('/client-details/:id', {
            templateUrl: 'partials/client_detail.html',
            controller: 'inventoryController'
        })
        .when('/notes', {
            templateUrl: 'partials/all_notes.html',
            controller: 'inventoryController'
        })
        .when('/view_notes/:id', {
            templateUrl: 'partials/view_notes.html',
            controller: 'inventoryController'
        })
        .when('/edit_notes/:id', {
            templateUrl: 'partials/edit_notes.html',
            controller: 'inventoryController'
        })
        .when('/inquiry', {
            templateUrl: 'partials/inquiryList.html',
            controller: 'inventoryController'
        })
        .when('/view_inquiry/:id', {
            templateUrl: 'partials/view_inquiry.html',
            controller: 'inventoryController'
        })
        .when('/edit_inquiry/:id', {
            templateUrl: 'partials/edit_inquiry.html',
            controller: 'inventoryController'
        })
        .when('/products', {
            templateUrl: 'partials/products.html',
            controller: 'inventoryController'
        })
        .when('/add-subproduct', {
            templateUrl: 'partials/add_subproduct.html',
            controller: 'inventoryController'
        })
        .when('/sub-products', {
            templateUrl: 'partials/sub_product.html',
            controller: 'inventoryController'
        })
        .when('/edit_subproduct/:id', {
            templateUrl: 'partials/edit_subproduct.html',
            controller: 'inventoryController'
        })

        .when('/edit_user/:bussiness_id', {
            templateUrl: 'partials/edit_user.html',
            controller: 'userController'
        })
        .when('/mail', {
            templateUrl: 'partials/mail.html',
            controller: 'mailController'
        })
        .when('/clientDetails/:id', {
            templateUrl: 'partials/clientDetails.html',
            controller: 'StockController'
        })
        .when('/trading-bench', {
            templateUrl: 'partials/trading-bench.html',
            controller: 'inventoryController'
        })
        .when('/stock-product', {
            templateUrl: 'partials/stock-product.html',
            controller: 'inventoryController'
        })
        .when('/brands', {
            templateUrl: 'partials/brands.html',
            controller: 'inventoryController'
        })
        .when('/add_brand', {
            templateUrl: 'partials/add_brand.html',
            controller: 'inventoryController'
        })
        .when('/edit_brand/:id', {
            templateUrl: 'partials/edit_brand.html',
            controller: 'inventoryController'
        })


        //order
        .when('/edit_order/:order_id', {
            templateUrl: 'partials/orderdetails.html',
            controller: 'orderController'
        })
        .when('/Invoices-List', {
            templateUrl: 'partials/all_invoices.html',
            controller: 'orderController'
        })
        .when('/Edit-Invoice/:id', {
            templateUrl: 'partials/edit_invoice.html',
            controller: 'inventoryController'
        })
        .when('/updateinvoice/:id', {
            templateUrl: 'partials/updateinvoice.html',
            controller: 'inventoryController'
        })
        .when('/directbuyorderinvoice/:shipNo', {
            templateUrl: 'partials/directbuyinvoice.html',
            controller: 'inventoryController'
        })
        .when('/packinglist', {
            templateUrl: 'partials/packinglist.html',
            controller: 'inventoryController'
        })
        // staff
        .when('/add_staff', {
            templateUrl: 'partials/add_staff.html',
            controller: 'inventoryController'
        })
        .when('/staff-list', {
            templateUrl: 'partials/staff-list.html',
            controller: 'inventoryController'
        })
        .when('/edit_staff/:id', {
            templateUrl: 'partials/edit_staff.html',
            controller: 'inventoryController'
        })

        //Promocodes
        .when('/promocode', {
            templateUrl: 'partials/promocodes.html',
            controller: 'promocodeController'
        })

        .when('/add_promocode', {
            templateUrl: 'partials/add_promocode.html',
            controller: 'promocodeController'
        })

        .when('/edit_promocode/:id', {
            templateUrl: 'partials/edit_promocode.html',
            controller: 'promocodeController'
        })

        //settings
        .when('/addbasicinfo', {
            templateUrl: 'partials/addbasicinfo.html',
            controller: 'settingController'
        })

        .when('/viewbasicinfo', {
            templateUrl: 'partials/viewbasicinfo.html',
            controller: 'settingController'
        })

        .when('/editbasicinfo', {
            templateUrl: 'partials/editbasicinfo.html',
            controller: 'settingController'
        })

        .when('/headersetting', {
            templateUrl: 'partials/headersetting.html',
            controller: 'settingController'
        })

        .when('/footersetting', {
            templateUrl: 'partials/footersetting.html',
            controller: 'settingController'
        })

        .when('/footericonsetting', {
            templateUrl: 'partials/footericonsetting.html',
            controller: 'settingController'
        })

        //Product Category
        .when('/categorylist',{
            templateUrl:'partials/prod_category.html',
            controller: 'CategoryController'
        })
        
        .when('/addCategory',{
            templateUrl:'partials/addCategory.html',
            controller: 'CategoryController'
        })

        .when('/editCategory/:id', {
            templateUrl: 'partials/editCategory.html',
            controller: 'CategoryController'
        })



}]);
