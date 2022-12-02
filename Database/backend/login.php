<!-- @Author Stoil Iliev -->
<?php
include('db.php');

$UserEmail = $decodedData['Email'];
$UserPW = ($decodedData['Password']); //password is hashed
$thisMoment = date("Y-m-d");

$SQL = "SELECT * FROM newuser WHERE UserEmail = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayu = mysqli_fetch_array($exeSQL);
    if ($arrayu['UserPw'] != $UserPW) {
        $Message = "Passwort is falsch";
    } else {

        if ($arrayu['UserStreak'] !== 0) {

            if ($arrayu['UserStreak'] == $thisMoment) {
        
                $Message = "Serie schon fortgesetzt";
                
            } else {

                $InsertQry = "UPDATE newuser SET UserStreak = CURRENT_DATE() WHERE UserPw = '$UserPW' ";

                $Re = mysqli_query($conn, $InsertQry);
        
                if ($Re) {
                    $Message = "Neue Serie ab heute!";
                } else {
                    $Message = "Fehler ist eingetreten";
                }
            }

        }
        
    }    
} else {
    $Message = "Sie haben noch kein Konto";
}

$response[] = array("Message" => $Message);
echo json_encode($response);
