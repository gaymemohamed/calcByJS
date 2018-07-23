//create mian div
const mainDiv = document.createElement('div');

mainDiv.className = 'main-div';
mainDiv.id = 'main-div';
mainDiv.style.margin = '100px 0 0 500px' ;
mainDiv.style.padding = '20px';
mainDiv.style.width = '300px';
mainDiv.style.height = '300px';
mainDiv.style.backgroundColor = '#888';
mainDiv.style.boxShadow = '5px 5px 5px 0px';
document.getElementById("main").appendChild(mainDiv);

//create header

const headerDiv = document.createElement('div');

headerDiv.id = 'header-div';
headerDiv.appendChild(document.createTextNode('JavaScript Calculator'));
headerDiv.style.color = '#fff';
headerDiv.style.padding = '5px';
headerDiv.style.textAlign = 'center';
headerDiv.style.border = '2px solid #FFF ';
headerDiv.style.fontSize = '18px';
headerDiv.style.fontFamily = 'sans-serif';
document.getElementById('main-div').appendChild(headerDiv);

// create input field 
const input = document.createElement('input');
input.className = 'input-field';
input.setAttribute('type','text');
input.style.padding = '12px';
input.style.width = '190px';
input.style.marginTop = '8px';
input.style.border = '1px solid #000';
input.style.borderRadius = '5px';
document.getElementById('main-div').appendChild(input);

//equal Button
const equalBtn = document.createElement('button');
equalBtn.appendChild(document.createTextNode('='));
equalBtn.style.padding = '10px';
equalBtn.style.width = '70px';
equalBtn.style.fontSize = '18px';
equalBtn.style.border = '1px solid #000';
equalBtn.style.marginLeft = '10px';
equalBtn.style.borderRadius = '5px';
equalBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(equalBtn);

//one Button
const oneBtn = document.createElement('button');
oneBtn.appendChild(document.createTextNode('1'));
oneBtn.style.padding = '10px';
oneBtn.style.width = '72px';
oneBtn.style.fontSize = '18px';
oneBtn.style.border = '1px solid #000';
oneBtn.style.borderRadius = '5px';
oneBtn.style.marginTop = '8px';
oneBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(oneBtn);

//two Button
const twoBtn = document.createElement('button');
twoBtn.appendChild(document.createTextNode('2'));
twoBtn.style.padding = '10px';
twoBtn.style.width = '70px';
twoBtn.style.fontSize = '18px';
twoBtn.style.border = '1px solid #000';
twoBtn.style.borderRadius = '5px';
twoBtn.style.marginTop = '8px';
twoBtn.style.marginLeft = '5px';
twoBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(twoBtn);

//three Button
const threeBtn = document.createElement('button');
threeBtn.appendChild(document.createTextNode('3'));
threeBtn.style.padding = '10px';
threeBtn.style.width = '70px';
threeBtn.style.fontSize = '18px';
threeBtn.style.border = '1px solid #000';
threeBtn.style.borderRadius = '5px';
threeBtn.style.marginTop = '8px';
threeBtn.style.marginLeft = '5px';
threeBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(threeBtn);

//sum Button
const sumBtn = document.createElement('button');
sumBtn.appendChild(document.createTextNode('+'));
sumBtn.style.padding = '10px';
sumBtn.style.width = '70px';
sumBtn.style.fontSize = '18px';
sumBtn.style.border = '1px solid #000';
sumBtn.style.borderRadius = '5px';
sumBtn.style.marginTop = '8px';
sumBtn.style.marginLeft = '5px';
sumBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(sumBtn);

//four Button
const fourBtn = document.createElement('button');
fourBtn.appendChild(document.createTextNode('4'));
fourBtn.style.padding = '10px';
fourBtn.style.width = '70px';
fourBtn.style.fontSize = '18px';
fourBtn.style.border = '1px solid #000';
fourBtn.style.borderRadius = '5px';
fourBtn.style.marginTop = '8px';
fourBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(fourBtn);

//five Button
const fiveBtn = document.createElement('button');
fiveBtn.appendChild(document.createTextNode('5'));
fiveBtn.style.padding = '10px';
fiveBtn.style.width = '70px';
fiveBtn.style.fontSize = '18px';
fiveBtn.style.border = '1px solid #000';
fiveBtn.style.borderRadius = '5px';
fiveBtn.style.marginTop = '8px';
fiveBtn.style.marginLeft = '5px';
fiveBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(fiveBtn);

//six Button
const sixBtn = document.createElement('button');
sixBtn.appendChild(document.createTextNode('6'));
sixBtn.style.padding = '10px';
sixBtn.style.width = '70px';
sixBtn.style.fontSize = '18px';
sixBtn.style.border = '1px solid #000';
sixBtn.style.borderRadius = '5px';
sixBtn.style.marginTop = '8px';
sixBtn.style.marginLeft = '5px';
sixBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(sixBtn);

//sub Button
const subBtn = document.createElement('button');
subBtn.appendChild(document.createTextNode('-'));
subBtn.style.padding = '10px';
subBtn.style.width = '70px';
subBtn.style.fontSize = '18px';
subBtn.style.border = '1px solid #000';
subBtn.style.borderRadius = '5px';
subBtn.style.marginTop = '8px';
subBtn.style.marginLeft = '5px';
subBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(subBtn);

//seven Button
const sevenBtn = document.createElement('button');
sevenBtn.appendChild(document.createTextNode('7'));
sevenBtn.style.padding = '10px';
sevenBtn.style.width = '70px';
sevenBtn.style.fontSize = '18px';
sevenBtn.style.border = '1px solid #000';
sevenBtn.style.borderRadius = '5px';
sevenBtn.style.marginTop = '8px';
sevenBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(sevenBtn);

//eight Button
const eightBtn = document.createElement('button');
eightBtn.appendChild(document.createTextNode('8'));
eightBtn.style.padding = '10px';
eightBtn.style.width = '70px';
eightBtn.style.fontSize = '18px';
eightBtn.style.border = '1px solid #000';
eightBtn.style.borderRadius = '5px';
eightBtn.style.marginTop = '8px';
eightBtn.style.marginLeft = '5px';
eightBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(eightBtn);


//nine Button
const nineBtn = document.createElement('button');
nineBtn.appendChild(document.createTextNode('9'));
nineBtn.style.padding = '10px';
nineBtn.style.width = '70px';
nineBtn.style.fontSize = '18px';
nineBtn.style.border = '1px solid #000';
nineBtn.style.borderRadius = '5px';
nineBtn.style.marginTop = '8px';
nineBtn.style.marginLeft = '5px';
nineBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(nineBtn);


//multi Button
const multiBtn = document.createElement('button');
multiBtn.appendChild(document.createTextNode('*'));
multiBtn.style.padding = '10px';
multiBtn.style.width = '70px';
multiBtn.style.fontSize = '18px';
multiBtn.style.border = '1px solid #000';
multiBtn.style.borderRadius = '5px';
multiBtn.style.marginTop = '8px';
multiBtn.style.marginLeft = '5px';
multiBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(multiBtn);



//reset Button
const resetBtn = document.createElement('button');
resetBtn.appendChild(document.createTextNode('C'));
resetBtn.style.padding = '10px';
resetBtn.style.width = '70px';
resetBtn.style.fontSize = '18px';
resetBtn.style.border = '1px solid #000';
resetBtn.style.borderRadius = '5px';
resetBtn.style.marginTop = '8px';
resetBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(resetBtn);


//zero Button
const zeroBtn = document.createElement('button');
zeroBtn.appendChild(document.createTextNode('0'));
zeroBtn.style.padding = '10px';
zeroBtn.style.width = '70px';
zeroBtn.style.fontSize = '18px';
zeroBtn.style.border = '1px solid #000';
zeroBtn.style.borderRadius = '5px';
zeroBtn.style.marginTop = '8px';
zeroBtn.style.marginLeft = '5px';
zeroBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(zeroBtn);


//dot Button
const dotBtn = document.createElement('button');
dotBtn.appendChild(document.createTextNode('.'));
dotBtn.style.padding = '10px';
dotBtn.style.width = '70px';
dotBtn.style.fontSize = '18px';
dotBtn.style.border = '1px solid #000';
dotBtn.style.borderRadius = '5px';
dotBtn.style.marginTop = '8px';
dotBtn.style.marginLeft = '5px';
dotBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(dotBtn);


//multi Button
const divideBtn = document.createElement('button');
divideBtn.appendChild(document.createTextNode('/'));
divideBtn.style.padding = '10px';
divideBtn.style.width = '70px';
divideBtn.style.fontSize = '18px';
divideBtn.style.border = '1px solid #000';
divideBtn.style.borderRadius = '5px';
divideBtn.style.marginTop = '8px';
divideBtn.style.marginLeft = '5px';
divideBtn.style.cursor = 'pointer';
document.getElementById('main-div').appendChild(divideBtn);


//create formula div 

const formula = document.createElement('div');
formula.id = 'formula';
formula.style.fontSize = '35px';
formula.style.marginTop = '-325px';
formula.style.marginLeft = '114px'
formula.appendChild(document.createTextNode('Formula :'));
document.getElementById('main').appendChild(formula);

//create input for formula 
const formulaInput = document.createElement('input');
formulaInput.setAttribute('type','text');
formulaInput.style.padding = '12px';
formulaInput.style.width = '190px';
formulaInput.style.border = '1px solid #000';
formulaInput.style.borderRadius = '5px';
formulaInput.style.marginLeft = '8px';
document.getElementById('formula').appendChild(formulaInput);