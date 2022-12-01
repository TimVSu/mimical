<?php
include('db.php');

$thisMoment = date("Y/m/d");
$UserEmail = $decodedData['Email'];
$UserStreak = $decodedData['Streak'];

$SQL = "SELECT * FROM newuser WHERE UserEmail = '$UserEmail'";
$exeSQL = mysqli_query($conn, $SQL);
$checkEmail =  mysqli_num_rows($exeSQL);

if ($checkEmail != 0) {
    $arrayz = mysqli_fetch_array($exeSQL);
    if ($arrayz['UserStreak'] != $UserStreak) {
        $Message = "Passwort is falsch";
    } else {
        $Message = "Erfolgreich";
    }
} else {
    $Message = "Sie haben noch kein Konto";
}

    $R = mysqli_query($conn, $InsertQuerry);

    if ($R) {
        $Message = "Fertig!";
    } else {
        $Message = "Fehler";
    }

$response[] = array("Message" => $Message);
echo json_encode($response);

// FROM (
//   SELECT UserID, UserStreak,
//          DATEDIFF(@thisMoment, D),
//          @streak := IF( DATEDIFF(@thisMoment, D) - @days_diff > 1, @streak, 
//                        IF(@days_diff := DATEDIFF(@thisMoment, D), @streak+1, @streak+1))  AS streak                                        
//   FROM (SELECT UserID, `UserStreak` AS D FROM newuser GROUP BY UserID, `UserStreak`) AS a
//   CROSS JOIN (SELECT @streak := 0, @days_diff := -1) AS vars
//   WHERE UserID = @userId AND D <= @thisMoment
//   ORDER BY D DESC) AS t";

// $query = $this->db->query($qry);
// $result = $query->result_array();