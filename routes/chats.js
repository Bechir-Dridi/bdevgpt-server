const express = require("express")
const router = express.Router()
const { createChat } = require("../controllers/chatController")

//test route:
router.get("/", (req, res) => {
    res.json({ mssg: "GET - welcome to the app" })
})

//POST a new workout:
router.post("/", createChat)
//router.post("/vocal", createVocalChat)


module.exports = router