//sempre pensar antes de faer!!!
//immportante é fazer funcionar depois fatorar

//objeto document: todo o html

// buscar os itens da tela
const itensPerguntasERespostas = document.querySelectorAll('.item')
console.log(itensPerguntasERespostas)
//entender que o item foi clicado
itensPerguntasERespostas.forEach(function(item) {
  item.addEventListener('click', function (){
    //verificar se a pergunta clicada está ativa
    const estaAtiva = item.classList.contains('ativo')
    
    //se a pergunta não está ativa
    if(!estaAtiva) {
      //eu preciso fechar todas
      itensPerguntasERespostas.forEach(function(item) {
        item.classList.remove('ativo')
      })
      //preciso abrir a resposta atual
      item.classList.add('ativo')

      //se a pergunta estiver ativa
    } else {
      item.classList.remove('ativo')
    }
        
  })
})





 

