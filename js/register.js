
$(document).on("click", "#register", ()=>{
 $("#form-user").empty().append(`
	<form action="../../index3.html" method="post">
	<div class="input-group mb-3">
	<input type="text" id="username" class="form-control" placeholder="Full Name">
	<div class="input-group-append">
	<div class="input-group-text">
	<span class="fas fa-envelope"></span>
	</div>
	</div>
	</div>
	<div class="input-group mb-3">
	<input type="email" id="email" class="form-control" placeholder="Email">
	<div class="input-group-append">
	<div class="input-group-text">
	<span class="fas fa-envelope"></span>
	</div>
	</div>
	</div>
	<div class="input-group mb-3">
	<input type="password" id="password" class="form-control" placeholder="Password">
	<div class="input-group-append">
	<div class="input-group-text">
	<span class="fas fa-lock"></span>
	</div>
	</div>
	</div>
	<div class="form-group">
	<select class="custom-select rounded-0" id="userstatus">
	<option value="client">Client</option>
	<option value="organizer">Organizer</option>
	</select>
	</div>	
	<div class="row">
	<div class="col-8">
	</div>

	<div class="col-4">
	<button type="button" id="registeruser" class="btn btn-primary btn-block">Register</button>
	</div>

	</div>
	</form>
	<p class="mb-0">
	<a class="text-center" style="cursor: pointer;" id="signin">Back to Sign in?</a>
	</p>
 `);		
});

$(document).on("click", "#forgotpass", ()=>{
 $("#form-user").empty().append(`
 	<p class="login-box-msg">Input your email & new password.</p>
	<form>
	<div class="input-group mb-3">
	<input type="email" id="newemail" class="form-control" placeholder="Email">
	<div class="input-group-append">
	<div class="input-group-text">
	<span class="fas fa-envelope"></span>
	</div>
	</div>
	</div>
	<div class="input-group mb-3">
	<input type="password" id="newpassword" class="form-control" placeholder="New Password">
	<div class="input-group-append">
	<div class="input-group-text">
	<span class="fas fa-lock"></span>
	</div>
	</div>
	</div>	
	<div class="row">
	<div class="col-8">
	</div>

	<div class="col-4" id="redmessage">
	<button type="button" id="resetpassword" class="btn btn-primary btn-block">Reset</button>
	</div>

	</div>
	</form>
	<p class="mb-0">
	<a class="text-center" style="cursor: pointer;" id="signin">Back to Sign in?</a>
	</p>
 `);		
});

$(document).on("click", "#signin", ()=>{
 $("#form-user").empty().append(`
<p class="login-box-msg">Sign in to start your session</p>
<form >
<div class="input-group mb-3">
<input type="email" class="form-control" id="email" placeholder="Email">
<div class="input-group-append">
<div class="input-group-text">
<span class="fas fa-envelope"></span>
</div>
</div>
</div>
<div class="input-group mb-3">
<input type="password" class="form-control" id="password" placeholder="Password">
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
  <button type="button" id="loginuser" class="btn btn-primary btn-block">Sign in</button>
</div>

</div>
</form>

<p class="mb-1">
<a class="text-center" style="cursor: pointer;" id="forgotpass">I forgot my password</a>
</p>
<p class="mb-0">
<a class="text-center" style="cursor: pointer;" id="register">Register a new membership</a>
</p>
 `);		
});

$(document).on("click", "#registeruser", ()=>{

$.ajax({
	url: "api/register-user",
    type: "POST",
    dataType: "json",
    data: { 
	username: $("#username").val(),
	email: $("#email").val(),
	password: $("#password").val(),
	userstatus: $("#userstatus").val()
     }, 
    success: (data)=>{
	$("#username").val("");
	$("#email").val("");
	$("#password").val("");
	$("#userstatus").val("");

    }
});

});

$(document).on("click", "#loginuser", ()=>{
$.ajax({
	url: "api/login-user",
    type: "POST",
    dataType: "json",
    data: { 
	email: $("#email").val(),
	password: $("#password").val()
     }, 
    success: (data)=>{
    // console.log(data.identity);
    if (data.identity == 1) {
    page("/organizer");	
    }else if (data.identity == 0) {
    page("/user");	
    }else if (data.identity == 2) {
	Swal.fire({
	  icon: 'error',
	  title: 'Oops...',
	  text: 'This is an Admin Account!',
	});
    }else if (data.identity == 13) {
	Swal.fire({
	  icon: 'error',
	  title: 'Oops...',
	  text: 'User not verified!',
	});
    }else if (data.identity == 14) {
	Swal.fire({
	  icon: 'error',
	  title: 'Oops...',
	  text: 'Wrong email address!',
	});
    }else if (data.identity == 15) {
	Swal.fire({
	  icon: 'error',
	  title: 'Oops...',
	  text: 'Wrong password!',
	});
    }

    }
});

});

$(document).on("click", "#forgot", ()=>{
console.log("shit");
 toastr.warning("warning!!!!");

});

$(document).on("click", "#resetpassword", ()=>{
$.ajax({
	url: "api/reset-password",
    type: "POST",
    dataType: "json",
    data: { 
	email: $("#newemail").val(),
	password: $("#newpassword").val()
     }, 
    success: (data)=>{
    page("/login");	
	Swal.fire(
	  'Link sent!',
	  'View your email to reset password.',
	  'info'
	)

    	
    }
});
});