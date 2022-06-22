<?php 
namespace Controller\User;

require './dbsetup.php';
/**
 * 
 */
use Hashids\Hashids;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
class User
{
	private $auth;
	private $db;
	private $hash;

 	public	function __construct()
	{
	$this->db = new \PDO('mysql:dbname=eventorg;host=localhost;charset=utf8mb4', 'root', '');
	$this->auth = new \Delight\Auth\Auth($this->db);
	$this->db = new \MeekroDB();
	$this->hash = new Hashids('', 10);
	$this->mail = new PHPMailer(true);	
	}

	public function register_user()
	{
		// echo $_POST['username'];
		// echo $_POST['email'];
		// echo $_POST['pass'];
	try {
            $userId = $this->auth->register($_POST['email'], $_POST['password'], $_POST['username'], function ($selector, $token) {

            });
        
            if ($_POST['userstatus'] === "organizer") {
            $status = 1;	
            $this->insert_user_info($userId, $status, $_POST['email'], $_POST['username']);
            $this->db->query("UPDATE users SET user_identity=%i WHERE id=%i", 1, $userId);
            echo json_encode(["userid"=>$this->hash->encode($userId),
        					  "identity"=>1 ]);	
            }else{
            $status = 0;	
            $this->insert_user_info($userId, $status, $_POST['email'], $_POST['username']);	
            $this->db->query("UPDATE users SET user_identity=%i WHERE id=%i", 0, $userId);
            echo json_encode(["userid"=>$this->hash->encode($userId),
        					  "identity"=>0 ]);		
            }
	}
	catch (\Delight\Auth\InvalidEmailException $e) {
	    die('Invalid email address');
	}
	catch (\Delight\Auth\InvalidPasswordException $e) {
	    die('Invalid password');
	}
	catch (\Delight\Auth\UserAlreadyExistsException $e) {
	    die('User already exists');
	}
	catch (\Delight\Auth\TooManyRequestsException $e) {
	    die('Too many requests');
	}	

	}

	public function check_user_auth()
	{
	if ($this->auth->isLoggedIn()) {
		
		$userid = $this->get_user_id();

		$identity = $this->db->query("SELECT user_identity FROM users WHERE id='$userid'");

	    echo json_encode(["status"=> 1, "identity"=>$identity[0]['user_identity']]);
	}
	else {
	    echo json_encode(["status"=> 0]);
	}

	}	

	public function login_user()
	{

	try {
	    $this->auth->login($_POST['email'], $_POST['password']);

	    $userid = $this->get_user_id();

	    $identity = $this->db->query("SELECT user_identity FROM users WHERE id='$userid'");

	    if ($identity[0]['user_identity'] == 2) {
	    echo json_encode(["identity"=>$identity[0]['user_identity']]);
	    $this->auth->logOut();
	    }else{
	    echo json_encode(["identity"=>$identity[0]['user_identity']]);	
	    }


	}
	catch (\Delight\Auth\InvalidEmailException $e) {
	    echo json_encode(["identity" => 14]);
	}
	catch (\Delight\Auth\InvalidPasswordException $e) {
	    echo json_encode(["identity" => 15]);
	}
	catch (\Delight\Auth\EmailNotVerifiedException $e) {
	    echo json_encode(["identity" => 13]);
	}
	catch (\Delight\Auth\TooManyRequestsException $e) {
	    die('Too many requests');
	}
	}

	public function login_admin()
	{
	try {
	    $this->auth->login($_POST['email'], $_POST['password']);

	    $userid = $this->get_user_id();

	    $identity = $this->db->query("SELECT user_identity FROM users WHERE id='$userid'");

	    if ($identity[0]['user_identity'] == 2) {
	    echo json_encode(["identity"=>$identity[0]['user_identity']]);
	    }else{
	    echo json_encode(["identity"=>$identity[0]['user_identity']]);
	    $this->auth->logOut();		
	    }

		


	}
	catch (\Delight\Auth\InvalidEmailException $e) {
	    echo json_encode(["identity" => 14]);
	}
	catch (\Delight\Auth\InvalidPasswordException $e) {
	    echo json_encode(["identity" => 15]);
	}
	catch (\Delight\Auth\EmailNotVerifiedException $e) {
	    echo json_encode(["identity" => 13]);
	}
	catch (\Delight\Auth\TooManyRequestsException $e) {
	    die('Too many requests');
	}
	}

	public function logout_user()
	{
	$this->auth->logOut();
	echo json_encode(["status"=>0]);

	}

	public function logout_admin()
	{
	$this->auth->logOut();
	echo json_encode(["status"=>0]);

	}

	public function get_user_id()
	{
    $id = $this->auth->getUserId();
    return $id;
	}

	public function get_user_name()
	{
    $id = $this->auth->getUserId();
    $username = $this->db->query("SELECT username FROM users WHERE id='$id'");
    return $username[0]['username'];
	}

	public function insert_user_info($userid, $status, $email, $username)
	{
	if ($status == 1) {
	 $this->db->insert('user_info', ['user_id' => $userid,
								  'user_status' => $status,
								  'email' => $email,
								  'full_name' => $username,
								  'address' => 'No address yet',
								  'contact' => 'No Contacts yet',
								  'school' => 'No data yet',
								  'notes' => 'No notes yet',
								  'skills' => 'No skills yet',
								  'ratings' => 0,
								  'user_image' => './dist/img/avatar.png',
								  'user_cover' => './dist/img/photo1.png',
								   ]);
	}else if ($status == 0) {
	 $this->db->insert('user_info', ['user_id' => $userid,
								  'user_status' => $status,
								  'email' => $email,
								  'full_name' => $username,
								  'address' => 'No address yet',
								  'contact' => 'No Contacts yet',
								  'school' => 'No data yet',
								  'notes' => 'No notes yet',
								  'user_image' => './dist/img/avatar.png',
								  'user_cover' => './dist/img/photo1.png',
								   ]);
	}	

	}	

	public function all_registered_user()
	{
	$id	= $this->auth->getUserId();
	$users = $this->db->query("SELECT ui.user_id, ui.email, ui.full_name, ui.address, ui.contact FROM user_info as ui 
								INNER JOIN users as u ON(u.id = ui.user_id)
								WHERE ui.ban_status='0' AND u.user_identity='1'");

	$count = $this->db->query("SELECT COUNT(id) as count FROM users WHERE verified='1'");

	$unverified = $this->db->query("SELECT COUNT(id) as unverified FROM users WHERE verified='0'");

	$events = $this->db->query("SELECT COUNT(id) as events FROM events");

	$reported = $this->db->query("SELECT COUNT(id) as report FROM post_reported");

	$username = $this->db->query("SELECT username FROM users WHERE id='$id'");

	$banned_users = $this->db->query("SELECT COUNT(id) as ban FROM user_info WHERE ban_status='1'");

	$services = $this->db->query("SELECT COUNT(id) as serv FROM event_category");

	$rankings = $this->db->query("SELECT gr.score, gr.user_id, gr.total_earnings, gr.ratings, ui.full_name, ui.user_image 
									FROM global_ranking as gr 
									INNER JOIN user_info as ui ON(ui.user_id = gr.user_id)
									ORDER BY gr.ratings DESC");


	$rank = [];
	$data = [];

	foreach ($rankings as $row) {
	$rank[] = ["earnings" => number_format($row['total_earnings'], 2),
			   "ratings" => $row['ratings'],
			   "userimage" => $row['user_image'],
			   "fullname" => $row['full_name'],
			   "completed" => $this->get_completed_event($row['user_id'])];
	}

	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data,
					  "rank"=>$rank,	 
					  "count"=>$count[0]['count'],
					  "events"=>$events[0]['events'],
					  "unverified"=>$unverified[0]['unverified'],
					  "reported"=>$reported[0]['report'],
					  "username"=>$username[0]['username'],
					  "service"=>$services[0]['serv'],
					  "ban"=>$banned_users[0]['ban']]);	
	}


	public function all_registered_client()
	{
	$id	= $this->auth->getUserId();
	$users = $this->db->query("SELECT ui.user_id, ui.email, ui.full_name, ui.address, ui.contact FROM user_info as ui 
								INNER JOIN users as u ON(u.id = ui.user_id)
								WHERE ui.ban_status='0' AND u.user_identity='0'");

	$count = $this->db->query("SELECT COUNT(id) as count FROM users WHERE verified='1'");

	$unverified = $this->db->query("SELECT COUNT(id) as unverified FROM users WHERE verified='0'");

	$events = $this->db->query("SELECT COUNT(id) as events FROM events");

	$reported = $this->db->query("SELECT COUNT(id) as report FROM post_reported");

	$username = $this->db->query("SELECT username FROM users WHERE id='$id'");

	$banned_users = $this->db->query("SELECT COUNT(id) as ban FROM user_info WHERE ban_status='1'");

	$services = $this->db->query("SELECT COUNT(id) as serv FROM event_category");

	$rankings = $this->db->query("SELECT gr.score, gr.user_id, gr.total_earnings, gr.ratings, ui.full_name, ui.user_image 
									FROM global_ranking as gr 
									INNER JOIN user_info as ui ON(ui.user_id = gr.user_id)
									ORDER BY gr.score DESC");


	$rank = [];
	$data = [];

	foreach ($rankings as $row) {
	$rank[] = ["earnings" => number_format($row['total_earnings'], 2),
			   "ratings" => $row['ratings'],
			   "userimage" => $row['user_image'],
			   "fullname" => $row['full_name'],
			   "completed" => $this->get_completed_event($row['user_id'])];
	}

	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data,
					  "rank"=>$rank,	 
					  "count"=>$count[0]['count'],
					  "events"=>$events[0]['events'],
					  "unverified"=>$unverified[0]['unverified'],
					  "reported"=>$reported[0]['report'],
					  "username"=>$username[0]['username'],
					  "service"=>$services[0]['serv'],
					  "ban"=>$banned_users[0]['ban']]);
	}


	public function get_completed_event($userid)
	{
	$count = $this->db->query("SELECT COUNT(applicant_id) as completed FROM accepted_applications WHERE applicant_id='$userid'");
	
	return $count[0]['completed'];	
	}

	public function load_reported_post()
	{
	$id = $this->get_user_id();	 	
	$username = $this->db->query("SELECT username FROM users WHERE id='$id'");		
  	$result = $this->db->query("SELECT ev.id, ev.event_owner, ev.event_name, ev.event_budget, ev.ui_date, 
  								ev.event_description, ec.category, us.username, ui.user_image FROM post_reported as pr
								INNER JOIN events as ev ON(ev.id = pr.event_id)
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(pr.event_owner = us.id)
								INNER JOIN user_info as ui ON(pr.event_owner = ui.user_id)");
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

	public function search_user()
	{
	$search = $_POST['search'];
	
	// $users = $this->db->query("SELECT * FROM user_info WHERE full_name LIKE '%$search%' AND ban_status='0'");

	$users = $this->db->query("SELECT ui.user_id, ui.email, ui.full_name, ui.address, ui.contact FROM user_info as ui 
								INNER JOIN users as u ON(u.id = ui.user_id)
								WHERE ui.full_name LIKE '%$search%' AND ui.ban_status='0' AND u.user_identity='1'");

	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}

	public function search_user_empty()
	{
	$users = $this->db->query("SELECT ui.user_id, ui.email, ui.full_name, ui.address, ui.contact FROM user_info as ui 
								INNER JOIN users as u ON(u.id = ui.user_id)
								WHERE ui.ban_status='0' AND u.user_identity='1'");

	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}


	public function search_user_client()
	{
	$search = $_POST['search'];
	
	// $users = $this->db->query("SELECT * FROM user_info WHERE full_name LIKE '%$search%' AND ban_status='0'");

	$users = $this->db->query("SELECT ui.user_id, ui.email, ui.full_name, ui.address, ui.contact FROM user_info as ui 
								INNER JOIN users as u ON(u.id = ui.user_id)
								WHERE ui.full_name LIKE '%$search%' AND ui.ban_status='0' AND u.user_identity='0'");

	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}

	public function search_user_empty_client()
	{
	$users = $this->db->query("SELECT ui.user_id, ui.email, ui.full_name, ui.address, ui.contact FROM user_info as ui 
								INNER JOIN users as u ON(u.id = ui.user_id)
								WHERE ui.ban_status='0' AND u.user_identity='0'");

	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}




	public function ban_user()
	{
	$userid = $this->hash->decode($_POST['userid']);
	
	$this->db->query("UPDATE users SET verified=%i WHERE id=%i", 10, $userid[0]);
	$this->db->query("UPDATE user_info SET ban_status=%i WHERE user_id=%i", 1, $userid[0]);

	$users = $this->db->query("SELECT * FROM user_info WHERE ban_status='0'");
	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}

	public function unban_user()
	{
	$userid = $this->hash->decode($_POST['userid']);
	
	$this->db->query("UPDATE users SET verified=%i WHERE id=%i", 1, $userid[0]);
	$this->db->query("UPDATE user_info SET ban_status=%i WHERE user_id=%i", 0, $userid[0]);

	$users = $this->db->query("SELECT * FROM user_info WHERE ban_status='1'");
	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}

	public function verified_user()
	{
	$userid = $this->hash->decode($_POST['userid']);
	
	$this->db->query("UPDATE users SET verified=%i WHERE id=%i", 1, $userid[0]);
	$this->db->query("UPDATE user_info SET ban_status=%i WHERE user_id=%i", 0, $userid[0]);

	$users = $this->db->query("SELECT ui.user_id, ui.email, ui.full_name, ui.address, ui.contact FROM user_info as ui 
								INNER JOIN users as u ON(u.id = ui.user_id)
								WHERE u.verified='0'");
	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}

	public function view_banned_users()
	{
	$id = $this->get_user_id();	 	
	$username = $this->db->query("SELECT username FROM users WHERE id='$id'");		
	$users = $this->db->query("SELECT * FROM user_info WHERE ban_status='1'");
	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data, "username"=>$username[0]['username']]);
	}

	public function search_banned_user_empty()
	{
	$users = $this->db->query("SELECT * FROM user_info WHERE ban_status='1'");

	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}

	public function search_banned_user()
	{
	$search = $_POST['search'];
	
	$users = $this->db->query("SELECT * FROM user_info WHERE full_name LIKE '%$search%' AND ban_status='1'");

	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}

	public function view_pending_users()
	{
	$id = $this->get_user_id();	 	
	$username = $this->db->query("SELECT username FROM users WHERE id='$id'");
	$users = $this->db->query("SELECT ui.user_id, ui.email, ui.full_name, ui.address, ui.contact FROM user_info as ui 
								INNER JOIN users as u ON(u.id = ui.user_id)
								WHERE u.verified='0'");
	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data, "username"=>$username[0]['username']]);
	}

	public function search_pending_user_empty()
	{
	$users = $this->db->query("SELECT ui.user_id, ui.email, ui.full_name, ui.address, ui.contact FROM user_info as ui 
								INNER JOIN users as u ON(u.id = ui.user_id)
								WHERE u.verified='0'");
	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}

	public function search_pending_user()
	{
	$search = $_POST['search'];
	$users = $this->db->query("SELECT ui.user_id, ui.email, ui.full_name, ui.address, ui.contact FROM user_info as ui 
								INNER JOIN users as u ON(u.id = ui.user_id)
								WHERE u.verified='0' AND ui.full_name LIKE '%$search%' ");
	$data = [];
	foreach ($users as $row) {
	$data[] = ["userid" => $this->hash->encode($row['user_id']),
			   "email" => $row['email'],
			   "fullname" => $row['full_name'],
			   "address" => $row['address'],
			   "contact" => $row['contact']	];
	}
	echo json_encode(["user"=>$data]);
	}

	public function view_services()
	{
	$id = $this->get_user_id();	 	
	$username = $this->db->query("SELECT username FROM users WHERE id='$id'");
	$services = $this->db->query("SELECT * FROM event_category");
	
	$data = [];
	foreach ($services as $row) {
	$data[] = ["id"=>$this->hash->encode($row['id']),
				"category" => $row['category']];
	}
	echo json_encode(["category"=>$data, "username"=>$username[0]['username']]);
	}

	public function edit_service()
	{
	$catid = $this->hash->decode($_POST['catid']);
	$category = $_POST['category'];

	$this->db->query("UPDATE event_category SET category=%s WHERE id=%i", $category, $catid[0]);

	$services = $this->db->query("SELECT * FROM event_category");
	
	$data = [];
	foreach ($services as $row) {
	$data[] = ["id"=>$this->hash->encode($row['id']),
				"category" => $row['category']];
	}
	echo json_encode(["category"=>$data]);
	}

	public function delete_service()
	{
	$catid = $this->hash->decode($_POST['catid']);

	$this->db->query("DELETE FROM event_category WHERE id=%i", $catid[0]);

	$services = $this->db->query("SELECT * FROM event_category");
	
	$data = [];
	foreach ($services as $row) {
	$data[] = ["id"=>$this->hash->encode($row['id']),
				"category" => $row['category']];
	}
	echo json_encode(["category"=>$data]);
	}

	public function add_service()
	{
	$category = $_POST['category'];
	
	$this->db->insert('event_category', ['category' => $category ]);

	$services = $this->db->query("SELECT * FROM event_category");
	
	$data = [];
	foreach ($services as $row) {
	$data[] = ["id"=>$this->hash->encode($row['id']),
				"category" => $row['category']];
	}
	echo json_encode(["category"=>$data]);
	}

	public function user_reset_pass()
	{
        $userid = $this->get_user_id();

		try {
		    $this->auth->changePassword($_POST['oldpass'], $_POST['newpass']);

		    echo json_encode(["response"=>"Password has been changed", "val"=>"0"]);
		}
		catch (\Delight\Auth\NotLoggedInException $e) {
		    echo json_encode(["response" => "Not logged in", "val"=>"1"]);
		}
		catch (\Delight\Auth\InvalidPasswordException $e) {
		    echo json_encode(["response" => "Invalid password(s)", "val"=>"1"]);
		}
		catch (\Delight\Auth\TooManyRequestsException $e) {
		    echo json_encode(["response" => "Too many requests", "val"=>"1"]);
		}
	}


	public function sponsor_data()
	{
	$id = $this->get_user_id();	
	
	$adminname = $this->db->query("SELECT full_name FROM user_info WHERE user_id='$id'");

	$ads = $this->db->query("SELECT * FROM sponsor_ads ORDER BY id DESC");

	$data = [];

	foreach ($ads as $row) {
	$data[] = ["id" => $this->hash->encode($row['id']),
			   "link" => $row['sponsor_link'],
			   "image" => $row['item_image'],
			   "sponsor" => $row['title']];
	}

	echo json_encode(["adminname"=>$adminname[0]['full_name'], "sponsor"=>$data]);	
	}


	public function load_events()
	{
	$id = $this->get_user_id();
	$cover = $this->db->query("SELECT user_cover FROM user_info WHERE user_id='$id'");
  	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");	
  	$info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");
  	$services = $this->db->query("SELECT * FROM event_category");
  	$result1 = $this->db->query("SELECT ev.id, ev.event_owner, ev.sub_service, ev.event_name, ev.event_budget, ev.ui_date, 
  								ev.event_description, ec.category, us.username, ui.user_image, ev.event_status FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id)
								ORDER BY ev.event_status");	

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
				"eventcount" => $this->countEventUser2($row['id'])	];
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
  			   "status" => $row['event_status'],
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

  	echo json_encode(["events"=>$data, "username"=>$this->get_user_name(), "allevents" => $data1, 
  					  "userimage"=>$img[0]['user_image'], "usercover"=>$cover[0]['user_cover'],
  					  "messagecount" => $unseen_messages[0]['unseenmessages'], "info"=>$data2,
  					  "services" => $data3, "sponsor"=>$ads]);
	}

	public function countEventUser2($catid)
	{
	 $count = $this->db->query("SELECT COUNT(id) as count FROM events WHERE event_category='$catid'");
	 
	 if (!$count) {
	 return 0;
	 }else{
	 return $count[0]['count'];	
	 }	
	}


	public function load_client_data()
	{
	$userid = $this->hash->decode($_POST['userid']);
	$id = $userid[0];	

	$cover = $this->db->query("SELECT user_cover FROM user_info WHERE user_id='$id'");
  	$img = $this->db->query("SELECT user_image FROM user_info WHERE user_id='$id'");	
  	$info = $this->db->query("SELECT * FROM user_info WHERE user_id='$id'");
  	$services = $this->db->query("SELECT * FROM event_category");
  	$result1 = $this->db->query("SELECT ev.id, ev.event_owner, ev.sub_service, ev.event_name, ev.event_budget, ev.ui_date, 
  								ev.event_description, ec.category, us.username, ui.user_image FROM events as ev
								INNER JOIN event_category as ec ON(ev.event_category = ec.id)
								INNER JOIN users as us ON(ev.event_owner = us.id)
								INNER JOIN user_info as ui ON(ev.event_owner = ui.user_id)
								WHERE ev.event_owner = '$id'
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
				"eventcount" => $this->countEventUserAdmin($row['id'])	];
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
  			   "applicants" => $this->count_applications_admin($row['id']),
  			   "description" => $row['event_description'],
  			   "date" => $row['event_date_created'],
  			   "subserv" => $row['sub_service']	]; 
  	}

  	echo json_encode(["events"=>$data, "username"=>$this->get_user_name(), "allevents" => $data1, 
  					  "userimage"=>$img[0]['user_image'], "usercover"=>$cover[0]['user_cover'],
  					  "messagecount" => $unseen_messages[0]['unseenmessages'], "info"=>$data2,
  					  "services" => $data3, "sponsor"=>$ads]);



	}

	public function countEventUserAdmin($catid)
	{
	 $count = $this->db->query("SELECT COUNT(id) as count FROM events WHERE event_category='$catid'");
	 
	 if (!$count) {
	 return 0;
	 }else{
	 return $count[0]['count'];	
	 }	
	}

	public function count_applications_admin($event_id)
	{
	$count = $this->db->query("SELECT COUNT(id) as applicants FROM event_applications WHERE event_id='$event_id'");

	return $count[0]['applicants'];	
	}	


	public function load_user_activity()
	{
	$id = $this->get_user_id();		
	$username = $this->db->query("SELECT username FROM users WHERE id='$id'");	

	$activity = $this->db->query("SELECT al.activity, al.date_created, u.user_identity, ui.user_image FROM activity_logs as al
									INNER JOIN user_info as ui ON(ui.user_id = al.user_id)
									INNER JOIN users as u ON(u.id = al.user_id) ORDER BY al.id DESC");

	$data = [];

	foreach ($activity as $row) {
	$data[] = ["activity" => $row['activity'],
			   "date" => $row['date_created'],
			   "img" => $row['user_image'],
			   "identity" => $row['user_identity'] ];
	}

	echo json_encode(["username"=>$username[0]['username'],
					  "activity"=>$data]);

	}


	public function inert_user_activity()
	{
	 $detail = $_POST['activity'];
	 $id = $this->get_user_id();	
	 $date = date("jS F Y g:ia");
	 $username = $this->get_user_name();

	 $this->db->insert('activity_logs', ['user_id' => $id,
								  'activity' => $username." ".$detail,
								  'date_created' => $date,
								   ]);	
	echo json_encode(["response"=> "success"]);
	}

	public function confirm_password()
	{
		try {

		    $this->auth->canResetPasswordOrThrow($_GET['selector'], $_GET['token']);

		    $this->auth->resetPassword($_GET['selector'], $_GET['token'], $_GET['password']);

		    header("Location: http://localhost/eventorg");

		}
		catch (\Delight\Auth\InvalidSelectorTokenPairException $e) {
		    die('Invalid token');
		}
		catch (\Delight\Auth\TokenExpiredException $e) {
		    die('Token expired');
		}
		catch (\Delight\Auth\ResetDisabledException $e) {
		    die('Password reset is disabled');
		}
		catch (\Delight\Auth\TooManyRequestsException $e) {
		    die('Too many requests');
		}

	}

	public function reset_password()
	{


	try {
	    $this->auth->forgotPassword($_POST['email'], function ($selector, $token) {
	        $this->send_verification($selector, $token, $_POST['email'], $_POST['password']);
	    });

	   echo json_encode(["response"=>"success"]);
	}
	catch (\Delight\Auth\InvalidEmailException $e) {
	    die('Invalid email address');
	}
	catch (\Delight\Auth\EmailNotVerifiedException $e) {
	    die('Email not verified');
	}
	catch (\Delight\Auth\ResetDisabledException $e) {
	    die('Password reset is disabled');
	}
	catch (\Delight\Auth\TooManyRequestsException $e) {
	    die('Too many requests');
	}


	}


	public function send_verification($selector, $token, $email, $password)
	{
		$template = "<h3>Click the link to reset your password.

        <a href='http://localhost/eventorg/api/confirm-password?selector=".$selector."&token=".$token."&password=".$password."' target='_blank'>
                                                Please click here to confirm password reset.
                                              </a>

					</h3>";

        try {
            //Server settings
            $this->mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $this->mail->SMTPDebug = false; //Enable verbose debug output
            $this->mail->isSMTP(); //Send using SMTP
            $this->mail->Host = 'mail.dgte.pro'; //Set the SMTP server to send through
            $this->mail->SMTPAuth = true; //Enable SMTP authentication
            $this->mail->Username = 'marben.b@philx.ph'; //SMTP username
            $this->mail->Password = 'uVanWBZxUezgEtMMGEcbzVeTFzZ!@#'; //SMTP password
            $this->mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
            $this->mail->Port = 587; //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above            
            //Recipients
            $this->mail->setFrom('marben.b@philx.ph', 'EventOrg');
            $this->mail->addAddress($_POST['email']); //Add a recipient

            //Content
            $this->mail->isHTML(true); //Set email format to HTML
            $this->mail->Subject = 'Varification Email EventOrg';
            $this->mail->Body = $template;
            // $this->mail->Body = '<a href="api.sc.io/email-verification?token=' . $token . '&selector=' . $selector . '">active</a>';
            // $this->mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $this->mail->send();
            // echo 'Message has been sent';
            // echo json_encode(["response"=>"sent"]);
        } catch (Exception $e) {
            echo "Message could not be sent. Mailer Error: {$this->mail->ErrorInfo}";
        }			
	}

	public function save_new_email()
	{
	$email = $_POST['email'];
    $id = $this->get_user_id();	

    $this->db->query("UPDATE users SET email=%s WHERE id=%i", $email, $id);
    $this->db->query("UPDATE user_info SET email=%s WHERE user_id=%i", $email, $id);

  	$newemail = $this->db->query("SELECT email FROM users WHERE id='$id'");
  	
  	echo json_encode(["email"=>$newemail[0]['email']]);  
	}


	public function remove_user_post()
	{
	 $userid = $this->hash->decode($_POST['userid']);
	 $eventid = $this->hash->decode($_POST['eventid']);

	 $this->db->query("DELETE FROM events WHERE id=%i AND event_owner=%i", $eventid[0], $userid[0]);
	 $this->db->query("DELETE FROM event_applications WHERE event_id=%i", $eventid[0]);

	 echo json_encode(["response"=>"success"]);
	}

}

?>