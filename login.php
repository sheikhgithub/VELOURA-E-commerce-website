<?php
    $firstName= $_POST['firstName'];
    $Email= $_POST['email'];
    $password= $_POST['password'];
    // databse connection
    $conn= new mysqli('localhost','root','','karma');
    if($conn->connect_error){
        die('connection failed': .$conn->connect_error);
    }else{
        $stmt=$conn->prepare("insert into registration(firstname,email,password) 
        values(?,?,?)");
        $stmt->bind_param("ssi",$firstname,$email,$password);
        $stmt->execute();
        echo"registration successfully...";
        $stmt->close();
        $conn->close();
    }
?>
