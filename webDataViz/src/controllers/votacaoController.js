var votacaoModel = require("../models/votacaoModel");

function listar(req, res) {
    votacaoModel.listar()
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


function votacao(req, res) {

    var idUsuario = req.body.idUsuarioServer;
    var shihtzu = req.body.shihtzuServer;
    var golden = req.body.goldenServer;
    var viraLata = req.body.viraLataServer
    var yorkshire = req.body.yorkshireServer
    var pastorAlemao = req.body.pastorAlemaoServer
    var outro = req.body.outroServer
    var nenhum = req.body.nenhumServer



    if (shihtzu == undefined || golden == undefined || viraLata == undefined || yorkshire == undefined
        || pastorAlemao == undefined || outro == undefined || nenhum == undefined
    ) {
        res.status(400).send("Selecione uma opção");
    } else {

        votacaoModel.votacao(shihtzu, golden, viraLata, yorkshire, pastorAlemao, outro, nenhum, idUsuario)
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
    listar,
    votacao
}