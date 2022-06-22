
const loginTemplate = `

<div class="login-box">
<div class="login-logo" style="background-color: white; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 25px; font-family: 'Lucida Console', 'Courier New', monospace;">
<img src="./img/logo.png" style="height: 40px; width: 250px;">
</div>

<div class="card" style="border-radius: 30px;" id="dataStorage">
<div class="card-body login-card-body" id="form-user" style="border-radius: 30px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
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
</div>

</div>
</div>
`;

page("/login", ()=>{
document.getElementById("main").setAttribute("class", "login-page");
document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white; background: url('./img/b.jfif') center center; background-size: cover;");
$("#main").empty();
$("#main").html(loginTemplate).show();

});