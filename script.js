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
        var img = document.createElement("img");
        img.setAttribute("src", "imagens/moldura" + i + ".jpg");
        img.setAttribute("alt", "Moldura selecionada");
        img.setAttribute("width", "275");
        img.setAttribute("height", "183");
        view.appendChild(img);
        bar.firstElementChild.innerHTML = moldura[i];;
        bar.style.backgroundColor = "#2ECC40";
        document.getElementById("modelo").value = i;
        bar.onmousedown = function () {
            view.style.visibility = view.style.visibility == "hidden" ? "visible" : "hidden";
        }
        bar.onmouseover = function () {
            view.style.visibility = "visible";
        };
        bar.onmouseout = function () {
            view.style.visibility = "hidden";
        };
    }
};
