const botao = document.getElementById('botao');
const input = document.getElementById('input');
const lista = document.getElementById('lista');

function adicionarTarefa () {
    
   let li = document.createElement('li')
   li.innerHTML = input.value + "<span onclick='deletarTarefa(this)'>❌</span>"
   document.querySelector('ul').appendChild(li)

   input.value = ''
}

function deletarTarefa(li){
   li.parentElement.remove()
}