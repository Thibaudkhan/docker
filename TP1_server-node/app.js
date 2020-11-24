const express = require('express')
const app = express()

app.get("/",function(req,res) {
	res.send('Wesh poto')
})

app.listen(8090,function(){
	console.log('port 8090')
})

