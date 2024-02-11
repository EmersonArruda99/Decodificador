function codificarTexto() {
    var inputText = document.getElementById("entradaTexto").value;

    if (!validarEntrada(inputText)) {
        alert("Erro: A entrada deve conter apenas letras minúsculas e sem acentos ou caracteres especiais.");
        return;
    }

    var encodedText = codificarVogais(inputText);
    document.getElementById("saidaTexto").value = encodedText;
}

function decodificarTexto() {
    var inputText = document.getElementById("entradaTexto").value;

    if (!validarEntrada(inputText)) {
        alert("Erro: A entrada deve conter apenas letras minúsculas e sem acentos ou caracteres especiais.");
        return;
    }

    var decodedText = decodificarVogais(inputText);
    document.getElementById("saidaTexto").value = decodedText;
}

function copiarTexto() {
    var saidaTexto = document.getElementById("saidaTexto");
    saidaTexto.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

function codificarVogais(texto) {
    var vogais = ['a', 'e', 'i', 'o', 'u'];
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
        var char = texto.charAt(i).toLowerCase();
        if (vogais.indexOf(char) !== -1) {
            switch (char) {
                case 'a':
                    resultado += "ai";
                    break;
                case 'e':
                    resultado += "enter";
                    break;
                case 'i':
                    resultado += "imes";
                    break;
                case 'o':
                    resultado += "ober";
                    break;
                case 'u':
                    resultado += "ufat";
                    break;
                default:
                    resultado += char;
            }
        } else {
            resultado += char;
        }
    }

    return resultado;
}

function decodificarVogais(texto) {
    var vogaisCodificadas = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    var resultado = "";

    for (var i = 0; i < texto.length; i++) {
        var char = texto.charAt(i).toLowerCase();
        var isVogalCodificada = false;

        for (var j = 0; j < vogaisCodificadas.length; j++) {
            if (texto.substring(i, i + vogaisCodificadas[j].length) === vogaisCodificadas[j]) {
                switch (char) {
                    case 'a':
                        resultado += 'a';
                        break;
                    case 'e':
                        resultado += 'e';
                        break;
                    case 'i':
                        resultado += 'i';
                        break;
                    case 'o':
                        resultado += 'o';
                        break;
                    case 'u':
                        resultado += 'u';
                        break;
                    default:
                        resultado += char;
                }
                isVogalCodificada = true;
                i += vogaisCodificadas[j].length - 1;  // Pular o restante da vogal codificada
                break;
            }
        }

        if (!isVogalCodificada) {
            resultado += char;
        }
    }

    return resultado;
}

function limparSaida() {
    document.getElementById("saidaTexto").value = "";
}

function validarEntrada(texto) {
    // Expressão regular para verificar se a entrada contém apenas letras minúsculas (com ou sem espaços) e sem acentos ou caracteres especiais
    var regex = /^[a-z\s]+$/;
    return regex.test(texto);
}
