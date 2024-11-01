<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "grafikmartin@gmail.com"; // Deine E-Mail-Adresse hier
    $from = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $message = filter_var($_POST["message"], FILTER_SANITIZE_STRING);
    $subject = "Neue Nachricht von deiner Webseite";

    // Kopfzeilen
    $headers = "From: $from\r\nReply-To: $from";

    // Verarbeitung des Anhangs
    if (isset($_FILES['attachment']) && $_FILES['attachment']['error'] == UPLOAD_ERR_OK) {
        $file_tmp_path = $_FILES['attachment']['tmp_name'];
        $file_name = $_FILES['attachment']['name'];
        $file_type = $_FILES['attachment']['type'];
        $file_size = $_FILES['attachment']['size'];

        // Dateiinhalte lesen und kodieren
        $file_content = chunk_split(base64_encode(file_get_contents($file_tmp_path)));

        // Generiere eine Grenze für die E-Mail
        $boundary = md5(uniqid(time()));

        // Multi-Teil-Header für Anhänge
        $headers .= "\r\nMIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"$boundary\"";

        // Nachricht ohne Anhang
        $body = "--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\n\r\n$message\r\n";
        
        // Angehängte Datei hinzufügen
        $body .= "--$boundary\r\nContent-Type: $file_type; name=\"$file_name\"\r\nContent-Transfer-Encoding: base64\r\nContent-Disposition: attachment; filename=\"$file_name\"\r\n\r\n$file_content\r\n--$boundary--";
    } else {
        // Wenn kein Anhang vorhanden ist
        $body = $message;
    }

    // Sende die E-Mail
    if (mail($to, $subject, $body, $headers)) {
        echo "Nachricht erfolgreich gesendet.";
    } else {
        echo "Fehler beim Senden der Nachricht.";
    }
}
?>
