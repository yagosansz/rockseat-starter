var button = document.querySelector('button');
var mainDiv = document.querySelector('#main');

button.onclick = function() {
    var square = document.createElement('div');
    square.style.width = '100px';
    square.style.height = '100px';
    square.style.backgroundColor = 'red';
    square.style.marginTop = '10px';

    square.onmouseover = function() {
        square.style.backgroundColor = getRandomColor();
    }

    mainDiv.appendChild(square);
}

function getRandomColor() {  
    var letters = "0123456789ABCDEF";  
    var color = "#";  
    for (var i = 0; i < 6; i++) {    
        color += letters[Math.floor(Math.random() * 16)];  
    }  
    return color;
}

var newColor = getRandomColor(); // #E943F0

/****************************************************************/

var names = ['Diego', 'Gabriel', 'Lucas'];

var secondaryDiv = document.querySelector('#secondary');

for(name of names) {
    var listElement = document.createElement('li');
    var listText = document.createTextNode(name);

    listElement.appendChild(listText);
    secondaryDiv.appendChild(listElement);
}

function add() {
    var inputElement = document.querySelector('input[name=name]');
    var listElement = document.createElement('li');
    var listText = document.createTextNode(inputElement.value);

    listElement.appendChild(listText);
    secondaryDiv.appendChild(listElement);
    inputElement.value = null;
}
