<?php

        $name = $_GET['name'];
        $phone = $_GET['phone'];
        $email = $_GET['email'];


         $to ='avinean@gmail.com';
	 $subject = 'Посещение Афона';
	 $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
         $headers .= "From: visit-afon.com <admin@visit-afon.com>\r\n";
         $message = "
             $name отправил Вам запрос на проведение для посещения Афона <br>
             tel: $phone
             email: $email
         ";

	 mail(
		 	$to,
		 	$subject,
		 	$message,
		 	$headers
		 );

header('Location: http://visit-afon.com');