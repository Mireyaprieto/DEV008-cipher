const cipher = {
  encode: (texto,llave) => {
    let resultado="";
    for (let i = 0; i < texto.length; i++) {

      //Fórmula para posicionar la letra dentro del código ASCII
      const letras = (texto.charCodeAt(i) - 65 + parseInt(llave)) % 26 + 65;

      //Concatenando letras codificadas
      resultado += String.fromCharCode(letras);
    }

    return resultado;

  },

  decode: (texto, llave) => {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {

      //Fórmula para posicionar la letra dentro del alfabeto  
      const letras = (texto.charCodeAt(i) + 65 - parseInt(llave)) % 26 + 65;

      //Concatenando las letras decodificadas
      resultado += String.fromCharCode(letras);

    }

    return resultado;

  }
}
export default cipher;