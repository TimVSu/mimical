<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$UserPW = ($decodedData['Password']); //password is hashed

$SQL = "SELECT * FROM newuser WHERE UserEmail = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['UserPw'] != $UserPW) {
        $Message = "Passwort is falsch";
    } else {
        $Message = "Erfolgreich";
    }
} else {
    $Message = "Sie haben noch kein Konto";
}

$response[] = array("Message" => $Message);
echo json_encode($response);
