<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Путь к файлу autoload.php библиотеки PHPMailer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Инициализация объекта PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Настройка параметров для отправки через SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'daniilgorgun38@gmail.com'; // Замените на ваше имя пользователя Gmail
        $mail->Password = '1235674Dan'; // Замените на ваш пароль Gmail
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Установка параметров письма
        $mail->setFrom($email, $name);
        $mail->addAddress('daniilgorgun38@gmail.com');
        $mail->Subject = 'New Form Submission';
        $mail->Body = $message;

        // Отправка письма
        $mail->send();

        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
}
?>
