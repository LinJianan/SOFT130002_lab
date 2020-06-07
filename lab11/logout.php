<?php  
session_start();
unset($_SESSION['Username']);
setcookie("Username", "", -1);
unset($_SESSION['UserName']);
setcookie("UserName", "", -1);
header("Location: ".$_SERVER['HTTP_REFERER']);  
?>