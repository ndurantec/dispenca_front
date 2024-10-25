


function salvar() { 

    const alimento = document.getElementById('buscar_produto') .value;  
   
  
    var headers = new Headers();    


    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/alimento/insert' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: buscar_produto }),
  
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
    //Aqui será executado caso a then não seja chamado

   //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));
     
  
  }

  //sql: linguagem de programação para banco de dados

  function consultar() { 

    const alimento = document.getElementById('buscar_produto').value;  
   
  
    var headers = new Headers();    


    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/alimento/findById' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: buscar_produto }),
  
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
    //Aqui será executado caso a then não seja chamado

   //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));
     
  
  }
  function alterar() { 

    const alimento = document.getElementById('buscar_produto').value;  
   
  
    var headers = new Headers();    


    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/alimento/update' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: buscar_produto }),
  
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
    //Aqui será executado caso a then não seja chamado

   //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));
     
  
  }

  function apagar() { 

    const alimento = document.getElementById('buscar_produto').value;  
   
  
    var headers = new Headers();    


    headers.append("Content-Type", "application/json");
    headers.append('Access-Control-Allow-Origin', '*');
  
    fetch('http://127.0.0.1:8080/alimento/delete' ,{
  
      method: "POST",
      mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
      cache: "no-cache",
     
      // Convertendo o objeto JavaScript para JSON
      // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
      body: JSON.stringify({ nome: buscar_produto }),
  
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
    //Aqui será executado caso a then não seja chamado

   //Aqui será executado caso a then não seja chamado
    .catch(error => console.error('Erro!:', error));
     
  
  }

  function carregarComboLocal() {

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