var express = require("express");
var router = express.Router();


router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});


router.post("/votacao", function (req, res) {
    usuarioController.votacao(req, res);
});

module.exports = router;