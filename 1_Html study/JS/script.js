/*var $elem = document.getElementById('output');  
$elem.innerHTML += 'Test'
$elem.innerHTML += 4 + 6 +'demo';
$elem.innerHTML += 'demo' + 4 + 6;
$elem.innerHTML += 'Demo '+ (4 + 6);
$elem.innerHTML += 1/0;


var testVariable='';
var isUndefined = (testVariable === undefined);
var isNull = (testVariable === null);
var isEmpty = (testVariable === '');

document.getElementById('isUndefined').innerHTML = isUndefined;
document.getElementById('isNull').innerHTML = isNull;
document.getElementById('isEmpty').innerHTML = isEmpty;

$elem.innerHTML += testVariable;
$elem.innerHTML += '..';*/

function refreshPosition(position) {
    //var list = document.getElementById('positionList');
    //list.innerHtml += ('<li>' + position.coords.latitude + ' ' position.coords.longitude + '</li>');
    console.log(position.coords.latitude + ' '+ position.coords.longitude);
}
navigator.geolocation.watchPosition(refreshPosition);

function save_text()
{
    navigator.geolocation.watchPosition(refreshPosition);
}

function save_Radio()
{
    try {
    //callExternalFunction();
    //if (result.isNotValid) {
    if (0) {
        throw "issue with external service";
    }
    }
    catch(error) {
        console.log(error.message);
    }
}


var canvas = document.getElementById("demoCanvas");
var context = canvas.getContext("2d");

context.fillStyle = "#A9B0B3";
context.strokeStyle = "#746C73";
context.lineWidth = 5;

context.moveTo(0, 0);
context.lineTo(700, 350);
context.stroke();

context.beginPath();
context.arc(160, 80, 70, 0, 2 * Math.PI);
context.fill();
context.stroke();

context.beginPath();
context.moveTo(650, 345);
context.lineTo(700, 350);
context.lineTo(665, 315);
context.stroke();

context.fillStyle = "#20293F";
context.strokeStyle = "#20293F";

context.font = "78px Segoe UI";
context.fillText("Hello", 190, 230);
context.strokeText("World", 190, 310);
