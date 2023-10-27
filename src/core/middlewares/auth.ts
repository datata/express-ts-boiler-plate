import { NextFunction, Request, Response } from "express"
import { TokenDecoded } from "../types"

const auth = (req: Request, res: Response, next: NextFunction) => {
  const tokenDecoded: TokenDecoded = {
    id: Math.floor(Math.random() * 100) + 1,
    email: "fake_user_email",
    role: "fake_user_role"
  }

  req.token = tokenDecoded
  next()  
}

export default auth
