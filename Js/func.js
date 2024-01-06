
function changeBackground(){

    var body = document.getElementById("body");
    body.classList.toggle("body-2");

}

function openCV(){
    "window.open(‘CV\Jeremias Doumic CV.pdf’)";
}



function copyToClipboard() {
    var emailElement = document.getElementById('email');
    var emailText = emailElement.innerText;

    var inputElement = document.createElement('input');
    inputElement.value = emailText;

    document.body.appendChild(inputElement);

    inputElement.select();
    document.execCommand('copy');

    document.body.removeChild(inputElement);
  }
