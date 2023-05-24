const cipher = {
  encode: (offset, texto) => {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      // código ASCII
      const letras = ((texto.charCodeAt(i) - 65 + parseInt(offset)) % 26) + 65;
      if (texto[i] === " ") {
        resultado += " ";
      } else {
        //Concatenando letras codificadas
        resultado += String.fromCharCode(letras);
      }
    }
    return resultado;
  },
  decode: (offset, texto) => {
    let resultado = "";
    for (let i = 0; i < texto.length; i++) {
      //alfabeto  ASCII
      const letras = ((texto.charCodeAt(i) + 65 - parseInt(offset)) % 26) + 65;
      //Concatenando las letras decodificadas
     
      if (texto[i] === " ") {
        resultado += " ";
      } else {
        //Concatenando letras codificadas
        resultado += String.fromCharCode(letras);
      }
    }

    return resultado;
  },
};
export default cipher;
