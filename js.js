function abrir(a) {
  document.getElementById(a).classList.toggle("show");
  if (document.getElementById(a + 1).style.transform === "rotateX(180deg)")
    document.getElementById(a + 1).style.transform = "rotateX(0deg)";
  else
    document.getElementById(a + 1).style.transform = "rotateX(180deg)";
}

function select(i) {
  if (i == 1) {
    document.getElementById(1).classList.add("selected");
    document.getElementById(2).classList.remove("selected");
  } else {
    document.getElementById(2).classList.add("selected");
    document.getElementById(1).classList.remove("selected");
  }
}

var btn = document.getElementById("btn");
var btn_n = document.getElementById("btn-n");
var body = document.getElementById("main");
var js = document.getElementById("js");

btn.addEventListener('click', function () {
  body.style.display = "none";
  js.style.display = "grid";
});

btn_n.addEventListener('click', function () {
  body.style.display = "inherit";
  js.style.display = "none";
});



var zona = document.getElementById("zona");
var fn = document.getElementById("fn");
var idade = document.getElementById("idade");
var area = document.getElementById("area");
var gar = document.getElementsByName("garagem");
var ptp = document.getElementsByName("ptp");
var text;
var g, t, i, ver = 0;
var totalz1, totalz2, totalz3;

document.getElementById("sub").addEventListener('click', function calcular() {

  for (var a = 0; a < gar.length; a++) {
    if (gar[a].checked) {
      ver += 1;
    }
  }
  for (var a = 0; a < gar.length; a++) {
    if (ptp[a].checked) {
      ver += 1;
    }
  }
  if (idade.value != null)
    ver += 1;
  if (area.value != null)
    ver += 1;
  if (document.getElementById("tipologia").value != null)
    ver += 1;

  if (ver == 5) {
    zona.style.display = "grid";

    for (var b = 0; b < gar.length; b++) {
      if (gar[b].checked) {
        if (gar[b].value == 'Sim') {
          text = "Garagem: Sim";
          g = 0.95;
        } else {
          text = "Garagem: Não";
          g = 1;
        }

      }
    }
    document.getElementById("gar1").innerHTML = text;
    document.getElementById("gar2").innerHTML = text;
    document.getElementById("gar3").innerHTML = text;

    for (var c = 0; c < ptp.length; c++) {
      if (ptp[c].checked) {
        if (ptp[c].value == 'Não') {
          text = "Transporte: Não";
          t = 0.9;
        } else {
          text = "Transporte: Sim";
          t = 1;
        }
      }

    }
    document.getElementById("ptp1").innerHTML = text;
    document.getElementById("ptp2").innerHTML = text;
    document.getElementById("ptp3").innerHTML = text;

    if (idade.value > 0 && idade.value <= 5)
      i = 1;
    else if (idade.value > 5 && idade.value <= 10)
      i = 0.95;
    else if (idade.value > 10)
      i = 0.9;

    totalz1 = (((area.value * 1200) * i) * g) * t;

    totalz2 = (((area.value * 2000) * i) * g) * t;

    totalz3 = (((area.value * 2500) * i) * g) * t;

    document.getElementById("result1").innerHTML = "Total: " + totalz1;
    document.getElementById("result2").innerHTML = "Total: " + totalz2;
    document.getElementById("result3").innerHTML = "Total: " + totalz3;

    document.getElementById("area-r1").innerHTML = "Área: " + area.value + "m<sup>2</sup>";
    document.getElementById("area-r2").innerHTML = "Área: " + area.value + "m<sup>2</sup>";
    document.getElementById("area-r3").innerHTML = "Área: " + area.value + "m<sup>2</sup>";

  }
});

document.getElementById("reset").addEventListener('click', function reset() {
  zona.style.display = "none";
  totalz1 = 0;
  totalz2 = 0;
  totalz3 = 0;

});

var totalF;
document.getElementById("z1").addEventListener('click', function fnc() {
  totalF = totalz1;
  document.getElementById("fn-main").style.display = "grid";
  document.getElementById("fn").style.display = "grid";
});
document.getElementById("z2").addEventListener('click', function fnc() {
  totalF = totalz2;
  document.getElementById("fn-main").style.display = "grid";
  document.getElementById("fn").style.display = "grid";
});
document.getElementById("z3").addEventListener('click', function fnc() {
  totalF = totalz3;
  document.getElementById("fn-main").style.display = "grid";
  document.getElementById("fn").style.display = "grid";
});


document.getElementById("sub-f").addEventListener('click', function final() {
  document.getElementById("fn-f").style.display = "grid";
  var spr = [], tx = [];

  for (i = 0; i < 3; i++) {
    spr[i] = (Math.floor(Math.random() * 5) + 1);
    document.getElementById("spread" + (i + 1)).textContent = spr[i];
  }
  for (i = 0; i < 3; i++) {
    tx[i] = 0.5 + spr[i];
    document.getElementById("taxa" + (i + 1)).textContent = tx[i];
  }



});
