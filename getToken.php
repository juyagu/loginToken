<?php
header("Access-Control-Allow-Origin: *");

require __DIR__ . '/vendor/autoload.php';
use \Firebase\JWT\JWT;

$key = 'ejemplo_llave';
$username = $_POST['user'];
$password = $_POST['pass'];

if($username == 'pepe' && $password = 'hola1234'){
	
$token = array(
	"iss" => "http://javascript",
	"aud" => "http://javascript",
	"iat" => 1356999524,
	"nbf" => time(),
	"exp" => time() + 60
);

$jwt = JWT::encode($token,$key);
//JWT::$leeway = 60; // $leeway in seconds
//$decoded = JWT::decode($jwt, $key, array('HS256'));
$user = array('user'=>$username,'token'=> $jwt);
echo json_encode($user);
}