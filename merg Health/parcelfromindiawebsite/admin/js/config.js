if (document.location.hostname == "www.gadgetsinasia.com" || 
document.location.hostname == "www.gadgetsinasia.com" ||
document.location.hostname == "www.parcelfromindia.com" || 
document.location.hostname == "parcelfromindia.com")
{
   var baseURL = "https://api.fountaintechies.com/api/";
   var imageURL = "https://api.fountaintechies.com/assets/web/40";
   var authorImageURL = "https://api.fountaintechies.com/assets/img";

} else {
   // var baseURL = "https://api.fountaintechies.com/api/";
   var baseURL = "http://localhost:2000/api/";
   var imageURL = "http://localhost:2000/assets/web/40";
}