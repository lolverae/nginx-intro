const express = require('express')
const app = express()
const port = 8888
const appid = process.env.APPID;


app.get("/", (req,res) =>{
res.send(`appid: ${appid} home page: says hello!`)})

app.get("/app1", (req,res) => {
res.send(`appid: ${appid} app1 page: says hello!`)})
 
app.get("/app2", (req,res) => {
res.send(`appid: ${appid} app2 page: says hello!`)})
 
app.get("/admin", (req,res) => {
res.send(`appid: ${appid} ADMIN page: very few people should see this`)})

app.listen(port, () => {
  console.log(`${appid} is listening at http://localhost:${port}`)
})
