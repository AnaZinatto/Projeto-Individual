var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController")


router.get("/listar", function (req, res) {
    votacaoController.listar(req, res);
});


router.post("/votacao", function (req, res) {
    votacaoController.votacao(req, res);
});

module.exports = router;