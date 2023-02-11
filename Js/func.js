
function changeBackground(){
    /*if(document.getElementById("saludar").innerHTML == "hola"){
        document.getElementById("saludar").innerHTML = "chau";
    } else {  
        document.getElementById("saludar").innerHTML = "hola";
    }*/
    /*console.log("apretado");
    var body = document.getElementById("body");
 
    body.style.backgroundColor = "dark";*/

    var body = document.getElementById("body");
    body.classList.toggle("body-2");
    

}

function openCV(){
    "window.open(‘CV\Jeremias Doumic CV.pdf’)";
}

function getForm(){
    var nombre = document.getElementById("nombre").value;
    var mail = document.getElementById("mail").value;
    var text = document.getElementById("text").value;

    console.log(nombre);
    console.log(mail);
    console.log(text);
}
