

// $(document).on("click", "#logoutuser", ()=>{
page("/logout", ()=>{
$.ajax({
	url: "./api/logout-user",
    type: "POST",
    dataType: "json",
    data: { 
    	status: 0,
     }, 
    success: ()=>{
    page.redirect('/login');
    }
});
});

page("/admin-logout", ()=>{
$.ajax({
	url: "./api/logout-admin",
    type: "POST",
    dataType: "json",
    data: { 
    	status: 0,
     }, 
    success: ()=>{
    page.redirect('/admin-login');
    }
});
});

// });