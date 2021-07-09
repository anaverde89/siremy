<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('content-type: application/json; charset=utf-8');

//$_POST['data']='algo';
    $arr = array();	
    $data = json_decode(file_get_contents("php://input"), true);
if(!empty($data)){
    // $arr['response'] = array_key_exists('email',$data);
    // echo json_encode($arr);
    if(array_key_exists('email',$data)){
        $arr['response'] = true;
        echo json_encode($arr);
    } else{
        //$arr['data'] = array('response'=>false);
        
        $arr['response'] = false;
        echo json_encode($arr);
    }
}