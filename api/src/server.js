const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Thread = require("./models/Thread")
require("dotenv").config()

const PORT = 8000;

app.use(express.json())
app.use(express.static("public"))

// mongodbとNode.jsの接続
mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("db connected"))
.catch((err) => console.log(err))

// getメソッド
app.get("/api/threads", async(req, res) => {
	try {
		const allThreds = await Thread.find({})
		res.status(200).json(allThreds)
	} catch (err) {
		console.log(err);
	}
})

// postメソッド
app.post("/api/thread", async(req, res) => {
	try {
		const createThred = await Thread.create(req.body)
		res.status(200).json(createThred)
	} catch (err) {
		console.log(err);
	}
})

// app.post("/api/v1/texts", (req: express.Request, res: express.Response) => {
// 	res.send("テキストを新規作成しました")
// })

// app.patch("/api/v1/texts/:id", (req: express.Request, res: express.Response) => {
// 	res.send("テキストを更新しました")
// })

app.listen(PORT, console.log("server is started"));
