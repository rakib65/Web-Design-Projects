<?php 
    require 'mailer/PHPMailerAutoload.php';

    $mail = new PHPMailer;

	//$mail->SMTPDebug = 3; //enable debug output
	
	$mail->isSMTP(); //set mailer to use SMTP 
	$mail->Host = 'smtp.gmail.com'; //specify smtp server
	$mail->SMTPAuth = true; //Enable SMTP Authentication
	$mail->Username = 'oncoreleads@gmail.com'; //SMTP username
	$mail->Password = 'Pugsley7772!'; //SMTP Password
	$mail->SMTPSecure = 'tls'; //Enable TLS encryption, SSL is also possible
	$mail->POrt = 587; //TCP Port to connect(TLS) 465 for SSL
	
	$mail->setFrom('oncoreleads@gmail.com','MotorVehicleAccidentHelp.org'); //sender address & name

	$mail->addAddress('leads@oncoreleads.com','Lead Collector'); //recipient address & name
	$mail->addReplyTo('noreply@none.com', 'Info'); //reply address

	$mail->isHTML(true);
	

    
	if(isset($_POST['submission'])){
		/*------------------------------ FIRST STEP --------------------------------------*/
		$cause = $_POST['cause'];
		$otherCause = $_POST['otherCause'];
        $nameInjured = $_POST['nameInjured'];
		$year = $_POST['year'];
		$missWork = $_POST['missWork'];
		$lawyer = $_POST['lawyer'];
		$attorny = $_POST['attorny'];

		
		$causeOfAcc = "What caused your injury?  <strong>" .$cause.'</strong>';
        $otherCauseValue = "";
        if($otherCause != null){
            $otherCauseValue = "Other Cause: <strong>".$otherCause.'</strong>';
        }
    
		$nameOfInjuredPerson = "Name of Injured Person: <strong>" . $nameInjured . '</strong>';
		$injuryYear = "Year of Injury:  <strong>" . $year .'</strong>';
        $missWorkStatus = "Did the injury require hospitalization, medical treatment, surgery or cause you to miss work? <strong>" . $missWork.'</strong>';
		$lawyerStatus = "Do you currently have a lawyer representing your claim? <strong>" . $lawyer.'</strong>';
        $attornyName = "";
        if($otherCause != null){
            $attornyName = "Who is the attorney helping you with your case? <strong>".$attorny.'</strong>';
        }
		
		
		/*-------------------------- SECOND STEP -----------------------------------------*/
		$fname = $_POST['fname'];
		$lname = $_POST['lname'];
		$address = $_POST['address'];
		$city = $_POST['city'];
		$zipCode = $_POST['zip'];
		$state = $_POST['state'];
		$phone = $_POST['phone'];
		$email = $_POST['email'];
		$description = $_POST['description'];
		
		$fullName = "Full Name: <strong>" . $fname . " " . $lname.'</strong>';
		$addressInfo = "Address: <strong>" . $address.'</strong>';
		$cityInfo = "City: <strong>" . $city.'</strong>';
		$zipInfo = "Zip Code: <strong>" . $zipCode.'</strong>';
        
		$stateDescription = array( "AL" => "Alabama",
									"AK" => "Alaska",
									"AZ" => "Arizona",
									"AR" => "Arkansas",
									"CA" =>"California",
									"CO" =>"Colorado",
									"CT" =>"Connecticut",
									"DE" =>"Delaware",
									"DC" =>"District Of Columbia",
									"FL" =>"Florida",
									"GA" =>"Georgia",
									"HI" =>"Hawaii",
									"ID" =>"Idaho",
									"IL" =>"Illinois",
									"IN" =>"Indiana",
									"IA" =>"Iowa",
									"KS" =>"Kansas",
									"KY" =>"Kentucky",
									"LA" =>"Louisiana",
									"ME" =>"Maine",
									"MD" =>"Maryland",
									"MA" =>"Massachusetts",
									"MI" =>"Michigan",
									"MN" =>"Minnesota",
									"MS" =>"Mississippi",
									"MO" =>"Missouri",
									"MT" =>"Montana",
									"NE" =>"Nebraska",
									"NV" =>"Nevada",
									"NH" =>"New Hampshire",
									"NJ" =>"New Jersey",
									"NM" =>"New Mexico",
									"NY" =>"New York",
									"NC" =>"North Carolina",
									"ND" =>"North Dakota",
									"OH" =>"Ohio",
									"OK" =>"Oklahoma",
									"OR" =>"Oregon",
									"PA" =>"Pennsylvania",
									"RI" =>"Rhode Island",
									"SC" =>"South Carolina",
									"SD" =>"South Dakota",
									"TN" =>"Tennessee",
									"TX" =>"Texas",
									"UT" =>"Utah",
									"VT" =>"Vermont",
									"VA" =>"Virginia",
									"WA" =>"Washington",
									"WV" =>"West Virginia",
									"WI" =>"Wisconsin",
									"WY" =>"Wyoming");
        
		$stateInfo = "Satate: <strong>" . $stateDescription[$state].'</strong>';
		$phoneInfo = "Phone Number: <strong>" . $phone.'</strong>';
		$emailInfo = "Email Address: <strong>" . $email.'</strong>';
		$descriptionInfo = "Disability Description: <strong>" . $description.'</strong>';
		
    
        // mail body
		$mail->Body = $causeOfAcc . "<br> " . $otherCauseValue . "<br>" . $nameOfInjuredPerson . "<br>" . $injuryYear . "<br>" . $missWorkStatus . "<br>" . $lawyerStatus."<br>".$attornyName ."<br><hr><br>" . $fullName . "<br>" . $addressInfo ."<br>" . $cityInfo ."<br>" . $zipInfo ."<br>" . $stateInfo . "<br>" . $phoneInfo . "<br>" . $emailInfo ."<br>" . $descriptionInfo  ;
        
        $mail->Subject = 'Lead form data';
       

		if($mail->send()) {
			header("Location: index.html");
		}
        
		
	}
?>
