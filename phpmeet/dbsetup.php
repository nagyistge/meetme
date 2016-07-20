<?php 
	$ROOT_PW = "jo20el07";
	$MYSQL_SERVER 	= 'localhost'; 
	$MYSQL_USR 		= 'meetme'; 
	$MYSQL_PASS 	= 'test'; 
	$MYSQL_DBNAME 	= 'meetme'; 
  $success = TRUE;
	$conn = new mysqli($MYSQL_SERVER, "root", $ROOT_PW);
	if ($conn->connect_error) {
	    error_log("Connection failed: " . $conn->connect_error);
	} else {
		$sql = array(
						0 => "CREATE DATABASE ".$MYSQL_DBNAME, 
						1 => "grant usage on *.* to ".$MYSQL_USR."@".$MYSQL_SERVER." identified by '".$MYSQL_PASS."'",
						2 => "grant all privileges on ".$MYSQL_DBNAME.".* to ".$MYSQL_USR."@".$MYSQL_SERVER,
						3 => "CREATE TABLE `".$MYSQL_DBNAME."`.`meeting` (`id` INT NOT NULL AUTO_INCREMENT, `hash` VARCHAR(32) NULL, `data` VARCHAR(32200) NULL, PRIMARY KEY (`id`))",
						4 => "CREATE TABLE `".$MYSQL_DBNAME."`.`person` (`id` INT NOT NULL AUTO_INCREMENT, `hash` VARCHAR(32) NULL, `data` VARCHAR(32200) NULL, PRIMARY KEY (`id`))",
						5 => "CREATE TABLE `".$MYSQL_DBNAME."`.`participation` (`participantId` INT NOT NULL, `meetingId` INT NOT NULL, `data` VARCHAR(32200) NULL)"
						);

    for ($i = 0; $i < count($sql); ++$i) {
	    if ($conn->query($sql[$i]) !== TRUE) {
	      $message = "Error: " . $sql[$i] . "<br>" . $conn->error;
	      error_log($message);
	 	  	echo($message);

	      $success = FALSE;
	      break;
	    }
	  }
	  $conn->close();
	  if ($success === TRUE)
	  	echo("Done!");
	}
?>