<?php
// Error show (testing ke liye)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$conn = mysqli_connect("localhost", "root", "", "school_admission");

if (!$conn) {
    die("Database connection failed");
}

// File upload function
function uploadFile($file_name) {
    if (!empty($_FILES[$file_name]['name'])) {
        $target_dir = "../uploads/"; // Scl_Website/uploads/
        if (!is_dir($target_dir)) {
            mkdir($target_dir, 0777, true);
        }
        $file = time() . "_" . basename($_FILES[$file_name]["name"]);
        move_uploaded_file($_FILES[$file_name]["tmp_name"], $target_dir . $file);
        return $file;
    }
    return NULL;
}

// Form data
$student_name = $_POST['student_name'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];

$father_name = $_POST['father_name'];
$mother_name = $_POST['mother_name'];
$phone = $_POST['phone'];
$parent_email = $_POST['parent_email'];
$address = $_POST['address'];

$apply_class = $_POST['apply_class'];
$previous_school = $_POST['previous_school'];
$last_class = $_POST['last_class'];

$tc_photo = uploadFile('tc_photo');
$student_photo = uploadFile('student_photo');
$birth_certificate = uploadFile('birth_certificate');
$see_certificate = uploadFile('see_certificate');

$transport = $_POST['transport'];
$submission_date = date("Y-m-d H:i:s");

// Insert query
$sql = "INSERT INTO admissions 
(student_name, dob, gender, father_name, mother_name, phone, parent_email, address,
 apply_class, previous_school, last_class, tc_photo, student_photo, birth_certificate,
 see_certificate, transport, submission_date)

VALUES
('$student_name', '$dob', '$gender', '$father_name', '$mother_name', '$phone',
 '$parent_email', '$address', '$apply_class', '$previous_school', '$last_class',
 '$tc_photo', '$student_photo', '$birth_certificate', '$see_certificate',
 '$transport', '$submission_date')";

if (mysqli_query($conn, $sql)) {
    echo "<h2>Admission Form Successfully Submitted</h2>";
    echo "<a href='index.html'>Go Back</a>";
} else {
    echo " Error: " . mysqli_error($conn);
}
?>
