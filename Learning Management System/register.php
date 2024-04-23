<?php
// Connect to MySQL
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "lms";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$userType = $_POST['userType'];

// Insert user into database
$sql = "INSERT INTO users (username, password, user_type) VALUES ('$username', '$password', '$userType')";
if ($conn->query($sql) === TRUE) {
    header("Location: index.html?register=true");
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
