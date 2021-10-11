
var foto;
window.onload=()=>
{
    foto = new Foto();
    
}
grayScale=()=>{
    foto.grayscale();
}
makeBright=()=>{
foto.makeBright();
}
makeDark=()=>{
foto.makeDark();
}
Blur=()=>{
foto.applyBlurFilter();
}
makeTransparent=()=>{
foto.makeTransparent();
}
applySharpFilter=()=>{
foto.applySharpFilter();
}
Export=()=>{
foto.Export();
}
uploadFile=()=>{
foto.uploadFile();
}
applyFilter=()=>{
    foto.applyEmbossFilter()
}
previewImage=()=>{
    foto.previewImage();
}
editor=()=>{

  Painterro().show()

}