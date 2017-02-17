<?php
/*
	API Demo

	This script provides a RESTful API interface for a web application

	Input:

		$_GET['format'] = [ json | html | xml ]
		$_GET['method'] = []

	Output: A formatted HTTP response

	Author: Mark Roland (http://markroland.com/portfolio/restful-php-api)

	History:
		11/13/2012 - Created

*/

include 'build_json.php';

ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);

$colors = array("#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#cb62ff",
          "#72ff62",
          "#ffa362");


// --- Step 1: Initialize variables and functions

/**
 * Deliver HTTP Response
 * @param string $format The desired HTTP response content type: [json, html, xml]
 * @param string $api_response The desired HTTP response data
 * @return void
 **/
function deliver_response($format, $api_response){

	// Define HTTP responses
	$http_response_code = array(
		200 => 'OK',
		400 => 'Bad Request',
		401 => 'Unauthorized',
		403 => 'Forbidden',
		404 => 'Not Found'
	);

	// Set HTTP Response
	header('HTTP/1.1 '.$api_response['status'].' '.$http_response_code[ $api_response['status'] ]);

	// Process different content types
	if( strcasecmp($format,'json') == 0 ){

		// Set HTTP Response Content Type
		header('Content-Type: application/json; charset=utf-8');

		// Format data into a JSON response
		$json_response = json_encode($api_response);

		// Deliver formatted data
		echo $json_response;

	}elseif( strcasecmp($format,'xml') == 0 ){

		// Set HTTP Response Content Type
		header('Content-Type: application/xml; charset=utf-8');

		// Format data into an XML response (This is only good at handling string data, not arrays)
		$xml_response = '<?xml version="1.0" encoding="UTF-8"?>'."\n".
			'<response>'."\n".
			"\t".'<code>'.$api_response['code'].'</code>'."\n".
			"\t".'<data>'.$api_response['data'].'</data>'."\n".
			'</response>';

		// Deliver formatted data
		echo $xml_response;

	}else{

		// Set HTTP Response Content Type (This is only good at handling string data, not arrays)
		header('Content-Type: text/html; charset=utf-8');

		// Deliver formatted data
		echo $api_response['data'];

	}

	// End script process
	exit;

}

// Define API response codes and their related HTTP response
$api_response_code = array(
	0 => array('HTTP Response' => 400, 'Message' => 'Unknown Error'),
	1 => array('HTTP Response' => 200, 'Message' => 'Success'),
	2 => array('HTTP Response' => 403, 'Message' => 'HTTPS Required'),
	3 => array('HTTP Response' => 401, 'Message' => 'Authentication Required'),
	4 => array('HTTP Response' => 401, 'Message' => 'Authentication Failed'),
	5 => array('HTTP Response' => 404, 'Message' => 'Invalid Request'),
	6 => array('HTTP Response' => 400, 'Message' => 'Invalid Response Format')
);

// Set default HTTP response of 'ok'
$response['code'] = 0;
$response['status'] = 404;
$response['data'] = NULL;

// Connect to MySQL
$servername = "webapps4-mysql.miserver.it.umich.edu";
$username = "censcope";
$password = "ChangeMeNow2017_censcope";;
$table = 'sample';
$database = "censcope";
$port = '3306';

try {
    $conn = new PDO("mysql:host=".$servername.";port=".$port.";dbname=".$database, $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    exit;    // TODO:
}


// Process Request

// API 
if(strcasecmp($_GET['method'],'hello') == 0){
	$topic = $_GET['topic'];
	$geo = $_GET['geo'];
	$year = $_GET['year'];

	$response['code'] = 1;
	$response['status'] = $api_response_code[$response['code'] ]['HTTP Response'];

	$data = array();
	// Pie

	// Trend
	$cols = get_cols($topic, 'trend', $conn);
	if (count($cols) > 0) {
		$data_labels = array("Year");
		$query = "SELECT Year";
		foreach ($cols as $col) {
			$query .=  "," . $col['col'];
			array_push($data_labels, $col['label']);
		}

		$query .= " FROM " . $table . " WHERE AreaName='" . $geo . "'";

		$labels = array();
	

		// Add headers to csv
		$csv = '';
		foreach ($data_labels as $label){
			$csv .= $label;
			if ($label != end($data_labels)) {$csv .= ",";}
		}

		$csv .= "\n";

		foreach ($conn->query($query) as $row) {
			array_push($labels, $row[0]);
			array_push($data, $row[1]);
			$csv .= $row[0] . "," . $row[1] . "\n";
		}
		
		$data['trend'] = array("csv" => $csv, "chart" => "chart");;
	 } 
	 else { 
	 	echo 'not cols';
	 	exit;
	 }

	// Stacked
	// $data['stacked'] = ["csv" =>,
	// 				    "chart" => ]

	// // Table
	// $data['trend'] = ["csv" =>]

	// // Pyramid
	// $data['pyramid'] = ["csv" =>,
	// 				    "chart" => ]

	
	$response['data'] = $data;
}

// --- Step 4: Deliver Response

// Return Response to browser
deliver_response($_GET['format'], $response);

?>