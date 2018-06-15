var moldura = [
    "", // skip index 0
    "Moldura lisa escura - R$ 78,00",
    "Moldura com desenhos - R$ 81,00",
    "Moldura em relevo simples - R$ 125,00",
    "Moldura entalhada simples - R$ 140,00",
    "Moldura entalhada - R$ 215,00",
    "Moldura com detalhes - R$ 250,00"
];

var view, bar;

window.onload = function () {
    var i = document.URL.split('#')[1];
    if (i) {
        view = document.getElementById("moldura-view");
        bar = document.getElementById("moldura-info");
        view.firstElementChild.src = "imagens/moldura" + i + ".jpg";
        var p = bar.firstElementChild;
        bar.style.backgroundColor = "#2ECC40";
        document.getElementById("modelo").value = i;
        p.innerHTML = moldura[i];
        p.onmouseover = function () {
            view.style.visibility = "visible";
        };
        p.onmouseout = function () {
            view.style.visibility = "hidden";
        };
    }
};
