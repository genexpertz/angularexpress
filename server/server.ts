
import * as express from "express"
import {WelcomeController} from "./controllers/welcomeController"
import * as path from "path";
import {RegistrationController} from "./controllers/registration/RegistrationController";

const port:number = process.env.PORT || 3000;

var app:express.Application = express()

app.use('/rest/welcome',WelcomeController)
app.use('/rest/registration',RegistrationController)

app.use('/',express.static(path.join(__dirname,'../client/dist')))
app.listen(port,() => { console.log(`Listening on Port ${port}`)})
