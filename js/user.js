var userTemplate = `
<style>

</style>
<div class="wrapper">

<!-- Modal -->
<div class="modal fade" id="orgproftemplate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
      </div>
      <div class="modal-body" id="orgContainer">
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<!-- Modal -->
<div class="modal fade" id="replaceemail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      </div>
      <div class="modal-body">
      <input type="email" id="newemail" class="form-control" aria-describedby="passwordHelpBlock">
      </div>
      <div class="modal-footer">
      <button type="button" class="btn btn-info" id="updateemail">Update</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="">Close</button>
      </div>
    </div>
  </div>
</div>

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand-md navbar-dark navbar-cyan border-bottom-0" style="">
    <div class="container">





      <!-- Right navbar links -->
      <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
        <li class="nav-item dropdown">
      <a href="./user-my-acount" class="navbar-brand">
        <img id="navimage" src="" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light" id="userinfo"><b>EventOrg</b></span>
      </a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" id="usernotifications" style="cursor: pointer;">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge" id="notifcountuser"></span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right scroll" id="notifuser">


          </div>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" id="messages" style="cursor: pointer;">
            <i class="far fa-envelope" style="pointer-events: none;"></i>
            <span class="badge badge-warning navbar-badge" id="messagescount"></span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right scroll" id="messagenotif">


          </div>
        </li>

          <li class="nav-item dropdown">
            <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle"></a>
            <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu dropdown-menu-right border-0 shadow">
              <li><a class="dropdown-item" href="./user-account" id="useraccount" style="cursor: pointer;"><i class="fa fa-user" aria-hidden="true"></i> Manage Account</a></li>
              <li><a class="dropdown-item" href="./logout" id="logoutuser" style="cursor: pointer;"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
            </ul>
          </li>


      </ul>
    </div>
  </nav>
  <!-- /.navbar -->
  <header style="background-color: white; border-bottom-1">
    <div class="content" >
      <div class="container" >
      <a href="./user">
      <img src="./img/logo.png" style="height: 40px; width: 250px;">
      </a>
      </div>
    </div> 
  </header>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper scroll" id="maincontainer" >
    <!-- Content Header (Page header) -->

    <div class="content-header" id="submaincontainer2">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0"></h1>
          </div><!-- /.col -->

        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>

    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content" >
      <div class="container" style="background-color: rgba(245, 245, 245, 0.54); border-radius: 10px;">
        <div class="card" style="width: 100%">
                  <div class="card-header">    
                    <div class="row">   
                    <div class="col-md-8" style="background-color: rgba(237, 237, 237, 0.8); border-radius: 5px; cursor: pointer;" id="showEventForm">
                      <h5 style="margin-top: 5px; color: gray;">Hire someone?</h5>
                    </div>
                    <div class="col-md-4">
             <div class="input-group input-group-sm" style="width: 100%; margin-top: 5px;">
                  <input class="form-control form-control-navbar searchCategory" id="searchCategory" type="search" placeholder="Search for other services" aria-label="Search">
                  <div class="input-group-append">
                    <button class="btn btn-info" type="submit">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right scroll" id="dropdownResult" style="width: 40%;">

                </div>
      </div>
                    </div>
                    </div>  
                  </div>
        </div>
        <div class="row" id="">
          <div class="col-md-3" >
           <div class="card" style="width: 100%">
              <h4>Filtered By:</h4>
              <div class="card-header">
              <h5><b>Services</b></h5>    
                  <div class="row">   
                      <div class="form-group" id="filteredServices">

                      </div>
                  </div>  
              </div>
          </div> 

 <!--       <div class="card card-outline card-primary">
              <div class="card-header">
                <h3 class="card-title">Primary Outline</h3>

                <div class="card-tools">
                  <button type="button" class="btn btn-tool" id="hiddendiv" data-style="block">
                    <i id="icon-hide" class="fas fa-minus" style="pointer-events: none;"></i>
                  </button>
                </div>
  
              </div>
             
              <div class="card-body" style="display: block;" id="userAllsponsors">
               
              </div>
      
            </div> -->



          </div>
          <div class="col-md-9" id="allevents">
     
          </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->

  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">
      Anything you want
    </div>
    <!-- Default to the left -->
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
  </footer>
</div>

<!-- Modal -->
<div class="modal fade" id="addEventModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <form>
            <div class="form-group">
            <label for="exampleInputEmail1">Service Categories</label>
            <select class="form-control"  name="services" id="servicesCategory" style="width: 100%;"> </select>
            </div>   
            <div class="form-group" style="display: none;" id="additional">
            <label for="exampleInputEmail1">Service</label>
            <input type="text" class="form-control" id="additionalServ" placeholder="Enter Service">
            </div>   
            <div class="form-group">
            <label for="exampleInputEmail1">Budget</label>
            <input type="number" class="form-control" id="servicePrice" placeholder="Enter Price">
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Job Title</label>
            <input type="text" class="form-control" id="seviceTitle" placeholder="Job title">  
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Job Description</label>
            <textarea id="seviceDescription" style="width: 100%;" placeholder="Short description..."></textarea>
            </div>   
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="postEvent">Post</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="addEventModalEdit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <form id="formedit">
 
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="updateEvent">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="updateinfo" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <form id="updateProfile">
        
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="saveInfo">Save</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="rating" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
                    <div class="description-block">
                      <button id="star" class="star">&#9734</button>
                      <button id="star" class="star">&#9734</button>
                      <button id="star" class="star">&#9734</button>
                      <button id="star" class="star">&#9734</button>
                      <button id="star" class="star">&#9734</button>
                    </div>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="changeprofilepic" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <input type="file" class="filepond1" name="filepond" data-allow-reorder="true" data-max-file-size="20MB" data-max-files="20">
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="changecoverphoto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <input type="file" class="filepond2" name="filepond" data-allow-reorder="true" data-max-file-size="20MB" data-max-files="20">
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="updateuserpassword" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <label for="inputPassword5" class="form-label">Old Password</label>
      <input type="password" id="oldPassword" class="form-control" aria-describedby="passwordHelpBlock">
      <input type="checkbox" onclick="showPassword2()"> Show Password </br>

      <label for="inputPassword5" class="form-label">New Password</label>
      <input type="password" id="resetPassword" class="form-control" aria-describedby="passwordHelpBlock">
      <input type="checkbox" onclick="showPassword1()"> Show Password 
      <div id="passwordHelpBlock" class="form-text">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary btn-sm" id="userResetPass">Reset Password</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="listofimages" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-body">
         <div class="row" id="imagecontainer">

         </div>
         <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="closeimage" data-bs-dismiss="modal">Close</button>
         </div> 
      </div>
    </div>
  </div>

</div>
`;

page("/user", ()=>{
$.ajax({
  url: "./api/load-user-data",
  type: "POST",
  data: {
    load: 0,
  },
  success: (data)=>{
  console.log(data);  
  document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
  document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(userTemplate).show();
  $("#userinfo").text(data.username); 
  document.getElementById("navimage").setAttribute("src", data.userimage);
  // document.getElementById("usernavimage").setAttribute("src", data.userimage);
  searchsubcategory();

    $("#allevents").empty();

    $.each(data.allevents, (indx, events)=>{
      if (events.subserv === "") {
         $("#allevents").append(`
                <div class="row" id="event${events.id}" >
                  <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                    <div class="card-header">
                    <div class="user-block">
                              <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                              <span class="username">
                                <a href="./organizer-view-profile">${events.username }</a>
                              </span>
                              <span class="description">Shared publicly - ${events.date}</span>
                              <h5 class="card-title m-0" ><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                            </div>        
                    </div>
                    <div class="card-body">
                      <h6 class="card-title"><b>${events.eventname}</b></h6>

                      <p class="card-text" style="font-size: 13px;">${events.description}</p>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
      }else{
       $("#allevents").append(`
              <div class="row" id="event${events.id}" >
                <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                  <div class="card-header">
                  <div class="user-block">
                            <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                            <span class="username">
                              <a href="./organizer-view-profile">${events.username }</a>
                            </span>
                            <span class="description">Shared publicly - ${events.date}</span>
                             <h5 class="card-title m-0" ><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                          </div>    
                   
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
      }
  
    });
    $("#filteredServices").empty();
    $.each(data.services, (indx, services)=>{
    $("#filteredServices").append(`
      <div class="form-check">
        <input class="form-check-input filter" type="checkbox" data-id="${services.id}">
        <label class="form-check-label">${services.service} (${services.eventcount})</label>
      </div>
    `);  
    });

    // $("#userAllsponsors").empty();
    // $("#userAllsponsors").append(`
    // <h5><b>Sponsors</b></h5>  
    // `);

    // $.each(data.sponsor, (indx, sponsor)=>{
    // $("#userAllsponsors").append(`
    //           <div class="card bg-light d-flex flex-fill">
    //             <div class="card-header text-muted border-bottom-0">
    //               ${sponsor.link}
    //             </div>
    //             <div class="card-body pt-0">
    //               <div class="row">
    //                 <div class="col-7">
    //                 <p>${sponsor.sponsor}</p>
    //                 </div>
    //                 <div class="col-5 text-center">
    //                   <img src="${sponsor.image}" alt="user-avatar" class="img-fluid">
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    // `);    
    // });


  if (data.messagecount != 0) {
  $("#messagescount").text(data.messagecount);  
  }else{
  $("#messagescount").text("");
  }
  clearInterval(intervalID);
  }
});
});

var intervalID;


$(document).on("click", "#usernotifications", (e)=>{

$.ajax({
  url: "./api/load-user-notification",
  type: "POST",
  data: {
    load: 0,
  },
  success: (data)=>{
  $("#notifuser").empty();
  console.log(data.userinfo.length);
  if (data.userinfo.length == 0) {
      $("#notifuser").append(`
            <div class="dropdown-divider"></div>
            <a style="cursor: pointer;" class="dropdown-item" >
              <i class="far fa-bell" aria-hidden="true"></i> Empty Notification. 
            </a>  
      `);
  }else{
    $.each(data.userinfo, (indx, info)=>{
      $("#notifuser").append(`
            <div class="dropdown-divider"></div>
            <a style="cursor: pointer;" class="dropdown-item" href="./user-${info.eventid}-applicants">
              <i class="far fa-bell" aria-hidden="true"></i> Application  
              <span class="float-right text-muted text-sm">${info.date}</span>
              <br>
              <span class="text-muted text-sm"><b>${info.fullname}</b> Send an application</span>
              <br>
              <span class="text-muted text-sm">to ${info.eventname}.</span>
            </a>  
      `);
    });
  }


  }
});

});


$(document).on("click", ".filter", (e)=>{

let x = $('.filter').filter(':checked');

$("#allevents").empty();

if (x.length == 0) {
$.ajax({
  url: "./api/load-user-data",
  type: "POST",
  data: {
    load: 0,
  },
  success: (data)=>{

    $.each(data.allevents, (indx, events)=>{
      if (events.subserv === "") {
         $("#allevents").append(`
                <div class="row" id="event${events.id}" >
                  <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                    <div class="card-header">
                    <div class="user-block">
                              <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                              <span class="username">
                                <a href="./organizer-view-profile">${events.username }</a>
                              </span>
                              <span class="description">Shared publicly - ${events.date}</span>
                              <h5 class="card-title m-0" ><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                            </div>        
                    </div>
                    <div class="card-body">
                      <h6 class="card-title"><b>${events.eventname}</b></h6>

                      <p class="card-text" style="font-size: 13px;">${events.description}</p>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
      }else{
       $("#activeEvents").append(`
              <div class="row" id="event${events.id}" >
                <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                  <div class="card-header">
                  <div class="user-block">
                            <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                            <span class="username">
                              <a href="./organizer-view-profile">${events.username }</a>
                            </span>
                            <span class="description">Shared publicly - ${events.date}</span>
                             <h5 class="card-title m-0" ><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                          </div>    
                   
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
      }
  
    });

  }
});
}else{
for (let i = 0; i < x.length; i++) {

$.ajax({
  url: "./api/get-filtered-category",
  type: "POST",
  data: {
   catid: x[i].dataset.id, 
  },
  success: (data)=>{

    $.each(data.events, (indx, events)=>{
      if (events.subserv === "") {
         $("#allevents").append(`
                <div class="row" id="event${events.id}" >
                  <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                    <div class="card-header">
                    <div class="user-block">
                              <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                              <span class="username">
                                <a href="./user-view-profile">${events.username }</a>
                              </span>
                              <span class="description">Shared publicly - ${events.date}</span>
                              <h5 class="card-title m-0" ><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                            </div>        
                    </div>
                    <div class="card-body">
                      <h6 class="card-title"><b>${events.eventname}</b></h6>

                      <p class="card-text" style="font-size: 13px;">${events.description}</p>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
      }else{
       $("#activeEvents").append(`
              <div class="row" id="event${events.id}" >
                <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                  <div class="card-header">
                  <div class="user-block">
                            <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                            <span class="username">
                              <a href="./user-view-profile">${events.username }</a>
                            </span>
                            <span class="description">Shared publicly - ${events.date}</span>
                             <h5 class="card-title m-0" ><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                          </div>    
                   
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
      }
  
    });

  }
})


}
}

});



page("/user-my-acount", ()=>{

$.ajax({
  url: "./api/load-user-data",
  type: "POST",
  data: {
    load: 0,
  },
  success: (data)=>{
  console.log(data.info[0]);  
  document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
  document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(userTemplate).show();
  $("#userinfo").text(data.username); 
  searchsubcategory();
  $("#maincontainer").empty();

  $("#maincontainer").append(`   
  <div class="content">
      <div class="container" style="background-color: rgba(245, 245, 245, 0.54)">
      </br>
      <div class="row">
      <div class="card card-widget widget-user" style="width: 100%;">
              <!-- Add the bg color to the header using any of the bg-* classes -->
              <div id="changecover" data-userid="WJxbojagwO" class="widget-user-header text-white" style="background: url('${data.usercover}') center center; background-size: cover; cursor: pointer;">
                <h3 class="widget-user-username text-right" style="background-color: rgba(139, 139, 139, 0.54); border-radius:10px 10px 1px 1px;">${data.info[0].fullname}</h3>
                <h5 class="widget-user-desc text-right" style="background-color: rgba(139, 139, 139, 0.54); border-radius:1px 1px 10px 10px;">${data.info[0].email}</h5>
              </div>
              <div class="widget-user-image" id="profilepic">
                <img class="img-circle" id="changeprofile" data-userid="WJxbojagwO" src="${data.userimage}" style="cursor: pointer; width: 100px; height: 100px;" alt="User Avatar">
              </div>
              <div class="card-footer">
              <div class="row">
          
              </div>
                <!-- /.row -->
              </div>
            </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="card-body" style="background-color: white;">
                <strong><i class="fas fa-book mr-1"></i> Education</strong>

                <p class="text-muted">
                 ${data.info[0].school}
                </p>

                <hr>

                <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                <p class="text-muted">${data.info[0].address}</p>

                <hr>

                <strong><i class="fas fa-phone-alt mr-1"></i> Contact</strong>

                <p class="text-muted">
                ${data.info[0].contact}
                </p>

                <hr>

                <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

                <p class="text-muted">${data.info[0].notes}</p>
              </div>
        </div>


        <div class="col-md-9 scroll" id="createdEvents">
        <div class="card" style="width: 100%">
          <div class="card-header">       
                <ul class="nav nav-pills">
                  Recent Posts
                </ul>
          </div>
        </div>

        </div>
      </div>

      </div>
    </div>
  `);

  $.each(data.events, (indx, events)=>{ 
  if (events.status == 0) {
    if (events.subserv === "") {
       $("#createdEvents").append(`
              <div class="row">
                <div class="card" style="width: 100%;">
                  <div class="card-header">       
                    <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <span class="">
                        <a style="cursor: pointer;" href="./user-${events.id}-applicants" class="link-black text-sm" data-eventid="${events.id}" id="viewApplicants">
                        <i class="far fa-bell mr-1"></i> Applicants (${events.applicants})
                        </a>
                    </span>
                    <p class="card-text" style="font-size: 13px; float: right;"><i>Date created: ${events.date}</i></p>
                  </div>
                  <div class="card-footer">
                    <a id="editEvent" class="btn btn-primary btn-sm" data-eventid="${events.id}">Edit</a>
                    <a id="deleteEvent" class="btn btn-danger btn-sm" data-eventname="${events.eventname}" data-eventid="${events.id}">Delete</a>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
    }else{
       $("#createdEvents").append(`
              <div class="row">
                <div class="card" style="width: 100%;">
                  <div class="card-header">       
                    <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <span class="">
                        <a style="cursor: pointer;" href="./user-${events.id}-applicants" class="link-black text-sm" data-eventid="${events.id}" id="viewApplicants">
                        <i class="far fa-bell mr-1"></i> Applicants (${events.applicants})
                        </a>
                    </span>
                    <p class="card-text" style="font-size: 13px; float: right;"><i>Date created: ${events.date}</i></p>
                  </div>
                  <div class="card-footer">
                    <a id="editEvent" class="btn btn-primary btn-sm" data-eventid="${events.id}">Edit</a>
                    <a id="deleteEvent" class="btn btn-danger btn-sm" data-eventname="${events.eventname}" data-eventid="${events.id}">Delete</a>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
    }

  }else{

    if (events.subserv === "") {
       $("#createdEvents").append(`
              <div class="row">
                <div class="card" style="width: 100%;">
                  <div class="card-header">       
                    <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <span class="">
                        <a style="cursor: pointer;" href="./user-${events.id}-applicant-accepted" class="link-black text-sm" data-eventid="${events.id}" id="viewAcceptedApplicant">
                        <i class="far fa-bell mr-1"></i> Applicant accepted 
                        </a>
                    </span>
                    <p class="card-text" style="font-size: 13px; float: right;"><i>Date created: ${events.date}</i></p>
                  </div>
                  <div class="card-footer">
                  <h3 style="color: green; font-size: 16px;">Event settled</h3>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
    }else{
     $("#createdEvents").append(`
            <div class="row">
              <div class="card" style="width: 100%;">
                <div class="card-header">       
                  <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                </div>
                <div class="card-body">
                  <h6 class="card-title"><b>${events.eventname}</b></h6>

                                  <p class="card-text" style="font-size: 13px;">${events.description}</p>
                    <span class="">
                      <a style="cursor: pointer;" href="./user-${events.id}-applicant-accepted" class="link-black text-sm" data-eventid="${events.id}" id="viewAcceptedApplicant">
                      <i class="far fa-bell mr-1"></i> Applicant accepted 
                      </a>
                  </span>
                  <p class="card-text" style="font-size: 13px; float: right;"><i>Date created: ${events.date}</i></p>
                </div>
                <div class="card-footer">
                <h3 style="color: green; font-size: 16px;">Event settled</h3>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `);
    }


  } 
  
  });
  document.getElementById("navimage").setAttribute("src", data.userimage);

  if (data.messagecount != 0) {
  $("#messagescount").text(data.messagecount);  
  }else{
  $("#messagescount").text("");
  }
  clearInterval(intervalID);
  }
});

});


$(document).on("click", "#showEventForm", ()=>{

	$("#addEventModal").modal("show");	

    $.fn.select2.defaults.set( "theme", "bootstrap" );
    $("#servicesCategory").select2({
    placeholder: "Select category",	
    ajax: {
    url: "./api/get-services-data",
    type: "post",
    dataType: 'json',
    delay: 250,
    data: function (params) {
    return {
      searchTerm: params.term, // search term
    };
    },
    processResults: function (response) {
    return {
    results: response
    };

    },
      cache: true
    },
    }).on("select2:select", function(e) { 

    if (e.params.data.text === "Others") {
      document.getElementById('additional').style.display = "block";
    }else{
      document.getElementById('additional').style.display = "none";
    }  
        
    });

});

$(document).on("click", "#postEvent", ()=>{
console.log($("#additionalServ").val());
  console.log($("#servicesCategory").text());
if ($("#additionalServ").val() === "") {
$.ajax({
  url: "./api/insert-event-data",
  type: "POST",
  data: {
   catid: $("#servicesCategory").val(),
   price: $("#servicePrice").val(),
   description: $("#seviceDescription").val(),
   title: $("#seviceTitle").val() 
  },
  success: (data)=>{
  let event = "created an event titled: "+ $("#seviceTitle").val(); 
  create_event(event);  
  $("#addEventModal").modal("hide");  
  page("/user");  
  // $("#createdEvents").empty();
  // $.each(data.events, (indx, events)=>{
  //  $("#createdEvents").append(`
  //         <div class="col-md-4 col-sm-6 col-12">
  //           <div class="card">
  //             <div class="card-header">       
  //               <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
  //             </div>
  //             <div class="card-body">
  //               <h6 class="card-title"><b>${events.eventname}</b></h6>

  //               <p class="card-text" style="font-size: 13px;">${events.description}</p>
  //               <span class="">
  //                   <a style="cursor: pointer;" href="./user-${events.id}-applicants" class="link-black text-sm" data-eventid="${events.id}" id="viewApplicants">
  //                   <i class="far fa-bell mr-1"></i> Applicants (${events.applicants})
  //                   </a>
  //               </span>
  //               <p class="card-text" style="font-size: 13px; float: right;">Date created: ${events.date}</p>
  //             </div>
  //             <div class="card-footer">
  //               <a id="editEvent" class="btn btn-primary btn-sm" data-eventid="${events.id}">Edit</a>
  //               <a id="deleteEvent" class="btn btn-danger btn-sm" data-eventid="${events.id}">Delete</a>
  //             </div>
  //           </div>
  //           <!-- /.info-box -->
  //         </div>
  //  `);  
  // });

  }
});
}else{
$.ajax({
  url: "./api/insert-event-data-others",
  type: "POST",
  data: {
   catid: $("#servicesCategory").val(),
   price: $("#servicePrice").val(),
   description: $("#seviceDescription").val(),
   title: $("#seviceTitle").val(),
   subserv: $("#additionalServ").val() 
  },
  success: (data)=>{
  $("#addEventModal").modal("hide");    
  $("#createdEvents").empty();
  $.each(data.events, (indx, events)=>{
    if (events.subserv === "") {
       $("#createdEvents").append(`
              <div class="col-lg-4">
                <div class="card">
                  <div class="card-header">       
                    <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <span class="">
                        <a style="cursor: pointer;" href="./user-${events.id}-applicants" class="link-black text-sm" data-eventid="${events.id}" id="viewApplicants">
                        <i class="far fa-bell mr-1"></i> Applicants (${events.applicants})
                        </a>
                    </span>
                    <p class="card-text" style="font-size: 13px; float: right;"><i>Date created: ${events.date}</i></p>
                  </div>
                  <div class="card-footer">
                    <a id="editEvent" class="btn btn-primary btn-sm" data-eventid="${events.id}">Edit</a>
                    <a id="deleteEvent" class="btn btn-danger btn-sm" data-eventname="${events.eventname}" data-eventid="${events.id}">Delete</a>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
    }else{
     $("#createdEvents").append(`
            <div class="col-md-4 col-sm-6 col-12">
              <div class="card">
                <div class="card-header">       
                  <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                </div>
                <div class="card-body">
                  <h6 class="card-title"><b>${events.eventname}</b></h6>

                  <p class="card-text" style="font-size: 13px;">${events.description}</p>
                  <span class="">
                      <a style="cursor: pointer;" href="./user-${events.id}-applicants" class="link-black text-sm" data-eventid="${events.id}" id="viewApplicants">
                      <i class="far fa-bell mr-1"></i> Applicants (${events.applicants})
                      </a>
                  </span>
                  <p class="card-text" style="font-size: 13px; float: right;">Date created: ${events.date}</p>
                </div>
                <div class="card-footer">
                  <a id="editEvent" class="btn btn-primary btn-sm" data-eventid="${events.id}">Edit</a>
                  <a id="deleteEvent" class="btn btn-danger btn-sm" data-eventname="${events.eventname}" data-eventid="${events.id}">Delete</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `);  
    }

  });

  }
});
}


});

$(document).on("click", "#editEvent", (e)=>{

let eventid = e.target.dataset.eventid;

$.ajax({
  url: "./api/edit-event-data",
  type: "POST",
  data: {
    eventid: eventid
  },
  success: (data)=>{
  $("#addEventModalEdit").modal("show");
  $("#addEventModalEdit").data("eventid", eventid);
  $("#formedit").empty().append(`
            <div class="form-group">
            <label for="exampleInputEmail1">Service Categories</label>
            <select class="form-control"  name="services" id="editservicesCategory" style="width: 100%;"> </select>
            </div>          
            <div class="form-group">
            <label for="exampleInputEmail1">Price</label>
            <input type="number" class="form-control" id="editservicePrice" value="${data.events[0].eventbudget}" placeholder="Enter Price">
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Job Title</label>
            <input type="text" class="form-control" id="editseviceTitle" value="${data.events[0].eventname}" placeholder="Job title">  
            </div>
            <div class="form-group">
            <label for="exampleInputEmail1">Job Description</label>
            <textarea id="editseviceDescription" style="width: 100%;" placeholder="Short description...">${data.events[0].description}</textarea>
            </div>  
  `);  
  $("#editservicesCategory").html('<option value=' + data.events[0].categoryid +'>' + data.events[0].category +'</option>');
   
    $.fn.select2.defaults.set( "theme", "bootstrap" );
    $("#editservicesCategory").select2({
    placeholder: "Select category", 
    ajax: {
    url: "./api/get-services-data",
    type: "post",
    dataType: 'json',
    delay: 250,
    data: function (params) {
    return {
      searchTerm: params.term, // search term
    };
    },
    processResults: function (response) {
    return {
    results: response
    };
    },
      cache: true
    },
    });

  }
});
});

$(document).on("click", "#updateEvent", ()=>{

$.ajax({
  url: "./api/update-event-data",
  type: "POST",
  data: {
   eventid: $("#addEventModalEdit").data("eventid"),
   catid: $("#editservicesCategory").val(),
   price: $("#editservicePrice").val(),
   description: $("#editseviceDescription").val(),
   title: $("#editseviceTitle").val() 
  },
  success: (data)=>{

  let detail = "updated his/her event info.";  

  update_info(detail);
    
  $("#addEventModalEdit").modal("hide");  
  $("#createdEvents").empty();
  $("#createdEvents").append(`
        <div class="card" style="width: 100%">
          <div class="card-header">       
                <ul class="nav nav-pills">
                  Recent Posts
                </ul>
          </div>
        </div>
  `);
  $.each(data.events, (indx, events)=>{
   $("#createdEvents").append(`
          <div class="row" style="width: 100%;">
            <div class="card" style="width: 100%;">
              <div class="card-header">       
                <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
              </div>
              <div class="card-body">
                <h6 class="card-title"><b>${events.eventname}</b></h6>

                <p class="card-text" style="font-size: 13px;">${events.description}</p>
                <span class="">
                    <a style="cursor: pointer;" href="./user-${events.id}-applicants" class="link-black text-sm" data-eventid="${events.id}" id="viewApplicants">
                    <i class="far fa-bell mr-1"></i> Applicants (${events.applicants})
                    </a>
                </span>
                <p class="card-text" style="font-size: 13px; float: right;">Date created: ${events.date}</p>
              </div>
              <div class="card-footer">
                <a id="editEvent" class="btn btn-primary btn-sm" data-eventid="${events.id}">Edit</a>
                <a id="deleteEvent" class="btn btn-danger btn-sm" data-eventname="${events.eventname}" data-eventid="${events.id}">Delete</a>
              </div>
            </div>
            <!-- /.info-box -->
          </div>
   `);  
  });
  }
});

});

$(document).on("click", "#deleteEvent", (e)=>{

Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {

  $.ajax({
  url: "./api/delete-event-data",
  type: "POST",
  data: {
   eventid: e.target.dataset.eventid,
  },
  success: (data)=>{

  let detail = "deleted his/her event: "+e.target.dataset.eventname;  

  update_info(detail);  

  Swal.fire(
    'Deleted!',
    'Your file has been deleted.',
    'success'
  );
  page("/user-my-acount");
  // $("#createdEvents").empty();
  // $.each(data.events, (indx, events)=>{
  //  $("#createdEvents").append(`
  //         <div class="col-md-4 col-sm-6 col-12">
  //           <div class="card">
  //             <div class="card-header">       
  //               <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
  //             </div>
  //             <div class="card-body">
  //               <h6 class="card-title"><b>${events.eventname}</b></h6>

  //               <p class="card-text" style="font-size: 13px;">${events.description}</p>
  //               <span class="">
  //                   <a style="cursor: pointer;" href="./user-${events.id}-applicants" class="link-black text-sm" data-eventid="${events.id}" id="viewApplicants">
  //                   <i class="far fa-bell mr-1"></i> Applicants (${events.applicants})
  //                   </a>
  //               </span>
  //               <p class="card-text" style="font-size: 13px; float: right;">Date created: ${events.date}</p>
  //             </div>
  //             <div class="card-footer">
  //               <a id="editEvent" class="btn btn-primary btn-sm" data-eventid="${events.id}">Edit</a>
  //               <a id="deleteEvent" class="btn btn-danger btn-sm" data-eventid="${events.id}">Delete</a>
  //             </div>
  //           </div>
  //           <!-- /.info-box -->
  //         </div>
  //  `);  
  // });
  }
  });

  }
});

});

page("/user-account", ()=>{
  $.ajax({
  url: "./api/get-userinfo-data",
  type: "POST",
  data: {
   load: 1,
  },
  success: (data)=>{
  document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
  document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(userTemplate).show(); 
  clearInterval(intervalID);
  $("#userinfo").text(data.username); 
  document.getElementById("navimage").setAttribute("src", data.userimage);
  searchsubcategory();
  if (data.messagecount != 0) {
  $("#messagescount").text(data.messagecount);  
  }else{
  $("#messagescount").text("");
  }
$("#maincontainer").empty().append(`
<div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
            
          </div><!-- /.col -->

        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
 </div> 
  <div class="row">
   <div class="col-md-3">
   </div>
   <div class="col-md-6">

           <div class="card card-outline">

              <div class="card-body box-profile">
              <h4><b><i class='fas fa-globe-americas'></i> About</b></h4>

               <strong><i class="fas fa-book mr-1"></i> Education</strong>

                <p class="text-muted" id="education">
                 ${data.info[0].school}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].school}" data-name="school" data-selection="education" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
                </p>

                <hr>

                <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                <p class="text-muted">${data.info[0].address}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].address}" data-name="address" data-selection="address" class="fas fa-pencil-alt" style="cursor: pointer;"></i></p>

                <hr>

                <strong><i class="fas fa-phone-alt mr-1"></i>Contact</strong>

                <p class="text-muted">
                ${data.info[0].contact}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].contact}" data-name="contact" data-selection="contact" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
                </p>

                <hr>

                <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

                <p class="text-muted">${data.info[0].notes}.  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].notes}" data-name="notes" data-selection="notes" class="fas fa-pencil-alt" style="cursor: pointer;"></i></p>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->


           <div class="card card-outline">
              <div class="card-body box-profile">
              <h4><b><i class='fas fa-shield-alt'></i> Security</b></h4>

               <strong><i class='fas fa-key'></i> Password</strong>

                <p class="text-muted" id="education">
                 It's a good idea to use a strong password that you're not using elsewhere.  <i id="changePassword" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
                </p>

                <hr>

               <strong><i class="fas fa-envelope mr-1"></i> Email</strong>

                <p class="text-muted" id="email">
                 ${data.info[0].email}  <i id="changeEmail" data-userid="${data.info[0].userid}" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
                </p>

                <hr>

              </div>
              <!-- /.card-body -->
            </div>

  </div>
 <div class="col-md-3">
</div>  
          <!-- /.col -->
</div>
`);

  }  
});
});

$(document).on("click", "#changeEmail", (e)=>{

$("#replaceemail").modal("show");

});

$(document).on("click", "#updateemail", ()=>{

$.ajax({
  url: "./api/save-new-email",
  type: "POST",
  data: {
    email: $("#newemail").val(),
  },
  success: (data)=>{
  page("/user-account");  
  $("#replaceemail").modal("hide");
  }
  });



});


$(document).on("click", "#editProfile", (e)=>{
$("#updateinfo").modal("show");
$("#updateinfo").data("column", e.target.dataset.name);
$("#updateProfile").empty().append(`
            <div class="form-group">
            <label for="exampleInputEmail1">${e.target.dataset.selection}</label>
            <input type="text" class="form-control" id="newvalue" value="${e.target.dataset.value}">
            </div>  
`);

});

$(document).on("click", "#saveInfo", ()=>{

$.ajax({
  url: "./api/save-new-profile",
  type: "POST",
  data: {
    newvalue: $("#newvalue").val(),
    column: $("#updateinfo").data("column"),
  },
  success: (data)=>{
  let detail = "updated his/her "+$("#updateinfo").data("column")+": "+$("#newvalue").val();
  update_info(detail);

  $("#updateinfo").modal("hide");  
  page("/user-account"); 
  // $("#maincontainer").empty().append(`
  // <div class="content-header">
  //       <div class="container">
  //         <div class="row mb-2">
  //           <div class="col-sm-6">
              
  //           </div><!-- /.col -->

  //         </div><!-- /.row -->
  //       </div><!-- /.container-fluid -->
  //  </div> 
  //   <div class="row">
  //    <div class="col-md-3">
  //   </div>
  //    <div class="col-md-6">

  //            <div class="card card-outline">
  //               <div class="card-body box-profile">

  //                <strong><i class="fas fa-book mr-1"></i> Education</strong>

  //                 <p class="text-muted" id="education">
  //                  ${data.info[0].school}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].school}" data-name="school" data-selection="education" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
  //                 </p>

  //                 <hr>

  //                 <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

  //                 <p class="text-muted">${data.info[0].address}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].address}" data-name="address" data-selection="address" class="fas fa-pencil-alt" style="cursor: pointer;"></i></p>

  //                 <hr>

  //                 <strong><i class="fas fa-phone-alt mr-1"></i>Contact</strong>

  //                 <p class="text-muted">
  //                 ${data.info[0].contact}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].contact}" data-name="contact" data-selection="contact" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
  //                 </p>

  //                 <hr>

  //                 <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

  //                 <p class="text-muted">${data.info[0].notes}.  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].notes}" data-name="notes" data-selection="notes" class="fas fa-pencil-alt" style="cursor: pointer;"></i></p>
  //               </div>
  //               <!-- /.card-body -->
  //             </div>
  //             <!-- /.card -->

  //           <div class="card card-outline">
  //             <div class="card-body box-profile">
  //             <h4><b><i class="fas fa-shield-alt" aria-hidden="true"></i> Security</b></h4>

  //              <strong><i class="fas fa-key" aria-hidden="true"></i> Password</strong>

  //               <p class="text-muted" id="education">
  //                It's a good idea to use a strong password that you're not using elsewhere.  <i id="changePassword" class="fas fa-pencil-alt" style="cursor: pointer;" aria-hidden="true"></i>
  //               </p>

  //               <hr>

  //              <strong><i class="fas fa-envelope mr-1" aria-hidden="true"></i> Email</strong>

  //               <p class="text-muted" id="email">
  //                ${data.info[0].email}  <i id="changeEmail" class="fas fa-pencil-alt" style="cursor: pointer;" aria-hidden="true"></i>
  //               </p>

  //               <hr>

  //             </div>
  //             <!-- /.card-body -->
  //           </div>

  //   </div>
  //  <div class="col-md-3">
  // </div>  
  //           <!-- /.col -->
  // </div>
  // `);

  }
});

});

$(document).on("click", "#reloadHome", ()=>{
$.ajax({
  url: "./api/load-user-data",
  type: "POST",
  data: {
    load: 0,
  },
  success: (data)=>{
  window.location.href = 'http://localhost/eventorg/view/user.php';  
  // $("#userinfo").text(data.username);
  // $("#maincontainer").empty().append(`
  //   <div class="content-header">
  //     <div class="container">
  //       <div class="row mb-2">
  //         <div class="col-sm-6">
  //           <h1 class="m-0">Events Created</h1>
  //         </div><!-- /.col -->

  //       </div><!-- /.row -->
  //     </div><!-- /.container-fluid -->
  //   </div>
  //   <div class="content-header">
  //     <div class="container">
  //       <div class="row mb-2">
  //         <div class="col-sm-6">
  //           <button class="btn btn-primary btn-sm" id="showEventForm">Post Event</button>
  //         </div><!-- /.col -->

  //       </div><!-- /.row -->
  //     </div><!-- /.container-fluid -->
  //   </div>    
  //   <!-- /.content-header -->

  //   <!-- Main content -->
  //   <div class="content">
  //     <div class="container">
  //       <div class="row" id="createdEvents">



  //         <!-- /.col -->
  //       </div>
  //       <!-- /.row -->
  //     </div><!-- /.container-fluid -->
  //   </div>
  // `); 
  // $("#createdEvents").empty();
  // $.each(data.events, (indx, events)=>{
  // if (events.status == 0) {
  //  $("#createdEvents").append(`
  //         <div class="col-md-4 col-sm-6 col-12">
  //           <div class="card">
  //             <div class="card-header">       
  //               <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
  //             </div>
  //             <div class="card-body">
  //               <h6 class="card-title"><b>${events.eventname}</b></h6>

  //                               <p class="card-text" style="font-size: 13px;">${events.description}</p>
  //                 <span class="">
  //                   <a style="cursor: pointer;" class="link-black text-sm" data-eventid="${events.id}" id="viewApplicants">
  //                   <i class="far fa-bell mr-1"></i> Applicants (${events.applicants})
  //                   </a>
  //               </span>
  //               <p class="card-text" style="font-size: 13px; float: right;"><i>Date created: ${events.date}</i></p>
  //             </div>
  //             <div class="card-footer">
  //               <a id="editEvent" class="btn btn-primary btn-sm" data-eventid="${events.id}">Edit</a>
  //               <a id="deleteEvent" class="btn btn-danger btn-sm" data-eventid="${events.id}">Delete</a>
  //             </div>
  //           </div>
  //           <!-- /.info-box -->
  //         </div>
  //  `);
  // }else{
  //  $("#createdEvents").append(`
  //         <div class="col-md-4 col-sm-6 col-12">
  //           <div class="card">
  //             <div class="card-header">       
  //               <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
  //             </div>
  //             <div class="card-body">
  //               <h6 class="card-title"><b>${events.eventname}</b></h6>

  //                               <p class="card-text" style="font-size: 13px;">${events.description}</p>
  //                 <span class="">
  //                   <a style="cursor: pointer;" class="link-black text-sm" data-eventid="${events.id}" id="viewAcceptedApplicant">
  //                   <i class="far fa-bell mr-1"></i> Applicant accepted 
  //                   </a>
  //               </span>
  //               <p class="card-text" style="font-size: 13px; float: right;"><i>Date created: ${events.date}</i></p>
  //             </div>
  //             <div class="card-footer">
  //             <h3 style="color: green; font-size: 16px;">Event settled</h3>
  //             </div>
  //           </div>
  //           <!-- /.info-box -->
  //         </div>
  //  `);
  // }  
  // });
  }
});
});

page("/user-:eventid-applicants", (e)=>{
$.ajax({
  url: "./api/view-applicants",
  type: "POST",
  data: {
    eventid: e.params.eventid,
  },
  success: (data)=>{
  document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
  document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(userTemplate).show(); 
  $("#userinfo").text(data.username); 
  document.getElementById("navimage").setAttribute("src", data.userimage);
  $("#maincontainer").empty();  
  console.log(data);
  $.each(data.applicants, (indx, applicants)=>{
  $("#maincontainer").append(`
  <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div><!-- /.col -->

        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>      

  <div class="content">
    <div class="container">    
      <div class="container-fluid">
        <div class="row" id="allapplicants">



        </div> 
     </div>
    </div> 
  </div>  

  `); 


$("#allapplicants").append(`
          <div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
              <div class="card bg-light d-flex flex-fill">
                <div class="card-header text-muted border-bottom-0">
                
                </div>
                <div class="card-body pt-0">
                  <div class="row">
                    <div class="col-7">
                      <h2 class="lead"><b>${applicants.fullname}</b></h2>
                     
                      <ul class="ml-4 mb-0 fa-ul text-muted">
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span> ${applicants.address}</li>
                        <li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span> Phone #: ${applicants.contact}</li>

                      </ul>
                      NOTE: <i style="color: blue;">${applicants.note}</i>
                    </div>
                    <div class="col-5 text-center">
                      <img src="${applicants.userimage}" alt="user-avatar" class="img-circle img-fluid">
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="text-right">
                    <a class="btn btn-sm btn-info" id="acceptApplicant" data-applicationid="${applicants.applicationid}" data-applicantsid="${applicants.applicantsid}" data-eventid="${applicants.eventid}" data-email="${applicants.email}">
                      Accept Applicant
                    </a>
                    <a class="btn btn-sm btn-primary" id="viewOrgProf" data-applicantsid="${applicants.applicantsid}">
                      <i class="fas fa-user" style="pointer-events: none;"></i> View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
`);


  
  });  


      // const allstar = document.querySelectorAll('.star-medium');

      // allstar[0].innerHTML = '&#9733';
  
      // for (let i = 0; i < data.applicants[0].rating; i++) {
      //  allstar[i].innerHTML = '&#9733';
      // }

      $("#userinfo").text(data.username); 
      document.getElementById("navimage").setAttribute("src", data.userimage);

      if (data.messagecount != 0) {
      $("#messagescount").text(data.messagecount);  
      }else{
      $("#messagescount").text("");
      }
      clearInterval(intervalID);
      // let xOffset = 0;
      // let isMouseIn = false;
      // const slides = document.getElementById("slides");

      // setInterval(translate, 0);

      // function translate() {
      //   let offsetIncrementor = isMouseIn ? 0.05 : 0.2;
      //   if (xOffset >= 258 * 7) xOffset = 0;
      //   else xOffset = xOffset + offsetIncrementor;
      //   slides.style.transform = "translateX(-" + xOffset + "px)";
      // }

      // slides.addEventListener("mouseover", function (event) {
      //   isMouseIn = true;
      // });

      // slides.addEventListener("mouseout", function (event) {
      //   isMouseIn = false;
      // });
  }

});
});

$(document).on("click", "#viewOrgProf", (e)=>{

$.ajax({
  url: "./api/view-organizer",
  type: "POST",
  data: {
    applicantsid: e.target.dataset.applicantsid,
  },
  success: (data)=>{

  $("#orgproftemplate").modal("show");  

$("#orgContainer").empty().append(`
   
  <div class="content">
      <div class="container" style="background-color: rgba(245, 245, 245, 0.54)">
      </br>
      <div class="row">
      <div class="card card-widget widget-user" style="width: 100%;">
              <!-- Add the bg color to the header using any of the bg-* classes -->
              <div id="changecover" data-userid="WJxbojagwO" class="widget-user-header text-white" style="background: url('${data.info[0].usercover}') center center; background-size: cover; cursor: pointer;">
                <h3 class="widget-user-username text-right" style="background-color: rgba(139, 139, 139, 0.54); border-radius:10px 10px 1px 1px;">${data.info[0].fullname}</h3>
                <h5 class="widget-user-desc text-right" style="background-color: rgba(139, 139, 139, 0.54); border-radius:1px 1px 10px 10px;">${data.info[0].email}</h5>
              </div>
              <div class="widget-user-image" id="profilepic">
                <img class="img-circle" id="changeprofile" data-userid="WJxbojagwO" src="${data.info[0].userimage}" style="cursor: pointer; width: 100px; height: 100px;" alt="User Avatar">
              </div>
              <div class="card-footer">

                <div class="row">
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                      <h5 class="description-header" id="orgrank">Unranked</h5><i class="fas fa-award mr-1"></i>
                      <span class="description-text">Ranking</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                   
                      <button class="staruser">&#9734</button>
                      <button class="staruser">&#9734</button>
                      <button class="staruser">&#9734</button>
                      <button class="staruser">&#9734</button>
                      <button class="staruser">&#9734</button>
               
                      <span class="description-text"></span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4">
                    <div class="description-block">
                      <h5 class="description-header" id="orgearnings">0</h5><i class="fa fa-usd" aria-hidden="true"></i>
                      <span class="description-text">Earnings</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                </div>



                <!-- /.row -->
              </div>
            </div>
      </div>
      <div class="row">
        <div class="col-md-3">
          <div class="card-body" style="background-color: white;">

                <hr>

                <strong><i class="fas fa-user-graduate mr-1"></i> Education</strong>
                <p class="text-muted">
                 ${data.info[0].school}
                </p>

                <hr>

                <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                <p class="text-muted">${data.info[0].address}</p>

                <hr>

                <strong><i class="fas fa-phone-alt mr-1"></i> Contact</strong>

                <p class="text-muted">
                ${data.info[0].contact}
                </p>

                <hr>

                <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

                <p class="text-muted">${data.info[0].notes}</p>

                <hr>

                <strong><i class="fas fa-award mr-1"></i> Skills</strong>

                <p class="text-muted">${data.info[0].skills}</p>                
              </div>
        </div>



        <div class="col-md-9 scroll" >
<nav>
  <div class="nav nav-tabs" id="nav-tab" role="tablist">
    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Work Completed</button>
    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Photos</button>
  </div>
</nav>
<div class="tab-content" id="nav-tabContent">

  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      </br>

        <div class="row" id="allAcceptedEventsUser">

        </div>

  </div>



  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        <div class="card" style="width: 100%; margin-top: 10px;">
          <div class="card-header">   
            <div class="row">    
                <div class="col-md-6">
                  Recent Accomplishments
                </div>
                <div class="col-md-6">

                </div>
             </div>   
          </div>
        </div>

        <div class="row" id="uploadedAccomplishmentsUser">
        </div>

        </div>



      </div>


        </div>
      </div>

      </div>
    </div>
`);






  $.each(data.file, (indx, img)=>{
  $("#uploadedAccomplishmentsUser").append(`
  <div class="col-md-4" style="margin-top: 10px;"> 
    <button type="button" class="close" id="deleteImage" data-id="${img.id}">
      <span aria-hidden="true" style="pointer-events: none;">×</span>
    </button> 
    <div class="card-body container32" style="background-color: white;">
    <img src="${img.img}" alt="Avatar" class="image" style="width:100%">
    <div class="middle">

      <div class="text" >${img.des}</div>
      <a id="viewfullimage" data-url="${img.img}" style="cursor: pointer; color: blue;"><u style="pointer-events: none;">View full image.</u></a>
    </div>
    </div>
  </div>  
  `);  
  });


    $.each(data.allacceptedevents, (indx, events)=>{
      if (events.subserv === "") {
        if (data.myid == events.applicantid) {
         $("#allAcceptedEventsUser").append(`
                <div class="col-md-12" id="event${events.id}" style="width: 100%;">
                  <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
                    <div class="card-header">
                    <div class="user-block">
                              <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                              <span class="username">
                                <a href="./organizer-view-profile">${events.username }</a>
                              </span>
                              <span class="description">Shared publicly - ${events.date}</span>
                              <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                            </div>          
                      
                    </div>
                    <div class="card-body">
                      <h6 class="card-title"><b>${events.eventname}</b></h6>

                      <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <a class="">Claimed on ${events.approvedate}</a>  
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
          }else{
         $("#allAcceptedEventsUser").append(`
                <div class="col-md-12" id="event${events.id}" style="width: 100%;">
                  <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">

                    <div class="card-header">
                    <div class="user-block">
                              <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                              <span class="username">
                               <a href="./organizer-view-profile">${events.username }</a>
                              </span>
                              <span class="description">Shared publicly - ${events.date}</span>
                              <h5 class="card-title m-0"><b style="color: blue;">${events.category}</del></b> (<i style="color: green;">₱${events.eventbudget}</del></i>)</h5>
                            </div>          
                      
                    </div>
                    <div class="card-body">
                      <h6 class="card-title"><b>${events.eventname}</b></h6>

                      <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <a class="">Claimed on ${events.approvedate}</a> 
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `); 
          }
      }else{
    if (data.myid == events.applicantid) {
     $("#allAcceptedEventsUser").append(`
            <div class="col-md-12" id="event${events.id}" style="width: 100%;">
              <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
                <div class="card-header">
                <div class="user-block">
                          <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                          <span class="username">
                            <a href="./organizer-view-profile">${events.username }</a>
                          </span>
                          <span class="description">Shared publicly - ${events.date}</span>
                           <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                        </div>          
                 
                </div>
                <div class="card-body">
                  <h6 class="card-title"><b>${events.eventname}</b></h6>

                  <p class="card-text" style="font-size: 13px;">${events.description}</p>
                  <a class="">Claimed on ${events.approvedate}</a> 
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `);
      }else{
     $("#allAcceptedEventsUser").append(`
            <div class="col-md-12" id="event${events.id}" style="width: 100%;">
              <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
                <div class="card-header">
                <div class="user-block">
                          <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                          <span class="username">
                            <a href="./organizer-view-profile">${events.username }</a>
                          </span>
                          <span class="description">Shared publicly - ${events.date}</span>
                           <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                        </div>          
               
                </div>
                <div class="card-body">
                  <h6 class="card-title"><b>${events.eventname}</b></h6>

                  <p class="card-text" style="font-size: 13px;">${events.description}</p>
                  <a class="">Claimed on ${events.approvedate}</a> 
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `); 
      }
      }

       
    });


  $.each(data.ranking, (indx, rank)=>{
    let ranks = indx+1;

    if (rank.userid == data.userid) {
      console.log(indx);
      $("#orgrank").text("Top "+ranks);
      $("#orgearnings").text("₱"+rank.earnings);
    }else{

    }

  });

      const allstar = document.querySelectorAll('.staruser');
  
      for (let i = 0; i < data.info[0].rating; i++) {
       allstar[i].innerHTML = '&#9733';
      }


//---->>>>>

  }
});


});







$(document).on("click", "#acceptApplicant", (e)=>{
document.getElementById("acceptApplicant").setAttribute("disabled", "");
$.ajax({
  url: "./api/accept-applicants",
  type: "POST",
  data: {
    eventid: e.target.dataset.eventid,
    applicantsid: e.target.dataset.applicantsid,
    email: e.target.dataset.email,
    applicationid: e.target.dataset.applicationid
  },
  success: (data)=>{

  update_info(data.response);

  page("/user-my-acount");  
  }
});
});

page("/user-:eventid-applicant-accepted", (e)=>{
$.ajax({
  url: "./api/view-accepted-applicants",
  type: "POST",
  data: {
    eventid: e.params.eventid,
  },
  success: (data)=>{
  document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
  document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(userTemplate).show();   
  $("#maincontainer").empty();  
  $.each(data.applicants, (indx, app)=>{
  $("#maincontainer").append(`
  <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div><!-- /.col -->

        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>    
    <div class="content">
      <div class="container">    
        <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <!-- Default box -->
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">${app.fullname}
                      <button id="star" class="star-medium">&#9734</button>
                      <button id="star" class="star-medium">&#9734</button>
                      <button id="star" class="star-medium">&#9734</button>
                      <button id="star" class="star-medium">&#9734</button>
                      <button id="star" class="star-medium">&#9734</button>   
                </h3>
                <div class="card-tools">
                </div>
              </div>
                <div class="card-body">
                <strong><i class="fas fa-phone mr-1"></i> Contact info</strong>

                <p class="text-muted">
                  ${app.email}/${app.contact}
                </p>


                <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                <p class="text-muted">${app.address}</p>

                <strong><i class="fas fa-pencil-alt mr-1"></i> Skills</strong>

                <p class="text-muted">
                ${app.skills}
                </p>

              </div>
              <!-- /.card-body -->
              <div class="card-footer">
                <button class="btn btn-primary btn-sm" id="rateApplicant" data-email="${app.email}" data-applicantsid="${app.aplicantsid}" data-eventid="${e.params.eventid}">Rate applicant</button>
              </div>
              <!-- /.card-footer-->
            </div>
            <!-- /.card -->
          </div>
          <div class="col-md-12 col-sm-6 col-12" id=""> 
        
        </div> 
        </div>        
      </div> 
     </div>
    </div> 

  `); 
  });  
      const allstar = document.querySelectorAll('.star-medium');

      allstar[0].innerHTML = '&#9733';
  
      for (let i = 0; i < data.applicants[0].rating; i++) {
       allstar[i].innerHTML = '&#9733';
      }
      $("#userinfo").text(data.username); 
      document.getElementById("navimage").setAttribute("src", data.userimage);

      if (data.messagecount != 0) {
      $("#messagescount").text(data.messagecount);  
      }else{
      $("#messagescount").text("");
      }
      clearInterval(intervalID); 
  }

});

});

// $(document).on("click", "#viewAcceptedApplicant", (e)=>{


// });

$(document).on("click", "#rateApplicant", (e)=>{

$("#rating").modal("show");
    const allstar = document.querySelectorAll('.star');
    allstar.forEach( (star, i)=>{
      star.onclick = function() {
      let current_level= i+1;
      let applicantsid = $("#maincontainer").data("applicantsid");
      
      $.ajax({
        url: "./api/rate-organizer",
        type: "POST",
        data: {
          rating: current_level,
          eventid: e.target.dataset.eventid,
          applicantsid: e.target.dataset.applicantsid  
        },
        success: (data)=>{
        if (data.response == 1) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You have rate this user once!'
          });
        }else{

        } 
        }
      });
      allstar.forEach((star, j)=>{
        if (current_level >= j+1) {
          star.innerHTML = '&#9733';
        }else{
          star.innerHTML = '&#9734';
        }
      });
      $("#rating").modal("hide"); 
      }
     
    }); 
});


$(document).on("click", "#messages", (e)=>{
  console.log("hahahaha");
  $.ajax({
  url: "./api/check-messages",
  type: "POST",
  data: {
    notif: 1,
  },
  success: (data)=>{  
  $("#messagescount").text("");  
  $("#messagenotif").empty();
  console.log(data.inbox.length);
  if (data.inbox.length == 0) {
    $("#messagenotif").append(`
            <div class="dropdown-divider"></div>
            <a style="cursor: pointer;" class="dropdown-item">
             No Messages yet.
            </a>      
    `);
  }else{
  $.each(data.inbox, (indx, inbox)=>{

    $("#messagenotif").append(`
            <div class="dropdown-divider"></div>
            <a style="cursor: pointer;" href="./user-${inbox.eventid}-message" class="dropdown-item viewMessage" data-eventid="${inbox.eventid}" id="viewMessage${inbox.eventid}">

            </a>      
    `);
  });  

  $.each(data.details, (indx, inbox)=>{

    $("#viewMessage"+inbox.eventid+"").append(`
              ${inbox.unseen} <i class="fas fa-envelope mr-2" style="pointer-events: none;"></i> ${inbox.fullname} <i style="color: green;">(Hired)</i><br>
              <span class="text-muted text-sm" style="pointer-events: none;"><b style="color: green;">${inbox.eventname}</b></span>
              <br>
              <span class="text-muted text-sm" style="pointer-events: none;">Click to start your convo.</span><br>
              <span class="text-muted" style="font-size: 12px; float: right; pointer-events: none;"><i></i></span>    
    `);
  }); 
  }


  }
  });
});

page("/user-:eventid-message", (e)=>{
  $("#maincontainer").data("eventid", e.params.eventid);
  var usereventid = e.params.eventid;
  $.ajax({
  url: "./api/view-messages-client",
  type: "POST",
  data: {
    eventid: e.params.eventid,
  },
  success: (data)=>{ 
  document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
  document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(userTemplate).show(); 
  $("#userinfo").text(data.username); 
  document.getElementById("navimage").setAttribute("src", data.userimage);

  if (data.messagecount != 0) {
  $("#messagescount").text(data.messagecount);  
  }else{
  $("#messagescount").text("");
  }

  clearInterval(intervalID);  

  $("#maincontainer").empty().append(`
    <div class="content-header" >
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
      
          </div><!-- /.col -->

        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-sm-6 col-12" id=""> 
          <div class="card direct-chat direct-chat-primary">
              <div class="card-header ui-sortable-handle" style="cursor: move;">
                <h3 class="card-title">Direct Chat</h3>

                <div class="card-tools">
        
                  <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <!-- Conversations are loaded here -->
                <div class="direct-chat-messages" style="height: 500px;" id="convo">


                </div>

              </div>
              <!-- /.card-body -->
              <div class="card-footer">
     
                  <div class="input-group">
                    <input type="text" id="mymessage" name="message" placeholder="Type Message ..." class="form-control">
                    <span class="input-group-append">
                      <button type="button" class="btn btn-primary" id="sendmessage" data-reciever="${data.reciever}"  data-eventid="${e.params.eventid}">Send</button>
                    </span>
                  </div>
    
              </div>
              <!-- /.card-footer-->
            </div>
            </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>


  `);
$.each(data.messages, (indx, msgs)=>{
  if (data.user == msgs.sender) {
  $("#convo").append(`

                  <!-- Message from the user -->
                  <div class="direct-chat-msg right">
                    <div class="direct-chat-infos clearfix">
                      <span class="direct-chat-name float-right"></span>
                      <span class="direct-chat-timestamp float-left">${msgs.datesent}</span>
                    </div>
                    <!-- /.direct-chat-infos -->
            
                    <!-- /.direct-chat-img -->
                    <div class="direct-chat-text" style="text-align: right;">
                      ${msgs.message}
                    </div>
                    <!-- /.direct-chat-text -->
                  </div>
  `); 
  }else{
  $("#convo").append(`

                  <div class="direct-chat-msg">
                    <div class="direct-chat-infos clearfix">
                      <span class="direct-chat-name float-left">${msgs.recievername}</span>
                      <span class="direct-chat-timestamp float-right">${msgs.datesent}</span>
                    </div>
                    <!-- /.direct-chat-infos -->
                    <img class="direct-chat-img" src="${msgs.recieverpic}" alt="message user image">
                    <!-- /.direct-chat-img -->
                    <div class="direct-chat-text">
                      ${msgs.message}
                    </div>
                    <!-- /.direct-chat-text -->
                  </div>
  `); 
  }

}); 
intervalID = setInterval(function() {
  $.ajax({
  url: "./api/view-messages",
  type: "POST",
  data: {
    eventid: e.params.eventid,
  },
  success: (data)=>{ 
  $("#convo").empty(); 
  $.each(data.messages, (indx, msgs)=>{
  if (data.user == msgs.sender) {
  $("#convo").append(`

                  <!-- Message from the user -->
                  <div class="direct-chat-msg right">
                    <div class="direct-chat-infos clearfix">
                      <span class="direct-chat-name float-right"></span>
                      <span class="direct-chat-timestamp float-left">${msgs.datesent}</span>
                    </div>
                    <!-- /.direct-chat-infos -->
            
                    <!-- /.direct-chat-img -->
                    <div class="direct-chat-text" style="text-align: right;">
                      ${msgs.message}
                    </div>
                    <!-- /.direct-chat-text -->
                  </div>
  `); 
  }else{
  $("#convo").append(`

                  <div class="direct-chat-msg">
                    <div class="direct-chat-infos clearfix">
                      <span class="direct-chat-name float-left">${msgs.recievername}</span>
                      <span class="direct-chat-timestamp float-right">${msgs.datesent}</span>
                    </div>
                    <!-- /.direct-chat-infos -->
                    <img class="direct-chat-img" src="${msgs.recieverpic}" alt="message user image">
                    <!-- /.direct-chat-img -->
                    <div class="direct-chat-text">
                      ${msgs.message}
                    </div>
                    <!-- /.direct-chat-text -->
                  </div>
  `); 
  }

}); 
}
})
}, 3000);

let enter = document.querySelector('#mymessage');

enter.addEventListener('keyup', (e)=>{
  if(e.keyCode === 13) {
  $.ajax({
  url: "./api/send-messages-client",
  type: "POST",
  data: {
    eventid: usereventid,
    reciever: data.reciever,
    mymessage: $("#mymessage").val()
  },
  success: (data)=>{ 
  $("#mymessage").val(""); 
  $("#convo").append(`

      <!-- Message from the user -->
        <div class="direct-chat-msg right">
          <div class="direct-chat-infos clearfix">
            <span class="direct-chat-name float-right"></span>
            <span class="direct-chat-timestamp float-left">${data.message[0].date}</span>
          </div>
          <!-- /.direct-chat-infos -->
          <!-- /.direct-chat-img -->
          <div class="direct-chat-text" style="text-align: right;">
            ${data.message[0].message}
          </div>
        <!-- /.direct-chat-text -->
      </div>
  `); 
  }
  });
  }
});

}
});
});

// $(document).on("click", ".viewMessage", (e)=>{

// });

$(document).on("click", "#sendmessage", (e)=>{
  $.ajax({
  url: "./api/send-messages-client",
  type: "POST",
  data: {
    eventid: e.target.dataset.eventid,
    reciever: e.target.dataset.reciever,
    mymessage: $("#mymessage").val()
  },
  success: (data)=>{ 
  $("#mymessage").val(""); 
  $("#convo").append(`

      <!-- Message from the user -->
        <div class="direct-chat-msg right">
          <div class="direct-chat-infos clearfix">
            <span class="direct-chat-name float-right"></span>
            <span class="direct-chat-timestamp float-left">${data.message[0].date}</span>
          </div>
          <!-- /.direct-chat-infos -->
          <!-- /.direct-chat-img -->
          <div class="direct-chat-text" style="text-align: right;">
            ${data.message[0].message}
          </div>
        <!-- /.direct-chat-text -->
      </div>
  `); 
  }
  });
});

$(document).on("click", "#viewAcc", (e)=>{

$("#listofimages").modal("show");

});

$(document).on("click", "#closeimage", ()=>{
$("#listofimages").modal("hide");
});


function searchsubcategory()
{
  const inputBox = document.querySelector('.searchCategory');

  inputBox.onkeyup = (e)=>{
    console.log(e.target.value);
    if (e.target.value === "") {
    document.getElementById("dropdownResult").setAttribute("class", "dropdown-menu dropdown-menu-lg dropdown-menu-right scroll");
    }else{
     
      $.ajax({
        url: "./api/search-category",
        type: "POST",
        data: {
          search: e.target.value,
        },
        success: (data)=>{
        document.getElementById("dropdownResult").setAttribute("class", "dropdown-menu dropdown-menu-lg dropdown-menu-right scroll show");  
        console.log(data);
        $("#dropdownResult").empty();
        $.each(data.result, (indx, search)=>{
        $("#dropdownResult").append(`
          <div class="dropdown-divider"></div>
          <a href="./user-${search.id}-service" class="dropdown-item">
          ${search.service}
          </a>
        `);
        });
        }
      });
    }

  }

}

page('/user-:id-service', (e)=>{ 

$.ajax({
 url: "./api/get-search-service",
 type: "POST",
 data: {
  id: e.params.id,
 },
 success: (data)=>{
  document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
  document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(userTemplate).show();
  $("#userinfo").text(data.username); 
  document.getElementById("navimage").setAttribute("src", data.userimage);
  // document.getElementById("usernavimage").setAttribute("src", data.userimage);
  searchsubcategory();
    $("#allevents").empty();

    $.each(data.allevents, (indx, events)=>{

      if (events.subserv === "") {
         $("#allevents").append(`
                <div class="row" id="event${events.id}" >
                  <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                    <div class="card-header">
                    <div class="user-block">
                              <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                              <span class="username">
                                <a href="./organizer-view-profile">${events.username }</a>
                              </span>
                              <span class="description">Shared publicly - ${events.date}</span>
                              <h5 class="card-title m-0" ><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                            </div>        
                    </div>
                    <div class="card-body">
                      <h6 class="card-title"><b>${events.eventname}</b></h6>

                      <p class="card-text" style="font-size: 13px;">${events.description}</p>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
      }else{
        console.log(events.subserv);
       $("#allevents").append(`
              <div class="row" id="event${events.id}" >
                <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                  <div class="card-header">
                  <div class="user-block">
                            <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                            <span class="username">
                              <a href="./organizer-view-profile">${events.username }</a>
                            </span>
                            <span class="description">Shared publicly - ${events.date}</span>
                             <h5 class="card-title m-0" ><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                          </div>    
                   
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
      }
  
    });  

    $("#filteredServices").empty();
    $.each(data.services, (indx, services)=>{
    $("#filteredServices").append(`
      <div class="form-check">
        <input class="form-check-input filter" type="checkbox" data-id="${services.id}">
        <label class="form-check-label">${services.service}</label>
      </div>
    `);  
    });
 } 
});

});


$(document).on("click", "#changePassword", ()=>{
$("#updateuserpassword").modal("show");
$("#resetPassword").val("");
});

$(document).on("click", "#userResetPass", ()=>{

  $.ajax({
    url: "./api/user-reset-pass",
    type: "POST",
    data: {
      newpass: $("#resetPassword").val(),
      oldpass: $("#oldPassword").val()
    },
    success: (data)=>{
      let detail = "updated his/her password.";
      update_info(detail);
      if (data.val == 0) {
     $("#updateuserpassword").modal("hide");   
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your password has been change',
        showConfirmButton: true,
      });
      }else if(data.val == 1){
     $("#updateuserpassword").modal("hide");   
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: data.response,
        showConfirmButton: true,
      });
      }

  }
});

});

$(document).on("click", "#updateemail", (e)=>{

});


function showPassword1() {
  var x = document.getElementById("resetPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 

function showPassword2() {
  var x = document.getElementById("oldPassword");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 


$(document).on("click", "#hiddendiv", (e)=>{
console.log(e.target.dataset.style);
if (e.target.dataset.style === "block") {
document.getElementById("userAllsponsors").setAttribute("style", "display: none;");
document.getElementById("hiddendiv").setAttribute("data-style", "none");
document.getElementById("icon-hide").setAttribute("class", "fas fa-plus");
}else if (e.target.dataset.style === "none") {
document.getElementById("userAllsponsors").setAttribute("style", "display: block;");
document.getElementById("hiddendiv").setAttribute("data-style", "block");
document.getElementById("icon-hide").setAttribute("class", "fas fa-minus");
}

});