import express from 'express'
import cors from 'cors'
import { init } from './controller'
import  bodyParser from 'body-parser'
import consolaGlobalInstance from 'consola'

const app = express()

app.use(bodyParser.json({ strict: false }))


app.use(cors())
app.use(cache)
app.use(authorize)

init(app)

app.use((req, res) => res.status(404).send({ code: 'notFound', statusCode: 404 }))

export default app

function cache (req, res, next){
  res.header('Cache-Control', 'max-age=500')
  return next()
}

function authorize (req, res, next){
  let auth = req.headers.authorization || ' '

  auth = auth.replace(/^(Ticket|Token|Bearer)\s+/, '')

  const authorized = (auth === process.env.AUTHORIZATION)

  if(authorized) return next()
  
  return res.status(401).send({ code: 'not authorized', statusCode: 401 })
}