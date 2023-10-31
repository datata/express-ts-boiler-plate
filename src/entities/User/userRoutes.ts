import { Request, Response, Router } from "express";

const router = Router()

router.get('/', (__req: Request, res: Response) => {
  res.send('Get All Users')
})

export  {router};