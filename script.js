const msjOriginal = document.querySelector(".texto-encriptar");
const msjEncriptado = document.querySelector(".texto-desencriptar");
const imgFrame = document.querySelector(".frame");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"
msjEncriptado.value = "";

function botonEncriptar(){
    const textoEncriptado = encriptar(msjOriginal.value);
    msjEncriptado.value = textoEncriptado;
    msjOriginal.value = "";
    msjEncriptado.style.backgroundImage = "none";
    imgFrame.style.display = "none";

}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(msjOriginal.value);
    msjEncriptado.value = textoDesencriptado;
    msjOriginal.value = "";
   
}

function botoncopiar(){
    msjEncriptado.select()
    document.execCommand("copy");
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (var x = 0; x < matrizCodigo.length; x++){
        //if(stringEncriptada.includes(matrizCodigo[x][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[x][0],matrizCodigo[x][1]);
        //}
		
	}

    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    

    for (var x = 0; x < matrizCodigo.length; x++){
        //if(stringDesencriptada.includes(matrizCodigo[x][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[x][1],matrizCodigo[x][0]);
       // }
		
	}

    return stringDesencriptada;
}



