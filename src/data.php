<?php
header('HTTP/1.1 200 OK');
echo $_POST["name"];
mail('priya.c@instamojo.com','hellloo');
// echo 'this is index.php';
//   if (isset($_POST['submi'])) {
//     $email = $_POST['email'];
//     $body = "E-Mail: $email\n";
//     $to = 'priya.c@instamojo.com'; 
//     mail($to,$body);
//   }
?>
