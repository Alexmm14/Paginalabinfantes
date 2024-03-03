<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica si los campos del formulario están presentes
    $requiredFields = ['elemento1', 'elemento2', 'elementoedad', 'elemento3', 'elemento4', 'elemento5', 'elemento6', 'elemento7', 'elemento8'];

    foreach ($requiredFields as $field) {
        if (!isset($_POST[$field])) {
            echo "Error: El campo $field es obligatorio y no ha sido completado.";
            exit;
        }
    }

    // Obtén los datos del formulario
    $nombrePadre = $_POST['elemento1'];
    $nombreNino = $_POST['elemento2'];
    $anoNacimiento = $_POST['elementoedad'];
    $sexo = $_POST['elemento3'];
    $telefonoContacto = $_POST['elemento4'];
    $otroTelefono = $_POST['elemento5'];
    $horarioContacto = $_POST['elemento6'];
    $correoElectronico = $_POST['elemento7'];
    $comoSupo = $_POST['elemento8'];

    // Configura el objeto PHPMailer
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp-mail.outlook.com';

        $mail->SMTPAuth = true;
        $mail->Username = 'alexmm14@hotmail.es';
        $mail->Password = '';
        $mail->SMTPSecure = 'tls'; // o 'ssl' si es necesario
        $mail->Port = 587; // o el puerto que utilices

        $mail->setFrom('alexmm14@hotmail.es', 'Alejandro Molina');
        $mail->addAddress($correoElectronico, $nombrePadre);
        $mail->isHTML(true);
        $mail->Subject = 'Tu registro Laboratorio de Infantes';

        // Construye el cuerpo del correo con los datos del formulario
        $mail->Body = "
            <p><strong>Nombre del padre/madre:</strong> $nombrePadre</p>
            <p><strong>Nombre del niño(a):</strong> $nombreNino</p>
            <p><strong>Año de nacimiento del niño(a):</strong> $anoNacimiento</p>
            <p><strong>Sexo:</strong> $sexo</p>
            <p><strong>Teléfono de contacto:</strong> $telefonoContacto</p>
            <p><strong>Otro teléfono:</strong> $otroTelefono</p>
            <p><strong>Horario de contacto:</strong> $horarioContacto</p>
            <p><strong>Correo electrónico:</strong> $correoElectronico</p>
            <p><strong>Cómo supo de nosotros:</strong> $comoSupo</p>
            <h3>Es breve nos comunicaremos contigo para agendar una cita</h3>
        ";

        $mail->send();
        header("Location: Participabb.html");
        exit();
    } catch (Exception $e) {
        echo "Error al enviar el correo: {$mail->ErrorInfo}";
    }
} else {
    echo 'Error: El formulario debe enviarse por el método POST.';
}
?>
