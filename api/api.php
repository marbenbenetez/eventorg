<?php 
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");


require_once('controller/Organizer.php');
require_once('controller/User.php');
require_once('controller/Client.php');
require_once('controller/Upload.php');
require_once('controller/Email.php');

include __DIR__ . '/../vendor/autoload.php';

use Controller\Organizer\Organizer;
use Controller\Client\Client;
use Controller\User\User;
use Controller\Uploader\Upload;
use Phroute\Phroute\Dispatcher;
use Phroute\Phroute\RouteCollector;
use Controller\Email\Email;

$router = new RouteCollector();

date_default_timezone_set('Asia/Manila');


// $router->post('eventorg/api/login-user', function () {
// echo "shit";
// });

$router->post('eventorg/api/load-organizer-data', function () {
    $org = new Organizer();
    $org->load_organizer_data();
});
$router->post('eventorg/api/get-search-category', function () {
    $org = new Organizer();
    $org->get_search_category();
});
$router->post('eventorg/api/load-organizer-selected-data', function () {
    $org = new Organizer();
    $org->load_organizer_selected_data();
});
$router->post('eventorg/api/load-post-data', function () {
    $org = new Organizer();
    $org->load_post_data();
});
$router->post('eventorg/api/get-categories', function () {
    $org = new Organizer();
    $org->get_category();
});
$router->post('eventorg/api/check-notification', function () {
    $org = new Organizer();
    $org->check_notification();
});
$router->post('eventorg/api/view-notification', function () {
    $org = new Organizer();
    $org->view_notification();
});
$router->post('eventorg/api/report-event', function () {
    $org = new Organizer();
    $org->report_event();
});
$router->post('eventorg/api/get-selected-category', function () {
    $org = new Organizer();
    $org->get_selected_category();
});
$router->post('eventorg/api/get-organizer-account', function () {
    $org = new Organizer();
    $org->get_organizer_account();
});
$router->post('eventorg/api/rate-organizer', function () {
    $org = new Organizer();
    $org->rate_organizer();
});
$router->post('eventorg/api/send-event-application', function () {
    $org = new Organizer();
    $org->send_event_application();
});
$router->post('eventorg/api/check-messages', function () {
    $org = new Organizer();
    $org->check_messages();
});
$router->post('eventorg/api/check-messages-org', function () {
    $org = new Organizer();
    $org->check_messages_org();
});
$router->post('eventorg/api/view-messages', function () {
    $org = new Organizer();
    $org->view_messages();
});
$router->post('eventorg/api/send-messages', function () {
    $org = new Organizer();
    $org->send_messages();
});
$router->post('eventorg/api/get-accomplishments', function () {
    $org = new Organizer();
    $org->get_accomplishments();
});


$router->post('eventorg/api/login-admin', function () {
    $user = new User();
    $user->login_admin();
});
$router->post('eventorg/api/register-user', function () {
    $user = new User();
    $user->register_user();
});
$router->post('eventorg/api/check-auth', function () {
    $user = new User();
    $user->check_user_auth();
});
$router->post('eventorg/api/login-user', function () {
    $user = new User();
    $user->login_user();
});
$router->post('eventorg/api/logout-user', function () {
    $user = new User();
    $user->logout_user();
});
$router->post('eventorg/api/logout-admin', function () {
    $user = new User();
    $user->logout_admin();
});
$router->post('eventorg/api/all-registered-user', function () {
    $user = new User();
    $user->all_registered_user();
});
$router->post('eventorg/api/all-registered-client', function () {
    $user = new User();
    $user->all_registered_client();
});
$router->post('eventorg/api/load-reported-post', function () {
    $user = new User();
    $user->load_reported_post();
});
$router->post('eventorg/api/search-user', function () {
    $user = new User();
    $user->search_user();
});
$router->post('eventorg/api/search-user-empty', function () {
    $user = new User();
    $user->search_user_empty();
});
$router->post('eventorg/api/search-user-client', function () {
    $user = new User();
    $user->search_user_client();
});
$router->post('eventorg/api/search-user-empty-client', function () {
    $user = new User();
    $user->search_user_empty_client();
});
$router->post('eventorg/api/ban-user', function () {
    $user = new User();
    $user->ban_user();
});
$router->post('eventorg/api/unban-user', function () {
    $user = new User();
    $user->unban_user();
});
$router->post('eventorg/api/verified-user', function () {
    $user = new User();
    $user->verified_user();
});
$router->post('eventorg/api/view-banned-users', function () {
    $user = new User();
    $user->view_banned_users();
});
$router->post('eventorg/api/search-banned-user-empty', function () {
    $user = new User();
    $user->search_banned_user_empty();
});
$router->post('eventorg/api/search-banned-user', function () {
    $user = new User();
    $user->search_banned_user();
});
$router->post('eventorg/api/view-pending-users', function () {
    $user = new User();
    $user->view_pending_users();
});
$router->post('eventorg/api/search-pending-user-empty', function () {
    $user = new User();
    $user->search_pending_user_empty();
});
$router->post('eventorg/api/search-pending-user', function () {
    $user = new User();
    $user->search_pending_user();
});
$router->post('eventorg/api/view-services', function () {
    $user = new User();
    $user->view_services();
});
$router->post('eventorg/api/edit-service', function () {
    $user = new User();
    $user->edit_service();
});
$router->post('eventorg/api/delete-service', function () {
    $user = new User();
    $user->delete_service();
});
$router->post('eventorg/api/add-service', function () {
    $user = new User();
    $user->add_service();
});
$router->post('eventorg/api/user-reset-pass', function () {
    $user = new User();
    $user->user_reset_pass();
});
$router->post('eventorg/api/sponsor-data', function () {
    $user = new User();
    $user->sponsor_data();
});
$router->post('eventorg/api/load-events', function () {
    $user = new User();
    $user->load_events();
});
$router->post('eventorg/api/load-client-data', function () {
    $user = new User();
    $user->load_client_data();
});
$router->post('eventorg/api/load-user-activity', function () {
    $user = new User();
    $user->load_user_activity();
});
$router->post('eventorg/api/insert-user-activity', function () {
    $user = new User();
    $user->inert_user_activity();
});
$router->post('eventorg/api/reset-password', function () {
    $user = new User();
    $user->reset_password();
});
$router->get('eventorg/api/confirm-password', function () {
    $user = new User();
    $user->confirm_password();
});
$router->post('eventorg/api/save-new-email', function () {
    $user = new User();
    $user->save_new_email();
});
//new
$router->post('eventorg/api/remove-user-post', function () {
    $user = new User();
    $user->remove_user_post();
});



$router->post('eventorg/api/get-search-service', function () {
    $org = new Client();
    $org->get_search_service();
});
$router->post('eventorg/api/load-user-notification', function () {
    $org = new Client();
    $org->load_user_notification();
});
$router->post('eventorg/api/search-category', function () {
    $org = new Client();
    $org->search_category();
});
$router->post('eventorg/api/view-messages-client', function () {
    $org = new Client();
    $org->view_messages_client();
});
$router->post('eventorg/api/send-messages-client', function () {
    $client = new Client();
    $client->send_messages_client();
});
$router->post('eventorg/api/load-user-data', function () {
    $client = new Client();
    $client->client_data();
});
$router->post('eventorg/api/get-filtered-category', function () {
    $client = new Client();
    $client->get_filtered_category();
});

$router->post('eventorg/api/get-services-data', function () {
    $client = new Client();
    $client->get_services_data();
});
$router->post('eventorg/api/insert-event-data', function () {
    $client = new Client();
    $client->insert_event_data();
});
$router->post('eventorg/api/insert-event-data-others', function () {
    $client = new Client();
    $client->insert_event_data_others();
});
$router->post('eventorg/api/edit-event-data', function () {
    $client = new Client();
    $client->edit_event_data();
});
$router->post('eventorg/api/update-event-data', function () {
    $client = new Client();
    $client->update_event_data();
});
$router->post('eventorg/api/delete-event-data', function () {
    $client = new Client();
    $client->delete_event_data();
});
$router->post('eventorg/api/get-userinfo-data', function () {
    $client = new Client();
    $client->get_userinfo_data();
});
$router->post('eventorg/api/save-new-profile', function () {
    $client = new Client();
    $client->save_new_profile();
});
$router->post('eventorg/api/view-applicants', function () {
    $client = new Client();
    $client->view_applicants();
});
$router->post('eventorg/api/accept-applicants', function () {
    $client = new Client();
    $client->accept_applicants();
});
$router->post('eventorg/api/view-accepted-applicants', function () {
    $client = new Client();
    $client->view_accepted_applicants();
});
$router->post('eventorg/api/view-organizer', function () {
    $client = new Client();
    $client->view_organizer();
});



$router->post('eventorg/api/change-profile-picture', function () {
    $up = new Upload();
    $up->change_profile_picture();
});
$router->post('eventorg/api/change-cover-photo', function () {
    $up = new Upload();
    $up->change_cover_photo();
});
$router->post('eventorg/api/add-accomplishments', function () {
    $up = new Upload();
    $up->add_accomplishments();
});
$router->post('eventorg/api/upload-accomplishment', function () {
    $up = new Upload();
    $up->upload_accomplishment();
});
$router->post('eventorg/api/upload-ads', function () {
    $up = new Upload();
    $up->upload_ads();
});
$router->post('eventorg/api/delete-image', function () {
    $up = new Upload();
    $up->delete_image();
});


$dispatcher = new Dispatcher($router->getData());
$httpMethod = $_SERVER['REQUEST_METHOD'];
$uri = rawurldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
echo $dispatcher->dispatch($httpMethod, $uri), "\n";

    

?>