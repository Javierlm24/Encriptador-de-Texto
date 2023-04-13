const buttonEncrypt = document.getElementById("buttonEncrypt");
const buttonDescrypt = document.getElementById("buttonDecrypt");
const buttonCopy = document.getElementById("buttonCopy");

buttonEncrypt.addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const encryptText = encriptarTexto(text);
    document.getElementById('result').value = encryptText;

    buttonCopy.disabled = false;
    document.getElementById('result').style.display = "block";
    document.getElementById('muñeco1').style.display = "none";
    document.getElementById('mensaje').style.display = "none";
    document.getElementById('parrafo').style.display = "none";
    buttonCopy.style.display = "block";
})

buttonDescrypt.addEventListener('click', () => {
    const text = document.getElementById('text').value;
    const descryptText = desencriptarTexto(text);
    document.getElementById('result').value = descryptText;

})

buttonCopy.addEventListener('click', () => {
    const result = document.getElementById('result');
    result.select();
    document.execCommand('copy');

  });

    const encriptarTexto = (texto) => {
    texto = texto.replace(/e/g, "enter");
    texto = texto.replace(/i/g, "imes");
    texto = texto.replace(/a/g, "ai");
    texto = texto.replace(/o/g, "ober");
    texto = texto.replace(/u/g, "ufat");
    return texto;
  }

  const desencriptarTexto = (texto) => {
    texto = texto.replace(/enter/g, "e");
    texto = texto.replace(/imes/g, "i");
    texto = texto.replace(/ai/g, "a");
    texto = texto.replace(/ober/g, "o");
    texto = texto.replace(/ufat/g, "u");
    return texto;
  }