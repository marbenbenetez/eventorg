page.base("/eventorg");

page('/', (e) => {
  
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
	    if (data.identity == 1) {
	    page("/organizer");	
	    }else if (data.identity == 0) {
	    page("/user");	
	    }else if (data.identity == 2) {
	    page("/admin");	
	    }
    }else if (data.status == 0) {
    	page.redirect('/login');	
    }

    }
	});		

});



page('*', (e) => {
  console.log(e);
});


page();