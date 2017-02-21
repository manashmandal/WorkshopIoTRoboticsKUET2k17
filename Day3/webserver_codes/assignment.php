<?php

$roll = $_GET['roll'];
$batch = $_GET['batch'];

$filename = 'assignment.txt';

$file_data = file_get_contents('./' . $filename);


if (strpos($file_data, $roll) !== false){
	echo "Assignment has already been submitted by " . $roll;
} else {
	$fileContent = "Roll " . $roll . " from batch " .  $batch . " has submitted assignment successfully\n";

	$fileStatus = file_put_contents("assignment.txt", $fileContent, FILE_APPEND);

	if ($fileStatus != false){
		echo "Assignment submission recorded successfully! Thanks roll " . $roll;
	} else {
		echo "Sorry, try again.";
	}
}


?>