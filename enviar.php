<?php
// CONFIGURA ESTO:
$destinatario = "tucorreo@ejemplo.com"; // ← cámbialo por tu email real
$asunto = "Mensaje desde tu formulario";

// RECOGER DATOS
$nombre   = trim($_POST['name'] ?? '');
$email    = trim($_POST['email'] ?? '');
$telefono = trim($_POST['phone'] ?? '');
$mensaje  = trim($_POST['message'] ?? '');
$robot    = $_POST['website'] ?? ''; // Honeypot

// HONEYPOT → si está relleno, es un bot
if (!empty($robot)) {
  http_response_code(403);
  echo "Spam detectado";
  exit;
}

// VALIDACIONES
if (!$nombre || !$email || !$mensaje) {
  http_response_code(400);
  echo "Faltan campos obligatorios.";
  exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo "Email no válido.";
  exit;
}

if (strlen($mensaje) > 1000 || strlen($nombre) > 100 || strlen($telefono) > 50) {
  http_response_code(400);
  echo "El contenido es demasiado largo.";
  exit;
}

// CONSTRUCCIÓN DEL MENSAJE
$cuerpo = "Nombre: $nombre\n";
$cuerpo .= "Email: $email\n";
$cuerpo .= "Teléfono: $telefono\n\n";
$cuerpo .= "Mensaje:\n$mensaje\n";

// ENCABEZADOS
$headers = "From: $nombre <$email>\r\n";
$headers .= "Reply-To: $email\r\n";

// ENVÍO
if (mail($destinatario, $asunto, $cuerpo, $headers)) {
  echo "Mensaje enviado correctamente ✅";
} else {
  http_response_code(500);
  echo "No se pudo enviar el mensaje.";
}
