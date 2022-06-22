
var organizerTemplate = `
<style>
.image {
  opacity: 1;
  display: block;
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.container32:hover .image {
  opacity: 0.3;
}

.container32:hover .middle {
  opacity: 1;
}

.text {
  color: black;
  font-size: 16px;
  
}
</style>
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand-md navbar-dark navbar-cyan border-bottom-0" style="">
    <div class="container">


      <div class="collapse navbar-collapse order-3" id="navbarCollapse">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
         


        </ul>

      </div>

      <!-- Right navbar links -->
      <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
        <!-- Messages Dropdown Menu -->
        <!-- Notifications Dropdown Menu -->
          <a href="./organizer-my-account" class="navbar-brand">
            <img id="navimage" src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8; width: 30px;">
            <span class="brand-text font-weight-light"><b id="organizerinfo"></b></span>
          </a>
        <li class="nav-item dropdown">

          <a class="nav-link" data-toggle="dropdown" id="messagesorg" style="cursor: pointer;">
            <i class="far fa-envelope"></i>
            <span class="badge badge-warning navbar-badge" id="messagescount"></span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right scroll" id="messagenotif">


          </div>
        </li>


        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" id="notificationsorg" style="cursor: pointer;">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge" id="notifcount"></span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right scroll" id="notifdata">



          </div>
        </li>

          <li class="nav-item dropdown">
            <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle"></a>
            <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu dropdown-menu-right border-0 shadow">
              <li><a class="dropdown-item" href="./organizer-account" id="organizeraccount" style="cursor: pointer;"><i class="fa fa-user" aria-hidden="true"></i> Manage Account</a></li>
              <li><a class="dropdown-item" href="./logout" id="logoutuser" style="cursor: pointer;"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</a></li>
            </ul>
          </li>


      </ul>
    </div>
  </nav>
  <header style="background-color: white;">
    <div class="content" >
      <div class="container" >
      <a href="./organizer"> 
      <img src="./img/logo.png" style="height: 40px; width: 250px;">
      </a>
      </div>
    </div> 
  </header> 
  <!-- /.navbar -->

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper scroll" id="maincontainerorg">
    <!-- Content Header (Page header) -->   
    <div class="content-header">
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
    <div class="content">
      <div class="container" style="background-color: rgba(245, 245, 245, 0.54); border-radius: 10px;">
            <div class="card" style="width: 100%">
                  <div class="card-header">    
                    <div class="row">   
                    <div class="col-md-8" style="background-color: white;" >
                     
                    </div>
                    <div class="col-md-4">
             <div class="input-group input-group-sm" style="width: 100%; margin-top: 5px;">
                  <input class="form-control form-control-navbar searchCategoryOrg" id="searchCategoryOrg" type="search" placeholder="Search for other services" aria-label="Search">
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
      </div>  


      <div class="container" style="background-color: rgba(245, 245, 245, 0.54); border-radius: 10px;">
      <div class="row">
          <div class="col-md-3">

           <div class="card" style="width: 100%">
              <h4>Filtered By:</h4>
              <div class="card-header">
              <h5><b>Services</b></h5>    
                  <div class="row">   
                      <div class="form-group" id="filteredServicesOrg">

                      </div>
                  </div>  
              </div>
          </div>  




          </div>
          <div class="col-md-9" id="activeEvents">



            <!-- /.col -->
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
<div class="modal fade" id="requestModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Application Form</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
              <form>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div>
                <!-- /.card-body -->
              </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send Application</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="rating" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
                    <div class="description-block">
                      <button id="star" class="star-big">&#9734</button>
                      <button id="star" class="star-big">&#9734</button>
                      <button id="star" class="star-big">&#9734</button>
                      <button id="star" class="star-big">&#9734</button>
                      <button id="star" class="star-big">&#9734</button>
                    </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary btn-sm">Send Rating</button>
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

<div class="modal fade" id="viewphoto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-body" id="viewFull">
          
      </div>
    </div>
  </div>
</div>


<div class="modal fade" id="uploadAccomplishments" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
   
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Description</label>
          <input type="text" class="form-control" id="imageDes" placeholder="Input description first..  ">
        </div>
        <input type="file" class="filepond11" name="filepond" data-allow-reorder="true" data-max-file-size="20MB" data-max-files="20" multiple="">

   


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="myachievements" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <input type="file" class="filepond20" name="filepond" data-allow-reorder="true" data-max-file-size="20MB" data-max-files="20" multiple="">
      </div>
    </div>
  </div>
`;


page("/organizer", ()=>{
console.log("organizer");  
$.ajax({
  url: "./api/load-organizer-data",
    type: "POST",
    dataType: "json",
    data: { 
      load: 1,
     }, 
    success: (data)=>{
    document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").html(organizerTemplate).show();

    $("#organizerinfo").text(data.username);     
    $("#activeEvents").empty();
    $.each(data.events, (indx, events)=>{
      console.log(events.id);
      if (events.subserv === "") {
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
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
                      <a id="createApplication${events.id}" class="btn btn-primary btn-sm createApplication" data-eventname="${events.eventname}" data-eventid="${events.id}">Send application</a>
                      <a id="report${events.id}" class="btn btn-warning btn-sm reportApplication" data-eventname="${events.eventname}" data-owner="${events.owner}" data-eventid="${events.id}">Report post</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
      }else{
       $("#activeEvents").append(`
              <div class="row" id="event${events.id}" style="width: 100%;">
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
                    <a id="createApplication${events.id}" class="btn btn-primary btn-sm createApplication" data-eventname="${events.eventname}" data-eventid="${events.id}">Send application</a>
                    <a id="report${events.id}" class="btn btn-warning btn-sm reportApplication" data-eventname="${events.eventname}" data-owner="${events.owner}" data-eventid="${events.id}">Report post</a>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
      }
  
    });
    $.each(data.allacceptedevents, (indx, events)=>{
      if (events.subserv === "") {
        if (data.myid == events.applicantid) {
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
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
                      <a class="btn btn-info btn-sm">Application accepted</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
          }else{
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
                  <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
                <div class="ribbon-wrapper">
                  <div class="ribbon bg-success">
                     Claimed
                  </div>
                </div>
                    <div class="card-header">
                    <div class="user-block">
                              <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                              <span class="username">
                               <a href="./organizer-view-profile">${events.username }</a>
                              </span>
                              <span class="description">Shared publicly - ${events.date}</span>
                              <h5 class="card-title m-0"><b style="color: blue;"><del>${events.category}</del></b> (<i style="color: green;"><del>₱${events.eventbudget}</del></i>)</h5>
                            </div>          
                      
                    </div>
                    <div class="card-body">
                      <h6 class="card-title"><b>${events.eventname}</b></h6>

                      <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <a class="btn btn-secondary btn-sm">Claimed on ${events.approvedate}</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `); 
          }
      }else{
    if (data.myid == events.applicantid) {
     $("#activeEvents").append(`
            <div class="row" id="event${events.id}" style="width: 100%;">
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
                  <a class="btn btn-info btn-sm">Application accepted</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `);
      }else{
     $("#activeEvents").append(`
            <div class="row" id="event${events.id}" style="width: 100%;">
              <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
            <div class="ribbon-wrapper">
              <div class="ribbon bg-success">
                 Claimed
              </div>
            </div>
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
                  <a class="btn btn-secondary btn-sm">Claimed on ${events.approvedate}</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `); 
      }
      }

       
    });
    console.log(data.services);
    $("#filteredServicesOrg").empty();
    $.each(data.services, (indx, services)=>{
    $("#filteredServicesOrg").append(`
      <div class="form-check">
        <input class="form-check-input filterOrg" type="checkbox" data-id="${services.id}">
        <label class="form-check-label">${services.service} (${services.eventcount})</label>
      </div>
    `);  
    });

    $.each(data.eventapplied, (idx, applied)=>{
       $("#createApplication"+applied.eventid+"").text("Application sent")
       document.getElementById("createApplication"+applied.eventid+"").setAttribute("class", "btn btn-success btn-sm"); 
       $("#report"+applied.eventid+"").remove();
    });

    // $("#allsponsors").empty();
    // $("#allsponsors").append(`
    // <h5><b>Sponsors</b></h5>  
    // `);

    // $.each(data.sponsor, (indx, sponsor)=>{
    // $("#allsponsors").append(`
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

    // $.each(data.acceptedevents, (idx, accepted)=>{
    //    $("#createApplication"+accepted.eventid+"").text("Application accepted")
    //    document.getElementById("createApplication"+accepted.eventid+"").setAttribute("class", "btn btn-info btn-sm"); 
    //    $("#report"+accepted.eventid+"").remove();
    // });    

    if (data.notif != 0) {
    $("#notifcount").text(data.notif); 
    }else{

    }
    if (data.messagecount != 0) {
    $("#messagescount").text(data.messagecount);  
    }else{
    $("#messagescount").text("");
    }    
    document.getElementById("navimage").setAttribute("src", data.userimage);
    clearInterval(intervalID);
    searchsubcategoryorg();
    }
});
});


var intervalID;


$(document).on("click", ".filterOrg", (e)=>{

let x = $('.filterOrg').filter(':checked');
$("#activeEvents").empty();
if (x.length == 0) {
console.log("goods");  
$.ajax({
  url: "./api/load-organizer-data",
    type: "POST",
    dataType: "json",
    data: { 
      load: 1,
     }, 
    success: (data)=>{
 
    
    $.each(data.events, (indx, events)=>{
    
      if (events.subserv === "") {
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
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
                      <a id="createApplication${events.id}" class="btn btn-primary btn-sm createApplication" data-eventname="${events.eventname}" data-eventid="${events.id}">Send application</a>
                      <a id="report${events.id}" class="btn btn-warning btn-sm reportApplication" data-eventname="${events.eventname}" data-owner="${events.owner}" data-eventid="${events.id}">Report post</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
      }else{
       $("#activeEvents").append(`
              <div class="row" id="event${events.id}" style="width: 100%;">
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
                    <a id="createApplication${events.id}" class="btn btn-primary btn-sm createApplication" data-eventname="${events.eventname}" data-eventid="${events.id}">Send application</a>
                    <a id="report${events.id}" class="btn btn-warning btn-sm reportApplication" data-eventname="${events.eventname}" data-owner="${events.owner}" data-eventid="${events.id}">Report post</a>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
      }
  
    });
    $.each(data.allacceptedevents, (indx, events)=>{
      if (events.subserv === "") {
        if (data.myid == events.applicantid) {
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
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
                      <a class="btn btn-info btn-sm">Application accepted</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
          }else{
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
                  <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
                <div class="ribbon-wrapper">
                  <div class="ribbon bg-success">
                     Claimed
                  </div>
                </div>
                    <div class="card-header">
                    <div class="user-block">
                              <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                              <span class="username">
                               <a href="./organizer-view-profile">${events.username }</a>
                              </span>
                              <span class="description">Shared publicly - ${events.date}</span>
                              <h5 class="card-title m-0"><b style="color: blue;"><del>${events.category}</del></b> (<i style="color: green;"><del>₱${events.eventbudget}</del></i>)</h5>
                            </div>          
                      
                    </div>
                    <div class="card-body">
                      <h6 class="card-title"><b>${events.eventname}</b></h6>

                      <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <a class="btn btn-secondary btn-sm">Claimed on ${events.approvedate}</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `); 
          }
      }else{
    if (data.myid == events.applicantid) {
     $("#activeEvents").append(`
            <div class="row" id="event${events.id}" style="width: 100%;">
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
                  <a class="btn btn-info btn-sm">Application accepted</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `);
      }else{
     $("#activeEvents").append(`
            <div class="row" id="event${events.id}" style="width: 100%;">
              <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
            <div class="ribbon-wrapper">
              <div class="ribbon bg-success">
                 Claimed
              </div>
            </div>
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
                  <a class="btn btn-secondary btn-sm">Claimed on ${events.approvedate}</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `); 
      }
      }

       
    });

    $("#filteredServicesOrg").empty();
    $.each(data.services, (indx, services)=>{
    $("#filteredServicesOrg").append(`
      <div class="form-check">
        <input class="form-check-input filterOrg" type="checkbox" data-id="${services.id}">
        <label class="form-check-label">${services.service}</label>
      </div>
    `);  
    });

    $.each(data.eventapplied, (idx, applied)=>{
        
       $("#createApplication"+applied.eventid+"").text("Application sent")
       document.getElementById("createApplication"+applied.eventid+"").setAttribute("class", "btn btn-success btn-sm"); 
       $("#report"+applied.eventid+"").remove();
    });

    clearInterval(intervalID);
    }
});


}else{

for (let i = 0; i < x.length; i++) {

$.ajax({
  url: "./api/load-organizer-selected-data",
    type: "POST",
    dataType: "json",
    data: { 
      catid: x[i].dataset.id,
     }, 
    success: (data)=>{
 

    $.each(data.events, (indx, events)=>{
      if (events.subserv === "") {
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
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
                      <a id="createApplication${events.id}" class="btn btn-primary btn-sm createApplication" data-eventname="${events.eventname}" data-eventid="${events.id}">Send application</a>
                      <a id="report${events.id}" class="btn btn-warning btn-sm reportApplication" data-eventname="${events.eventname}" data-owner="${events.owner}" data-eventid="${events.id}">Report post</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
      }else{
       $("#activeEvents").append(`
              <div class="row" id="event${events.id}" style="width: 100%;">
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
                    <a id="createApplication${events.id}" class="btn btn-primary btn-sm createApplication" data-eventname="${events.eventname}" data-eventid="${events.id}">Send application</a>
                    <a id="report${events.id}" class="btn btn-warning btn-sm reportApplication" data-eventname="${events.eventname}" data-owner="${events.owner}" data-eventid="${events.id}">Report post</a>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
      }
  
    });
    $.each(data.allacceptedevents, (indx, events)=>{
      if (events.subserv === "") {
        if (data.myid == events.applicantid) {
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
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
                      <a class="btn btn-info btn-sm">Application accepted</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
          }else{
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
                  <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
                <div class="ribbon-wrapper">
                  <div class="ribbon bg-success">
                     Claimed
                  </div>
                </div>
                    <div class="card-header">
                    <div class="user-block">
                              <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                              <span class="username">
                               <a href="./organizer-view-profile">${events.username }</a>
                              </span>
                              <span class="description">Shared publicly - ${events.date}</span>
                              <h5 class="card-title m-0"><b style="color: blue;"><del>${events.category}</del></b> (<i style="color: green;"><del>₱${events.eventbudget}</del></i>)</h5>
                            </div>          
                      
                    </div>
                    <div class="card-body">
                      <h6 class="card-title"><b>${events.eventname}</b></h6>

                      <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <a class="btn btn-secondary btn-sm">Claimed on ${events.approvedate}</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `); 
          }
      }else{
    if (data.myid == events.applicantid) {
     $("#activeEvents").append(`
            <div class="row" id="event${events.id}" style="width: 100%;">
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
                  <a class="btn btn-info btn-sm">Application accepted</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `);
      }else{
     $("#activeEvents").append(`
            <div class="row" id="event${events.id}" style="width: 100%;">
              <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
            <div class="ribbon-wrapper">
              <div class="ribbon bg-success">
                 Claimed
              </div>
            </div>
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
                  <a class="btn btn-secondary btn-sm">Claimed on ${events.approvedate}</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `); 
      }
      }

       
    });

    $.each(data.eventapplied, (idx, applied)=>{
    
       $("#createApplication"+applied.eventid+"").text("Application sent")
       document.getElementById("createApplication"+applied.eventid+"").setAttribute("class", "btn btn-success btn-sm"); 
       $("#report"+applied.eventid+"").remove();
    });

    clearInterval(intervalID);
    }
});

}

}

});


$(document).on("click", ".createApplication", (e)=>{

Swal.fire({
  title: 'Submit your Application',
  input: 'textarea',
  inputAttributes: {
    autocapitalize: 'off'
  },
  inputLabel: 'Add some notes',
  inputPlaceholder: 'Why should we hire you?',
  showCancelButton: true,
  confirmButtonText: 'Submit',
  showLoaderOnConfirm: true,
  preConfirm: (note) => {

  $.ajax({
  url: "./api/send-event-application",
  type: "POST",
  data: {
   eventid: e.target.dataset.eventid,
   note: note
  },
  success: (data)=>{
  let detail = "send an application to an event: "+e.target.dataset.eventname;  
  update_info(detail);  

  Swal.fire(
    'Submitted!',
    'Your application has been Submitted.',
    'success'
  )
  $("#report"+e.target.dataset.eventid+"").remove();
  $("#createApplication"+e.target.dataset.eventid+"").text("Application sent")
  document.getElementById("createApplication"+e.target.dataset.eventid+"").setAttribute("class", "btn btn-success btn-sm");

  }
  });

  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
  Swal.fire(
    'Submitted!',
    'Your application has been Submitted.',
    'success'
  )
  }
})

// Swal.fire({
//   title: 'Send application?',
//   text: "You won't be able to revert this!",
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
//   confirmButtonText: 'Yes, send it!'
// }).then((result) => {
//   if (result.isConfirmed) {

//   $.ajax({
//   url: "./api/send-event-application",
//   type: "POST",
//   data: {
//    eventid: e.target.dataset.eventid,
//   },
//   success: (data)=>{
//   Swal.fire(
//     'Submitted!',
//     'Your application has been Submitted.',
//     'success'
//   )
//   $("#createApplication"+e.target.dataset.eventid+"").text("Application sent")
//   document.getElementById("createApplication"+e.target.dataset.eventid+"").setAttribute("class", "btn btn-success btn-sm");

//   }
//   });

//   }
// });

});

$(document).on("click", "#dropdownSubMenu2", ()=>{
console.log("heyyyy");
$.ajax({
  url: "./api/get-categories",
  type: "POST",
  data: {
    load:1,
  },
  success: (data)=>{
  console.log("success"); 
  
  $("#dropdownsubmenu").empty();
  $.each(data.category, (indx, cat)=>{
    $("#dropdownsubmenu").append(`
      <li><a class="dropdown-item categorySelected" style="cursor: pointer;" data-catid="${cat.id}">${cat.category}</a></li>
    `);
  }); 
  }

});

});

$(document).on("click", ".categorySelected", (e)=>{

$.ajax({
  url: "./api/get-selected-category",
  type: "POST",
  data: {
   catid: e.target.dataset.catid, 
  },
  success: (data)=>{
  $("#activeEvents").empty();
  $.each(data.events, (indx, events)=>{
   $("#activeEvents").append(`
          <div class="col-md-4 col-sm-6 col-12">
            <div class="card">
              <div class="card-header">
                <div class="user-block">
                        <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                        <span class="username">
                          <a href="#">${events.username }</a>
                        </span>
                        <span class="description">Shared publicly - 7:30 PM today</span>
                      </div>          
                <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
              </div>
              <div class="card-body">
                <h6 class="card-title"><b>${events.eventname}</b></h6>

                <p class="card-text" style="font-size: 13px;">With supporting text below as a natural lead-in to additional content. sadsadsadsadsad adssadsadsa asdsadsadsa asdsadsad asdsad</p>
                <a id="createApplication${events.id}" class="btn btn-primary btn-sm createApplication" data-eventname="${events.eventname}" data-eventid="${events.id}">Send application</a>
              </div>
            </div>
            <!-- /.info-box -->
          </div>
   `);  
  }); 

    $.each(data.allacceptedevents, (indx, events)=>{

    if (data.myid == events.applicantid) {
     $("#activeEvents").append(`
            <div class="col-md-4 col-sm-6 col-12" id="event${events.id}">
              <div class="card">
                <div class="card-header">
                <div class="user-block">
                          <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                          <span class="username">
                            <a>${events.username }</a>
                          </span>
                          <span class="description">Shared publicly - ${events.date}</span>
                        </div>          
                  <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                </div>
                <div class="card-body">
                  <h6 class="card-title"><b>${events.eventname}</b></h6>

                  <p class="card-text" style="font-size: 13px;">${events.description}</p>
                  <a class="btn btn-info btn-sm">Application accepted</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `);
      }else{
     $("#activeEvents").append(`
            <div class="col-md-4 col-sm-6 col-12" id="event${events.id}">
              <div class="card">
            <div class="ribbon-wrapper">
              <div class="ribbon bg-success">
                 Claimed
              </div>
            </div>
                <div class="card-header">
                <div class="user-block">
                          <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                          <span class="username">
                            <a>${events.username }</a>
                          </span>
                          <span class="description">Shared publicly - ${events.date}</span>
                        </div>          
                  <h5 class="card-title m-0"><b style="color: blue;"><del>${events.category}</del></b> (<i style="color: green;"><del>₱${events.eventbudget}</del></i>)</h5>
                </div>
                <div class="card-body">
                  <h6 class="card-title"><b>${events.eventname}</b></h6>

                  <p class="card-text" style="font-size: 13px;">${events.description}</p>
                  <a class="btn btn-secondary btn-sm">Claimed on ${events.approvedate}</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `); 
      }
       
    });

  $.each(data.eventapplied, (idx, applied)=>{
    console.log(applied.eventid);
       $("#createApplication"+applied.eventid+"").text("Application sent")
       document.getElementById("createApplication"+applied.eventid+"").setAttribute("class", "btn btn-success btn-sm"); 
       $("#report"+applied.eventid+"").remove();
  });
  }
})

});

page("/organizer-my-account", ()=>{
$.ajax({
  url: "./api/get-organizer-account",
  type: "POST",
  data:{
    load: 1,
  },
  success: (data)=>{
    document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").html(organizerTemplate).show();
    $("#organizerinfo").text(data.username); 
    if (data.notif != 0) {
    $("#notifcount").text(data.notif); 
    }else{

    }
    if (data.messagecount != 0) {
    $("#messagescount").text(data.messagecount);  
    }else{
    $("#messagescount").text("");
    }    
    document.getElementById("navimage").setAttribute("src", data.userimage);
    clearInterval(intervalID);
console.log(data);    
$("#maincontainerorg").empty().append(`
   
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
                   
                      <button class="star">&#9734</button>
                      <button class="star">&#9734</button>
                      <button class="star">&#9734</button>
                      <button class="star">&#9734</button>
                      <button class="star">&#9734</button>
               
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

        <div class="row" id="allAcceptedEvents">

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
                  <button class="btn btn-primary btn-sm" id="accomplishments" style="float: right;">
                  <i class="fa fa-camera" style="pointer-events: none;"></i>
                  </button>
                </div>
             </div>   
          </div>
        </div>

        <div class="row" id="uploadedAccomplishments">
        </div>

        </div>



      </div>


        </div>
      </div>

      </div>
    </div>
`);

  $.each(data.file, (indx, img)=>{
  $("#uploadedAccomplishments").append(`
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
         $("#allAcceptedEvents").append(`
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
         $("#allAcceptedEvents").append(`
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
     $("#allAcceptedEvents").append(`
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
     $("#allAcceptedEvents").append(`
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

      const allstar = document.querySelectorAll('.star');
  
      for (let i = 0; i < data.info[0].rating; i++) {
       allstar[i].innerHTML = '&#9733';
      }


    // if (data.notif != 0) {
    // $("#notifcount").text(data.notif); 
    // }else{

    // }
    // if (data.messagecount != 0) {
    // $("#messagescount").text(data.messagecount);  
    // }else{
    // $("#messagescount").text("");
    // }    
    // document.getElementById("navimage").setAttribute("src", data.userimage);
    // $("#organizerinfo").text(data.username); 
    // clearInterval(intervalID);

  }

});

});



page("/organizer-account", ()=>{
$.ajax({
  url: "./api/get-organizer-account",
  type: "POST",
  data:{
    load: 1,
  },
  success: (data)=>{
    document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").html(organizerTemplate).show();
    $("#organizerinfo").text(data.username);  
    document.getElementById("navimage").setAttribute("src", data.userimage);$("#maincontainerorg").empty().append(`
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


               <strong><i class="fas fa-book mr-1"></i> Education</strong>

                <p class="text-muted" id="education">
                 ${data.info[0].school}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].school}" data-name="school" data-selection="Education" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
                </p>

                <hr>

                <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

                <p class="text-muted">${data.info[0].address}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].address}" data-name="Address" data-selection="address" class="fas fa-pencil-alt" style="cursor: pointer;"></i></p>

                <hr>

                <strong><i class="fas fa-phone-alt mr-1"></i>Contact</strong>

                <p class="text-muted">
                ${data.info[0].contact}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].contact}" data-name="contact" data-selection="Contact" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
                </p>

                <hr>
                <strong><i class="fas fa-pencil-alt mr-1"></i>Skills</strong>

                <p class="text-muted">
                ${data.info[0].skills}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].skills}" data-name="skills" data-selection="Skills" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
                </p>

                <hr>

                <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

                <p class="text-muted">${data.info[0].notes}.  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].notes}" data-name="Notes" data-selection="notes" class="fas fa-pencil-alt" style="cursor: pointer;"></i></p>
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

  $.each(data.file, (indx, img)=>{
  $("#slides").append(`
            <div class="slide">
              <div class="slide-content">
                <a href="${img.img}" target="_blank">
                  <img class="img" src="${img.img}" loading="lazy" />
                  <div class="button-container">
                    <span class="button">Download</span>
                  </div>
                </a>
              </div>
            </div>
  `);  
  });



    if (data.notif != 0) {
    $("#notifcount").text(data.notif); 
    }else{

    }
    if (data.messagecount != 0) {
    $("#messagescount").text(data.messagecount);  
    }else{
    $("#messagescount").text("");
    }    
    document.getElementById("navimage").setAttribute("src", data.userimage);
    $("#organizerinfo").text(data.username); 
    clearInterval(intervalID);

  }

});

});


// $(document).on("click", "#organizeraccount", ()=>{


// });

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
  page("/organizer-account");
//   $("#maincontainer").empty().append(`
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
//             <div class="card card-widget widget-user">
//               <!-- Add the bg color to the header using any of the bg-* classes -->
//               <div id="changecover" class="widget-user-header text-white" style="background: url('../dist/img/photo1.png') center center; cursor: pointer;">
//                 <h3 class="widget-user-username text-right">${data.info[0].fullname}</h3>
//                 <h5 class="widget-user-desc text-right">${data.info[0].email}</h5>
//               </div>
//               <div class="widget-user-image">
//                 <img class="img-circle" id="changeprofile" src="${data.info[0].userimage}" style="cursor: pointer; width: 100px; height: 100px;" alt="User Avatar">
//               </div>
//               <div class="card-footer">
//                 <div class="row">
//                   <div class="col-sm-3 border-right">
//                     <div class="description-block">

//                     </div>
//                     <!-- /.description-block -->
//                   </div>
//                   <!-- /.col -->
//                   <div class="col-sm-6 border-right">
//                     <div class="description-block">
//                       <button class="star">&#9734</button>
//                       <button class="star">&#9734</button>
//                       <button class="star">&#9734</button>
//                       <button class="star">&#9734</button>
//                       <button class="star">&#9734</button>
//                     </div>
//                     <center><a id="rateUser" data-organizerid="${data.info[0].userid}" style="cursor: pointer; color: blue;">Rate Me?</a></center>
//                     <!-- /.description-block -->
//                   </div>
//                   <!-- /.col -->
//                   <div class="col-sm-3">
//                     <div class="description-block">

//                     </div>
//                     <!-- /.description-block -->
//                   </div>
//                   <!-- /.col -->
//                 </div>
//                 <!-- /.row -->
//               </div>
//             </div>

//                <strong><i class="fas fa-book mr-1"></i> Education</strong>

//                 <p class="text-muted" id="education">
//                  ${data.info[0].school}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].school}" data-name="school" data-selection="Education" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
//                 </p>

//                 <hr>

//                 <strong><i class="fas fa-map-marker-alt mr-1"></i> Location</strong>

//                 <p class="text-muted">${data.info[0].address}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].address}" data-name="Address" data-selection="address" class="fas fa-pencil-alt" style="cursor: pointer;"></i></p>

//                 <hr>

//                 <strong><i class="fas fa-phone-alt mr-1"></i>Contact</strong>

//                 <p class="text-muted">
//                 ${data.info[0].contact}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].contact}" data-name="contact" data-selection="Contact" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
//                 </p>

//                 <hr>
//                 <strong><i class="fas fa-pencil-alt mr-1"></i>Skills</strong>

//                 <p class="text-muted">
//                 ${data.info[0].skills}  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].skills}" data-name="skills" data-selection="Skills" class="fas fa-pencil-alt" style="cursor: pointer;"></i>
//                 </p>

//                 <hr>

//                 <strong><i class="far fa-file-alt mr-1"></i> Notes</strong>

//                 <p class="text-muted">${data.info[0].notes}.  <i id="editProfile" data-userid="${data.info[0].userid}" data-value="${data.info[0].notes}" data-name="Notes" data-selection="notes" class="fas fa-pencil-alt" style="cursor: pointer;"></i></p>
//               </div>
//               <!-- /.card-body -->
//             </div>
//             <!-- /.card -->

//   </div>
//  <div class="col-md-3">
// </div>  
//           <!-- /.col -->
// </div>
//   `);
}
});
});

$(document).on("click", "#reloadOrganizer", ()=>{
 
window.location.href = 'http://localhost/eventorg/view/home.php';  
// $.ajax({
//   url: "./api/load-organizer-data",
//     type: "POST",
//     dataType: "json",
//     data: { 
//       load: 1,
//      }, 
//     success: (data)=>{  
//     console.log(data); 
//     $("#maincontainerorg").empty().append(`
//         <!-- Content Header (Page header) -->
//         <div class="content-header">
//           <div class="container">
//             <div class="row mb-2">
//               <div class="col-sm-6">
//                 <h1 class="m-0"> Events Posted</h1>
//               </div><!-- /.col -->

//             </div><!-- /.row -->
//           </div><!-- /.container-fluid -->
//         </div>
//         <!-- /.content-header -->

//         <!-- Main content -->
//         <div class="content">
//           <div class="container">
//             <div class="row" id="activeEvents">



//               <!-- /.col -->
//             </div>
//             <!-- /.row -->
//           </div><!-- /.container-fluid -->
//         </div>
//     `);
//     $("#activeEvents").empty();
//     $.each(data.events, (indx, events)=>{
//      $("#activeEvents").append(`
//             <div class="col-md-4 col-sm-6 col-12" id="event${events.id}">
//               <div class="card">
//                 <div class="card-header">
//                 <div class="user-block">
//                           <img class="img-circle img-bordered-sm" src="../dist/img/user1-128x128.jpg" alt="user image">
//                           <span class="username">
//                             <a href="#">${events.username }</a>
//                           </span>
//                           <span class="description">Shared publicly - ${events.date}</span>
//                         </div>          
//                   <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
//                 </div>
//                 <div class="card-body">
//                   <h6 class="card-title"><b>${events.eventname}</b></h6>

//                   <p class="card-text" style="font-size: 13px;">${events.description}</p>
//                   <a id="createApplication${events.id}" class="btn btn-primary btn-sm createApplication" data-eventid="${events.id}">Send application</a>
//                <a id="report${events.id}" class="btn btn-warning btn-sm reportApplication" data-owner="${events.owner}" data-eventid="${events.id}">Report post</a>
//                 </div>
//               </div>
//               <!-- /.info-box -->
//             </div>
//      `);  
//     });
//     $.each(data.eventapplied, (idx, applied)=>{
//        $("#createApplication"+applied.eventid+"").text("Application sent")
//        document.getElementById("createApplication"+applied.eventid+"").setAttribute("class", "btn btn-success btn-sm"); 
//        $("#report"+applied.eventid+"").remove();
//     });
   
//     }
// });

});

$(document).on("click", ".reportApplication", (e)=>{

Swal.fire({
  title: 'Report post?',
  text: "Are you sure that it doesn't follow our Community Standards?",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, report post!'
}).then((result) => {
  if (result.isConfirmed) {

  $.ajax({
  url: "./api/report-event",
  type: "POST",
  data: {
   eventid: e.target.dataset.eventid,
   owner: e.target.dataset.owner
  },
  success: (data)=>{
  let detail = "reported an event ("+e.target.dataset.eventname+") owned by "+data.status;  
  update_info(detail);  
  Swal.fire(
    'Post Reported!',
    'we will review it and ban the acount if necessary.',
    'success'
  )
  // $("#createApplication"+e.target.dataset.eventid+"").text("Application sent")
  // document.getElementById("createApplication"+e.target.dataset.eventid+"").setAttribute("class", "btn btn-success btn-sm");

  }
  });

  }
});

});

$(document).on("click", "#notificationsorg", ()=>{
  $.ajax({
  url: "./api/check-notification",
  type: "POST",
  data: {
    notif: 1,
  },
  success: (data)=>{
  $("#notifcount").text("");  
  $("#notifdata").empty();

  if (data.details.length == 0) {
    $("#notifdata").append(`
            <div class="dropdown-divider"></div>
            <a style="cursor: pointer;" >
              Empty notification.
            </a>      
    `);
  }else{
  $.each(data.details, (indx, job)=>{
    $("#notifdata").append(`
            <div class="dropdown-divider"></div>
            <a style="cursor: pointer;" href="./organizer-${job.eventid}-notification" class="dropdown-item" data-eventid="${job.eventid}" id="viewNotif">
              <i class="fas fa-flag mr-2" style="pointer-events: none;"></i> Application accepted<br>
              <span class="text-muted text-sm" style="pointer-events: none;"><b style="color: green;">${job.fullname}</b> Accepted Your application</span>
              <br>
              <span class="text-muted text-sm" style="pointer-events: none;">Please check your email.</span><br>
              <span class="text-muted" style="font-size: 12px; float: right; pointer-events: none;"><i>${job.dateapproved}</i></span>
            </a>      
    `);
  });
  }

  }
  });
});

  page("/organizer-:eventid-notification", (e)=>{
  $.ajax({
  url: "./api/view-notification",
  type: "POST",
  data: {
    eventid: e.params.eventid,
  },
  success: (data)=>{
  document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
  document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(organizerTemplate).show();
  $("#organizerinfo").text(data.username);
  $("#maincontainerorg").empty().append(`
    <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0"></h1>
          </div><!-- /.col -->

        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <div class="content">
      <div class="container">
        <div class="row">
            <div class="col-md-12 col-sm-6 col-12" id="eventVolejRejNm">
              <div class="card">
              <div class="ribbon-wrapper">
                <div class="ribbon bg-success">
                 Accepted
                </div>
              </div>
                <div class="card-header">
                <div class="user-block">
                          <img class="img-circle img-bordered-sm" src="${data.details[0].userimage}" alt="user image">
                          <span class="username">
                            <a href="./organizer-view-profile">${data.details[0].fullname}</a>
                          </span>
                          <span class="description">Approved on -  ${data.details[0].dateapproved}</span>
                        </div>          
                </div>
                <div class="card-body">
                  <h6 class="card-title"><b>${data.details[0].eventname}</b></h6>

                  <p class="card-text" style="font-size: 13px;">${data.details[0].eventdes}</p>
                  <hr>
                  <h6 class="card-title"><b>Contact info</b></h6>
                  <p class="card-text" style="font-size: 13px;">${data.details[0].email} / ${data.details[0].contact}</p>
                  
                </div>
              </div>
              <!-- /.info-box -->
            </div>
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>


  `);  
    if (data.notif != 0) {
    $("#notifcount").text(data.notif); 
    }else{

    }
    if (data.messagecount != 0) {
    $("#messagescount").text(data.messagecount);  
    }else{
    $("#messagescount").text("");
    }    
    document.getElementById("navimage").setAttribute("src", data.userimage);
    clearInterval(intervalID);

  }
  });
  });

// $(document).on("click", "#viewNotif", (e)=>{
//   console.log(e.target.dataset.eventid);


// });

$(document).on("click", "#messagesorg", (e)=>{

  $.ajax({
  url: "./api/check-messages-org",
  type: "POST",
  data: {
    notif: 1,
  },
  success: (data)=>{  
  $("#messagescount").text("");  
  $("#messagenotif").empty();

  if (data.inbox.length == 0) {
    $("#messagenotif").append(`

            <div class="dropdown-divider"></div>
            <a style="cursor: pointer;"  class="dropdown-item" >
              No messages yet.
            </a>        
    `);
  }else{
  $.each(data.inbox, (indx, inbox)=>{

    $("#messagenotif").append(`

            <div class="dropdown-divider"></div>
            <a style="cursor: pointer;" href="./organizer-${inbox.eventid}-viewmessage" class="dropdown-item" data-eventid="${inbox.eventid}">
              (${inbox.unseen} <i class="fas fa-envelope mr-2" style="pointer-events: none;"></i>) ${inbox.fullname}<br>
              <span class="text-muted text-sm" style="pointer-events: none;"><b style="color: green;">${inbox.eventname}</b></span>
              <br>
              <span class="text-muted text-sm" style="pointer-events: none;">Click to start your convo.</span><br>
              <span class="text-muted" style="font-size: 12px; float: right; pointer-events: none;"><i></i></span>
            </a>      
    `);
  });  
  }

  }
  });
});

page("/organizer-:eventid-viewmessage", (e)=>{

$("#maincontainerorg").data("eventid", e.params.eventid);
console.log(e.params.eventid);
var eventid = e.params.eventid;
  $.ajax({
  url: "./api/view-messages",
  type: "POST",
  data: {
    eventid: e.params.eventid,
  },
  success: (data)=>{  
  document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
  document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(organizerTemplate).show();


  clearInterval(intervalID);
  $("#maincontainerorg").empty().append(`
    <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0"></h1>
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
                    <input type="text" class="form-control" id="mymessage" placeholder="Type Message.." aria-label="Username" aria-describedby="basic-addon1">
                    <span class="input-group-append">
                      <button type="button" class="btn btn-primary" id="sendmessageorg" data-reciever="${data.reciever}"  data-eventid="${e.params.eventid}">Send</button>
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


    $("#organizerinfo").text(data.username); 
    
    if (data.notif != 0) {
    $("#notifcount").text(data.notif); 
    }else{

    }
    if (data.messagecount != 0) {
    $("#messagescount").text(data.messagecount);  
    }else{
    $("#messagescount").text("");
    }    
    document.getElementById("navimage").setAttribute("src", data.userimage);


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
  url: "./api/send-messages",
  type: "POST",
  data: {
    eventid: eventid,
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


$(document).on("click", "#viewMessage", (e)=>{
  console.log(e.target.dataset.eventid);
  $("#maincontainerorg").data("eventid", e.target.dataset.eventid);
  $.ajax({
  url: "./api/view-messages",
  type: "POST",
  data: {
    eventid: e.target.dataset.eventid,
  },
  success: (data)=>{   
  clearInterval(intervalID);
  $("#maincontainerorg").empty().append(`
    <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0"></h1>
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
                    <input type="text" class="form-control" id="mymessage" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
                    <span class="input-group-append">
                      <button type="button" class="btn btn-primary" id="sendmessageorg" data-reciever="${data.reciever}"  data-eventid="${e.target.dataset.eventid}">Send</button>
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
    eventid: e.target.dataset.eventid,
  },
  success: (data)=>{ 
  console.log(e.target.dataset.eventid);  
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
  url: "./api/send-messages",
  type: "POST",
  data: {
    eventid: $("#maincontainerorg").data("eventid"),
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

$(document).on("click", "#sendmessageorg", (e)=>{
  $.ajax({
  url: "./api/send-messages",
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

page("/organizer-accomplishments", ()=>{
  $.ajax({
  url: "./api/get-accomplishments",
  type: "POST",
  data: {
   count: 1,
  },
  success: (data)=>{ 
  clearInterval(intervalID);
  document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
  document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(organizerTemplate).show();
  $("#maincontainerorg").empty().append(`
    <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div><!-- /.col -->
          <div class="col-sm-6">
          
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container">
        <fieldset class="border p-2">
          <legend  class="w-auto">Recent Accomplishments
          <button class="btn btn-secondary btn-sm" id="uploadachievements"><i class="fa fa-camera" aria-hidden="true"></i></button>
          </legend>
          <div class="row" id="images">

          </div>
        </fieldset>  
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
  `);

 $.each(data.url, (indx, url)=>{
  $("#images").append(`
    <div class="col-sm-5 col-md-3">
              <div class="col-sm-5 col-md-3">
              <center>
                <a target="_blank" href="${url.url}">
                  <img src="${url.url}" class="imgthumb" alt="Forest" style="width:250px; border: 1px solid #ddd; border-radius: 4px; padding: 5px; margin-top: 10px;">
                </a>
              </center>  
              </div>
    </div>
  `);
 });   

$("#organizerinfo").text(data.username); 
    
if (data.notif != 0) {
    $("#notifcount").text(data.notif); 
    }else{

    }
    if (data.messagecount != 0) {
    $("#messagescount").text(data.messagecount);  
    }else{
    $("#messagescount").text("");
    }    
    document.getElementById("navimage").setAttribute("src", data.userimage);

  }


  });
});

// $(document).on("click", "#accomplishments", ()=>{



// });



function loadmessages(eventid)
{

console.log("haha");

}

function searchsubcategoryorg()
{
  const inputBox = document.querySelector('.searchCategoryOrg');

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
          <a href="./organizer-${search.id}-service" class="dropdown-item">
          ${search.service}
          </a>
        `);
        });
        }
      });
    }

  }

}



$(document).on("click", "#uploadDes", ()=>{


});

$(document).on("click", "#viewfullimage", (e)=>{
console.log(e.target.dataset);

$("#viewphoto").modal("show");

$("#viewFull").empty().append(`
<img src="${e.target.dataset.url}" alt="Avatar" class="image" style="width:100%">
`);

});


page("/organizer-:eventid-service", (e)=>{

  $.ajax({
    url: "./api/get-search-category",
    type: "POST",
    data: {
      eventid: e.params.eventid,
    },
    success: (data)=>{
    document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").html(organizerTemplate).show();

    $("#organizerinfo").text(data.username);
    document.getElementById("dropdownResult").setAttribute("class", "dropdown-menu dropdown-menu-lg dropdown-menu-right scroll");
    console.log(data);  
    $("#activeEvents").empty();
    $.each(data.events, (indx, events)=>{
      if (events.subserv === "") {
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
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
                      <a id="createApplication${events.id}" class="btn btn-primary btn-sm createApplication" data-eventname="${events.eventname}" data-eventid="${events.id}">Send application</a>
                      <a id="report${events.id}" class="btn btn-warning btn-sm reportApplication" data-eventname="${events.eventname}" data-owner="${events.owner}" data-eventid="${events.id}">Report post</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
      }else{
       $("#activeEvents").append(`
              <div class="row" id="event${events.id}" style="width: 100%;">
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
                    <a id="createApplication${events.id}" class="btn btn-primary btn-sm createApplication" data-eventname="${events.eventname}" data-eventid="${events.id}">Send application</a>
                    <a id="report${events.id}" class="btn btn-warning btn-sm reportApplication" data-eventname="${events.eventname}" data-owner="${events.owner}" data-eventid="${events.id}">Report post</a>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
      }
  
    });

    $.each(data.allacceptedevents, (indx, events)=>{
      if (events.subserv === "") {
        if (data.myid == events.applicantid) {
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
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
                      <a class="btn btn-info btn-sm">Application accepted</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `);
          }else{
         $("#activeEvents").append(`
                <div class="row" id="event${events.id}" style="width: 100%;">
                  <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
                <div class="ribbon-wrapper">
                  <div class="ribbon bg-success">
                     Claimed
                  </div>
                </div>
                    <div class="card-header">
                    <div class="user-block">
                              <img class="img-circle img-bordered-sm" src="${events.userimage}" alt="user image">
                              <span class="username">
                               <a href="./organizer-view-profile">${events.username }</a>
                              </span>
                              <span class="description">Shared publicly - ${events.date}</span>
                              <h5 class="card-title m-0"><b style="color: blue;"><del>${events.category}</del></b> (<i style="color: green;"><del>₱${events.eventbudget}</del></i>)</h5>
                            </div>          
                      
                    </div>
                    <div class="card-body">
                      <h6 class="card-title"><b>${events.eventname}</b></h6>

                      <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <a class="btn btn-secondary btn-sm">Claimed on ${events.approvedate}</a>
                    </div>
                  </div>
                  <!-- /.info-box -->
                </div>
         `); 
          }
      }else{
    if (data.myid == events.applicantid) {
     $("#activeEvents").append(`
            <div class="row" id="event${events.id}" style="width: 100%;">
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
                  <a class="btn btn-info btn-sm">Application accepted</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `);
      }else{
     $("#activeEvents").append(`
            <div class="row" id="event${events.id}" style="width: 100%;">
              <div class="card" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); width: 100%;">
            <div class="ribbon-wrapper">
              <div class="ribbon bg-success">
                 Claimed
              </div>
            </div>
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
                  <a class="btn btn-secondary btn-sm">Claimed on ${events.approvedate}</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `); 
      }
      }
 
    });

    $.each(data.eventapplied, (idx, applied)=>{
    
       $("#createApplication"+applied.eventid+"").text("Application sent")
       document.getElementById("createApplication"+applied.eventid+"").setAttribute("class", "btn btn-success btn-sm"); 
       $("#report"+applied.eventid+"").remove();
    });
    if (data.notif != 0) {
    $("#notifcount").text(data.notif); 
    }else{

    }
    if (data.messagecount != 0) {
    $("#messagescount").text(data.messagecount);  
    }else{
    $("#messagescount").text("");
    }    
    document.getElementById("navimage").setAttribute("src", data.userimage);
    clearInterval(intervalID);
    searchsubcategoryorg();


    }
  });

});


$(document).on("click", "#deleteImage", (e)=>{

Swal.fire({
  title: 'Delete photo?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {

  $.ajax({
  url: "./api/delete-image",
  type: "POST",
  data: {
    imgid: e.target.dataset.id,
  },
  success: (data)=>{
    $("#uploadedAccomplishments").empty();
    $.each(data.file, (indx, img)=>{
    $("#uploadedAccomplishments").append(`
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
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } 
  });
  }
})
});

$(document).on("click", "#hiddendiv2", (e)=>{
console.log(e.target.dataset.style);
if (e.target.dataset.style === "block") {
document.getElementById("allsponsors").setAttribute("style", "display: none;");
document.getElementById("hiddendiv2").setAttribute("data-style", "none");
document.getElementById("icon-hide2").setAttribute("class", "fas fa-plus");
}else if (e.target.dataset.style === "none") {
document.getElementById("allsponsors").setAttribute("style", "display: block;");
document.getElementById("hiddendiv2").setAttribute("data-style", "block");
document.getElementById("icon-hide2").setAttribute("class", "fas fa-minus");
}

});