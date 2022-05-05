import { Request, Response } from 'express'

export const homeController = (req: Request, res: Response) => {
  res.send('Utilize a rota https://pixel.slicedpixel.com/pixel.png?id=[ID-CAMPANHA]&email=email@dominio.com para registrar o envio')
}
