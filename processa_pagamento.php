<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "esteticcred@gmail.com"; // Seu e-mail
    $subject = "Novo Pedido via WheyPro";

    // Coleta os dados do formulário
    $mensagem = "Informações do Pedido:\n\n";
    foreach ($_POST as $campo => $valor) {
        $mensagem .= ucfirst($campo) . ": " . htmlspecialchars($valor) . "\n";
    }

    // Cabeçalhos do e-mail
    $headers = "From: no-reply@seusite.com\r\n";
    $headers .= "Reply-To: " . $_POST['email'];

    // Envia o e-mail
    if (mail($to, $subject, $mensagem, $headers)) {
        echo "Pedido enviado com sucesso!";
    } else {
        echo "Erro ao enviar o pedido. Tente novamente.";
    }
}
?>
