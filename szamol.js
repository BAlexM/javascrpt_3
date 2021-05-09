document.querySelector("#a").addEventListener('change', szamolas);
document.querySelector("#b").addEventListener('change', szamolas);
function szamolas(){
  a = document.getElementById("a").value
  b = document.getElementById("b").value
  if(a<0){alert("Az érték nem lehet negatív"); document.getElementById("a").value = 0; document.getElementById("b").value = 0; a = 0; b = 0;} else{pontok = a*10 + b*150}

  if(b<0){ alert("Az érték nem lehet negatív"); document.getElementById("a").value = 0; document.getElementById("b").value = 0; a = 0; b = 0;} else{pontok = a*10 + b*150}

  if(b>1){ alert("Az aranycikeszt csak egyszer lehet elkapni"); document.getElementById("a").value = 0; document.getElementById("b").value = 0; a = 0; b = 0;} else{pontok = a*10 + b*150}

  document.getElementById("pontok").innerHTML = "Összesen:"+ pontok +" pont";
}