const botao = document.querySelector('button')
const input = document.querySelector('input')
const lista = document.querySelector('.list')
const erro = document.querySelector('span')

botao.addEventListener("click",gerarTarefa)
window.addEventListener('keydown',enter)

function gerarTarefa(){
if(input.value ==''){
    erro.innerHTML = 'ERRO INPUT VAZIO!'
    erro.classList.add('erro')

} else{
    // Erro
    erro.style.display = 'none'

    let tarefa = document.createElement('li')
    let lixo = document.createElement('span')
    let checkbox = document.createElement('input')
    
    //? TAREFA
    tarefa.textContent = input.value
    lista.appendChild(tarefa)
    tarefa.classList.add('tarefa')
    tarefa.appendChild(lixo)

    //? CHECKBOX
    checkbox.type = "checkbox"
    lista.appendChild(checkbox)
    checkbox.classList.add('check')
    checkbox.addEventListener('click',function(){
    if(checkbox.checked == true){
        tarefa.style.textDecoration ='line-through'
    } else{
        tarefa.style.textDecoration =''
    }
        
    })

    //? LIXO
    lixo.classList.add('lixo','material-symbols-outlined')
    lixo.innerHTML = 'delete'; 
    lixo.style.cursor = 'pointer';
    lixo.addEventListener('click',()=> {
        lista.removeChild(tarefa); 
    })  
    input.value = ''   
}
}
function enter(e){
    if(e.key==='Enter'){
        gerarTarefa()
    }
}
