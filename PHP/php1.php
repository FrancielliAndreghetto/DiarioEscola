<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
    $nomes = ['Francisco Souza', 'Guilherme Rosa', 'Arthur Golveia'];

    $cliente1 = new stdClass();
    $cliente1->nome = $nomes[0];

    $cliente2 = new stdClass();
    $cliente2->nome = $nomes[1];

    $cliente3 = new stdClass();
    $cliente3->nome = $nomes[2];

    $arrayDeClientes = [$cliente1, $cliente2, $cliente3];

    echo($arrayDeClientes[1]->nome);
?>

</body>
</html>
