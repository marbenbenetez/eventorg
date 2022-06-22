<?php 
namespace Controller\Organizer;

use Hashids\Hashids;
use Controller\User\User;

class Organizer 
{
	private $hash;
	private $db;	
	private $user;

	function __construct()
	{
		$this->hash = new Hashids('', 10);
		$this->db = new \MeekroDB();
		$this->user = new User;
	}


	public function load_organizer_data() {

	$id = $this->user->get_user_id();	
  	
  	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");	

  	$notif = $this->db->query("SELECT COUNT(id) as notif FROM accepted_applications WHERE applicant_id='$id' AND notification='0'");	

  	$result = $this->db->query("SELECT ev.id, ev.event_owner, ev.sub_service, ev.event_name, ev.event_budget, ev.ui_date, 
  								ev.event_description, ec.category, us.username, ui.user_image FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id) WHERE ev.event_status='0'
								ORDER BY ev.id DESC");

  	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");

  	$accepted_applicatns = $this->db->query("SELECT ev.id, ev.sub_service, ev.event_owner, ev.event_name, ev.event_budget, ev.ui_date, 
  		ev.event_description, ec.category, us.username, ui.user_image, ap.applicant_id, ap.approved_date 
  		FROM accepted_applications as ap INNER JOIN events as ev ON(ap.event_id = ev.id) 
  		INNER JOIN event_category as ec ON(ev.event_category = ec.id) 
  		INNER JOIN users as us ON(ev.event_owner = us.id) 
  		INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id) ORDER BY ev.id DESC");

  	$sponsors = $this->db->query("SELECT * FROM sponsor_ads ORDER BY id DESC");

  	$result2 = $this->db->query("SELECT * FROM event_applications WHERE applicants_id='$id' AND accept_status='0'");

  	$result3 = $this->db->query("SELECT * FROM accepted_applications WHERE applicant_id='$id'");

  	$services = $this->db->query("SELECT * FROM event_category");

  	$data = [];
  	$data2 = [];	
  	$data3 = [];
  	$accepted = [];
  	$data4 = [];
  	$ads = [];


	foreach ($sponsors as $row) {
	$ads[] = ["id" => $this->hash->encode($row['id']),
			   "link" => $row['sponsor_link'],
			   "image" => $row['item_image'],
			   "sponsor" => $row['title']];
	}

	foreach ($services as $row) {
	$data4[] = ["id" => $this->hash->encode($row['id']),
				"service" => $row['category'],
				"eventcount" => $this->countEvent($row['id'])	];
	}

  	foreach ($accepted_applicatns as $row) {
  	$accepted[] = ["id" => $this->hash->encode($row['id']),
  				"applicantid" => $this->hash->encode($row['applicant_id']),
  			    "eventname" => $row['event_name'],
  			    "eventbudget" => number_format($row['event_budget'], 2),
  			    "category" => $row['category'],
  			    "username" => $row['username'],
  			    "description" => $row['event_description'],
  			    "date" => $row['ui_date'],
  			    "userimage" => $row['user_image'],
  			    "approvedate" => $row['approved_date'],
  			    "owner" => $this->hash->encode($row['event_owner']),
  			    "subserv" => $row['sub_service']];
  	}

  	foreach ($result3 as $row) {
  	$data3[] = ["eventid"=>$this->hash->encode($row['event_id'])];
  	}

  	foreach ($result2 as $row) {
  	$data2[] = ["eventid"=>$this->hash->encode($row['event_id'])];
  	}

  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "eventbudget" => number_format($row['event_budget'], 2),
  			   "category" => $row['category'],
  			   "username" => $row['username'],
  			   "description" => $row['event_description'],
  			   "date" => $row['ui_date'],
  			   "userimage" => $row['user_image'],
  			   "owner" => $this->hash->encode($row['event_owner']),
  			   "subserv" => $row['sub_service']	]; 
  	}
  	// echo $unseen_messages[0]['unseenmessages'];
  	echo json_encode(["events"=>$data, 
  					  "username"=>$this->user->get_user_name(),
  					  "eventapplied" => $data2,
  					  "notif" => $notif[0]['notif'],
  					  "userimage" => $img[0]['user_image'],
  					  "acceptedevents" => $data3,
  					  "allacceptedevents" => $accepted,
  					  "myid" => $this->hash->encode($id),
  					  "services" => $data4,
  					  "sponsor"=>$ads,
  					  "messagecount" => $unseen_messages[0]['unseenmessages'] ]);
	}

	public function countEvent($catid)
	{
	 $count = $this->db->query("SELECT COUNT(id) as count FROM events WHERE event_category='$catid'");
	 
	 if (!$count) {
	 return 0;
	 }else{
	 return $count[0]['count'];	
	 }	
	}

	public function load_organizer_selected_data()
	{

	$catid = $this->hash->decode($_POST['catid']);	

  	$accepted_applicatns = $this->db->query("SELECT ev.id, ev.sub_service, ev.event_owner, ev.event_name, ev.event_budget, ev.ui_date, 
  		ev.event_description, ec.category, us.username, ui.user_image, ap.applicant_id, ap.approved_date 
  		FROM accepted_applications as ap 
  		INNER JOIN events as ev ON(ap.event_id = ev.id) 
  		INNER JOIN event_category as ec ON(ev.event_category = ec.id) 
  		INNER JOIN users as us ON(ev.event_owner = us.id) 
  		INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id) 
  		WHERE ev.event_category = '$catid[0]'
  		ORDER BY ev.id DESC");


  	$result = $this->db->query("SELECT ev.id, ev.event_owner, ev.sub_service, ev.event_name, ev.event_budget, ev.ui_date, 
  								ev.event_description, ec.category, us.username, ui.user_image FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id) WHERE ev.event_status='0'
								AND ev.event_category = '$catid[0]'
								ORDER BY ev.id DESC");	

  	$data = [];
  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "eventbudget" => number_format($row['event_budget'], 2),
  			   "category" => $row['category'],
  			   "username" => $row['username'],
  			   "description" => $row['event_description'],
  			   "date" => $row['ui_date'],
  			   "userimage" => $row['user_image'],
  			   "owner" => $this->hash->encode($row['event_owner']),
  			   "subserv" => $row['sub_service']	]; 
  	}

	$accepted = [];
  	foreach ($accepted_applicatns as $row) {
  	$accepted[] = ["id" => $this->hash->encode($row['id']),
  				"applicantid" => $this->hash->encode($row['applicant_id']),
  			    "eventname" => $row['event_name'],
  			    "eventbudget" => number_format($row['event_budget'], 2),
  			    "category" => $row['category'],
  			    "username" => $row['username'],
  			    "description" => $row['event_description'],
  			    "date" => $row['ui_date'],
  			    "userimage" => $row['user_image'],
  			    "approvedate" => $row['approved_date'],
  			    "owner" => $this->hash->encode($row['event_owner']),
  			    "subserv" => $row['sub_service']];
  	}

  	echo json_encode(["events"=>$data, "allacceptedevents" => $accepted]);

	}


	public function load_post_data()
	{
	$id = $this->user->get_user_id();	 	
	$username = $this->db->query("SELECT username FROM users WHERE id='$id'");	
  	$result = $this->db->query("SELECT ev.id, ev.event_owner, ev.event_name, ev.event_budget, ev.ui_date, 
  								ev.event_description, ec.category, us.username, ui.user_image FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id)
								ORDER BY ev.id DESC");

  	$data = [];
  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "eventbudget" => number_format($row['event_budget'], 2),
  			   "category" => $row['category'],
  			   "username" => $row['username'],
  			   "description" => $row['event_description'],
  			   "date" => $row['ui_date'],
  			   "userimage" => $row['user_image'],
  			   "owner" => $this->hash->encode($row['event_owner'])	]; 
  	}
  	echo json_encode(["events"=>$data, "username"=>$username[0]['username']]);

	}


	public function get_category()
	{
	$category = $this->db->query("SELECT * FROM event_category");
	
	$data = [];
	foreach ($category as $row) {
	$data[] = ["id" => $this->hash->encode($row['id']),
			   "category" => $row['category'] ];
	}
	echo json_encode(["category" => $data]);	
	}

	public function get_selected_category()
	{
	$catid = $this->hash->decode($_POST['catid']);
	$id = $this->user->get_user_id();
  	$result = $this->db->query("SELECT ev.id, ev.event_name, ev.event_budget, ev.event_date_created, 
  								ev.event_description, ec.category, us.username, ui.user_image FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id) 
								WHERE ev.event_category = '$catid[0]' AND ev.event_status='0' ORDER BY ev.id DESC");	

  	$result2 = $this->db->query("SELECT ev.id FROM events as ev INNER JOIN event_applications as evapp ON(ev.id = evapp.event_id) 
  								 WHERE evapp.applicants_id='$id' AND ev.event_category='$catid[0]'");

	$accepted_applicatns = $this->db->query("SELECT ev.id, ev.event_owner, ev.event_name, ev.event_budget, ev.ui_date, ev.event_description, 
							ec.category, us.username, ui.user_image, ap.applicant_id, ap.approved_date FROM events as ev 
							INNER JOIN accepted_applications as ap ON(ap.event_id = ev.id) 
							INNER JOIN event_category as ec ON(ev.event_category = ec.id) 
							INNER JOIN users as us ON(ev.event_owner = us.id) 
							INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id) 
							WHERE ev.event_category='$catid[0]'
							ORDER BY ev.id DESC ");

	$data = [];
	$data2 = [];
	$accepted = [];

  	foreach ($result2 as $row) {
  	$data2[] = ["eventid"=>$this->hash->encode($row['id'])];
  	}

  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "eventbudget" => number_format($row['event_budget'], 2),
  			   "category" => $row['category'],
  			   "username" => $row['username'],
  			   "description" => $row['event_description'],
  			   "date" => $row['event_date_created'],
  			   "userimage" => $row['user_image'],
  			   ]; 
  	}

  	foreach ($accepted_applicatns as $row) {
  	$accepted[] = ["id" => $this->hash->encode($row['id']),
  				"applicantid" => $this->hash->encode($row['applicant_id']),
  			    "eventname" => $row['event_name'],
  			    "eventbudget" => number_format($row['event_budget'], 2),
  			    "category" => $row['category'],
  			    "username" => $row['username'],
  			    "description" => $row['event_description'],
  			    "date" => $row['ui_date'],
  			    "userimage" => $row['user_image'],
  			    "approvedate" => $row['approved_date'],
  			    "owner" => $this->hash->encode($row['event_owner'])	];
  	}

  	echo json_encode(["events"=>$data, "eventapplied" => $data2, "allacceptedevents" => $accepted, "myid"=>$this->hash->encode($id)]);


	}

	public function get_organizer_account()
	{
	$id = $this->user->get_user_id();
	
	$info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");
	$imgs = $this->db->query("SELECT * FROM accomplishments WHERE user_id='$id' ORDER BY id DESC");
  	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");	
  	$notif = $this->db->query("SELECT COUNT(id) as notif FROM accepted_applications WHERE applicant_id='$id' AND notification='0'");	
	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");
	$rank = $this->db->query("SELECT * FROM global_ranking ORDER BY ratings DESC");

   	$accepted_applicatns = $this->db->query("SELECT ev.id, ev.sub_service, ev.event_owner, ev.event_name, ev.event_budget, ev.ui_date, 
  		ev.event_description, ec.category, us.username, ui.user_image, ap.applicant_id, ap.approved_date 
  		FROM accepted_applications as ap INNER JOIN events as ev ON(ap.event_id = ev.id) 
  		INNER JOIN event_category as ec ON(ev.event_category = ec.id) 
  		INNER JOIN users as us ON(ev.event_owner = us.id) 
  		INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id) WHERE ap.applicant_id='$id' ORDER BY ev.id DESC");


	$data = [];
	$path = [];
	$ranking = [];
	$accepted = [];

	foreach ($rank as $row) {
	$ranking[] = ["userid" => $this->hash->encode($row['user_id']),
				  "earnings" => number_format($row['total_earnings'], 2), ];
	}

	foreach ($imgs as $row) {
	$path[] = ["img" => $row['url'], "des" => $row['description'], "id" => $this->hash->encode($row['id'])];
	}

	foreach ($info as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "rating" => $this->get_org_ratings($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact'],
			   "school" => $row['school'],
			   "notes" => $row['notes'],
			   "skills" => $row['skills'],
			   "ratings" => $row['ratings'],
			   "userimage" => $row['user_image'],
			   "usercover" => $row['user_cover'] ];	
	}

	foreach ($accepted_applicatns as $row) {
  	$accepted[] = ["id" => $this->hash->encode($row['id']),
  				"applicantid" => $this->hash->encode($row['applicant_id']),
  			    "eventname" => $row['event_name'],
  			    "eventbudget" => number_format($row['event_budget'], 2),
  			    "category" => $row['category'],
  			    "username" => $row['username'],
  			    "description" => $row['event_description'],
  			    "date" => $row['ui_date'],
  			    "userimage" => $row['user_image'],
  			    "approvedate" => $row['approved_date'],
  			    "owner" => $this->hash->encode($row['event_owner']),
  			    "subserv" => $row['sub_service']];
  	}

	echo json_encode(["info"=>$data, 
					  "file"=>$path,
					  "userid" => $this->hash->encode($id),
					  "username"=>$this->user->get_user_name(),
					  "notif" => $notif[0]['notif'],
					  "ranking" => $ranking,
					  "userimage" => $img[0]['user_image'],
					  "allacceptedevents" => $accepted,
					  "messagecount" => $unseen_messages[0]['unseenmessages']]);
	}

	public function rate_organizer()
	{
	$rating = $_POST['rating'];
	$applicantsid = $this->hash->decode($_POST['applicantsid']);
	$eventid = $this->hash->decode($_POST['eventid']);
  $id = $this->user->get_user_id();

  $checking = $this->db->query("SELECT * FROM organizer_ratings WHERE user_id='$applicantsid[0]' AND reviewer='$id' AND event_id='$eventid[0]'");

  if (!$checking) {
	$this->db->insert('organizer_ratings', ['user_id' => $applicantsid[0],
											  'ratings' => $rating,
											  'reviewer' => $id,
                        'event_id' => $eventid[0]
											   ]);

	$ratings = $this->check_ratings($applicantsid[0]);

	$rate = floor($ratings);

	$eventcount = $this->db->query("SELECT COUNT(id) as count FROM accepted_applications WHERE applicant_id='$applicantsid[0]'");

	$earnings = $this->db->query("SELECT SUM(ev.event_budget) as earnings FROM accepted_applications as ac 
								  INNER JOIN events as ev ON(ac.event_id = ev.id) 
								  WHERE ac.applicant_id='$applicantsid[0]'");

	$this->db->query("UPDATE user_info SET ratings=%i WHERE user_id=%i", $rate, $applicantsid[0]);

	$checkrate = $this->db->query("SELECT * FROM global_ranking WHERE user_id='$applicantsid[0]'");

	$countrate = $this->db->query("SELECT COUNT(id) as count FROM global_ranking WHERE user_id='$applicantsid[0]'");

  

  
      if ($countrate[0]['count'] == 0) {
      // echo $earnings[0]['earnings']; 
      $this->db->insert('global_ranking', ['user_id' => $applicantsid[0],
                            'score' => $eventcount[0]['count'],
                            'total_earnings' => $earnings[0]['earnings'],
                            'ratings' => $rate,
                             ]);
      }else{
      $this->db->query("UPDATE global_ranking SET ratings=%i WHERE user_id=%i", $rate, $applicantsid[0]); 
      }
      echo json_encode(["response" => 0]);
  }else{

      echo json_encode(["response" => 1]);
  }

	}




	public function send_event_application()
	{
	$id = $this->user->get_user_id();	
	$eventid = $this->hash->decode($_POST['eventid']);
	$note = $_POST['note'];
	$date_applied = date("jS F Y g:ia");
	$this->db->insert('event_applications', ['applicants_id' => $id,
											  'date_applied' => $date_applied,
											  'event_id' => $eventid[0],
											  'note' => $note
											   ]);


  	echo json_encode(["eventid"=>$_POST['eventid']]);

	}


	public function check_ratings($userid)
	{
	$check = $this->db->query("SELECT AVG(ratings) as average FROM organizer_ratings WHERE user_id='$userid'");

	return $check[0]['average'];

	}

	public function get_org_ratings($applicantsid)
	{
	$rating = $this->db->query("SELECT AVG(ratings) as average FROM organizer_ratings WHERE user_id='$applicantsid'");
	
	return $rating[0]['average'];	
	}

	public function report_event(){
	$eventid = $this->hash->decode($_POST['eventid']);
	$owner = $this->hash->decode($_POST['owner']);
	$id = $this->user->get_user_id();

	$ownername = $this->db->query("SELECT full_name FROM user_info WHERE user_id='$owner[0]'");

	$this->db->insert('post_reported', ['event_id' => $eventid[0],
									    'reported_by' => $id,
										'event_owner' => $owner[0],
										'date_reported' => date("jS F Y g:ia")
										]);

	echo json_encode(["status" => $ownername[0]['full_name']]);

	}

	public function check_notification()
	{
	$id = $this->user->get_user_id();

	$this->db->query("UPDATE accepted_applications SET notification=%i WHERE applicant_id=%i", 1, $id);

	$approve = $this->db->query("SELECT app.approved_date, app.event_id, ev.event_name, ev.event_description, ui.full_name, 
								ui.email, ui.contact, ui.user_image FROM accepted_applications as app 
								INNER JOIN events as ev ON(app.event_id = ev.id)
								INNER JOIN user_info ui ON(app.approved_by = ui.user_id)
								WHERE app.applicant_id = '$id' ORDER BY app.id DESC");
	$data = [];
	foreach ($approve as $row) {
	$data[] = ["dateapproved" => $row['approved_date'],
			   "eventname" => $row['event_name'],
			   "eventdes" => $row['event_description'],
			   "fullname" => $row['full_name'],
			   "email" => $row['email'],
			   "contact" => $row['contact'],
			   "eventid" => $this->hash->encode($row['event_id']),
			   "userimage" => $row['user_image']	]; 
	}
	
	echo json_encode(["details"=>$data]);	

	}

	public function check_messages()
	{
    $id = $this->user->get_user_id();

    $group = $this->db->query("SELECT DISTINCT gc.event_id FROM group_chat as gc 
							   WHERE gc.user_id = '$id'");

    $reciever = $this->db->query("SELECT app.event_id, ui.full_name, ev.event_name FROM accepted_applications as app 
								INNER JOIN events as ev ON(app.event_id = ev.id)
								INNER JOIN user_info as ui ON(ui.user_id = app.applicant_id)");

    $data = [];
    $data2 = [];

    foreach ($reciever as $row) {
    $data2[] = ["unseen" => $this->count_unseen_messages($row['event_id'], $id),
			   "eventname" => $row['event_name'],
			   "fullname" => $row['full_name'],
			   "eventid"=> $this->hash->encode($row['event_id'])];
    }

    foreach ($group as $row) {
    $data[] = ["eventid"=> $this->hash->encode($row['event_id'])];
    }
    echo json_encode(["inbox"=>$data, "details"=>$data2]);
	}

	public function check_messages_org()
	{
    $id = $this->user->get_user_id();

    $group = $this->db->query("SELECT DISTINCT gc.event_id FROM group_chat as gc 
								INNER JOIN events as ev ON(gc.event_id = ev.id)
								INNER JOIN accepted_applications as app ON(gc.user_id = app.applicant_id)
								INNER JOIN user_info as ui ON(ui.user_id = app.approved_by)
								WHERE gc.user_id = '$id'");
    $data = [];

    foreach ($group as $row) {
    $data[] = ["eventid"=> $this->hash->encode($row['event_id']),
    		   "unseen" => $this->count_unseen_messages($row['event_id'], $id),
			   "eventname" => $this->get_event_name($row['event_id']),
			   "fullname" => $this->get_client_name($row['event_id'])];
    }
    echo json_encode(["inbox"=>$data]);
	}	

    public function get_client_name($eventid)
    {
     $clientname = $this->db->query("SELECT ui.full_name FROM accepted_applications as ap INNER JOIN user_info as ui ON(ap.approved_by = ui.user_id) WHERE ap.event_id='$eventid'");
     return $clientname[0]['full_name'];   
    }

    public function get_event_name($eventid)
    {
     $eventname = $this->db->query("SELECT event_name FROM events WHERE id='$eventid'");
     return $eventname[0]['event_name'];   
    }

	public function count_unseen_messages($eventid, $id)
	{
	$count = $this->db->query("SELECT COUNT(id) as counted FROM chat_messages WHERE reciever='$id' AND event_id='$eventid' 
							   AND seen_status='0' ");
	return $count[0]['counted'];	
	}

	public function view_messages()
	{
	$id = $this->user->get_user_id();
	$eventid = $this->hash->decode($_POST['eventid']);
	$reciever = $this->db->query("SELECT event_owner FROM events WHERE id='$eventid[0]'");
	$notif = $this->db->query("SELECT COUNT(id) as notif FROM accepted_applications WHERE applicant_id='$id' AND notification='0'");
	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");
	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");	
	$messages = $this->db->query("SELECT cm.reciever, cm.sender, cm.event_id, cm.message, cm.date_sent  
									FROM chat_messages as cm 
									WHERE cm.event_id = '$eventid[0]' ORDER BY cm.id");	

	$this->db->query("UPDATE chat_messages SET seen_status=%i WHERE reciever=%i AND event_id=%i", 1, $id, $eventid[0]);

	$data = [];
	foreach ($messages as $row) {
	// $this->update_messages($eventid, $row['reciever']);	
	$data[] = ["eventid" => $this->hash->encode($row['event_id']),
			   "recievername" => $this->get_reciever_name($row['sender']),
			   "recieverpic" => $this->get_reciever_img($row['sender']),
			   "message" => $row['message'],
			   "sender" => $this->hash->encode($row['sender']),
			   "datesent" => $row['date_sent']];
	}
	echo json_encode(["messages" => $data, 
					  "user"=>$this->hash->encode($id), 
					  "reciever"=>$this->hash->encode($reciever[0]['event_owner']),
					  "username"=>$this->user->get_user_name(),
					  "notif" => $notif[0]['notif'],
					  "userimage" => $img[0]['user_image'],
					  "messagecount" => $unseen_messages[0]['unseenmessages']]);
	}

	// public function update_messages($eventid, $reciever)
	// {
	// $this->db->query("UPDATE chat_messages SET seen_status=%i WHERE sender=%i AND event_id=%i", 1, $reciever, $eventid);	
	// }

	public function get_reciever_name($reciever)
	{
	$get_name = $this->db->query("SELECT full_name FROM user_info WHERE user_id='$reciever'");
	return $get_name[0]['full_name'];	
	}

	public function get_reciever_img($reciever)
	{
	$get_img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$reciever'");
	return $get_img[0]['user_image'];	
	}

	public function send_messages()
	{
	$eventid = $this->hash->decode($_POST['eventid']);	
	$reciever = $this->hash->decode($_POST['reciever']);
	$id = $this->user->get_user_id();
	$message = $_POST['mymessage'];

	$this->db->insert('chat_messages', ['event_id' => $eventid[0],
									    'sender' => $id,
										'reciever' => $reciever[0],
										'message' => $message,
										'date_sent' => date("jS F Y g:ia")
										]);	
	
	$insertedid = $this->db->insertId();

	$this->db->query("UPDATE chat_messages SET seen_status=%i WHERE sender=%i AND event_id=%i", 1, $reciever[0], $eventid[0]);

	$get_message = $this->db->query("SELECT * FROM chat_messages WHERE id='$insertedid'");

	$data = [];
	foreach ($get_message as $row) {
	$data[] = ["message" => $row['message'],
			   "date" => $row['date_sent']];
	}

	echo json_encode(['message'=>$data]);

	}

	public function view_notification()
	{
	$id = $this->user->get_user_id();
	$eventid = $this->hash->decode($_POST['eventid']);

  	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");	

  	$notif = $this->db->query("SELECT COUNT(id) as notif FROM accepted_applications WHERE applicant_id='$id' AND notification='0'");

  	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");

	$this->db->query("UPDATE accepted_applications SET notification=%i WHERE applicant_id=%i", 1, $id);

	$approve = $this->db->query("SELECT app.approved_date, app.event_id, ev.event_name, ev.event_description, ui.full_name, 
								ui.email, ui.contact, ui.user_image FROM accepted_applications as app 
								INNER JOIN events as ev ON(app.event_id = ev.id)
								INNER JOIN user_info ui ON(app.approved_by = ui.user_id)
								WHERE app.applicant_id = '$id' AND app.event_id='$eventid[0]'");
	$data = [];
	foreach ($approve as $row) {
	$data[] = ["dateapproved" => $row['approved_date'],
			   "eventname" => $row['event_name'],
			   "eventdes" => $row['event_description'],
			   "fullname" => $row['full_name'],
			   "email" => $row['email'],
			   "contact" => $row['contact'],
			   "eventid" => $this->hash->encode($row['event_id']),
			   "userimage" => $row['user_image']	]; 
	}
	
	echo json_encode(["details"=>$data,
					"username"=>$this->user->get_user_name(),
					"notif" => $notif[0]['notif'],
					"userimage" => $img[0]['user_image'],
					"messagecount" => $unseen_messages[0]['unseenmessages']]);	

	}

	public function get_accomplishments()
	{
	$id = $this->user->get_user_id();	
	$notif = $this->db->query("SELECT COUNT(id) as notif FROM accepted_applications WHERE applicant_id='$id' AND notification='0'");
	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");
	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");	
		
	$images = $this->db->query("SELECT * FROM accomplishments");
	
	$data = [];

	foreach ($images as $row) {
	$data[] = ["url"=>$row['url']];	
	}

	echo json_encode(["url"=>$data, 
						"username"=>$this->user->get_user_name(),
						"notif" => $notif[0]['notif'],
						"userimage" => $img[0]['user_image'],
						"messagecount" => $unseen_messages[0]['unseenmessages']]);

	}

	public function get_search_category()
	{
	$eventid = $this->hash->decode($_POST['eventid']);
	$id = $this->user->get_user_id();
	$subserv = $this->db->query("SELECT sub_service FROM events WHERE id='$eventid[0]'");
	$sub = $subserv[0]['sub_service'];


	$notif = $this->db->query("SELECT COUNT(id) as notif FROM accepted_applications WHERE applicant_id='$id' AND notification='0'");
	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");
	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");


  	$result = $this->db->query("SELECT ev.id, ev.event_owner, ev.sub_service, ev.event_name, ev.event_budget, ev.ui_date, 
  								ev.event_description, ec.category, us.username, ui.user_image FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id) WHERE ev.event_status='0'
								AND ev.sub_service='$sub' ORDER BY ev.id DESC");

  	$accepted_applicatns = $this->db->query("SELECT ev.id, ev.sub_service, ev.event_owner, ev.event_name, ev.event_budget, ev.ui_date, 
  		ev.event_description, ec.category, us.username, ui.user_image, ap.applicant_id, ap.approved_date 
  		FROM accepted_applications as ap INNER JOIN events as ev ON(ap.event_id = ev.id) 
  		INNER JOIN event_category as ec ON(ev.event_category = ec.id) 
  		INNER JOIN users as us ON(ev.event_owner = us.id) 
  		INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id) WHERE ev.sub_service='$sub' ORDER BY ev.id DESC");	

	$result2 = $this->db->query("SELECT * FROM event_applications WHERE applicants_id='$id' AND accept_status='0'");


	$data = [];
	$data1 = [];
	$data2 = [];

  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "eventbudget" => number_format($row['event_budget'], 2),
  			   "category" => $row['category'],
  			   "username" => $row['username'],
  			   "description" => $row['event_description'],
  			   "date" => $row['ui_date'],
  			   "userimage" => $row['user_image'],
  			   "owner" => $this->hash->encode($row['event_owner']),
  			   "subserv" => $row['sub_service']	]; 
  	}

  	foreach ($accepted_applicatns as $row) {
  	$data1[] = ["id" => $this->hash->encode($row['id']),
  				"applicantid" => $this->hash->encode($row['applicant_id']),
  			    "eventname" => $row['event_name'],
  			    "eventbudget" => number_format($row['event_budget'], 2),
  			    "category" => $row['category'],
  			    "username" => $row['username'],
  			    "description" => $row['event_description'],
  			    "date" => $row['ui_date'],
  			    "userimage" => $row['user_image'],
  			    "approvedate" => $row['approved_date'],
  			    "owner" => $this->hash->encode($row['event_owner']),
  			    "subserv" => $row['sub_service']];
  	}
 
  	foreach ($result2 as $row) {
  	$data2[] = ["eventid"=>$this->hash->encode($row['event_id'])];
  	}

  	echo json_encode(["events"=>$data, 
  		              "allacceptedevents"=>$data1, 
  					  "eventapplied"=>$data2,
  					  "notif" => $notif[0]['notif'],
  					  "userimage" => $img[0]['user_image'],
					  "username"=>$this->user->get_user_name(),
					  "messagecount" => $unseen_messages[0]['unseenmessages'],
  	]);

	}


}


?>