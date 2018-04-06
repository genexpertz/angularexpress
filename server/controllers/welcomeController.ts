

import {Router, Request, Response} from "express";
const router:Router = Router()

router.get('/',(req:Request, res:Response) => {
  res.send('Hello ExpertzLab Kochi Palarivattom')
})

router.get('/product/:prodId/:skuId',(req:Request, res:Response) => {
  let pid = req.params.prodId
  let sid = req.params.skuId
  res.send(` Product = ${pid}, Sku=${sid}`)

})

export const WelcomeController:Router = router
