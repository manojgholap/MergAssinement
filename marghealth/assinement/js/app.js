const module = angular.module("myApp", []);

module.controller("uploadController", function ($scope, $window, $http) {
    $scope.value = '';
    // $scope.text="hello"

    var foto = new Foto();

    $scope.grayscale = () => {
        foto.grayscale();
    }
    $scope.getData = () => {
        $http.get("http://localhost:8100/getdata").then((res) => {
            $scope.resdata = res.data.data;
        })
    }
    $scope.editImage = (filename) => {
        var ptro = Painterro({
            // onChange: function(image,done){
            //     Tesseract.recognize(
            //         image,
            //         'eng',
            //         { logger: m => console.log(m) }
            //       ).then(({ data: { text } }) => {
            //         console.log(text);
            //       })
            // },

            saveHandler: function (image, done) {
                const img = image.asDataURL();
                const imageName = "Marg" + "-" + Date.now();
                const bufferData = {
                    image: img,
                    imageName: imageName
                }
                $http.post("http://localhost:8100/uploadFile", bufferData).then((res) => {
                    $scope.resp = res.data;
                    if ($scope.resp.status == true) {
                        window.alert($scope.resp.message);
                        location.reload();
                    }
                    else {
                        window.alert($scope.resp.message);
                    }
                })
                done(true);
            }
        });
        ptro.show("http://localhost:8100/uploads/" + filename);
    }
    $scope.editor = () => {

        var ptro = Painterro({
            // onChange: function (image) {
            //     const img = image.image
            //     let imgdata = img.asDataURL();
            //     Tesseract.recognize(
            //         imgdata,
            //         'eng',
            //         { logger: m => console.log(m) }
            //     ).then(({ data: { text } }) => {
            //         console.log(text);
            //         $scope.text=text;
            //         $scope.convertedtext=$scope.text;
            //         window.alert($scope.text);
            //     })
            // },
            saveHandler: function (image, done) {
                const img = image.asDataURL();
                // Tesseract.recognize(
                //     img,
                //     'eng',
                //     { logger: m => console.log(m) }
                // ).then(({ data: { text } }) => {
                //     console.log(text);
                //     $scope.text=text;
                // })

                const imageName = "Marg" + "-" + Date.now();
                const bufferData = {
                    image: img,
                    imageName: imageName
                }
                $http.post("http://localhost:8100/uploadFile", bufferData).then((res) => {
                    $scope.resp = res.data;
                    if ($scope.resp.status == true) {
                        window.alert($scope.resp.message);
                        // location.reload();
                         $scope.convertedtext=$scope.text;
                    }
                    else {
                        window.alert($scope.resp.message);
                    }
                })
                done(true);
            }
        });
        // ptr.show()
        ptro.show();
    }
    $scope.getImageData = () => {
        $http.get("http://localhost:8100/getImageData").then((res) => {
            $scope.resImagedata = res.data.data;
            //    console.log($scope.resImagedata);
        })
    }
    $scope.edit = () => {
        document.getElementById('foto-file').click();
    }

    $scope.updatelist = (data) => {

        $http.post("http://localhost:8100/updateStatus", data).then((res) => {
            let resp = res.data
            if (resp.status == true) {
                window.alert(resp.message);
            }
            else {
                window.alert('unable to update');
            }
        })
    }
    $scope.delete = (id) => {
        let wn = window.confirm("are u sure want to delete");
        if (wn == true) {
            $http.post("http://localhost:8100/deletedata", { id: id }).then((res) => {
                let response = res.data;
                if (response.status == true) {
                    window.alert(response.message);
                    location.reload();
                }
                else {
                    window.alert(response.message);
                }
            })
        }
        else {
            console.log('canceled');
        }
    }
    $scope.search = () => {
        if ($scope.value == '') {
            $scope.getData();
        }
        else {
            $scope.resdata = $scope.resdata.filter((res) => {
                return res.c_name.toLocaleLowerCase().startsWith($scope.value.toLocaleLowerCase());
            })
        }
    }
    // $scope.uploadFle=(event)=>{
    //     console.log(event);
    // }
    // $scope.selectedFile=(event)=>{
    // console.log(event);
    // }
    // const file = document.getElementById('foto-image');
    // // console.log(file);
    // file.addEventListener('change',(event)=>{
    //     console.log(event);
    //     // $scope.fileName=event.target.files[0].name;
    //     //    const reader = new FileReader();
    //     //      reader.readAsDataURL(event.target.files[0]);
    //     //     reader.onload=(event)=>
    //     //     {
    //     //       $scope.isrc=event.target.result;
    //     //     }
    // })
    $scope.uploadFile = () => {
        var input = document.getElementById("foto-image");
        console.log(input.src);

        const imageData = input.src;
        const imageName = "Marg" + "-" + Date.now();
        const bufferData = {
            image: imageData,
            imageName: imageName
        }
        $http.post("http://localhost:8100/uploadFile", bufferData).then((res) => {
            $scope.resp = res.data;
            if ($scope.resp.status == true) {
                window.alert($scope.resp.message);
                location.reload();
            }
            else {
                window.alert($scope.resp.message);
            }
        })
    }
    // excel_file=document.getElementById("excel_file");
    // excel_file.addEventListener('change', (event) => {

    //     if(!['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'].includes(event.target.files[0].type))
    //     {
    //         document.getElementById('excel_data').innerHTML = '<div class="alert alert-danger">Only .xlsx or .xls file format are allowed</div>';
    //         excel_file.value = '';
    //         return false;
    //     }

    //     var reader = new FileReader();

    //     reader.readAsArrayBuffer(event.target.files[0]);

    //     reader.onload = function(event){

    //         var data = new Uint8Array(reader.result);

    //         var work_book = XLSX.read(data, {type:'array'});

    //         var sheet_name = work_book.SheetNames;

    //         var sheet_data = XLSX.utils.sheet_to_json(work_book.Sheets[sheet_name[0]], {header:1});

    //         if(sheet_data.length > 0)
    //         {

    //             for(var row = 0; row < sheet_data.length; row++)
    //             {

    //                 for(var cell = 0; cell < sheet_data[row].length; cell++)
    //                 {

    //                     if(row == 0)
    //                     {
    //                     }
    //                     else
    //                     {
    //                         let data=sheet_data[cell]
    //                         let apidata=
    //                         {
    //                         c_name: data[0],
    //                         c_batch_no:data[1],
    //                         d_expiry_date:data[2],
    //                         n_balance_qty:data[3],
    //                         c_packaging:data[4],
    //                         c_unique_code:data[5],
    //                         c_schemes:data[6],
    //                         n_mrp:data[7],
    //                         c_manufacturer:data[8],
    //                         hsn_code:data[9]
    //                         }
    //                         $http.post("http://localhost:8100/upload",apidata).then((res)=>{
    //                                $scope.res=res.data; 
    //                         })
    //                     };

    //                 }
    //             }
    //         } 
    //         console.log($scope.res);
    //     }

    // });

})