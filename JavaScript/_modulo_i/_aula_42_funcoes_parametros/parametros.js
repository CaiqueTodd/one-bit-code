// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto
function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
  }
  function parametrosDoJeitoCerto(usuario) {
    // ...
  }
  // Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante
  parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
  const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
  }
  parametrosDoJeitoCerto(dadosDoUsuario)