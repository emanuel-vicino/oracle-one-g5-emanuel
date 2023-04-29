function encriptar(){
    var texto= document.getElementById("ingresar").value.toLowerCase()
    var txtCifrado = texto.replace(/e/igm,"enter")
    txtCifrado = txtCifrado.replace(/o/igm,"ober")
    txtCifrado = txtCifrado.replace(/i/igm,"imes")
    txtCifrado = txtCifrado.replace(/a/igm,"ai")
    txtCifrado = txtCifrado.replace(/u/igm,"ufat")

    document.getElementById("personaje").style.display = "none";
    document.getElementById("mensaje").style.display = "none"; 
    document.getElementById("respuesta").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto= document.getElementById("ingresar").value.toLowerCase()
    var txtCifrado = texto.replace(/enter/igm,"e")
    txtCifrado = txtCifrado.replace(/ober/igm,"o")
    txtCifrado = txtCifrado.replace(/imes/igm,"i")
    txtCifrado = txtCifrado.replace(/ai/igm,"a")
    txtCifrado = txtCifrado.replace(/ufat/igm,"u")

    document.getElementById("personaje").style.display = "none";
    document.getElementById("mensaje").style.display = "none"; 
    document.getElementById("respuesta").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar(){
    var copiartexto = document.getElementById("respuesta").innerText;
    navigator.clipboard.writeText(copiartexto).then(function(){
        console.log("texto copiado con exito");
    })
}