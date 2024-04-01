
const listaDeTarefas = []

renderListaDeTarefa()

function renderListaDeTarefa() {
    let listaDeTarefasHtml = ''

  for (let i = 0; i < listaDeTarefas.length; i++) {
    const tarefa = listaDeTarefas[i]
    const html = `<p>
    ${tarefa} 
    <button onclick="
     listaDeTarefas.splice(${i}, 1)
     renderListaDeTarefa()
    ">Excluir</button>
    </p>`
    listaDeTarefasHtml += html
}
document.querySelector('.listaDeTarefa').innerHTML = listaDeTarefasHtml
}

function tarefas() {
 const nameInput = document.querySelector('.nameInput')
 const afazer = nameInput.value
 listaDeTarefas.push(afazer)
 nameInput.value = ''
 console.log(listaDeTarefas)
 renderListaDeTarefa()
}





