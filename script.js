// Função construtora para criar objetos de Bebida
function Bebida(nome, preco) {
    this.nome = nome; // Propriedade nome
    this.preco = preco; // Propriedade preco
    
    // Método para calcular o total do pedido
    this.calcularTotal = function(quantidade) {
      return this.preco * quantidade;
    };
  }
  
  // Função para exibir o menu de bebidas e solicitar a escolha do usuário
  function exibirMenu() {
    console.log("Bem-vindo ao Simulador de Pedidos de Bebidas!");
    console.log("Escolha uma bebida:");
    console.log("1. Cerveja - $5");
    console.log("2. Refrigerante - $3");
    console.log("3. Suco - $4");
    
    let escolha = parseInt(prompt("Digite o número da bebida escolhida (1-3):"));
  
    // Valida a escolha do usuário
    while (escolha < 1 || escolha > 3 || isNaN(escolha)) {
      escolha = parseInt(prompt("Escolha inválida. Digite um número entre 1 e 3:"));
    }
  
    return escolha;
  }
  
  // Função para solicitar a quantidade desejada
  function solicitarQuantidade() {
    let quantidade = parseInt(prompt("Digite a quantidade desejada:"));
  
    // Valida a quantidade do usuário
    while (quantidade < 1 || isNaN(quantidade)) {
      quantidade = parseInt(prompt("Quantidade inválida. Digite um número maior que 0:"));
    }
  
    return quantidade;
  }
  
  // Função principal para executar o simulador de pedidos
  function executarSimulador() {
    // Exibe o menu e captura a escolha do usuário
    let escolha = exibirMenu();
    let bebidaEscolhida;
    
    // Cria o objeto Bebida de acordo com a escolha do usuário
    switch (escolha) {
      case 1:
        bebidaEscolhida = new Bebida("Cerveja", 5);
        break;
      case 2:
        bebidaEscolhida = new Bebida("Refrigerante", 3);
        break;
      case 3:
        bebidaEscolhida = new Bebida("Suco", 4);
        break;
    }
  
    // Solicita a quantidade desejada
    let quantidade = solicitarQuantidade();
  
    // Calcula o total do pedido usando o método do objeto Bebida
    let total = bebidaEscolhida.calcularTotal(quantidade);
  
    // Exibe o resultado no console
    console.log(`Você pediu ${quantidade} ${bebidaEscolhida.nome}(s).`);
    console.log(`Total a pagar: $${total}`);
  }
  
  // Executa o simulador
  executarSimulador();
  