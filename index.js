/*Implementar um sistema de controle de afazeres (TO-DO list).

O sistema deve atender aos seguintes requisitos:
O usuário deve ser capaz de adicionar novas colunas de afazeres e dar um título para elas. Por exemplo: “a fazer”, “fazendo”, “concluídas”;
Em cada coluna, o sistema deve permitir que o usuário insira cartões de atividades, com a descrição da tarefa;
Em cada cartão adicionado, deve ser possível marcá-lo como concluído ou removê-lo da coluna em questão;
O sistema deve permitir que usuário mova um cartão de uma coluna para outra (esse movimento não precisa, necessariamente, ser interativo, do tipo arrastar e soltar, mas pode ser uma mudança na configuração do cartão).
Ponto extra: implemente o armazenamento da configuração da lista sendo feito no navegador do usuário, utilizando LocalStorage.*/

novaCor = 0
novoCaption = 0
card = 0
tfoots = 0
id = 0
idBotaoMenos = 0
let idTable = 0
let idLinha = 0
let idTbody = 0
let valor1 = 0
let valor2 = 0
//aluna = 'nomeTeste'

function criar(){
    tituloColuna = document.getElementById('coluna')
    inserirNaTela = document.getElementById('tabelas')

    let titulo1 = document.createTextNode(tituloColuna.value)
    let titulo2 = document.createTextNode('+')
    let titulo3 = document.createTextNode('O que deve ser feito?')
    let titulo4 = document.createTextNode('Prazo:')
    let titulo5 = document.createTextNode('Remover')
    let titulo6 = document.createTextNode('-')
    let buttonEnviarCor = document.createTextNode('OK')
    
    let divp = document.createElement('div')
    let table = document.createElement('table')
    let caption = document.createElement('caption')
    let tbody = document.createElement('tbody')
    tbody.setAttribute('class', 'tbodys')
    tbody.setAttribute('id', idTbody)
    let inputColor = document.createElement('input')
    let buttonColor = document.createElement('button')
    let tfoot = document.createElement('tfoot')
    let tr1 = document.createElement('tr')
    tr1.setAttribute('class', 'linha')
    tr1.setAttribute('id', idLinha)
    let tr2 = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let label1 = document.createElement('label')
    let label2 = document.createElement('label')
    let input1 = document.createElement('input')
    let input2 = document.createElement('input')
    let button = document.createElement('button')
    let button2 = document.createElement('button')
    let button3 = document.createElement('button')
    let div = document.createElement('div')
    div.setAttribute('class', 'card')
    input1.setAttribute('type', 'text')
    input2.setAttribute('type', 'datetime-local')

    let titulo7 = document.createTextNode('Tarefa concluída ?')
    let label3 = document.createElement('label')
    label3.appendChild(titulo7)
    let inputConclu = document.createElement('input')
    inputConclu.setAttribute('type', 'checkbox')
    inputConclu.setAttribute('id', idLinha)
    inputConclu.setAttribute('class', 'checkbox')
    inputColor.setAttribute('type', 'color')
    

    
    buttonColor.appendChild(buttonEnviarCor)
    button.appendChild(titulo2)
    label1.appendChild(titulo3)
    label2.appendChild(titulo4)
    button2.appendChild(titulo5)
    button3.appendChild(titulo6)
    caption.appendChild(titulo1)
    caption.appendChild(inputColor)
    caption.appendChild(buttonColor)

    if(tituloColuna.value != ""){
        inputColor.setAttribute('id', novaCor)
        inputColor.setAttribute('class', 'colors')
        caption.setAttribute('id', novoCaption)
        caption.setAttribute('class', 'captions')
        tfoot.setAttribute('id', tfoots)
        tfoot.setAttribute('class', 'tfoots')
        buttonColor.setAttribute('onclick', 'mudarCor('+inputColor.id+', ' +caption.id+', '+tfoot.id+')')
        button.setAttribute('id', idTable)
        button.setAttribute('onclick', 'adicionarLinha('+button.id+')')
        button.setAttribute('class', 'botao')
        button2.setAttribute('id', idLinha)
        button2.setAttribute('onclick', 'removerLinha('+idLinha+', '+idTbody+', '+idTable
        +')')
        button2.setAttribute('class', 'botao2')
        button3.setAttribute('onclick', 'excluirColuna()')
        div.setAttribute('id', card)
        table.setAttribute('id', idTable)
        table.setAttribute('class', 'tabela')
        div.appendChild(label1)
        div.appendChild(input1)
        div.appendChild(label2)
        div.appendChild(input2)
        divp.appendChild(inputConclu)
        divp.appendChild(label3)
        div.appendChild(divp)
        div.appendChild(button2)
        td1.appendChild(div)
        tr1.appendChild(td1)
        td2.appendChild(button)
        td2.appendChild(button3)
        tr2.appendChild(td2)
        tfoot.appendChild(tr2)
        tbody.appendChild(tr1)
        table.appendChild(caption)
        table.appendChild(tbody)
        table.appendChild(tfoot)

        inserirNaTela.appendChild(table)
        armazenamentoLocal(idTable)
      
        tituloColuna.value = ""
        id++
        novaCor++
        novoCaption++
        tfoots++
        card++
        idLinha ++
        idTable ++
        idTbody ++

    }
    else{
        alert("Insira algum nome para adicionar uma coluna.")
    }
}

function adicionarLinha(numero){
    let table = document.getElementsByClassName('tabela')
    let tbody = document.getElementsByClassName('tbodys')
    for(let i = 0; i < table.length; i++){
        if(numero == table[i].id){
          let  titulo1 = document.createTextNode('O que deve ser feito?')
          let  titulo2 = document.createTextNode('Prazo:')
          let  titulo3 = document.createTextNode('Remover')
          let  titulo4 = document.createTextNode('Salvar')

            let label1 = document.createElement('label')
            let label2 = document.createElement('label')
            label1.appendChild(titulo1)
            label2.appendChild(titulo2)
            let divp = document.createElement('div')

            let titulo7 = document.createTextNode('Tarefa concluída ?')
            let label3 = document.createElement('label')
            label3.appendChild(titulo7)
            let inputConclu = document.createElement('input')
            inputConclu.setAttribute('type', 'checkbox')
            inputConclu.setAttribute('class', 'checkbox')
            //inputConclu.setAttribute('checked', 'checkbox')
            
            let inputColor = document.createElement('input')
            inputColor.setAttribute('type', 'color')

            let input1 = document.createElement('input')
            input1.setAttribute('id', valor1)
            input1.setAttribute('class', 'tarefa')
            input1.setAttribute('type', 'text')
            let input2 = document.createElement('input')
            input2.setAttribute('type', 'datetime-local')
            input2.setAttribute('class', 'data')
            input2.setAttribute('id', valor2)
          
            let button2 = document.createElement('button')
            button2.appendChild(titulo3)
            button2.setAttribute('id', idLinha)
            button2.setAttribute('onclick', 'removerLinha('+idLinha+', '+numero+', '+numero
        +')')
            button2.setAttribute('class', 'botao2')

            let button3 = document.createElement('button')
            button3.appendChild(titulo4)
            button3.setAttribute('onclick', 'armazenamentoLocal2('+valor1+', '+valor2+')')
            let td = document.createElement('td')
            let tr = document.createElement('tr')
            tr.setAttribute('class', 'linha')
            tr.setAttribute('id', idLinha)
            let div = document.createElement('div')
            div.setAttribute('class', 'card')
            div.setAttribute("id", "getLastId()")

            div.appendChild(label1)
            div.appendChild(input1)
            div.appendChild(label2)
            div.appendChild(input2)
            divp.appendChild(inputConclu) 
            divp.appendChild(label3)
            div.appendChild(divp)
            div.appendChild(button2)
            div.appendChild(button3)
            td.appendChild(div)
            tr.appendChild(td)

            valor1++
            valor1++
          
            for(let i = 0; i<tbody.length; i++){
              
              if(tbody[i].id == numero){
                tbody[i].appendChild(tr)
                idLinha ++
              }
            }
          
        }
    }
}



function armazenamentoLocal(v1){

  let columId = document.getElementsByClassName('tabela')

  for(let l = 0; l< columId.length; l++){
    if(v1 == columId[l].id){
      localStorage.setItem("Coluna", v1)
    }
  }

  console.log(v1, columId)
}

function armazenamentoLocal2(v2, v3){

  let descricao = document.getElementsByClassName('tarefa')
  let d = descricao[v2].value

  let data = document.getElementsByClassName('data')
  let dt = data[v3].value

  let linha = document.getElementsByClassName('linha')

  for(let l = 0; l < linha.length; l++){
    if(linha[l].id == v2){
      descricao = document.getElementById(v2).value
      data = document.getElementById(v3).value
      localStorage.setItem("Descrição", d)
      localStorage.setItem("Data", dt)
    }
  }

  console.log(v2 + " Descrição: "+ d)
  console.log(v3 + " Data: "+ dt)
}

function excluirColuna(){
  localStorage.removeItem("Coluna")
}

function removerLinha(numeroLinha, numeroTbody, numeroTabela){
  let excluir = confirm('Você deseja apagar a tarefa ?')
  if(excluir == true){
    let table = document.getElementsByClassName('tabela')
    let tbody = document.getElementsByClassName('tbodys')
    let linha = document.getElementsByClassName('linha')
    for(let j = 0; j< table.length; j++){
      if(numeroTabela == table[j].id){    
        for(let i = 0; i< tbody.length; i++){
          if(tbody[i].id == numeroTbody){
            for(let l = 0; l < linha.length; l++){
              if(linha[l].id == numeroLinha){
                tbody[i].removeChild(linha[l])
                //excluir()
              }
            }
          }
        }
      }
    }
  }
}

function mudarCor(n, n2, n3){
  let atualizarCor = document.getElementsByClassName('colors')
  cor = atualizarCor[n].value
  let caption = document.getElementsByClassName('tfoots')
  let tfoot = document.getElementsByClassName('captions')
  caption[n2].style.backgroundColor = cor
  tfoot[n3].style.backgroundColor = cor
}