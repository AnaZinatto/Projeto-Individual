var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/totalDogs", function (req, res) {
    dashboardController.obterTotalDogs(req, res);
});

router.get("/naoTemDogs", function (req, res) {
    dashboardController.obterNaoTemDogs(req, res);
});

// // router.get("/dashboard/MaisTem", function (req, res) {
// //     dashboardController.obterMaisTem(req, res);
// // });

// // router.get("/dashboard/MenosTem", function (req, res) {
// //     dashboardController.obterMenosTem(req, res);
// // });

router.get("/graficoDogs", function (req, res) {
    dashboardController.carregarGraficoDogs(req, res);
});

module.exports = router;
