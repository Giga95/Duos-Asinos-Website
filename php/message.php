<?php
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $companyName = $_POST['companyName'];
    $countryRegion = $_POST['countryRegion'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){
          $receiver = "djurasinovicdragisa@gmail.com"; //enter email address where you want to receive all messages
          $subject = "From: $firstName  $lastName <$email>";
          $body = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\nPhone: $phoneNumber\nCompany Name: $companyName\nCountry/Region: $countryRegion\n\nMessage:\n$message\n\nRegards,\n$name";
          $sender = "From: $email";
          if(mail($receiver, $subject, $body, $sender)){
             echo "Your message has been sent";
          }else{
             echo "Sorry, failed to send your message!";
          }
        }else{
          echo "Enter a valid email address!";
        }
      }else{
        echo "Email and message field is required!";
      }
?>