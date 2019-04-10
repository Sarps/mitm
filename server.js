const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

const http = require('request-promise')
 
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.all('*', async (req, res) => {

    console.log(req.originalUrl)

    let resp = await http.get(`http://www.google.com${req.originalUrl}`)

    console.log("resp", resp)

    res.write(resp)

})

app.listen(8080, () => {
    console.log('Server launched')
})
