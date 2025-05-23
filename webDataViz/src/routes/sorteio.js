var express = require("express")
var router = express.Router();

var sorteioController = require("../controllers/sorteioContoller")

router.post("/sorteio", function (req, res) {
    sorteioController.sortear(req, res);
});

module.exports = router;