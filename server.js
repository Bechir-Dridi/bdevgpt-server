// developed by "Bechir Dridi"
// Portfolio: https://bechirdev.vercel.app
// twitter:   https://twitter.com/bechir7dridi
// linkedin:  https://linkedin.com/in/bechir-dev/
// github:    https://github.com/Bechir-Dridi
const express = require("express")
//env:
require("dotenv").config()
const PORT = process.env.PORT
//express instance:
const app = express()
//cors:
const cors = require("cors")



//---middlewares:

// Middleware to enable CORS
app.use(cors(
    { origin: "https://bdevgpt.vercel.app", credentials: true, } //server accepts requests from static site
))

//parse req to json obj.
app.use(express.json())
//Routes:
const chatRoutes = require("./routes/chats")
app.use("/api/chats", chatRoutes)


//listening to server:
//app.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`) })
app.listen(PORT, () => { console.log(`Listening on server`) })


