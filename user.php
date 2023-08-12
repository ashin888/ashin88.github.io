<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $user_email = $_POST["user_email"];

    // User Email
    $to_user = $user_email;
    $subject_user = "Thanks for subscribing!";
    $message_user = "Thank you for subscribing to our updates ❤️!";
    $headers_user = "From: afefx@outlook.in";

    // Admin Email
    $to_admin = "admin_email@example.com";
    $subject_admin = "New Subscription!";
    $message_admin = "A new user subscribed: $user_email";
    $headers_admin = "From: $user_email";

    // Send emails
    mail($to_user, $subject_user, $message_user, $headers_user);
    mail($to_admin, $subject_admin, $message_admin, $headers_admin);
}
?>
