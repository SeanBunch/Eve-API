const express = require("express")
const searchRouter = require("../search/search.router")
// const cors = require("cors")

const app = express();

// app.use(cors())
app.use("/search", searchRouter)

app.use("/", (req, res, next) => {
    res.json({ data: "EVE APP"})
})





// not found handler
app.use((request, response, next) => {
    next(`Not found: ${request.originalUrl}`)
})

// error handler
app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = "server app error"} = error;
    res.status(status).json({ error: message });
})
module.exports = app;