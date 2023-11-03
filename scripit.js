function ligarLuz(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "purple";
    comodo.style.color = "black";
}

    function desligarLuz(comodoId) {
    var comodo = document.getElementById(comodoId);
    comodo.style.backgroundColor = "black";
    comodo.style.color = "white";
}

document.getElementById("btn-sala1-on").addEventListener("click", function () {
    ligarLuz("sala");
});

document.getElementById("btn-sala1-off").addEventListener("click", function () {
    desligarLuz("sala");
});

document.getElementById("btn-cozinha1-on").addEventListener("click", function () {
    ligarEnergia("cozinha");
});

document.getElementById("btn-cozinha1-off").addEventListener("click", function () {
    desligarEnergia("cozinha");
});

document.getElementById("btn-quarto21-on").addEventListener("click", function () {
    ligarEnergia("quarto2");
});

document.getElementById("btn-quarto21-off").addEventListener("click", function () {
    desligarEnergia("quarto2");
});

document.getElementById("btn-quarto1-on").addEventListener("click", function () {
    ligarEnergia("quarto1");
});

document.getElementById("btn-quarto1-off").addEventListener("click", function () {
    desligarEnergia("quarto1");
});

document.getElementById("btn-banheiro1-on").addEventListener("click", function () {
    ligarEnergia("banheiro");
});

document.getElementById("btn-banheiro1-off").addEventListener("click", function () {
    desligarEnergia("banheiro");
});
