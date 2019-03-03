<?php

if (isset ($_POST['n']) && isset ($_POST['e']) && isset($_POST['m']) ) {
	$n = $_POST['n']; // use preg_replace() to filter data and protect against sql injection!!!
	$e = $_POST['e'];

	// nl2br = new line 2 breaks, to preserve line breaks user might enter in message field
	$m = nl2br($_POST['m']);
	$to = "cmartin@otgsports.com";
	$from = $e;
	$subject = 'Message From otgsports.com';
	$message = '<b>Name:</b> '.$n.' <br><b>Email:</b> '.$e.' <p>'.$m.'</p>';
	$headers ="From: $from\n";
	$headers .= "MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";

	if ( mail ($to, $subject, $message, $headers) ) {
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
}

?>