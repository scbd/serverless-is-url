
  <p align="center"><img width="52px" height="65px" src="https://www.cbd.int/styles/ui/templates/cbd2011/images/logo-cbd-leaf-line.gif" alt="Secretariat of the Convention on Biological Diversity"><img width="148x" height="65px" src="https://www.cbd.int/styles/ui/templates/cbd2011/images/logo-cbd-text-en.gif" alt="Secretariat of the Convention on Biological Diversity"></p>
<h1 align="center">IS-URL Service</h1>
<p> test a url if valid and live returning true or false</p>

```js
export const testUri = async(url) => {
  const service  = 'https://injo3jyxlb.execute-api.us-east-1.amazonaws.com/stg/test'
  const headers  = { headers: { Authorization: `Bearer ${process.env.TOKEN}` } }
  const body     = { url }

  const { data } = await axios.post(service, body, headers)

  return data // true || false
}
```