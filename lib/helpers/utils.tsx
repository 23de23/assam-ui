function copyToClip(content:string) {
  var aux = document.createElement("input"); 
  aux.setAttribute("value", content); 
  document.body.appendChild(aux); 
  aux.select();
  document.execCommand("copy"); 
  document.body.removeChild(aux);
}


export {copyToClip}