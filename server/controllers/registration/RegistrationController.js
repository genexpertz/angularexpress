"use strict";
/**
 * Created by admin on 05/04/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var Registration_1 = require("./Registration");
var router = express_1.Router();
router.post('/', body_parser_1.json(), function (req, res) {
    var registration = new Registration_1.Registration(req.body);
    console.log("firstName - " + registration.firstName);
    console.log("lastName - " + registration.lastName);
    console.log("age - " + registration.age);
    res.send('{"success":"true"}');
});
exports.RegistrationController = router;
