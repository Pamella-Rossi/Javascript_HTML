function validarFormulario() {
    let campoA = parseFloat(document.getElementById("campoA").value);
    let campoB = parseFloat(document.getElementById("campoB").value);
    if (campoB > campoA) {
        alert("Formulário valído!")

        campoA.value = '';
        campoB.value = '';

    } else {
        alert("Formulário inválido. B deve ser maior que A.")
    }
    return false;
}