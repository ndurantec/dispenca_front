document.addEventListener("DOMContentLoaded", function() {
   carregarComboAlimento();
});

function salvar() {
  const lote = document.getElementById("estoque").value;
  const quantidade = Number(document.getElementById("estoque").value);
  const codigo = document.getElementById("codigo").value
 
console.log(lote);
console.log(quantidade);

    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/estoque/insert' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ 
        nome: lote,
        quantidade: quantidade 
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
    const lote = document.getElementById("nome_lote");
   
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/alimento/findById' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: lote }),
  
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
    const lote = document.getElementById("nome_lote");
   
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/alimento/update' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: lote }),
  
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
    const lote = document.getElementById("nome_lote");
   
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/alimento/delete' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: lote }),
  
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

  function carregarComboAlimento() {
 
    console.log('Carregou a página e chamou a função');
  
    var headers = new Headers();    
    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/alimento/findAll' ,{
  
      method: "GET",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
  
      headers: headers
  
      
    }).then(response => response.json())
    .then(data => {
        const comboBox = document.getElementById('alimentos');
        data.forEach(local => {
            const option = document.createElement('option');
            option.value = local.id;
            option.textContent = local.nome;
            comboBox.appendChild(option);
        });
    })
    .catch(error => console.error('Erro ao carregar alimentos:', error));
     
  
  }