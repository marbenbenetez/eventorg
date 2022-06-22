var newTemplate = `
<!-- Modal -->
<div class="modal fade" id="userproftemplate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
      </div>
      <div class="modal-body" id="userContainer">
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="modal fade" id="adsTemplate" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
      </div>
      <div class="modal-body">
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Sponsor Name</label>
        <input type="text" class="form-control" id="sponsorname">
      </div>
      <div class="mb-3">
        <label for="" class="form-label">Website Url</label>
        <input type="text" class="form-control" id="weburl">
      </div>
      <input type="file" class="filepond13" name="filepond" data-allow-reorder="true" data-max-file-size="20MB" data-max-files="1">    
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

<div class="wrapper">

  <!-- Preloader 
  <div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="./img/event.png" alt="AdminLTELogo" height="60" width="60">
  </div> -->

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-cyan navbar-dark">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="./admin" class="nav-link"></a>
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link"></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <!-- Navbar Search -->



      <!-- Notifications Dropdown Menu -->
      <li class="nav-item dropdown">
        <a class="nav-link"  href="./admin-logout">
          <i class='fas fa-sign-out-alt'></i>
          Logout
        </a>
<!--        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div> -->
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-white-primary elevation-4" style="background-color: white;">
    <!-- Brand Logo -->
    <a href="./admin" class="brand-link">
      <img src="./img/event.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
      <img src="./img/logo.png" style="height: 20px; width: 150px;">
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a class="d-block" id="adminname">Alexander Pierce</a>
        </div>
      </div>


      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item">
            <a href="./admin" class="nav-link" id="admindash">
              <i class="nav-icon fa fa-dashboard"></i>
              <p>
                Dashboard
              </p>
            </a>
          </li>

          <li class="nav-item">
            <a href="./admin-events" class="nav-link" id="adminevents">
              <i class="nav-icon fa-solid fa-handshake"></i>
              <p>
                Events
              </p>
            </a>
          </li>

          <li class="nav-item">
            <a href="./admin-registered-users" class="nav-link" id="registereduser">
              <i class="nav-icon fa-solid fa-user-check"></i>
              <p>
                Organizers
              </p>
            </a>
          </li>

          <li class="nav-item">
            <a href="./admin-client-users" class="nav-link" id="registeredclient">
              <i class="nav-icon fa-solid fa-user"></i>
              <p>
                Clients
              </p>
            </a>
          </li>

          <li class="nav-item">
            <a href="./admin-activity-logs" class="nav-link" id="activitylogs">
              <i class="nav-icon fa fa-history"></i>
              <p>
                Activity Logs
              </p>
            </a>
          </li>

          <li class="nav-item">
            <a href="./admin-pending-users" class="nav-link" id="pendinguser">
              <i class="nav-icon fa-solid fa-user-clock"></i>
              <p>
                Pending Users
              </p>
            </a>
          </li>

          <li class="nav-item">
            <a href="./admin-banned-users" class="nav-link" id="banneduser">
              <i class="nav-icon fa-solid fa-user-large-slash"></i>
              <p>
                Banned Users
              </p>
            </a>
          </li>          

          <li class="nav-item">
            <a href="./admin-events-reported" class="nav-link" id="eventsreported">
              <i class="nav-icon fa-solid fa-calendar-xmark"></i>
              <p>
               Reported Posts
              </p>
            </a>
          </li> 

          <li class="nav-item">
            <a href="./admin-services" class="nav-link" id="services">
              <i class="nav-icon fa-solid fa-briefcase"></i>
              <p>
               Event Services
              </p>
            </a>
          </li> 

          <li class="nav-item">
            <a href="./admin-sponsors" class="nav-link" id="sponsors">
              <i class='nav-icon fas fa-ad'></i>
              <p>
               Sponsors/Ads
              </p>
            </a>
          </li> 

          <li class="nav-item">
            <a href="./admin-charts" class="nav-link" id="charts">
              <i class="nav-icon fa-solid fa-chart-column"></i>
              <p>
               Charts
              </p>
            </a>
          </li> 

        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Admin Dashboard</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><a href="#"></a></li>
              <li class="breadcrumb-item active">Admin Dashboard v1</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid" id="admindata">
        <!-- Small boxes (Stat box) -->
        <div class="row">




          <!-- ./col -->
        </div>
        <!-- /.row -->
        <!-- Main row -->
        <div class="row">
          <!-- Left col -->

          <!-- /.Left col -->
          <!-- right col (We are only adding the ID to make the widgets sortable)-->
 
          <!-- right col -->
        </div>
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <footer class="main-footer">
    <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
    All rights reserved.
    <div class="float-right d-none d-sm-inline-block">
      <b>Version</b> 3.1.0
    </div>
  </footer>

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside>
  <!-- /.control-sidebar -->

<div class="modal fade" id="addnewcat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <div class="mb-3">
        <label for="" class="form-label">Service</label>
        <input type="text" class="form-control" id="newservice">
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="saveCategory">Save</button>
      </div>
    </div>
  </div>
 </div> 

</div>
`;



var adminTemplate = `
<div class="wrapper">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand-md navbar-light navbar-white">
    <div class="container">
      <a href="./admin" class="navbar-brand">
        <img id="navimage" src="./dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8; width: 30px;">
        <span class="brand-text font-weight-light"><b id="adminname"></b></span>
      </a>

      <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse order-3" id="navbarCollapse">
        <!-- Left navbar links -->
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a href="./admin" class="nav-link" style="cursor: pointer;">Home</a>

          </li>           
        </ul>

      </div>

      <!-- Right navbar links -->
      <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
        <!-- Messages Dropdown Menu -->
        <!-- Notifications Dropdown Menu -->
<!--         <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" id="notifications" style="cursor: pointer;">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge" id="notifcount"></span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right scroll" id="notifdata">
            <div class="dropdown-divider"></div>
            <a style="cursor: pointer;" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
              <br>
              <span class="text-muted text-sm">Marben benetez Accepted Your application</span>
              <br>
              <span class="text-muted text-sm">Please heck your email.</span>
            </a>

          </div>
        </li> -->

          <li class="nav-item dropdown">
            <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="nav-link dropdown-toggle"></a>
            <ul aria-labelledby="dropdownSubMenu1" class="dropdown-menu border-0 shadow">
              <li><a class="dropdown-item" id="organizeraccount" style="cursor: pointer;">Account</a></li>
              <li><a class="dropdown-item" href="./logout" style="cursor: pointer;">Logout</a></li>
            </ul>
          </li>


      </ul>
    </div>
  </nav>
  <!-- /.navbar -->

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper" id="maincontainerorg">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container">
        <div class="row mb-2">
          <div class="col-sm-6">
          </div><!-- /.col -->

        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container">
        <div class="row" id="admindata">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3 id="usercount"></h3>

                <p>User Registered</p>
              </div>
              <div class="icon">
                <i class="fa-solid fa-user-check" style="font-size: 54px;"></i>
              </div>
              <a style="cursor: pointer;" href="./admin-registered-users" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3 id="eventscounts"></h3>

                <p>Events Posted</p>
              </div>
              <div class="icon">
                <i class="fa-solid fa-calendar" style="font-size: 54px;"></i>
              </div>
              <a style="cursor: pointer;" href="./admin-events-posted" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3 id="reportedcount"></h3>

                <p>Reported Posts</p>
              </div>
              <div class="icon">
                <i class="fa-solid fa-calendar-xmark" style="font-size: 54px;"></i>
              </div>
              <a style="cursor: pointer;" href="./admin-events-reported" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3 id="bancount">0</h3>

                <p>Banned Users</p>
              </div>
              <div class="icon">
                <i class="fa-solid fa-user-large-slash" style="font-size: 54px;"></i>
              </div>
              <a style="cursor: pointer;" href="./admin-banned-users" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success  ">
              <div class="inner">
                <h3 id="unverified">0</h3>

                <p>Pending Users</p>
              </div>
              <div class="icon">
                <i class="fa-solid fa-user-clock" style="font-size: 54px;"></i>
              </div>
              <a style="cursor: pointer;" href="./admin-pending-users" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>   
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3 id="servicesCount">0</h3>

                <p>Service Categories</p>
              </div>
              <div class="icon">
                <i class="fa-solid fa-briefcase" style="font-size: 54px;"></i>
              </div>
              <a style="cursor: pointer;" href="./admin-services" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>  
          <!-- ./col -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <!-- Control Sidebar -->
  <aside class="control-sidebar control-sidebar-white">
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

<div class="modal fade" id="addnewcat" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
      <div class="mb-3">
        <label for="" class="form-label">Service</label>
        <input type="text" class="form-control" id="newservice">
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="saveCategory">Save</button>
      </div>
    </div>
  </div>
 </div> 
`;

page('/admin', () => {
console.log("hey");  
$.ajax({
  url: "./api/all-registered-user",
    type: "POST",
    dataType: "json",
    data: { 
    info: 1,
     }, 
    success: (data)=>{
    document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed"); 
    // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").html(newTemplate).show();
    // $("#usercount").text(data.count); 
    // $("#eventscounts").text(data.events);
    // $("#reportedcount").text(data.reported);
    $("#adminname").text(data.username);
    // $("#bancount").text(data.ban);
    // $("#unverified").text(data.unverified); 
    // $("#servicesCount").text(data.service);
    document.getElementById("admindash").setAttribute("class", "nav-link active");
    $("#admindata").empty().append(`
      <center><h3>Top Ranking Organizers</h3></center>
      </br>
        <div class="row" id="adminranking">

        <div class="col-md-4">
            <!-- Widget: user widget style 2 -->
            <div class="card card-widget widget-user-2">
              <!-- Add the bg color to the header using any of the bg-* classes -->
              <div class="widget-user-header" id="adminheader">
                <div class="widget-user-image">
                  <img class="img-circle elevation-2" src="./dist/img/user7-128x128.jpg" alt="User Avatar">
                </div>
                <!-- /.widget-user-image -->
                <h3 class="widget-user-username">Nadia Carmichael</h3>
                      <button class="star">&#9734</button>
                      <button class="star">&#9734</button>
                      <button class="star">&#9734</button>
                      <button class="star">&#9734</button>
                      <button class="star">&#9734</button>
              </div>
              <div class="card-footer p-0">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link" style="color: black;">
                     <i class="fas fa-trophy" style="color: gold;"></i> Rank as <b style="color: green;">#1</b>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style="color: black;">
                    <i class="fa-solid fa-peso-sign" style="color: blue;"></i> Earned: <b style="color: green;">₱88,000.00</b>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style="color: black;">
                     <i class="fa-solid fa-check-double"></i> 7 Completed Projects
                    </a>
                  </li>
                  <li class="nav-item">

                  </li>
                </ul>
              </div>
            </div>
            <!-- /.widget-user -->
          </div>

        </div>


       


    `);

    $("#adminranking").empty();
    $.each(data.rank, (indx, rank)=>{
      $("#adminranking").append(`
        <div class="col-md-4">
            <!-- Widget: user widget style 2 -->
            <div class="card card-widget widget-user-2">
              <!-- Add the bg color to the header using any of the bg-* classes -->
              <div class="widget-user-header" id="adminheader${indx}">
                <div class="widget-user-image">
                  <img class="img-circle elevation-2" src="${rank.userimage}" alt="User Avatar">
                </div>
                <!-- /.widget-user-image -->
                <h3 class="widget-user-username">${rank.fullname} <i class="fa-solid fa-circle-check" style="color: green;" title="Verified"></i></h3>
                      <button class="star${indx}" style="font-size: 1.5rem; color: #ff9800; background-color: unset; border: none;">&#9734</button>
                      <button class="star${indx}" style="font-size: 1.5rem; color: #ff9800; background-color: unset; border: none;">&#9734</button>
                      <button class="star${indx}" style="font-size: 1.5rem; color: #ff9800; background-color: unset; border: none;">&#9734</button>
                      <button class="star${indx}" style="font-size: 1.5rem; color: #ff9800; background-color: unset; border: none;">&#9734</button>
                      <button class="star${indx}" style="font-size: 1.5rem; color: #ff9800; background-color: unset; border: none;">&#9734</button>
              </div>
              <div class="card-footer p-0">
                <ul class="nav flex-column">
                  <li class="nav-item">
                    <a class="nav-link" style="color: black;">
                     <i class="fas fa-trophy" style="color: gold;"></i> Rank as <b style="color: green;">#${indx+1}</b>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style="color: black;">
                    <i class="fa-solid fa-peso-sign" style="color: black;"></i> Earned: <b style="color: green;">₱${rank.earnings}</b>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" style="color: black;">
                     <i class="fa-solid fa-check-double"></i> <b>${rank.completed}</b> Completed Projects
                    </a>
                  </li>
                  <li class="nav-item">

                  </li>
                </ul>
              </div>
            </div>
            <!-- /.widget-user -->
          </div>

      `); 
    
      const allstar = document.querySelectorAll('.star'+indx);
  
      for (let i = 0; i < rank.ratings; i++) {
       allstar[i].innerHTML = '&#9733';
      }



    });


    }
});
});



page("/admin-registered-users", (e)=>{
  console.log(e);
$.ajax({
  url: "./api/all-registered-user",
    type: "POST",
    dataType: "json",
    data: { 
    info: 1,
     }, 
    success: (data)=>{
    document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed");  
    // document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").empty();
    $("#main").html(newTemplate).show();
    document.getElementById("registereduser").setAttribute("class", "nav-link active"); 
    $("#adminname").text(data.username); 
    $("#admindata").empty().append(`
          <div class="card" style="width: 100%;">  
          <div class="card-header">
                <h3 class="card-title"><b>Users</b></h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm">
                    <input type="text" name="table_search" id="search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="button" class="btn btn-default" id="search">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>    
            <div class="card-body table-responsive p-0" style="height: 600px;">
              <table class="table table-head-fixed text-nowrap">
                          <thead>
                            <tr>
                              <th>Full Name</th>
                              <th>Email</th>
                              <th>Address</th>
                              <th>Contact</th>
                              <th>Option</th>
                            </tr>
                          </thead>
                          <tbody id="registered">
                          </tbody>
                          </table>
            </div> 
          </div>  
    `);       

    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td>
                      <button class="btn btn-info btn-sm" id="viewUser" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-eye" style="pointer-events: none;"></i> View</button>
                      <button class="btn btn-warning btn-sm" id="banUser" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-ban" style="pointer-events: none; color: red;"></i> Ban</button>
                      </td>
                    </tr>

      `);
    });


let enter = document.querySelector('#search');

enter.addEventListener('keyup', (e)=>{

  if ($("#search").val() === "") {

  $.ajax({
  url: "./api/search-user-empty",
  type: "POST",
  data: {
    search: $("#search").val()
  },
  success: (data)=>{ 
    $("#registered").empty();
    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td>
                      <button class="btn btn-info btn-sm" id="viewUser" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-eye" style="pointer-events: none;"></i> View</button>
                      <button class="btn btn-warning btn-sm" id="banUser" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-ban" style="pointer-events: none; color: red;"></i> Ban</button>
                      </td>
                    </tr>

      `);
    });
  }
  });

  }else{

  $.ajax({
  url: "./api/search-user",
  type: "POST",
  data: {
    search: $("#search").val()
  },
  success: (data)=>{ 
    $("#registered").empty();
    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td>
                      <button class="btn btn-info btn-sm" id="viewUser" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-eye" style="pointer-events: none;"></i> View</button>
                      <button class="btn btn-warning btn-sm" id="banUser" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-ban" style="pointer-events: none; color: red;"></i> Ban</button>
                      </td>
                    </tr>

      `);
    });
  }
  });

  }

});

    }
});
});


$(document).on("click", "#viewUser", (e)=>{

$.ajax({
  url: "./api/view-organizer",
  type: "POST",
  data: {
    applicantsid: e.target.dataset.userid,
  },
  success: (data)=>{

  $("#userproftemplate").modal("show");  

$("#userContainer").empty().append(`
   
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
                      <h5 class="description-header" id="orgrank"></h5><i class="fas fa-award mr-1"></i>
                      <span class="description-text">Ranking</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                  <div class="col-sm-4 border-right">
                    <div class="description-block">
                   
                      <button class="staradmin">&#9734</button>
                      <button class="staradmin">&#9734</button>
                      <button class="staradmin">&#9734</button>
                      <button class="staradmin">&#9734</button>
                      <button class="staradmin">&#9734</button>
               
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

        <div class="row" id="allAcceptedEventsAdmin">

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

        <div class="row" id="uploadedAccomplishmentsAdmin">
        </div>

        </div>



      </div>


        </div>
      </div>

      </div>
    </div>
`);






  $.each(data.file, (indx, img)=>{
  $("#uploadedAccomplishmentsAdmin").append(`
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
         $("#allAcceptedEventsAdmin").append(`
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
         $("#allAcceptedEventsAdmin").append(`
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
     $("#allAcceptedEventsAdmin").append(`
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
     $("#allAcceptedEventsAdmin").append(`
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

      const allstar = document.querySelectorAll('.staradmin');
  
      for (let i = 0; i < data.info[0].rating; i++) {
       allstar[i].innerHTML = '&#9733';
      }


//---->>>>>

  }
});



});



page("/admin-events-posted", ()=>{

$.ajax({
  url: "./api/load-post-data",
    type: "POST",
    dataType: "json",
    data: { 
      load: 1,
     }, 
    success: (data)=>{
    document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").empty();
    $("#main").html(adminTemplate).show();
    $("#adminname").text(data.username);        
    $("#admindata").empty();
    $.each(data.events, (indx, events)=>{
     $("#admindata").append(`
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
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `);  
    });
  
    }
});
});

// $(document).on("click", "#viewEvents", ()=>{

// });

page("/admin-events-reported", ()=>{
$.ajax({
  url: "./api/load-reported-post",
    type: "POST",
    dataType: "json",
    data: { 
      load: 1,
     }, 
    success: (data)=>{  
    // document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed"); 
    $("#main").empty();
    $("#main").html(newTemplate).show();
    document.getElementById("eventsreported").setAttribute("class", "nav-link active");
    $("#adminname").text(data.username);       
    $("#admindata").empty();
    $.each(data.events, (indx, events)=>{
     $("#admindata").append(`
            <div class="col-md-4 col-sm-6 col-12" id="event${events.id}">
              <div class="card">
        <div class="ribbon-wrapper">
                        <div class="ribbon bg-danger">
                          Reported
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
                  <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                </div>
                <div class="card-body">
                  <h6 class="card-title"><b>${events.eventname}</b></h6>

                  <p class="card-text" style="font-size: 13px;">${events.description}</p>
                  <a id="report${events.id}" class="btn btn-warning btn-sm removeEvent" data-owner="${events.owner}" data-eventid="${events.id}">Remove post</a>
                </div>
              </div>
              <!-- /.info-box -->
            </div>
     `);  
    });
  
    }
});
});

$(document).on("click", ".removeEvent", (e)=>{

Swal.fire({
  title: 'Remove post?',
  text: "The user will be notified about this.",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, remove it!'
}).then((result) => {
  if (result.isConfirmed) {

  $.ajax({
  url: "./api/remove-user-post",
  type: "POST",
  data: {
   userid: e.target.dataset.owner,
   eventid: e.target.dataset.eventid,
  },
  success: (data)=>{

    page("/admin-events-reported");

    Swal.fire(
      'Removed!',
      'Your post has been removed.',
      'success'
    );
  }
  });

  }
})

});



$(document).on("click", "#banUser", (e)=>{

Swal.fire({
  title: 'Ban '+e.target.dataset.name+'?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, ban user!'
}).then((result) => {
  if (result.isConfirmed) {

  $.ajax({
  url: "./api/ban-user",
  type: "POST",
  data: {
   userid: e.target.dataset.userid,
  },
  success: (data)=>{
  Swal.fire(
    'Action Complete!',
    ''+e.target.dataset.name+' has been banned.',
    'success'
  )
    $("#registered").empty();
    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td><button class="btn btn-warning btn-sm" id="banUser" data-name="${user.fullname}" data-userid="${user.userid}">Ban</button></td>
                    </tr>

      `);
    });

  }
  });

  }
});

});

page("/admin-banned-users", ()=>{
$.ajax({
url: "./api/view-banned-users",
type: "POST",
dataType: "json",
data: { 
load: 1,
}, 
success: (data)=>{  
    // document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed"); 
    $("#main").empty();
    $("#main").html(newTemplate).show();
    document.getElementById("banneduser").setAttribute("class", "nav-link active");
    $("#adminname").text(data.username);        
    $("#admindata").empty().append(`
          <div class="card" style="width: 100%;">  
          <div class="card-header">
                <h3 class="card-title"><b>Banned Users</b></h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm">
                    <input type="text" name="table_search" id="searchban" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="button" class="btn btn-default" id="">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>    
            <div class="card-body table-responsive p-0" style="height: 600px;">
              <table class="table table-head-fixed text-nowrap">
                          <thead>
                            <tr>
                              <th>Full Name</th>
                              <th>Email</th>
                              <th>Address</th>
                              <th>Contact</th>
                              <th>Option</th>
                            </tr>
                          </thead>
                          <tbody id="registered">
                          </tbody>
                          </table>
            </div> 
          </div>  
    `);       

    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td><button class="btn btn-info btn-sm" id="unbanUser" data-name="${user.fullname}" data-userid="${user.userid}">Unban</button></td>
                    </tr>

      `);
    });


let enter = document.querySelector('#searchban');

enter.addEventListener('keyup', (e)=>{

  if ($("#searchban").val() === "") {

  $.ajax({
  url: "./api/search-banned-user-empty",
  type: "POST",
  data: {
    search: $("#searchban").val()
  },
  success: (data)=>{ 
    $("#registered").empty();
    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td><button class="btn btn-info btn-sm" id="unbanUser" data-name="${user.fullname}" data-userid="${user.userid}">Unban</button></td>
                    </tr>

      `);
    });
  }
  });

  }else{

  $.ajax({
  url: "./api/search-banned-user",
  type: "POST",
  data: {
    search: $("#searchban").val()
  },
  success: (data)=>{ 
    $("#registered").empty();
    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td><button class="btn btn-info btn-sm" id="unbanUser" data-name="${user.fullname}" data-userid="${user.userid}">Unban</button></td>
                    </tr>

      `);
    });
  }
  });

  }

});


}

});
});

// $(document).on("click", "#viewBanUsers", ()=>{



// });


$(document).on("click", "#unbanUser", (e)=>{

Swal.fire({
  title: 'Unban '+e.target.dataset.name+'?',
  text: "You won't be able to revert this!",
  icon: 'info',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Unban user!'
}).then((result) => {
  if (result.isConfirmed) {

  $.ajax({
  url: "./api/unban-user",
  type: "POST",
  data: {
   userid: e.target.dataset.userid,
  },
  success: (data)=>{
  Swal.fire(
    'Action Complete!',
    ''+e.target.dataset.name+' has been unban.',
    'success'
  )
    $("#registered").empty();
    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td><button class="btn btn-warning btn-sm" id="unbanUser" data-name="${user.fullname}" data-userid="${user.userid}">Unban</button></td>
                    </tr>

      `);
    });

  }
  });

  }
});

});


page("/admin-pending-users", ()=>{
$.ajax({
url: "./api/view-pending-users",
type: "POST",
dataType: "json",
data: { 
load: 1,
}, 
success: (data)=>{  

    document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed"); 
    // document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").empty();
    $("#main").html(newTemplate).show();
    document.getElementById("pendinguser").setAttribute("class", "nav-link active");
    $("#adminname").text(data.username); 
    $("#admindata").empty().append(`
          <div class="card" style="width: 100%;">  
          <div class="card-header">
                <h3 class="card-title"><b>Pending Users</b></h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm">
                    <input type="text" name="table_search" id="searchpending" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="button" class="btn btn-default" id="">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>    
            <div class="card-body table-responsive p-0" style="height: 600px;">
              <table class="table table-head-fixed text-nowrap">
                          <thead>
                            <tr>
                              <th>Full Name</th>
                              <th>Email</th>
                              <th>Address</th>
                              <th>Contact</th>
                              <th>Option</th>
                            </tr>
                          </thead>
                          <tbody id="registered">
                          </tbody>
                          </table>
            </div> 
          </div>  
    `);       

    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td><button class="btn btn-info btn-sm" id="verifiedUser" data-name="${user.fullname}" data-userid="${user.userid}">Verified</button></td>
                    </tr>

      `);
    });


let enter = document.querySelector('#searchpending');

enter.addEventListener('keyup', (e)=>{

  if ($("#searchpending").val() === "") {

  $.ajax({
  url: "./api/search-pending-user-empty",
  type: "POST",
  data: {
    search: $("#searchpending").val()
  },
  success: (data)=>{ 
    $("#registered").empty();
    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td><button class="btn btn-info btn-sm" id="verifiedUser" data-name="${user.fullname}" data-userid="${user.userid}">Verified</button></td>
                    </tr>

      `);
    });
  }
  });

  }else{

  $.ajax({
  url: "./api/search-pending-user",
  type: "POST",
  data: {
    search: $("#searchpending").val()
  },
  success: (data)=>{ 
    $("#registered").empty();
    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td><button class="btn btn-info btn-sm" id="verifiedUser" data-name="${user.fullname}" data-userid="${user.userid}">Verified</button></td>
                    </tr>

      `);
    });
  }
  });

  }

});


}

});
});

// $(document).on("click", "#viewPendingUsers", ()=>{




// });

$(document).on("click", "#verifiedUser", (e)=>{

Swal.fire({
  title: 'Verified '+e.target.dataset.name+'?',
  text: "You won't be able to revert this!",
  icon: 'info',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, Verified user!'
}).then((result) => {
  if (result.isConfirmed) {

  $.ajax({
  url: "./api/verified-user",
  type: "POST",
  data: {
   userid: e.target.dataset.userid,
  },
  success: (data)=>{
  Swal.fire(
    'Action Complete!',
    ''+e.target.dataset.name+' has been verified.',
    'success'
  )
    $("#registered").empty();
    $.each(data.user, (indx, user)=>{
      $("#registered").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td><button class="btn btn-info btn-sm" id="verifiedUser" data-name="${user.fullname}" data-userid="${user.userid}">Verified</button></td>
                    </tr>

      `);
    });

  }
  });

  }
});

});

page("/admin-services", ()=>{
$.ajax({
url: "./api/view-services",
type: "POST",
dataType: "json",
data: { 
load: 1,
}, 
success: (data)=>{  
    // document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed"); 
    $("#main").empty();
    $("#main").html(newTemplate).show();
    document.getElementById("services").setAttribute("class", "nav-link active");
    $("#adminname").text(data.username); 
    $("#admindata").empty().append(`
          <div class="card" style="width: 100%;">  
          <div class="card-header">
                <h3 class="card-title"><b>Services</b></h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm">  

                    <div class="input-group-append">
                      <button type="button" class="btn btn-primary" id="createCategory">
                        Add Service <i style="pointer-events: none;" class="fa-solid fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>    
            <div class="card-body table-responsive p-0" style="height: 600px;">
              <table class="table table-head-fixed text-nowrap">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Service</th>
                              <th>Option</th>
                            </tr>
                          </thead>
                          <tbody id="registered">
                          </tbody>
                          </table>
            </div> 
          </div>  
    `);       

    $.each(data.category, (indx, cat)=>{
      $("#registered").append(`

                    <tr>
                      <td><b>${indx}</b></td>
                      <td>${cat.category}</td>
                      <td>
                      <button class="btn btn-info btn-sm" id="editcat" data-category="${cat.category}" data-id="${cat.id}">Edit</button>
                      <button class="btn btn-danger btn-sm" id="deletecat" data-category="${cat.category}" data-id="${cat.id}">Delete</button>
                      </td>
                    </tr>

      `);
    });

}

});
});


// $(document).on("click", "#viewServices", ()=>{

// });

$(document).on("click", "#editcat", (e)=>{
Swal.fire({
  title: 'Edit Service',
  html:
    '<input id="swalinput" value="'+e.target.dataset.category+'" class="swal2-input">',
  showCancelButton: true,
  confirmButtonText: 'Edit',
  showLoaderOnConfirm: true,
  preConfirm: (note) => {
  $.ajax({
  url: "./api/edit-service",
  type: "POST",
  data: {
   catid: e.target.dataset.id,
   category: $("#swalinput").val()
  },
  success: (data)=>{
  // Swal.fire(
  //   'Submitted!',
  //   'Your application has been Submitted.',
  //   'success'
  // )
    $("#registered").empty();
    $.each(data.category, (indx, cat)=>{
      $("#registered").append(`

                    <tr>
                      <td><b>${indx}</b></td>
                      <td>${cat.category}</td>
                      <td>
                      <button class="btn btn-info btn-sm" id="editcat" data-category="${cat.category}" data-id="${cat.id}">Edit</button>
                      <button class="btn btn-danger btn-sm" id="deletecat" data-category="${cat.category}" data-id="${cat.id}">Delete</button>
                      </td>
                    </tr>

      `);
    });

  }
  });

  },
  allowOutsideClick: () => !Swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
  Swal.fire(
    'Updated!',
    'Action Completed.',
    'success'
  )
  }
})
});

$(document).on("click", "#deletecat", (e)=>{
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
  url: "./api/delete-service",
  type: "POST",
  data: {
   catid: e.target.dataset.id,
  },
  success: (data)=>{
    Swal.fire(
      'Deleted!',
      'Service has been deleted.',
      'success'
    )
    $("#registered").empty();
    $.each(data.category, (indx, cat)=>{
      $("#registered").append(`

                    <tr>
                      <td><b>${indx}</b></td>
                      <td>${cat.category}</td>
                      <td>
                      <button class="btn btn-info btn-sm" id="editcat" data-category="${cat.category}" data-id="${cat.id}">Edit</button>
                      <button class="btn btn-danger btn-sm" id="deletecat" data-category="${cat.category}" data-id="${cat.id}">Delete</button>
                      </td>
                    </tr>

      `);
    });

  }
  });

  }
})
});

$(document).on("click", "#createCategory", ()=>{
$("#addnewcat").modal("show");  
})

$(document).on("click", "#saveCategory", ()=>{
  $.ajax({
  url: "./api/add-service",
  type: "POST",
  data: {
   category: $("#newservice").val(),
  },
  success: (data)=>{
    $("#registered").empty();
    $.each(data.category, (indx, cat)=>{
      $("#registered").append(`

                    <tr>
                      <td><b>${indx}</b></td>
                      <td>${cat.category}</td>
                      <td>
                      <button class="btn btn-info btn-sm" id="editcat" data-category="${cat.category}" data-id="${cat.id}">Edit</button>
                      <button class="btn btn-danger btn-sm" id="deletecat" data-category="${cat.category}" data-id="${cat.id}">Delete</button>
                      </td>
                    </tr>

      `);
    });
  $("#addnewcat").modal("hide");
  }
  });
});


page("/admin-sponsors", ()=>{

  $.ajax({
  url: "./api/sponsor-data",
  type: "POST",
  data: {
   category: $("#newservice").val(),
  },
  success: (data)=>{
  document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed"); 
  // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
  $("#main").html(newTemplate).show();
  document.getElementById("sponsors").setAttribute("class", "nav-link active"); 
  $("#adminname").text(data.adminname);  
  console.log(data);
  $("#admindata").empty().append(`
  <div class="card">
    <div class="card-header">
      <button class="btn btn-info btn-sm" id="addAds"><i class="fa fa-globe" aria-hidden="true" style="pointer-events: none;"></i> Advertise</button>
    </div>
    <!-- /.card-header -->
              <div class="card-body p-0">
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th>Sponsor/Ad</th>
                      <th>Url Address</th>
                      <th>Image</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody id="sponsordata">


                  </thead>
                  <tbody>

                  </tbody>
                </table>
      </div>
    <!-- /.card-body -->
  </div>
  `);
  $("#sponsordata").empty();
  $.each(data.sponsor, (indx, sponsor)=>{
            $("#sponsordata").append(`
                    <tr>
                      <td>${sponsor.sponsor}</td>
                      <td>${sponsor.link}</td>
                      <td>
                        <div>
                          <img style="width: 100px; height: 100px;" src="${sponsor.image}">
                        </div>
                      </td>
                      <td>
                      <button class="btn btn-primary btn-sm" id="editads" data-adid="${sponsor.id}">Edit</button>
                      <button class="btn btn-danger btn-sm" id="deleteads" data-adid="${sponsor.id}">Delete</button>
                      <button class="btn btn-info btn-sm" id="editadsimg" data-adid="${sponsor.id}">Edit Image</button>
                      </td>
                    </tr>
            `);
  });

  $("#sponsordata").append(`
    <tr>
      <th>Sponsor/Ad</th>
      <th>Url Address</th>
      <th>Image</th>
      <th>Option</th>
    </tr>
  `);
  }
  });

});

page("/admin-charts", ()=>{

$.ajax({
  url: "./api/all-registered-user",
    type: "POST",
    dataType: "json",
    data: { 
    info: 1,
     }, 
    success: (data)=>{
    document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed"); 
    // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").html(newTemplate).show();
    document.getElementById("charts").setAttribute("class", "nav-link active");
    $("#admindata").empty().append(`

        <div class="row">

            <!-- LINE CHART -->
            <div class="col-md-6">

            <div class="card card-info">
              <div class="card-header">
                <h3 class="card-title">Job Posted Chart</h3>

                <div class="card-tools">

                </div>
              </div>

              <div class="card-body">
                <div class="chart">
                  <canvas id="lineChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                </div>
              </div>
              <!-- /.card-body -->
            </div>

   

            </div>

            <div class="col-md-6">
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">User Registered Chart</h3>

                <div class="card-tools">

                </div>
              </div>
              <div class="card-body">
                <div class="chart">
                  <canvas id="areaChart" style="min-height: 250px; height: 250px; max-height: 250px; max-width: 100%;"></canvas>
                </div>
              </div>
              <!-- /.card-body -->
            </div>

  

            </div>




            </div>


    `);

    var areaChartCanvas = $('#areaChart').get(0).getContext('2d')

    var areaChartData = {
      labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label               : 'Job Accepted',
          backgroundColor     : 'rgba(60,141,188,0.9)',
          borderColor         : 'rgba(60,141,188,0.8)',
          pointRadius          : false,
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : [14, 16, 11, 19, 30]
        },
        {
          label               : 'Job Pending',
          backgroundColor     : 'rgba(210, 214, 222, 1)',
          borderColor         : 'rgba(210, 214, 222, 1)',
          pointRadius         : false,
          pointColor          : 'rgba(210, 214, 222, 1)',
          pointStrokeColor    : '#c1c7d1',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [20, 15, 14, 25, 11]
        },
      ]
    }

    var areaChartData2 = {
      labels  : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
      datasets: [
        {
          label               : 'Clients',
          backgroundColor     : 'rgba(60,141,188,0.9)',
          borderColor         : 'rgba(60,141,188,0.8)',
          pointRadius          : false,
          pointColor          : '#3b8bba',
          pointStrokeColor    : 'rgba(60,141,188,1)',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(60,141,188,1)',
          data                : [10, 6, 9, 12, 23]
        },
        {
          label               : 'Organizers',
          backgroundColor     : 'rgba(210, 214, 222, 1)',
          borderColor         : 'rgba(210, 214, 222, 1)',
          pointRadius         : false,
          pointColor          : 'rgba(210, 214, 222, 1)',
          pointStrokeColor    : '#c1c7d1',
          pointHighlightFill  : '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data                : [14, 5, 13, 9, 11]
        },
      ]
    }
    
    var areaChartOptions = {
      maintainAspectRatio : false,
      responsive : true,
      legend: {
        display: true
      },
      scales: {
        xAxes: [{
          gridLines : {
            display : true,
          }
        }],
        yAxes: [{
          gridLines : {
            display : true,
          }
        }]
      }
    }

    // This will get the first returned node in the jQuery collection.
    new Chart(areaChartCanvas, {
      type: 'line',
      data: areaChartData,
      options: areaChartOptions
    })

    var lineChartCanvas = $('#lineChart').get(0).getContext('2d')
    var lineChartOptions = $.extend(true, {}, areaChartOptions)
    var lineChartData = $.extend(true, {}, areaChartData2)
    lineChartData.datasets[0].fill = false;
    lineChartData.datasets[1].fill = false;
    lineChartOptions.datasetFill = false

    var lineChart = new Chart(lineChartCanvas, {
      type: 'line',
      data: lineChartData,
      options: lineChartOptions
    })

  }

});

});


page("/admin-events", ()=>{
$.ajax({
  url: "./api/load-events",
  type: "POST",
  data: {
    load: 0,
  },
  success: (data)=>{
    document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed"); 
    // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").html(newTemplate).show();
    document.getElementById("adminevents").setAttribute("class", "nav-link active");

    $("#admindata").empty();
    $.each(data.allevents, (indx, events)=>{
      if (events.status == 1) {
      if (events.subserv === "") {
         $("#admindata").append(`
                <div class="row" id="event${events.id}" >
                  <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                    <div class="ribbon-wrapper">
                        <div class="ribbon bg-danger">
                          Closed
                        </div>
                      </div>
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
       $("#admindata").append(`
              <div class="row" id="event${events.id}" >
                <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                    <div class="ribbon-wrapper">
                        <div class="ribbon bg-danger">
                          Closed
                        </div>
                      </div>
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
      }else{
      if (events.subserv === "") {
         $("#admindata").append(`
                <div class="row" id="event${events.id}" >
                  <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                    <div class="ribbon-wrapper">
                        <div class="ribbon bg-info">
                          Open
                        </div>
                      </div>
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
       $("#admindata").append(`
              <div class="row" id="event${events.id}" >
                <div class="card" style="width: 100%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                    <div class="ribbon-wrapper">
                        <div class="ribbon bg-info">
                          Open
                        </div>
                      </div>
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
      }

  
    });
  }
});
});


page("/admin-client-users", (e)=>{

$.ajax({
  url: "./api/all-registered-client",
    type: "POST",
    dataType: "json",
    data: { 
    info: 1,
     }, 
    success: (data)=>{
    document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed");  
    // document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").empty();
    $("#main").html(newTemplate).show();
    document.getElementById("registeredclient").setAttribute("class", "nav-link active"); 
    $("#adminname").text(data.username); 
    $("#admindata").empty().append(`
          <div class="card" style="width: 100%;">  
          <div class="card-header">
                <h3 class="card-title"><b>Users</b></h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm">
                    <input type="text" name="table_search" id="searchclient" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="button" class="btn btn-default" id="searchclient">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>    
            <div class="card-body table-responsive p-0" style="height: 600px;">
              <table class="table table-head-fixed text-nowrap">
                          <thead>
                            <tr>
                              <th>Full Name</th>
                              <th>Email</th>
                              <th>Address</th>
                              <th>Contact</th>
                              <th>Option</th>
                            </tr>
                          </thead>
                          <tbody id="registeredclientinfo">
                          </tbody>
                          </table>
            </div> 
          </div>  
    `);       

    $.each(data.user, (indx, user)=>{
      $("#registeredclientinfo").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td>
                      <button class="btn btn-info btn-sm" id="viewUserClient" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-eye" style="pointer-events: none;"></i> View</button>
                      <button class="btn btn-warning btn-sm" id="banUser" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-ban" style="pointer-events: none; color: red;"></i> Ban</button>
                      </td>
                    </tr>

      `);
    });


let enter = document.querySelector('#searchclient');

enter.addEventListener('keyup', (e)=>{

  if ($("#searchclient").val() === "") {

  $.ajax({
  url: "./api/search-user-empty-client",
  type: "POST",
  data: {
    search: $("#searchclient").val()
  },
  success: (data)=>{ 
    $("#registeredclientinfo").empty();
    $.each(data.user, (indx, user)=>{
      $("#registeredclientinfo").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td>
                      <button class="btn btn-info btn-sm" id="viewUserClient" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-eye" style="pointer-events: none;"></i> View</button>
                      <button class="btn btn-warning btn-sm" id="banUser" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-ban" style="pointer-events: none; color: red;"></i> Ban</button>
                      </td>
                    </tr>

      `);
    });
  }
  });

  }else{

  $.ajax({
  url: "./api/search-user-client",
  type: "POST",
  data: {
    search: $("#searchclient").val()
  },
  success: (data)=>{ 
    $("#registeredclientinfo").empty();
    $.each(data.user, (indx, user)=>{
      $("#registeredclientinfo").append(`

                    <tr>
                      <td>${user.fullname}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.contact}</td>
                      <td>
                      <button class="btn btn-info btn-sm" id="viewUserClient" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-eye" style="pointer-events: none;"></i> View</button>
                      <button class="btn btn-warning btn-sm" id="banUser" data-name="${user.fullname}" data-userid="${user.userid}"><i class="fa-solid fa-ban" style="pointer-events: none; color: red;"></i> Ban</button>
                      </td>
                    </tr>

      `);
    });
  }
  });

  }

});

    }
});
});


$(document).on("click", "#viewUserClient", (e)=>{
$.ajax({
  url: "./api/load-client-data",
  type: "POST",
  data: {
    userid: e.target.dataset.userid,
  },
  success: (data)=>{
  console.log(data.info[0]);  
  $("#userproftemplate").modal("show");
  $("#userContainer").empty();

  $("#userContainer").append(`   
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


        <div class="col-md-9 scroll" id="createdEventsAdmin">
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
       $("#createdEventsAdmin").append(`
              <div class="row">
                <div class="card" style="width: 100%;">
                  <div class="card-header">       
                    <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <span class="">

                    </span>
                    <p class="card-text" style="font-size: 13px; float: right;"><i>Date created: ${events.date}</i></p>
                  </div>
                  <div class="card-footer">
                  <h3 style="color: blue; font-size: 16px;">Event Pending</h3>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
    }else{
       $("#createdEventsAdmin").append(`
              <div class="row">
                <div class="card" style="width: 100%;">
                  <div class="card-header">       
                    <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <span class="">

                    </span>
                    <p class="card-text" style="font-size: 13px; float: right;"><i>Date created: ${events.date}</i></p>
                  </div>
                  <div class="card-footer">
                    <h3 style="color: blue; font-size: 16px;">Event Pending</h3>
                  </div>
                </div>
                <!-- /.info-box -->
              </div>
       `);
    }

  }else{

    if (events.subserv === "") {
       $("#createdEventsAdmin").append(`
              <div class="row">
                <div class="card" style="width: 100%;">
                  <div class="card-header">       
                    <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b> (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title"><b>${events.eventname}</b></h6>

                                    <p class="card-text" style="font-size: 13px;">${events.description}</p>
                      <span class="">

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
     $("#createdEventsAdmin").append(`
            <div class="row">
              <div class="card" style="width: 100%;">
                <div class="card-header">       
                  <h5 class="card-title m-0"><b style="color: blue;">${events.category}</b>[<b style="color: green;">${events.subserv}</b>] (<i style="color: green;">₱${events.eventbudget}</i>)</h5>
                </div>
                <div class="card-body">
                  <h6 class="card-title"><b>${events.eventname}</b></h6>

                                  <p class="card-text" style="font-size: 13px;">${events.description}</p>
                    <span class="">

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
  // document.getElementById("navimage").setAttribute("src", data.userimage);

  // if (data.messagecount != 0) {
  // $("#messagescount").text(data.messagecount);  
  // }else{
  // $("#messagescount").text("");
  // }
  // clearInterval(intervalID);
  }
});
});

page("/admin-activity-logs", ()=>{

$.ajax({
  url: "./api/load-user-activity",
  type: "POST",
  data: {
    data: 1,
  },
  success: (data)=>{ 
    document.getElementById("main").setAttribute("class", "hold-transition sidebar-mini layout-fixed");  
    // document.getElementById("main").setAttribute("class", "hold-transition layout-top-nav"); 
    // document.getElementById("main").setAttribute("style", "min-height: 496.781px; background-color: white;");
    $("#main").empty();
    $("#main").html(newTemplate).show();
    document.getElementById("activitylogs").setAttribute("class", "nav-link active"); 
    $("#adminname").text(data.username); 
    console.log(data);
    $("#admindata").empty().append(`
      <nav>
        <div class="nav nav-tabs" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Client Activity</button>
          <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Organizer Activity</button>
          
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent" style="background-color: white;">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          


        </div>

        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
        

        </div>
      </div>
    `);
    $("#nav-home").empty().append('<br>');
    $("#nav-profile").empty().append('<br>');
    $.each(data.activity, (indx, activity)=>{

      if (activity.identity == 0) {
        $("#nav-home").append(`
          <div class="col-md-12 col-sm-12 col-12">
            <div class="info-box">
              <span class="info-box-icon"><img class="direct-chat-img" src="${activity.img}" alt="user"></span>

              <div class="info-box-content">
                <span class="info-box-text">${activity.activity}</span>
                <span class="info-box-text"><i>${activity.date}</i></span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
        `);
      }else if (activity.identity == 1){
        $("#nav-profile").append(`
          <div class="col-md-12 col-sm-12 col-12">
            <div class="info-box">
              <span class="info-box-icon"><img class="direct-chat-img" src="${activity.img}" alt="user"></span>

              <div class="info-box-content">
                <span class="info-box-text">${activity.activity}</span>
                <span class="info-box-text"><i>${activity.date}</i></span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
        `);
      }

    });


  }
});

});