
const listaDeTarefas = [{
  name: 'make dinner',
  data: '2022-12-22'
}, {
  name: 'wash dishes',
  data: '2022-12-22'
}]

renderListaDeTarefa()

function renderListaDeTarefa() {
    let listaDeTarefasHtml = ''

  for (let i = 0; i < listaDeTarefas.length; i++) {
    const tarefaObjeto = listaDeTarefas[i]
    //const name = tarefaObjeto.name
    //const data = tarefaObjeto.data
    const { name , data } = tarefaObjeto
    const html = `<p>
    ${name} ${data}
    <button onclick="
     listaDeTarefas.splice(${i}, 1)
     renderListaDeTarefa()
    " class="excluirBtn">Excluir</button>
    </p>`
    listaDeTarefasHtml += html
}
document.querySelector('.listaDeTarefa').innerHTML = listaDeTarefasHtml
}

function tarefas() {
 const nameInput = document.querySelector('.nameInput')
 const name = nameInput.value

 const dataInputElemento = document.querySelector('.data-input')
 const data = dataInputElemento.value

 listaDeTarefas.push({
  name,
  data})
 nameInput.value = ''
 console.log(listaDeTarefas)
 renderListaDeTarefa()
}


