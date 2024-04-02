//Esto grega a la pantalla el valor del boton de la calculadora que toquemos
function agregar (valor){
    document.getElementById('pantalla').value += valor
}
//ESTA ACCION BASIA LA PANTALLA
function borrar(){
    document.getElementById('pantalla').value = ''
}
//ESTA ACCION TOMA EL VALOR DE LA PANTALLA Y EJECUTA LOS CALCULOS
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}
