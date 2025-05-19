var usuarioModel = require("../models/votacaoModel");


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

        usuarioModel.votacao(shihtzu, golden, viraLata, yorkshire, pastorAlemao, outro, nenhum, idUsuario)
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