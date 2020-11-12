
  <?php
error_reporting(0);
     
      
     
$servername = "localhost";
$database = "175a071440";
$username = "root";
$password = "";
$id = $_POST['id'];

// Create connections
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM `data` WHERE `subcategory`='$id'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    
    
    echo "<p>".$row['category']."</p>";
  }
}
