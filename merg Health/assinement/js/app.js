const module = angular.module("myApp",[]);

module.controller("uploadController",function($scope,$window,$http){
$scope.value='';
$scope.getData=()=>{
        $http.get("http://localhost:8100/getdata").then((res)=>{
                        $scope.resdata=res.data.data;
                        console.log($scope.resdata);
        })
}
$scope.delete=(id)=>{
            let wn=window.confirm("are u sure want to delete");
            if(wn==true)
            {   
        $http.post("http://localhost:8100/deletedata",{id:id}).then((res)=>{
            let response=res.data;
            if(response.status==true){
                window.alert(response.message);
                location.reload();
            }
            else{
                window.alert(response.message);
            }
        })
            }
            else{
                console.log('canceled');
            }
}
$scope.search=()=>{
    if($scope.value=='')
    {
        $scope.getData();
    }
    else
    {
   $scope.resdata=$scope.resdata.filter((res)=>{
    return res.c_name.toLocaleLowerCase().startsWith($scope.value.toLocaleLowerCase());
   })
}
}
const excel_file = document.getElementById('excel_file');

excel_file.addEventListener('change', (event) => {

    if(!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(event.target.files[0].type))
    {
        document.getElementById('excel_data').innerHTML = '<div class="alert alert-danger">Only .xlsx or .xls file format are allowed</div>';
        excel_file.value = '';

        return false;
    }

    var reader = new FileReader();

    reader.readAsArrayBuffer(event.target.files[0]);

    reader.onload = function(event){

        var data = new Uint8Array(reader.result);

        var work_book = XLSX.read(data, {type:'array'});

        var sheet_name = work_book.SheetNames;

        var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header:1});

        if(sheet_data.length > 0)
        {
            var table_output = '<table class="table table-striped table-bordered">';

            for(var row = 0; row < sheet_data.length; row++)
            {

                table_output += '<tr>';

                for(var cell = 0; cell < sheet_data[row].length; cell++)
                {
                
                    if(row == 0)
                    {
                    }
                    else
                    {
                        let data=sheet_data[cell]
                        let apidata=
                        {
                        c_name: data[0],
                        c_batch_no:data[1],
                        d_expiry_date:data[2],
                        n_balance_qty:data[3],
                        c_packaging:data[4],
                        c_unique_code:data[5],
                        c_schemes:data[6],
                        n_mrp:data[7],
                        c_manufacturer:data[8],
                        hsn_code:data[9]
                        }
                        $http.post("http://localhost:8100/upload",apidata).then((res)=>{
                               $scope.res=res;
                        })
                    };

                }
            }
        } 

    }

});
//         let dataObj=[];
//         $scope.upload=()=>{

//                 let reader=new FileReader();
//                 let input=file;
//                 reader.readAsArrayBuffer(input.files[0]);
//                 reader.onload=()=>{
//                         var filedata=reader.result;
//                         let book=XLSX.read(filedata,{type:"array"});

//                 }   
//         //    var file = $scope.file
//         //    $http.post("http://localhost:8100/upload").then((res)=>{
//         //            console.log(res);
//         //    })
//         }
})