"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var welcomeController_1 = require("./controllers/welcomeController");
var port = process.env.PORT || 3000;
var app = express();
app.use('/', welcomeController_1.WelcomeController);
app.listen(port, function () { console.log("Listening on Port " + port); });
//# sourceMappingURL=server.js.map