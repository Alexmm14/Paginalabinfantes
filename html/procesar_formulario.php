<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // ... código PHP para procesar y enviar el correo ...

    // Ejemplo básico de envío de correo
    $destinatario = "correo_destino@example.com";
    $asunto = "Nuevo formulario de contacto";

    $mensaje = "Contenido del formulario:\n";
    foreach ($_POST as $clave => $valor) {
        $mensaje .= "$clave: $valor\n";
    }

    if (mail($destinatario, $asunto, $mensaje)) {
        echo "Correo enviado exitosamente";
    } else {
        echo "Error al enviar el correo";
    }
} else {
    // Si alguien intenta acceder directamente a este script sin enviar el formulario, redirige a la página de origen.
    header("Location: index.html");
    exit();
}
?>
