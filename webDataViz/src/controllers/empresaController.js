var empresaModel = require("../models/empresaModel");

function autenticar(req, res){
    var email = req.body.emailServer
    var nome = req.body.nomeServer
    var endereco = req.body.enderecoServer
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (nome== undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else if (endereco== undefined) {
        res.status(400).send("Seu endereço está indefinida!");
    }else{
        empresaModel.authenticate(email, nome, endereco)
            .then(function(response){
                if (response.length == 1) {
                    res.json({
                        email: response[0].emailUser,
                        name: response[0].nameUser // opcional se quiser mostrar nome
                    });
                } else if (response.length == 0) {
                    res.status(403).send("Email e/ou senha inválido(s)");
                } else {
                    res.status(403).send("Mais de um usuário com mesmo login e senha!");
                }
            })
    }
}

function cadastrar(req, res) {
  var nome = req.body.nomeServer
  var email = req.body.emailServer
  var endereco = req.body.enderecoServer

  if (nome == undefined) {
        res.status(400).send("nome = undefined!");
    } else if (email == undefined) {
        res.status(400).send("email = undefined!");
    } else if (endereco == undefined) {
        res.status(400).send("endereco = undefined!");
    } else {
        empresaModel.registrar(nome, email, endereco)
            .then(
                function (result) {
                    res.json({idUsuario: result.insertId});
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}
module.exports = {
    autenticar,
    cadastrar
}