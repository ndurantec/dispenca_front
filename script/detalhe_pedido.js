// document.addEventListener("DOMContentLoaded", function() {
//   carregarComboLocal();
// });


function salvar() {

  const quantidade = Number(document.getElementById('qtd').value);
  const status_entrega = document.getElementById('status').value;
  const valor_pedido = document.getElementById('valor').value;
  
  console.log (quantidade);
  console.log (status_entrega);
  console.log (valor_pedido);
 
  var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/DetalhePedido/insert' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({
         quantidade: quantidade,
         status: status_entrega,
         valor: valor_pedido
        }),
  
      headers: headers
  
      //Aqui inicia função then
    }).then(response => {
  
      if(response.ok) {
  
        //Esta linha imprime a mensagem no concole
        console.log('Foi no servidor e voltou');
  
        //Esta linha carrega a página sucesso
        //window.location.href = 'sucesso.html'    
      } else {
        //Esta linha imprime a mensagem no console
        console.log('Aconteceu algo que não foi possivel salvar');
  
        //Esta linha imprime a mensagem de erro
        throw new Error('Erro ao tentar salvar');
      }
  
    })
    //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));
}

function consultar() {

  const pedido = document.getElementById('detalhe_pedido') .value;

  var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/DetalhePedido/findById' ,{
  
      method: "GET",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: detalhe_pedido }),
  
      headers: headers
  
      //Aqui inicia função then
    }).then(response => {
  
      if(response.ok) {
  
        //Esta linha imprime a mensagem no concole
        console.log('Foi no servidor e voltou');
  
        //Esta linha carrega a página sucesso
        window.location.href = 'sucesso.html'    
      } else {
        //Esta linha imprime a mensagem no console
        console.log('Aconteceu algo que não foi possivel salvar');
  
        //Esta linha imprime a mensagem de erro
        throw new Error('Erro ao tentar salvar');
      }
  
    })
    //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));
}


function alterar() {

  const pedido = document.getElementById('detalhe_pedido') .value;

  var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/DetalhePedido/atualizarDetalhePedido' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: detalhe_pedido }),
  
      headers: headers
  
      //Aqui inicia função then
    }).then(response => {
  
      if(response.ok) {
  
        //Esta linha imprime a mensagem no concole
        console.log('Foi no servidor e voltou');
  
        //Esta linha carrega a página sucesso
        window.location.href = 'sucesso.html'    
      } else {
        //Esta linha imprime a mensagem no console
        console.log('Aconteceu algo que não foi possivel salvar');
  
        //Esta linha imprime a mensagem de erro
        throw new Error('Erro ao tentar salvar');
      }
  
    })
    //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));
}

function apagar() {

  const pedido = document.getElementById('detalhe_pedido') .value;

  var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/DetalhePedido/deletarDetalhePedido' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: detalhe_pedido }),
  
      headers: headers
  
      //Aqui inicia função then
    }).then(response => {
  
      if(response.ok) {
  
        //Esta linha imprime a mensagem no concole
        console.log('Foi no servidor e voltou');
  
        //Esta linha carrega a página sucesso
        window.location.href = 'sucesso.html'    
      } else {
        //Esta linha imprime a mensagem no console
        console.log('Aconteceu algo que não foi possivel salvar');
  
        //Esta linha imprime a mensagem de erro
        throw new Error('Erro ao tentar salvar');
      }
  
    })
    //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));
}

function carregarComboLocal() {
 
  const pedido = document.getElementById('detalhe_pedido') .value;

  console.log('Carregou a página e chamou a função');

  var headers = new Headers();    
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/local/findAll' ,{

    method: "GET",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",
   
    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela

    headers: headers

    
  }).then(response => response.json())
  .then(data => {
      const comboBox = document.getElementById('locais');
      data.forEach(local => {
          const option = document.createElement('option');
          option.value = local.id;
          option.textContent = local.nome;
          comboBox.appendChild(option);
      });
  })
  .catch(error => console.error('Erro ao carregar locais:', error));
   

}

   
  
    
    
  

