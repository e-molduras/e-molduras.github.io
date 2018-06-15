/* queryData Created by Kate Morley */

function queryData() {
	var qData = { }, qString = location.search ? location.search : '';
	if (qString.charAt(0) == '?') qString = qString.substring(1);
	if (qString.length > 0) {
		qString = qString.replace(/\+/g, ' ');
		var qComponents = qString.split(/[&;]/g);
		for (var index = 0; index < qComponents.length; index ++) {
			var keyValuePair = qComponents[index].split('=');
			var key          = decodeURIComponent(keyValuePair[0]);
			var value        = keyValuePair.length > 1
				? decodeURIComponent(keyValuePair[1]) : '';
			qData[key] = value;
		}
	}
	return qData;
}

var view, bar;

window.onload = function() {
	var qData = queryData();
    if (qData.modelo && qData.desc) {
        view = document.getElementById("moldura-view");
        bar = document.getElementById("moldura-info");
        view.firstElementChild.src = "imagens/moldura" + qData.modelo + ".jpg";
        var p = bar.firstElementChild;
        bar.style.backgroundColor = "#2ECC40";
        document.getElementById("modelo").value = qData.modelo;
        p.innerHTML = qData.desc;
        p.onmouseover = function() {
            view.style.visibility = "visible";
        }
        p.onmouseout = function() {
            view.style.visibility = "hidden";
        }
    }
}
