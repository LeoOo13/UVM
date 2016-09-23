<?php
header('Access-Control-Allow-Origin: *');  

if (isset($_POST['nameContact']))
{

	$admin_email = "comunidad.uvm@uvmnet.edu";
	$name		 = isset($_POST['nameContact']) ? $_POST['nameContact'] : 'N/A';
	$telephone   = isset($_POST['phoneContact']) ? $_POST['phoneContact'] : 'N/A';
	$grade       = isset($_POST['nivelContact']) ? $_POST['nivelContact'] : 'N/A';
	$email 		 = isset($_POST['emailContact']) ? $_POST['emailContact'] : 'N/A';
	$subject	 = isset($_POST['subjectContact']) ? $_POST['subjectContact'] : 'N/A';
	$message 	 = isset($_POST['messageContent']) ? $_POST['messageContent'] : 'N/A';
	//$headers = "From: " . strip_tags($email) . "\r\n";
	$headers = "Reply-To: ". strip_tags($email) . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

	$content = "
		<strong>Nombre:</strong> $name<br />
		<strong>Teléfono:</strong> $telephone<br />
		<strong>E-mail:</strong> $email<br />
		<strong>Nivel:</strong> $grade<br />
		<strong>Asunto:</strong> $subject<br />
		<strong>Mensaje:</strong> $message
	";

	if (mail($admin_email, "Contacto UVM", $content, $headers, '-fnoresponder@multiplicamx.com'))
	{
		echo "SENT";
	}
	else
	{
		echo "ERROR";
	}


}