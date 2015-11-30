<?php
function getMillisecond() {
	list($s1, $s2) = explode(' ', microtime());		
	return (float)sprintf('%.0f', (floatval($s1) + floatval($s2)) * 1000);	
}

$data = array(
	array(
		'id' => 1,
		'author' => 'Pete Hunt',
		'text' => 'This is one comment' . getMillisecond()
	),
	array(
		'id' => 2,
		'author' => 'Jordan Walke',
		'text' => 'This is anothor comment' . getMillisecond()
	)
);

echo json_encode($data);
exit();