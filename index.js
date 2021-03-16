require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3089
app.use(bodyParser.json(), cors())
app.options('*', cors());
app.use(express.logger());
app.get('/', (req, res) => {
res.send("welcome to OA")

})

app.post('/', (req, res) => {

  const timestamp = new Date().getTime() - 30000
  const msg = Buffer.from("QE2SZLhBQHK_PpP25tIzfw" + req.body.meetingNumber + timestamp + req.body.role).toString('base64')
  const hash = crypto.createHmac('sha256',"qrwzZzp1WmPJL2hfFyOV6j8SLeDI1JBCMAVf").update(msg).digest('base64')
  const signature = Buffer.from(`${"QE2SZLhBQHK_PpP25tIzfw"}.${req.body.meetingNumber}.${timestamp}.${req.body.role}.${hash}`).toString('base64')

  res.json({
    signature: signature
  })
})

app.listen( process.env.PORT, () => console.log(`Zoom Web SDK Sample Signature Node.js on port ${port}!`))
