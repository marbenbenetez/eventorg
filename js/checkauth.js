
$(document).ready(()=>{
$.ajax({
	url: "./api/check-auth",
    type: "POST",
    dataType: "json",
    data: { 
    	userid: 1,
     }, 
    success: (data)=>{
    console.log(data);	
    if (data.status == 1) {
    
    }else{	
    // window.location.href = "../index.html";	
    }	
    }
});
});