<?php
   $name    = $_POST['name'];
   $surname = $_POST['surname']
   $email   = $_POST['email'];
   $message = $_POST['message'];

if(empty($_POST['name'])  ||
   empty($_POST['surname']) ||
   empty($_POST['email']) ||
   empty($_POST['message']))

 {
       echo "
       <div class="container">
         <div class="box">
           <h1>404</h1>
           <h2>The page could not be found</h2>
           <hr />
           <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable</p>
           <p>Please try the following:</p>
           <ul>
             <li>If you type the page address in the <strong>Address bar</strong>, make sure that it is spelled correctly.</li>
             <li>Click the <strong>Back button</strong> to return to your previously visited page</li>
             <li>If you were linked to this page, contact the administrator and make them aware of this issue.</li>
           </ul>
         </div>
       </div>
    ";
       exit;
   }

else {
$send_to = 'mari.vlz13@gmail.com'; // change to your email
mail($send_to, "Name: $name" , $message, "From: $email");

echo "Thank you for your feedback";
}

?>
