function AddTask(event){
    if (event.which == 13 || event.keyCode == 13) {
        var texto=document.getElementById('tareaInput').value;       
        if (texto === ""){
            tareaInput.setAttribute("placeholder", "Add a task validate please");
        }
        else if (texto != ""){
            var elementli=document.createElement('li');
            var newtask=document.createTextNode(texto);
            elementli.appendChild(newtask);
            lista.insertBefore(elementli, lista.childNodes[0]);
            elementli.setAttribute("class", "Undone");
            elementli.innerHTML=texto;
            elementli.onclick = function () {
                if(
                    this.style.background=="rgb(90, 248, 116)"){
                    this.style.background="#EC7070";
                elementli.setAttribute("class", "Undone");
            }
            else{
                this.style.background="#5AF874";
                elementli.setAttribute("class", "Done");
            }
            return false;
        }
    }
    return false;
}
return true;
}

function deleteLi(){
   var task = document.getElementsByTagName('li');
   var nodos_a_eliminar = new Array();  
   for (var i=0;i<task.length;i++){
    nodos_a_eliminar[nodos_a_eliminar.length] = task[i];
}
for (var j=0;j<nodos_a_eliminar.length;j++){
    nodos_a_eliminar[j].parentNode.removeChild(nodos_a_eliminar[j]);
}
}  

function doneLi(){
    var container = document.getElementById("lista");
    var elements = container.getElementsByClassName("Done");
    while (elements[0]) {
        elements[0].parentNode.removeChild(elements[0]);
    }
}













