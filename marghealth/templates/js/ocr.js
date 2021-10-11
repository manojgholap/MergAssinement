const worker = new Tesseract.TesseractWorker();
worker.recognize(file, $("#langsel").val())
.progress(function(packet){
    console.info(packet)
    progressUpdate(packet)
})
.then(function(data){
    console.log(data)
    progressUpdate({ status: 'done', data: data })
})