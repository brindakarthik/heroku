
const express = require('express')
const bodyParser = require('body-parser')
const crypto = require('crypto')
const cors = require('cors')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', (req, res) => {

  const timestamp = new Date().getTime() - 30000
  const msg = Buffer.from("QE2SZLhBQHK_PpP25tIzfw" + req.body.meetingNumber + timestamp + req.body.role).toString('base64')
  const hash = crypto.createHmac('sha256',"qrwzZzp1WmPJL2hfFyOV6j8SLeDI1JBCMAVf").update(msg).digest('base64')
  const signature = Buffer.from(`${"QE2SZLhBQHK_PpP25tIzfw"}.${req.body.meetingNumber}.${timestamp}.${req.body.role}.${hash}`).toString('base64')

  res.json({
    signature: signature
  })
})

app.get('/', (req, res) => {
res.send("welcome to KB")

})




var server = app.listen(process.env.PORT || 5000, function () {
 
  console.log("Express is working on port ");
});
