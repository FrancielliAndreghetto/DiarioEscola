// Percorra o objeto clientes e mostre o nome da cada cliente da seguinte maneira:
// “ultimoSobrenome, primeiroNome”;

var clientes = [
    {
        'id': 1,
        'nome': 'Luis Santos Silveira',
        'idade': 18
    },
    {
        'id': 2,
        'nome': 'Ricardo Lopes Alves',
        'idade': 30
    },
    {
        'id': 3,
        'nome': 'Gustavo Silva Junior',
        'idade': 26
    }
    ];

    for (var cliente of clientes) {
    var nomeCompleto = cliente.nome.split(' ');
    var primeiroNome = nomeCompleto[0]; 
    var ultimoSobrenome = nomeCompleto[2]; 

    console.log(`${ultimoSobrenome}, ${primeiroNome}`);
    }

    // Formate a variável “numero” para o seguinte formato: “(XX)_X_XXXX-XXXX”

    var numero = "55555555555"

    console.log(numero.replace(/^(\d{2})(\d{1})(\d{4})(\d{4})/, "($1)_$2_$3-$4"));