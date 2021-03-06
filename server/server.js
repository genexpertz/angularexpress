"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var welcomeController_1 = require("./controllers/welcomeController");
var path = require("path");
var RegistrationController_1 = require("./controllers/registration/RegistrationController");
var port = process.env.PORT || 3000;
var app = express();
app.use('/rest/welcome', welcomeController_1.WelcomeController);
app.use('/rest/registration', RegistrationController_1.RegistrationController);
app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.listen(port, function () { console.log("Listening on Port " + port); });
