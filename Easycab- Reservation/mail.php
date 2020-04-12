<?php 
    require 'mailer/PHPMailerAutoload.php';

    /* ------------- mail handler -------------*/
    $mail = new PHPMailer;

	//$mail->SMTPDebug = 3; //enable debug output
	
	$mail->isSMTP(); //set mailer to use SMTP 
	$mail->Host = 'smtp.gmail.com'; //specify smtp server
	$mail->SMTPAuth = true; //Enable SMTP Authentication
	$mail->Username = 'smartcablx@gmail.com'; //SMTP username
	$mail->Password = 'smartcab76'; //SMTP Password
	$mail->SMTPSecure = 'tls'; //Enable TLS encryption, SSL is also possible
	$mail->Port = 587; //TCP Port to connect(TLS) 465 for SSL
	
	$mail->setFrom('smartcablx@gmail.com','EasyCab'); //sender address & name

	$mail->addAddress('easycablx@gmail.com','Reservation Data'); //recipient address & name
	$mail->addReplyTo('noreply@none.com', 'Info'); //reply address

	$mail->isHTML(true);
	

    /*------------- form data collection -------------------*/
	if(isset($_POST['submission'])){
		
		/*------------------------------ FIRST STEP --------------------------------------*/
		$start = $_POST['start'];
		$destination = $_POST['destination'];
		$adults = $_POST['adults'];
		$children = $_POST['children'];
		$baibes = $_POST['baibes'];
		$date = $_POST['date'];

		/*-------------------------- SECOND STEP -----------------------------------------*/
		$name = $_POST['name'];
		$country = $_POST['country'];
        $email = $_POST['email'];
        $phoneIndicator = ['phone-indicator'];
        $phone = $_POST['phone'];
        $pickHour = $_POST['pickhour'];
        $address = $_POST['address'];
        $zipCode = $_POST['zip'];
		$city = $_POST['city'];
		
        $dfaddress = $_POST['dfaddress'];
        $dfzipCode = $_POST['dfzip'];
		$dfcity = $_POST['dfcity'];
		
		$returnDate = $_POST['returndate'];
		$observations = $_POST['observations'];

		/*------------------------------ mail message ---------------------------------*/
        $mail->Subject = 'Reservation lead';

		$mail->Body = 'From: <strong>'.$start.'</strong><br> To: <strong>'.$destination.'</strong><br>Number of Adult Passengers: <strong>'.$adults.'</strong><br> Number of Children: <strong>'.$children.'</strong><br> Number of Babies: <strong>'.$baibes.'</strong><br> Trip Date: <strong>'.$date.'</strong><br><hr>Contact Name: <strong>'.$name.'</strong><br> Country: <strong>'.$country.'</strong><br> Contact Email: <strong>'.$email.'</strong><br>Phone Number: <strong>'.$phoneIndicator.' - '.$phone.'</strong><br> Pick Hour: <strong>'.$pickHour.'</strong><br> Address: <strong>'.$address.'</strong><br> City: <strong>'.$city.'</strong><br> Zip Code: <strong>'.$zipCode.'</strong><br><hr> Dropoff Address: <strong>'.$dfaddress.'</strong><br> City (Dropoff): <strong>'.$dfcity.'</strong><br> Zip Code (Dropoff): <strong>'.$dfzipCode.'</strong><br><hr> Return Trip Date: <strong>'.$returnDate.'</strong><br><hr> Observations: <strong>'.$observations.'</strong><br>';

		if($mail->send()) {
			header("Location: index.html");
		}
		
		/*		

		if(mail($to, $subject, $message, $headers)){
            header("Location: index.html");
        }
		*/
	}
?>
