import { Request, Response } from 'express'
import { CreateRecord } from '../services/airtable'

const pixel = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMAQObYZgAAAApJREFUeNpjYQAAAAoABUouQOkAAAAASUVORK5CYII=', 'base64')

function send (response: Response, code: number, description: string, headers: any, body: any) {
  response.writeHead(code, description, headers)
  response.end(body)
}

export const pixelTracker = (req: Request, res: Response) => {
  const date = new Date()
  const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)
  const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
  const seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  const now = `${date.getFullYear()}-${month}-${day} ${hours}:${minutes}:${seconds}`
  const idCampaign = req.query.id || 'geral' as string
  const ip = req.ip
  const email = req.query.email
  const userAgent = req.headers['user-agent']
  const referer = req.headers.referer
  const host = req.headers.host
  const acceptLanguage = req.headers['accept-language']
  const data = `${now},${idCampaign},${email},${ip},"${userAgent}",${host},${referer},"${acceptLanguage}"\r`
  console.log(data)

  try {
    CreateRecord(idCampaign as string, now, email as string, ip, userAgent as string, host as string, referer as string, acceptLanguage as string)
    console.log('Register added')
  } catch (err) {
    console.log(err)
  }
  return send(res, 200, 'OK', { 'Content-Type': 'image/png' }, pixel)
}
