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
    { origin: "http://localhost:5173", credentials: true, } //server accepts requests from static site
))

//parse req to json obj.
app.use(express.json())
//Routes:
const chatRoutes = require("./routes/chats")
app.use("/api/chats", chatRoutes)


//listening to server:
app.listen(PORT, () => { console.log(`Listening on PORT ${PORT}`) })


