/**
 * Created by admin on 05/04/18.
 */


import {Router, Request, Response} from "express";
import {json, ParsedAsJson} from "body-parser";
import {Registration} from "./Registration";
const router:Router = Router()

router.post('/',json(),(req:Request & ParsedAsJson, res:Response) => {

  var registration = new Registration(<IRegistration> req.body);
  console.log(`firstName - ${registration.firstName}`)
  console.log(`lastName - ${registration.lastName}`)
  console.log(`age - ${registration.age}`)

  res.send('{"success":"true"}')
})


export const RegistrationController:Router = router
