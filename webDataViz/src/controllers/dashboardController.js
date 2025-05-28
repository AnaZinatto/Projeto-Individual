var dashboardModel = require("../models/dashboardModel");

function obterTotalDogs(req, res) {
    dashboardModel.obterTotalDogs()
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

function obterNaoTemDogs(req, res) {
    dashboardModel.obterNaoTemDogs()
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

// // function obterMaisTem(req, res) {
// //     dashboardModel.obterMaisTem()
// //         .then(function (resultado) {
// //             if (resultado.length > 0) {
// //                 res.status(200).json(resultado);
// //             } else {
// //                 res.status(204).send("Nenhum resultado encontrado!")
// //             }
// //         }).catch(
// //             function (erro) {
// //                 console.log(erro);
// //                 console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
// //                 res.status(500).json(erro.sqlMessage);
// //             }
// //         );
// // }

// // function obterMenosTem(req, res) {
// //     dashboardModel.obterMenosTem()
// //         .then(function (resultado) {
// //             if (resultado.length > 0) {
// //                 res.status(200).json(resultado);
// //             } else {
// //                 res.status(204).send("Nenhum resultado encontrado!")
// //             }
// //         }).catch(
// //             function (erro) {
// //                 console.log(erro);
// //                 console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
// //                 res.status(500).json(erro.sqlMessage);
// //             }
// //         );
// // }

function carregarGraficoDogs(req, res) {
    dashboardModel.carregarGraficoDogs()
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



module.exports = {
    obterTotalDogs,
    obterNaoTemDogs,
    // obterMaisTem,
    // obterMenosTem,
    carregarGraficoDogs
}