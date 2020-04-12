<? php 
	if($_POST["submission"]){
		$mm = $_POST['month'];
		$dd = $_POST['date'];
		$yyyy = $_POST['year'];
		
		$dateOfBirth = $mm . " - " . $dd . " - " . $yyyy ;
		
		echo($dateOfBirth);
	}
?>