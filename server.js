const express = require("express")
const cors = require("cors")
const ytdl = require("ytdl-core")

const app = express()

app.use(cors())
app.use(express.json())

app.post("/download", async (req,res)=>{

const url = req.body.url

if(!ytdl.validateURL(url)){
return res.status(400).send("Invalid YouTube URL")
}

res.header("Content-Disposition","attachment; filename=video.mp4")

ytdl(url,{quality:"highest"})
.pipe(res)

})

app.listen(3000,()=>{
console.log("Server running on port 3000")
})
