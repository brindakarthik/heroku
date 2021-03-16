

const express = require('express')


const app = express()

app.get('/', (req, res) => {
res.send("welcome to OA")

})


var server = app.listen(process.env.PORT || 5000, function () {
 
  console.log("Express is working on port ");
});

