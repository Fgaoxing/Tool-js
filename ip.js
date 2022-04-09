function GetIp(){
  fetch("https://ipapi.co/json").then(
    function(response){
      response.json().then((res)=>{
        return res;
       })
     })
 } 
