function encriptar(){

    var texto = document.getElementById("textoEncriptado").value.toLowerCase();
    

// *i = es para que tome letras mayusculas y minusculas*/
// g = tome en cuenta toda la linea o la oracion
/*m =t tome en cunat multiples lineas */

    

    var textoEncriptado = texto.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img,"ober");
    var textoEncriptado = textoEncriptado.replace(/i/img,"imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img,"ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("textoDesencriptado").style.display = "show";
    document.getElementById("textoDesencriptado").style.display = "inherit";
    document.getElementById("botonCopiar").style.display = "show";
    document.getElementById("botonCopiar").style.display = "inherit";


        var contenido = document.querySelector("#textoEncriptado");
        contenido.select();
        document.execCommand("#textoDesencriptado");
      
       

   
    //document.getElementById("image").style.display = "none";
    //document.getElementById("texto").style.display = "none";
    //document.getElementById("texto2").innerHTML = txtCifrado;
    //document.getElementById("copiar").style.display = "show";
    //document.getElementById("copiar").style.display = "inherit"
    
}

function desencriptar(){

    var texto = document.getElementById("textoDesencriptado").value.toLowerCase();

// i = es para que tome letras mayusculas y minusculas
// g = tome en cuenta toda la linea o la oracion
//m =t tome en cunat multiples lineas

var textoEncriptado = texto.replace(/enter/img, "e");
var textoEncriptado = textoEncriptado.replace(/ober/img,"o");
var textoEncriptado = textoEncriptado.replace(/imes/img,"i");
var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
var textoEncriptado = textoEncriptado.replace(/ufat/img,"u");

document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

//document.getElementById("image").style.display = "none";
//document.getElementById("texto").style.display = "none";
//document.getElementById("texto2").innerHTML = txtCifrado;
//document.getElementById("copiar").style.display = "show";
//document.getElementById("copiar").style.display = "inherit";

}




function copiar(){
    
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
    alert("Se copio")
}