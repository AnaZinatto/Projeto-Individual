var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function usuario(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var endereco = req.body.enderecoServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (endereco == undefined){
        res.status(400).send("Seu endereço está undefined!");
    }else {
        
        usuarioModel.usuario(nome, email, endereco)
            .then(
                function (resultado) {
                    res.json(resultado);
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

function votação(req, res) {

    var idVotacao = req.body.idUsuarioServer;
    var golden = req.body.GoldenServer;
    var viralata = req.body.viralataServer;
    var shitzu = req.body.shitzuServer;
    var yorkshire = req.body.yorkshireServer
    var labrador = req.body.labradorServer;
    var outro = req.body.OutroServer
    var nãoTem = req.body.NãoTemServer


    if (golden == undefined || viralata == undefined || shitzu == undefined 
        || yorkshire == undefined || labrador == undefined || outro == undefined || nãoTem == undefined)  {
        res.status(400).send("Selecione uma opção");
    } else {
        
        usuarioModel.votação(golden, viralata, shitzu, yorkshire, labrador, outro, nãoTem, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
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
    usuario,
    listar,
    testar,
    votação
}