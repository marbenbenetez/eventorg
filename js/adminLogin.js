
const adminLogin = `
<div class="login-box">
<div class="login-logo" style="background-color: white; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 25px; font-family: 'Lucida Console', 'Courier New', monospace;">
<b>ADMIN PANEL</b>
</div>

<div class="card" style="border-radius: 30px;" id="dataStorage">
<div class="card-body login-card-body" id="form-user" style="border-radius: 30px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
<p class="login-box-msg">Sign in to start your session</p>
<form >
<div class="input-group mb-3">
<input type="email" class="form-control" id="adminemail" placeholder="Email">
<div class="input-group-append">
<div class="input-group-text">
<span class="fas fa-envelope"></span>
</div>
</div>
</div>
<div class="input-group mb-3">
<input type="password" class="form-control" id="adminpassword" placeholder="Password">
<div class="input-group-append">
<div class="input-group-text">
<span class="fas fa-lock"></span>
</div>
</div>
</div>
<div class="row">
<div class="col-8">
</div>

<div class="col-4">
  <button type="button" id="loginadmin" class="btn btn-primary btn-block">Sign in</button>
</div>

</div>
</form>

<p class="mb-1">

</p>
<p class="mb-0">

</p>
</div>

</div>
</div>
`;

page('/admin-login', (e) => {
	
document.getElementById("main").setAttribute("class", "login-page");
document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white; background: url('./img/cool-background.svg') center center; background-size: cover;");
$("#main").empty();
$("#main").html(adminLogin).show();

});

$(document).on("click", "#loginadmin", ()=>{

$.ajax({
	url: "api/login-admin",
    type: "POST",
    dataType: "json",
    data: { 
	email: $("#adminemail").val(),
	password: $("#adminpassword").val()
     }, 
    success: (data)=>{

    if (data.identity == 2) {
    page("/admin");	
    }else {
	Swal.fire({
	  icon: 'error',
	  title: 'Oops...',
	  text: 'Data not found',
	});
    }

    }
});
});