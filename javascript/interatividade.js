const turnon = document.getElementById('turnon')
const turnoff = document.getElementById('turnoff')
const lamp = document.getElementById('lamp')  

function lampon (){
    lamp.src = "./imagens/acesa.jpg"
}
function lampoff(){
    lamp.src = "./imagens/Apagada.jpg"
}
function lampbroken(){
    lamp.src = "./imagens/Quebrada.jpg"
}

turnon.addEventListener('click', lampon)
turnoff.addEventListener('click',lampoff)
lamp.addEventListener('mouseover',lampon)
lamp.addEventListener('mouseout',lampoff)
lamp.addEventListener('dblclick',lampbroken)