

function create_event(event) {

$.ajax({
  url: "./api/insert-user-activity",
  type: "POST",
  data: {
  	activity: event,
  },
  success: (data)=>{


  }
});

}

function update_info(detail)
{
$.ajax({
  url: "./api/insert-user-activity",
  type: "POST",
  data: {
  	activity: detail,
  },
  success: (data)=>{


  }
});	
}

function accept_application(applicantid, detail) {
$.ajax({
  url: "./api/insert-user-activity-two",
  type: "POST",
  data: {
  	activity: detail,
  	applicantid: applicantid,

  },
  success: (data)=>{


  }
});
}

