document.addEventListener("DOMContentLoaded", function () {
  carregarComboAlimento();
});

function salvar() {
  const lote = document.getElementById('estoque').value;
  const alimento = document.getElementById('alimentos').value;
  const quantidade = Number(document.getElementById('quantidade').value);
  const codigo = document.getElementById('codigo').value;
  const lote_vencimento = document.getElementById('data_de_vencimento').value;

  console.log(lote);
  console.log(alimento);
  console.log(quantidade);
  console.log(codigo);
  console.log(lote_vencimento);

  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  //fetch('http://127.0.0.1:8080/estoque/insert' ,{

  fetch('http://127.0.0.1:8080/estoque/insert', {

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({
      lote: lote,
      alimento: { id: alimento },
      quantidade: quantidade,
      codigo: codigo,
      data: lote_vencimento

    }),

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
    .catch(error => console.error('Erro!:', error));


}

function consultar() {
  const codigo_lote = document.getElementById('codigo').value;

  console.log(codigo_lote)


  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/estoque/findByCodigo', {

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ codigo: codigo_lote }),

    headers: headers

    //Aqui inicia função then
  }).then(response => {

    if (response.ok) {
      return response.text();
    } else {
      //Esta linha imprime a mensagem no console
      console.error('Erro na resposta da API');

      //Esta linha imprime a mensagem de erro
      throw new Error('Erro ao tentar buscar o lote');
    }

  })
    .then(id_lote => {
      console.log("ID do lote recebido:", id_lote);

      if (id_lote) {
        localStorage.setItem('id_lote', id_lote);
        alert("Item achado com sucesso! Agora é possivel alterar ou deletar");
      } else {
        console.error("Id não encontrado na resposta");
      }
    })
    .catch(error => {
      console.error("Erro capturado no catch:", error);
    });
}


function alterar() {
  const lote = document.getElementById("nome_lote");


  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch(`http://127.0.0.1:8080/alimento/${ID}`, {

    method: "PUT",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: lote }),

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
    .catch(error => console.error('Erro!:', error));


}


function apagar() {
  const lote = document.getElementById("nome_lote");


  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/alimento/delete', {

    method: "POST",
    mode: "cors", // Usando 'cors' para permitir a requisição de origem cruzada
    cache: "no-cache",

    // Convertendo o objeto JavaScript para JSON
    // Esta parte é importante onde você deve passar os parametros (dados) da sua tela
    body: JSON.stringify({ nome: lote }),

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
    .catch(error => console.error('Erro!:', error));


}

function carregarComboAlimento() {

  console.log('Carregou a página e chamou a função');

  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append('Access-Control-Allow-Origin', '*');

  fetch('http://127.0.0.1:8080/alimento/findAll', {

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