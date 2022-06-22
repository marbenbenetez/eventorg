<?php 
namespace Controller\Client;
/**
 * 
 */
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use Hashids\Hashids;
use Controller\User\User;

class Client
{
	private $hash;
	private $db;	
	private $user;
	private $mail;

	public function __construct()
	{
		$this->hash = new Hashids('', 10);
		$this->db = new \MeekroDB();
		$this->user = new User;
		$this->mail = new PHPMailer(true);
	}

	public function client_data()
	{
	$id = $this->user->get_user_id();
	$cover = $this->db->query("SELECT user_cover FROM user_info WHERE user_id='$id'");
  	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");	
  	$info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");
  	$services = $this->db->query("SELECT * FROM event_category");
  	$result1 = $this->db->query("SELECT ev.id, ev.event_owner, ev.sub_service, ev.event_name, ev.event_budget, ev.ui_date, 
  								ev.event_description, ec.category, us.username, ui.user_image FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id)
								ORDER BY ev.id DESC");	

  	$sponsors = $this->db->query("SELECT * FROM sponsor_ads ORDER BY id DESC");

  	$ads = [];
  	foreach ($sponsors as $row) {
	$ads[] = ["id" => $this->hash->encode($row['id']),
			   "link" => $row['sponsor_link'],
			   "image" => $row['item_image'],
			   "sponsor" => $row['title']];
	}


	$data3 = [];
	foreach ($services as $row) {
	$data3[] = ["id" => $this->hash->encode($row['id']),
				"service" => $row['category'],
				"eventcount" => $this->countEventUser($row['id'])	];
	}



	$data1 = [];
	foreach ($result1 as $row) {
  	$data1[] = ["id" => $this->hash->encode($row['id']),
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


	$data2 = [];
	foreach ($info as $row) {
	$data2[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact'],
			   "school" => $row['school'],
			   "notes" => $row['notes'],
			   "userimage" => $row['user_image'],
			   "usercover" => $row['user_cover'] ];	
	}

  	$result = $this->db->query("SELECT ev.id, ev.sub_service, ev.event_name, ev.event_status, ev.event_budget, ev.event_date_created, 
  								ev.event_description, ec.category, us.username FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								WHERE ev.event_owner = '$id' ORDER BY ev.id DESC");

  	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");

  	$data = [];

  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "status" => $row['event_status'],
  			   "eventbudget" => number_format($row['event_budget'], 2),
  			   "category" => $row['category'],
  			   "username" => $row['username'],
  			   "applicants" => $this->count_applications($row['id']),
  			   "description" => $row['event_description'],
  			   "date" => $row['event_date_created'],
  			   "subserv" => $row['sub_service']	]; 
  	}

  	echo json_encode(["events"=>$data, "username"=>$this->user->get_user_name(), "allevents" => $data1, 
  					  "userimage"=>$img[0]['user_image'], "usercover"=>$cover[0]['user_cover'],
  					  "messagecount" => $unseen_messages[0]['unseenmessages'], "info"=>$data2,
  					  "services" => $data3, "sponsor"=>$ads]);

	}	

	public function countEventUser($catid)
	{
	 $count = $this->db->query("SELECT COUNT(id) as count FROM events WHERE event_category='$catid'");
	 
	 if (!$count) {
	 return 0;
	 }else{
	 return $count[0]['count'];	
	 }	
	}

	public function count_applications($event_id)
	{
	$count = $this->db->query("SELECT COUNT(id) as applicants FROM event_applications WHERE event_id='$event_id'");

	return $count[0]['applicants'];	
	}

	public function get_services_data()
	{
		$id = $this->user->get_user_id();	

        if(!isset($_POST['searchTerm'])){

            $fetchData = $this->db->query("SELECT * from event_category limit 100");
        
        }else{

            $search = $_POST['searchTerm'];
            $fetchData = $this->db->query("SELECT * from event_category like '%".$search."%' limit 10");
        }
            
        $data = array();

        foreach ($fetchData as $row) {
            
           $data[] = array(

            'id' => $this->hash->encode($row['id']) ,
            'text' => $row['category'],

            );
        }

        echo json_encode($data);
	}

	public function insert_event_data()
	{
	 $catid = $this->hash->decode($_POST['catid']);
	 $price = $_POST['price'];
	 $des = $_POST['description'];
	 $title = $_POST['title'];
	 $datenow = date("Y-m-d");
	 $uidate = date("jS F Y g:ia");
	 $id = $this->user->get_user_id();

	 $this->db->insert('events', ['event_name' => $title,
								  'event_category' => $catid[0],
								  'event_owner' => $id,
								  'event_status' => '0',
								  'event_date_created' => $datenow,
								  'event_budget' => $price,
								  'event_description' => $des,
								  'ui_date' => $uidate
								   ]);
  	$result = $this->db->query("SELECT ev.id, ev.event_name, ev.event_budget, ev.event_date_created, 
  								ev.event_description, ec.category, us.username FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								WHERE ev.event_owner = '$id' ORDER BY ev.id DESC");

  	$data = [];

  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "eventbudget" => number_format($row['event_budget'], 2),
  			   "category" => $row['category'],
  			   "username" => $row['username'],
  			   "applicants" => $this->count_applications($row['id']),
  			   "description" => $row['event_description'],
  			   "date" => $row['event_date_created']	]; 
  	}
  	echo json_encode(["events"=>$data, "username"=>$this->user->get_user_name()]);

	}

	public function insert_event_data_others()
	{
	 $catid = $this->hash->decode($_POST['catid']);
	 $price = $_POST['price'];
	 $des = $_POST['description'];
	 $title = $_POST['title'];
	 $datenow = date("Y-m-d");
	 $uidate = date("jS F Y g:ia");
	 $id = $this->user->get_user_id();
	 $subserv = $_POST['subserv'];

	 $this->db->insert('events', ['event_name' => $title,
								  'event_category' => $catid[0],
								  'event_owner' => $id,
								  'event_status' => '0',
								  'event_date_created' => $datenow,
								  'event_budget' => $price,
								  'event_description' => $des,
								  'ui_date' => $uidate,
								  'sub_service' => $subserv,
								   ]);
  	$result = $this->db->query("SELECT ev.id, ev.sub_service, ev.event_name, ev.event_budget, ev.event_date_created, 
  								ev.event_description, ec.category, us.username FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								WHERE ev.event_owner = '$id' ORDER BY ev.id DESC");

  	$data = [];

  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "eventbudget" => number_format($row['event_budget'], 2),
  			   "category" => $row['category'],
  			   "username" => $row['username'],
  			   "applicants" => $this->count_applications($row['id']),
  			   "description" => $row['event_description'],
  			   "date" => $row['event_date_created'],
  			   "subserv" => $row['sub_service']	]; 
  	}
  	echo json_encode(["events"=>$data, "username"=>$this->user->get_user_name()]);
	}

	public function edit_event_data()
	{
	$eventid = $this->hash->decode($_POST['eventid']);
	$id = $this->user->get_user_id();

  	$result = $this->db->query("SELECT ev.id, ev.event_name, ev.event_budget, ev.event_date_created, 
  								ev.event_description, ec.category, ec.id as catid FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								WHERE ev.event_owner = '$id' AND ev.id = '$eventid[0]'");
	
  	$data = [];

  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "eventbudget" => $row['event_budget'],
  			   "category" => $row['category'],
  			   "categoryid" => $this->hash->encode($row['catid']),
  			   "description" => $row['event_description'],
  			   "date" => $row['event_date_created']	]; 
  	}
  	echo json_encode(["events"=>$data]);

	}

	public function update_event_data()
	{
	 $catid = $this->hash->decode($_POST['catid']);
	 $price = $_POST['price'];
	 $des = $_POST['description'];
	 $title = $_POST['title'];
	 $eventid = $this->hash->decode($_POST['eventid']);
	 $id = $this->user->get_user_id();

	 $this->db->query("UPDATE events SET event_name=%s, event_category=%i, event_budget=%i, event_description=%s 
	 				   WHERE event_owner=%i AND id=%i", $title, $catid[0], $price, $des, $id, $eventid[0]);
	
  	$result = $this->db->query("SELECT ev.id, ev.event_name, ev.event_budget, ev.event_date_created, 
  								ev.event_description, ec.category, us.username FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								WHERE ev.event_owner = '$id'");

  	$data = [];

  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "eventbudget" => number_format($row['event_budget'], 2),
  			   "category" => $row['category'],
  			   "username" => $row['username'],
  			   "applicants" => $this->count_applications($row['id']),
  			   "description" => $row['event_description'],
  			   "date" => $row['event_date_created']	]; 
  	}
  	echo json_encode(["events"=>$data]);
	}

	public function delete_event_data()
	{
	$eventid = $this->hash->decode($_POST['eventid']);
	
	$this->db->delete('events', 'id=%i', $eventid[0]);
	$id = $this->user->get_user_id();
  	$result = $this->db->query("SELECT ev.id, ev.event_name, ev.event_budget, ev.event_date_created, 
  								ev.event_description, ec.category, us.username FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								WHERE ev.event_owner = '$id'");

  	$data = [];

  	foreach ($result as $row) {
  	$data[] = ["id" => $this->hash->encode($row['id']),
  			   "eventname" => $row['event_name'],
  			   "eventbudget" => number_format($row['event_budget'], 2),
  			   "category" => $row['category'],
  			   "username" => $row['username'],
  			   "applicants" => $this->count_applications($row['id']),
  			   "description" => $row['event_description'],
  			   "date" => $row['event_date_created']	]; 
  	}
  	echo json_encode(["events"=>$data]);	
	}

	public function get_userinfo_data()
	{
	$id = $this->user->get_user_id();
	
	$info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");
  	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");	
	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");
	$data = [];
	foreach ($info as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact'],
			   "school" => $row['school'],
			   "notes" => $row['notes'],
			   "userimage" => $row['user_image'],
			   "usercover" => $row['user_cover'],
			   "email" => $row['email'] ];	
	}
	echo json_encode(["info"=>$data,
					 "username"=>$this->user->get_user_name(),
					 "userimage"=>$img[0]['user_image'], 
					 "messagecount" => $unseen_messages[0]['unseenmessages']]);	
	}

	public function save_new_profile()
	{
	$newalue = $_POST['newvalue'];
	$column = $_POST['column'];
	$id = $this->user->get_user_id();
	$this->db->query("UPDATE user_info SET $column=%s WHERE user_id=%i", $newalue, $id);

	$info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");

	$data = [];
	foreach ($info as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact'],
			   "school" => $row['school'],
			   "notes" => $row['notes'],
			   "email" => $row['email'],
			   "userimage" => $row['user_image'] ];	
	}
	echo json_encode(["info"=>$data]);

	}

	public function view_applicants()
	{
	$eventid = $this->hash->decode($_POST['eventid']);
	$id = $this->user->get_user_id();
  	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");	
	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");
	$applicants = $this->db->query("SELECT app.id, app.note, app.date_applied, app.applicants_id, app.event_id, ui.school, 
									ui.email, ui.full_name, ui.address, ui.contact, ui.user_image,
									ui.skills, ui.ratings FROM event_applications as app
									INNER JOIN user_info as ui ON(app.applicants_id = ui.user_id)
									WHERE app.event_id = '$eventid[0]'");

	$data = [];
	

	foreach ($applicants as $row) {
	$data[] = ['applicationid'=> $this->hash->encode($row['id']),
				'dateapplied' => $row['date_applied'],
				'rating' => $this->get_ratings($row['applicants_id']),
			   'email' => $row['email'],
			   'fullname' => $row['full_name'],
			   'address' => $row['address'],
			   'contact' => $row['contact'],
			   'skills' => $row['skills'],
			   'school' => $row['school'],
			   'ratings' => $row['ratings'],
			   'note' => $row['note'],
			   'eventid' => $this->hash->encode($row['event_id']),
			   'userimage' => $row['user_image'],
			   'files' => $this->get_applicants_files($row['applicants_id']),
			   'applicantsid' => $this->hash->encode($row['applicants_id']) ];
	}

	echo json_encode(["applicants"=>$data,
					"username"=>$this->user->get_user_name(),
					"userimage"=>$img[0]['user_image'], 
					"messagecount" => $unseen_messages[0]['unseenmessages']]);	
	}

	public function get_applicants_files($id)
	{
	$imgs = $this->db->query("SELECT * FROM accomplishments WHERE user_id='$id'");
	$path = [];	

	foreach ($imgs as $row) {
	$path[] = ["img" => $row['url']];
	}

	return $path;

	}

	public function accept_applicants()
	{
	$eventid = $this->hash->decode($_POST['eventid']);
	$applicantsid = $this->hash->decode($_POST['applicantsid']);
	$id = $this->user->get_user_id();
	$email = $_POST['email'];
	$applicationid = $this->hash->decode($_POST['applicationid']);
	$date = date('F jS Y');
	$event_title = $this->db->query("SELECT event_name FROM events WHERE id='$eventid[0]'");
	$client_email = $this->db->query("SELECT email FROM users WHERE id='$id'");
	$clientsmail = $client_email[0]['email'];

	$applicantsname = $this->db->query("SELECT full_name FROM user_info WHERE user_id='$applicantsid[0]'");

	$this->db->insert('accepted_applications', ['applications_id' => $applicationid[0],
								  'event_id' => $eventid[0],
								  'approved_by' => $id,
								  'approved_date' => $date,
								  'applicant_id' => $applicantsid[0]
								   ]);
	$this->db->query("UPDATE events SET event_status=%i WHERE event_owner=%i AND id=%i", 1, $id, $eventid[0]);

	$this->db->query("UPDATE event_applications SET accept_status=%i WHERE applicants_id=%i AND event_id=%i", 1, $applicantsid[0], $eventid[0]);

	$this->db->insert('group_chat', ['user_id' => $applicantsid[0],
								  'event_id' => $eventid[0]
								   ]);
	$this->db->insert('group_chat', ['user_id' => $id,
								  'event_id' => $eventid[0]
								   ]);

	$checklist = $this->db->query("SELECT * FROM global_ranking WHERE user_id='$applicantsid[0]'");

	$score = $this->db->query("SELECT COUNT(id) as score FROM accepted_applications WHERE applicant_id='$applicantsid[0]'");

	$earnings = $this->db->query("SELECT SUM(ev.event_budget) as earnings FROM accepted_applications as ap
								INNER JOIN events as ev ON(ev.id = ap.event_id)
								WHERE ap.applicant_id = '$applicantsid[0]'");
	$count = $this->db->query("SELECT COUNT(id) as count FROM organizer_ratings WHERE user_id='$applicantsid[0]'");


	if ($count[0]['count'] == 0) {
	echo json_encode(["response"=>"sent"]);
	}else{
	$ratings = $this->db->query("SELECT AVG(ratings) as ratings FROM organizer_ratings WHERE user_id='$applicantsid[0]'");	
	if (!$checklist) {
	$this->db->insert('global_ranking', ['user_id' => $applicantsid[0],
										  'score' => $score[0]['score'],
										  'total_earnings' => $earnings[0]['earnings'],
										  'ratings' => $ratings[0]['ratings'],
										   ]);
	}else{

	$this->db->query("UPDATE global_ranking SET score=%i, total_earnings=%i, ratings=%i 
					  WHERE user_id=%i", $score[0]['score'], $earnings[0]['earnings'], $ratings[0]['ratings'], $applicantsid[0] );	
	
	}

	$details = "accepted ".$applicantsname[0]['full_name']."'s application for the job: ".$event_title[0]['event_name'];

    echo json_encode(["response"=>$details]);
	}



	}

	public function view_accepted_applicants()
	{
	$eventid = $this->hash->decode($_POST['eventid']);
	
	$id = $this->user->get_user_id();

  	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");	
	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");

	$applicants = $this->db->query("SELECT app.id, ui.email, ui.full_name, ui.address, ui.contact, ui.skills, ui.school, ui.notes, ui.ratings,
									ui.user_id FROM accepted_applications as app INNER JOIN user_info as ui ON(app.applicant_id = ui.user_id)
									WHERE app.event_id = '$eventid[0]'");

	$data = [];

	foreach ($applicants as $row) {
	$data[] = ['aplicantsid' => $this->hash->encode($row['user_id']),
				'rating' => $this->get_ratings($row['user_id']),
				'email' => $row['email'],
			   'fullname' => $row['full_name'],
			   'address' => $row['address'],
			   'contact' => $row['contact'],
			   'skills' => $row['skills'],
			   'school' => $row['school'],
			   'ratings' => $row['ratings'] ];
	}

	echo json_encode(["applicants"=>$data,
					"username"=>$this->user->get_user_name(),
					"userimage"=>$img[0]['user_image'], 
					"messagecount" => $unseen_messages[0]['unseenmessages']]);
	}

	public function get_ratings($applicantsid)
	{
	$rating = $this->db->query("SELECT ratings FROM user_info WHERE user_id='$applicantsid'");
	
	return $rating[0]['ratings'];	
	}

	public function send_messages_client()
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

	public function view_messages_client()
	{
	$id = $this->user->get_user_id();
	$eventid = $this->hash->decode($_POST['eventid']);
	$reciever = $this->db->query("SELECT applicant_id FROM accepted_applications WHERE event_id='$eventid[0]'");
  	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");	
	$unseen_messages = $this->db->query("SELECT COUNT(id) as unseenmessages FROM chat_messages WHERE reciever='$id' AND seen_status='0'");
	$messages = $this->db->query("SELECT cm.reciever, cm.sender, cm.event_id, cm.message, cm.date_sent  
									FROM chat_messages as cm 
									WHERE cm.event_id = '$eventid[0]' ORDER BY cm.id");	
	$data = [];
	foreach ($messages as $row) {
	$data[] = ["eventid" => $this->hash->encode($row['event_id']),
			   "recievername" => $this->get_reciever_name_client($row['sender']),
			   "recieverpic" => $this->get_reciever_img_client($row['sender']),
			   "message" => $row['message'],
			   "sender" => $this->hash->encode($row['sender']),
			   "datesent" => $row['date_sent']];
	}
	echo json_encode(["messages" => $data, 
					  "user"=>$this->hash->encode($id), 
					  "reciever"=>$this->hash->encode($reciever[0]['applicant_id']),
					  "username"=>$this->user->get_user_name(),
					  "userimage"=>$img[0]['user_image'], 
					  "messagecount" => $unseen_messages[0]['unseenmessages']]);
	}

	public function get_reciever_name_client($reciever)
	{
	$get_name = $this->db->query("SELECT full_name FROM user_info WHERE user_id='$reciever'");
	return $get_name[0]['full_name'];	
	}

	public function get_reciever_img_client($reciever)
	{
	$get_img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$reciever'");
	return $get_img[0]['user_image'];	
	}


	public function search_category()
	{
	$search = $_POST['search'];
	
	$category = $this->db->query("SELECT * FROM events WHERE sub_service LIKE '%$search%'");

	$data = [];
	foreach ($category as $row) {
	$data[] = ["service" => $row['sub_service'], 
			   "id" => $this->hash->encode($row['id'])];
	}
	echo json_encode(["result"=>$data]);
	}

	public function get_filtered_category()
	{
	$catid = $this->hash->decode($_POST['catid']);

  	$result1 = $this->db->query("SELECT ev.id, ev.event_owner, ev.sub_service, ev.event_name, ev.event_budget, ev.ui_date, 
  								ev.event_description, ec.category, us.username, ui.user_image FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id) WHERE ev.event_category = '$catid[0]'
								ORDER BY ev.id DESC");
	$data1 = [];
	foreach ($result1 as $row) {
  	$data1[] = ["id" => $this->hash->encode($row['id']),
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

  	echo json_encode(["events"=>$data1]);

	}

	public function load_user_notification()
	{
	 $id = $this->user->get_user_id();
	 
	 // $reported = $this->query("SELECT ev.id as eventid, ev FROM post_reported as pr 
		// 						INNER JOIN events as ev ON(pr.event_id = ev.id)
		// 						WHERE pr.event_owner='$id' AND pr.warning='1'");

	 $result = $this->db->query("SELECT e.id, ev.id as eventid, e.applicants_id, ev.event_name, ev.event_owner, ui.full_name, 
	 							e.date_applied FROM event_applications as e 
								INNER JOIN events as ev ON(e.event_id = ev.id) 
								INNER JOIN user_info as ui ON(e.applicants_id = ui.user_id)
								WHERE ev.event_owner='$id' AND e.accept_status='0'");

	 $data = [];
	 foreach ($result as $row) {
	 $data[] = ["id"=>$this->hash->encode($row['id']),
				"applicantsid"=>$this->hash->decode($row['applicants_id']),
				"eventname"=>$row['event_name'],
				"fullname"=>$row['full_name'],
				"eventid"=>$this->hash->encode($row['eventid']),
			    "date"=>$row['date_applied']];
	 }

	 echo json_encode(["userinfo"=>$data]);

	}

	public function get_search_service()
	{
	$userid = $this->user->get_user_id();	
		
	$id = $this->hash->decode($_POST['id']);

	$subserv = $this->db->query("SELECT sub_service FROM events WHERE id='$id[0]'");
	
	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$userid'");

	$sub = $subserv[0]['sub_service'];


	$services = $this->db->query("SELECT * FROM event_category");

	$data3 = [];

	foreach ($services as $row) {
	$data3[] = ["id" => $this->hash->encode($row['id']),
				"service" => $row['category']	];
	}


  	$result1 = $this->db->query("SELECT ev.id, ev.event_owner, ev.sub_service, ev.event_name, ev.event_budget, ev.ui_date, 
  								ev.event_description, ec.category, us.username, ui.user_image FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id)
								WHERE ev.sub_service = '$sub'
								ORDER BY ev.id DESC");	

	$data1 = [];
	foreach ($result1 as $row) {
  	$data1[] = ["id" => $this->hash->encode($row['id']),
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

  	echo json_encode(["allevents" => $data1, "username"=>$this->user->get_user_name(),
					  "userimage"=>$img[0]['user_image'], "services" => $data3]);
	}


	public function view_organizer()
	{
	$applicantsid = $this->hash->decode($_POST['applicantsid']);	
	$id = $applicantsid[0];

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
  		INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id)
  		WHERE ap.applicant_id='$id' ORDER BY ev.id DESC");


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
			   "rating" => $this->get_org_ratings_user($row['user_id']),
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


	public function get_org_ratings_user($applicantsid)
	{
	$rating = $this->db->query("SELECT AVG(ratings) as average FROM organizer_ratings WHERE user_id='$applicantsid'");
	
	return $rating[0]['average'];	
	}



}


?>