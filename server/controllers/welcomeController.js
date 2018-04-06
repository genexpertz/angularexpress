"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/', function (req, res) {
    res.send('Hello ExpertzLab Kochi Palarivattom');
});
router.get('/product/:prodId/:skuId', function (req, res) {
    var pid = req.params.prodId;
    var sid = req.params.skuId;
    res.send(" Product = " + pid + ", Sku=" + sid);
});
exports.WelcomeController = router;
