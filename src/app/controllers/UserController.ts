import { Request, Response } from "express"
import { UserProps } from "../types/user";
import Queue from '../lib/Queue';

export default {
  async store(req: Request<{}, {}, UserProps>, res: Response) {
    const {name, email, password} = req.body

    const user = {
      name,
      email,
      password
    }

    await Queue.add('RegistrationMail', {name, email, password})

    return res.json(user)
  }
}