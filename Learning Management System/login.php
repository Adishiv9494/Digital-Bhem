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
$username = $_POST['loginUsername'];
$password = $_POST['loginPassword'];

// Check username and password
$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        // Password is correct, redirect to dashboard or home page
        header("Location: dashboard.php");
    } else {
        // Password is incorrect
        header("Location: index.html?error=true");
    }
} else {
    // User not found
    header("Location: index.html?error=true");
}

$conn->close();
?>
