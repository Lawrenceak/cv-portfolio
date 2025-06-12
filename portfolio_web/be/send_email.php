<?php
// Allow CORS (optional, if needed)
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Headers: Content-Type");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

if (!$data || !isset($data['email']) || !isset($data['message'])) {
    http_response_code(400);
    echo "Invalid input";
    exit;
}

$email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
$message = trim($data['message']);

if (!$email) {
    http_response_code(400);
    echo "Invalid email format";
    exit;
}

if (empty($message)) {
    http_response_code(400);
    echo "Message cannot be empty";
    exit;
}

$to = "lawrenceaboukarroum1@gmail.com";
$subject = "New message from portfolio contact form";
$headers = "From: " . $email . "\r\n" .
           "Reply-To: " . $email . "\r\n" .
           "Content-Type: text/plain; charset=UTF-8\r\n";

$body = "You received a new message from $email:\n\n$message";

if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Email sent successfully";
} else {
    http_response_code(500);
    echo "Failed to send email";
}
?>
