<?php 
namespace Controller\Uploader;

use Hashids\Hashids;
use Controller\User\User;
/**
 * 
 */
class Upload
{

	private $hash;
	private $db;	
	private $user;
	
    public function __construct()
	{
		$this->hash = new Hashids('', 10);
		$this->db = new \MeekroDB();
		$this->user = new User;
	}

	public function change_profile_picture()
	{
    $filename = $_FILES['filepond']['name'];  
    $filepath = $_FILES['filepond']['tmp_name'];
    $filesize = $_FILES['filepond']['size'];
	$id = $this->user->get_user_id();	

    $directory = "../dist/img";
    $fakedir = "./dist/img";
    $fakepath = $fakedir."/".$filename;    
    $path = $directory."/".$filename;

	$this->db->query("UPDATE user_info SET user_image=%s WHERE user_id=%i", $fakepath, $id);

    if (!is_dir($directory)) {
    //Create our fam_monitor_directory(fam, dirname).
    mkdir($directory, 755, true);
    move_uploaded_file($filepath, $directory . '/' . basename($filename));
    } else {
    move_uploaded_file($filepath, $directory . '/' . basename($filename));
    }

    echo json_encode(["img"=>$fakepath, "userid"=>$_POST['userid']]);

	}


	public function change_cover_photo()
	{
    $filename = $_FILES['filepond']['name'];  
    $filepath = $_FILES['filepond']['tmp_name'];
    $filesize = $_FILES['filepond']['size'];
	$id = $this->user->get_user_id();

    $directory = "../dist/img";
    $fakedir = "./dist/img";
    $fakepath = $fakedir."/".$filename;
    $path = $directory."/".$filename;

	$this->db->query("UPDATE user_info SET user_cover=%s WHERE user_id=%i", $fakepath, $id);

    if (!is_dir($directory)) {
    //Create our fam_monitor_directory(fam, dirname).
    mkdir($directory, 755, true);
    move_uploaded_file($filepath, $directory . '/' . basename($filename));
    } else {
    move_uploaded_file($filepath, $directory . '/' . basename($filename));
    }

    echo json_encode(["img"=>$fakepath, "userid"=>$_POST['userid']]);
	}

    public function add_accomplishments()
    {
    $filename = $_FILES['filepond']['name'];  
    $filepath = $_FILES['filepond']['tmp_name'];
    $filesize = $_FILES['filepond']['size'];
    $id = $this->user->get_user_id();

    $directory = "./dist/achievements";
    $path = $directory."/".$filename;

    $this->db->insert('accomplishments', ['user_id' => $id,
                                          'url' => $path,
                                           ]);

    if (!is_dir($directory)) {
    //Create our fam_monitor_directory(fam, dirname).
    mkdir($directory, 755, true);
    move_uploaded_file($filepath, $directory . '/' . basename($filename));
    } else {
    move_uploaded_file($filepath, $directory . '/' . basename($filename));
    }

    echo json_encode(["img"=>$path, "userid"=>$this->hash->encode($id)]);  
    }

    public function upload_accomplishment()
    {
    $filename = $_FILES['filepond']['name'];  
    $filepath = $_FILES['filepond']['tmp_name'];
    $filesize = $_FILES['filepond']['size'];

    $des = $_POST['description'];
    $id = $this->user->get_user_id();

    $directory = "../dist/achievements";
    $fakedir = "./dist/achievements";
    $fakepath = $fakedir."/".$filename;
    $path = $directory."/".$filename;

    $this->db->insert('accomplishments', ['user_id' => $id,
                                          'url' => $fakepath,
                                          'description' => $des,
                                           ]);


    $imgs = $this->db->query("SELECT * FROM accomplishments WHERE user_id='$id' ORDER BY id DESC");

    $data = [];

    foreach ($imgs as $row) {
    $data[] = ["img" => $row['url'], "des" => $row['description'], "id" => $this->hash->encode($row['id'])];
    }

    if (!is_dir($directory)) {
    //Create our fam_monitor_directory(fam, dirname).
    mkdir($directory, 755, true);
    move_uploaded_file($filepath, $directory . '/' . basename($filename));
    } else {
    move_uploaded_file($filepath, $directory . '/' . basename($filename));
    }

    echo json_encode(["img"=>$fakepath  , "userid"=>$this->hash->encode($id), "file"=>$data]);  
    }

    public function upload_ads()
    {
    $weburl = $_POST['weburl'];
    $sponsor = $_POST['sponsorname'];

    $filename = $_FILES['filepond']['name'];  
    $filepath = $_FILES['filepond']['tmp_name'];
    $filesize = $_FILES['filepond']['size'];

    $directory = "../dist/img";
    $fakedir = "./dist/img";
    $fakepath = $fakedir."/".$filename;
    $path = $directory."/".$filename;

    $this->db->insert('sponsor_ads', ['sponsor_link' => $weburl,
                                        'item_image' => $fakepath,
                                        'title' => $sponsor,
                                           ]);
        
    $id = $this->db->insertId();    

    if (!is_dir($directory)) {
    //Create our fam_monitor_directory(fam, dirname).
    mkdir($directory, 755, true);
    move_uploaded_file($filepath, $directory . '/' . basename($filename));
    } else {
    move_uploaded_file($filepath, $directory . '/' . basename($filename));
    }

    echo json_encode(["img"=>$fakepath, "link"=>$weburl, "sponsor"=>$sponsor, "id"=>$this->hash->encode($id)]); 

    }

    public function delete_image()
    {
    $imgid = $this->hash->decode($_POST['imgid']);
    $id = $this->user->get_user_id();

    $this->db->query("DELETE FROM accomplishments WHERE id=%i", $imgid[0]);

    $imgs = $this->db->query("SELECT * FROM accomplishments WHERE user_id='$id' ORDER BY id DESC");
    
    $path = [];

    foreach ($imgs as $row) {
    $path[] = ["img" => $row['url'], "des" => $row['description'], "id" => $this->hash->encode($row['id'])];
    }   

    echo json_encode(["file"=>$path]);

    }


}

?>