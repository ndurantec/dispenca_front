// document.addEventListener("DOMContentLoaded", function() {
//   carregarComboLocal();
// });

function salvar() {

  const alimento = document.getElementById('nome_alimento').value;


  var headers = new Headers();


  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/alimento/insert', {

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: alimento }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if (response.ok) {

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

function consultar() {

  const alimento = document.getElementById('nome_alimento').value;

  console.log(alimento);

  var headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/alimento/findByNome', {

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: alimento }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if (response.ok) {

      return response.text();
      //Esta linha imprime a mensagem no concole
      //console.log('Foi no servidor e voltou');

      //Esta linha carrega a página sucesso
      //window.location.href = 'sucesso.html'
    } else {
      //Esta linha imprime a mensagem no console
      console.error('Erro na resposta da API');

      //Esta linha imprime a mensagem de erro
      throw new Error('Erro ao tentar buscar o alimento');
    }

  })

  .then(id_alimento => {

    console.log("ID do alimento recebido:", id_alimento);

    if (id_alimento){
      localStorage.setItem('id_alimento', id_alimento);
      alert("Alimento av=chado com sucesso, agora você pode alterá-lo");
    } else {
      localStorage.setItem('id_alimento', '');
      console.error("Id não encontrado na resposta");
    }
  })
  .catch(error =>{
    console.error("Erro capturado no catch", error);
  });
}

function alterar() {

  const alimento = document.getElementById('nome_alimento').value;


  var headers = new Headers();


  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/alimento/update', {

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: alimento }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if (response.ok) {

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

  const alimento = document.getElementById('nome_alimento').value;


  var headers = new Headers();


  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/alimento/delete', {

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: alimento }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if (response.ok) {

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

  fetch('http://127.0.0.1:8080/local/findAll', {

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