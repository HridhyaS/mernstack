//1.import express
const express = require('express')
require("./Connection")
var empModel = require("./model/Employee")
var cors = require('cors')

//2.initialize
const app = express()
//mid
app.use(express.json())
app.use(cors())

// 3.api
app.get("/", (req, res) => {
    res.send('Hello World')
})
app.get("/trial", (req, res) => {
    res.send(' This Is A Trial Message')
})
//add api
app.post("/add", async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "Data Added" })
    } catch (error) {
        console.log(error)
    }
})
//get api
app.get("/get", async (req, res) => {
    try {
        const data = await empModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
app.delete("/remove/:id", async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "Data Deleted" })
    } catch (error) {
        console.log(error)
    }
})
app.put("/update/:id", async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id, req.body)
        res.send({ message: "Data Updated" })
    } catch (error) {
        console.log(error)
    }
})

// 4 port setting
app.listen(3004, () => {
    console.log('server is running on port 3004')
})