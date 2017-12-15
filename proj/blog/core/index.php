<?php

    define("SERVERNAME", 'localhost');
    define("NAME", 'posts');
    define("USERNAME", 'root');    
    
    $conn = mysqli_connect(SERVERNAME, USERNAME, null,  NAME);
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }



    
    $sql = "SELECT * FROM ".NAME;
    $result = mysqli_query($conn, $sql);
    $mas = mysqli_fetch_assoc($result);
    var_dump($mas);

    // if (mysqli_num_rows($result) > 0) {
    //     while($row = mysqli_fetch_assoc($result)) {
    //         echo "<br>".$row;
    //     }
    // } else {
    //     echo "0 results";
    // }

    mysqli_close($conn);


?>