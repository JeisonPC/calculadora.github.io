// Cuadrado
const perimetroCuadrado = (lado) => lado * 4;
const areaCuadrado = (lado) => lado * lado;

// Triángulo
const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) => (base * altura) / 2;

// Circulo
const diametroCirculo = (radio) => radio * 2;
const PI = Math.PI;
const perimetroCirculo = (radio) => diametroCirculo(radio) * PI;
const areaCirculo = (radio) => PI * radio ** 2;



//Interactuar con el HTML

//CUADRADOS

function CalcularPerimetroCuadrado(){

    const input = document.getElementById("InputCuadrado");

    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    document.getElementById("resultado").innerHTML = perimetro;

    
}

function CalcularAreaCuadrado(){

    const input = document.getElementById("InputCuadrado");

    const value = input.value;

    const area = areaCuadrado(value);

    document.getElementById("resultado").innerHTML = "<h2>El área del cuadrado es:</h2>"+area;
}

//TRIANGULOS

function CalcularAreaTriangulo(){
    const 
}

//OPERACIÓN ESCONDIDA SI NO DA CLIC EN FIGURA
function selectionfigu() {

    const texto = document.getElementById('selecciona').style.display = 'none';

    const operaciones = document.getElementById('operation').style.display = 'block';
}

