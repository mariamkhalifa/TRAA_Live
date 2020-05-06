<?php
    
    $name = '';
	$email = '';
	$subject = '';
	$message = '';
	$recipient = 'traa@anglers.org';

	if (isset($_POST['nameContact'])) {
		$name = filter_var($_POST['nameContact'], FILTER_SANITIZE_STRING);
	}
	
	if (isset($_POST['email'])) {
	   $email = str_replace(array("\r", "\n", "%0a", "%0d"),'',$_POST['email']);
	   $email = filter_var($email,FILTER_VALIDATE_EMAIL);
	}

	if (isset($_POST['subject'])) {
		$subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
	}
	
	if (isset($_POST['message'])) {
		$message = $_POST['message']; 
	}

	$headers = array(
		'From'=>'no-reply@anglers.org',
		'Reply-To'=>$name.'<'.$email.'>'
	);
	
	if(mail($recipient, $subject, $message, $headers)){
	//if (mail($recipient, $subject, $message)) {
		$msg = 'Thank you for getting in touch! We will get back to you soon.';
	}
	else {
		$msg = 'Sorry, the email did not go through!';
    }
    
echo json_encode($msg);