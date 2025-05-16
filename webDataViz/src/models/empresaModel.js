var database = require("../database/config");

function registrar(nome, email, endereco) {
    
  var instrucaoSql = `
      INSERT INTO usuario (nome, email, endereco) VALUES ('${nome}', '${email}', '${endereco}');
  `;
  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = { registrar };
