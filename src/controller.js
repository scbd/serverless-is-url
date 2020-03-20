import consola from 'consola'
import $http from 'superagent'

export const init = (app) => {
  app.post('/test', postUrl)
}

export const postUrl =  async (req, res) => {
  try{
    if(!req.body) return false
    const { url } = req.body
    const result  = await test(url) //test 404

    return res.status(200).send(result)
  }
  catch (e){ onError({ e, functionName: 'postUrl', req, res }) }
}

export const test = async (url) => {
  try{
    new URL(url) //test if proper formed url
    
    await $http.head(url)
    return true
  }
  catch(e){
    return false
  }
}
function onError({ e, functionName, req, res }){
  const name       = `Ctrl.${functionName}`
  const { params } = req

  consola.error(`${name}: ${params.name}`, e)

  if (e.statusCode === 404) return res.status(404).send('not found \n')

  res.status(500).send('Internal Server Error \n' + e)
}

