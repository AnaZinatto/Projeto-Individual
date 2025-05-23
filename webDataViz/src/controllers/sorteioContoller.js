var sorteioModel = require("../models/sorteioModel");


function listar(req, res) {
    sorteioModel.listar()
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


function sortear(req, res) {

    var fkUsuario = req.body.fkUsuarioServer;
    var brinde = req.body.brindeServer

    if (fkUsuario == undefined || brinde == undefined) {
        res.status(400).send("fkUsuario ou brinde está undefined!");
        return;
    }


    sorteioModel.sortear(brinde, fkUsuario)
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

module.exports = {
    listar,
    sortear
}