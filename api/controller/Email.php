<?php 
namespace Controller\Email;
/**
 * 
 */
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use Hashids\Hashids;
use Controller\User\User;

class Email
{
	private $hash;
	private $db;	
	private $user;
	private $mail;

	public function __construct()
	{
		$this->mail = new PHPMailer(true);
		$this->hash = new Hashids('', 10);
		$this->db = new \MeekroDB();
		$this->user = new User;
	}
















}


?>