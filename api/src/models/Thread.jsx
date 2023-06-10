const mongoose = require("mongoose")

const ThreadeSchema = new mongoose.Schema({
	title:{
		type: String,
		required:true,
		maxlength: 20,
	},
	content:{
		type: String,
		required:true,
		}
});

// JavaScriptの場合の書き方 https://osamtimizer.hatenablog.com/entry/2018/07/07/204706
module.exports = mongoose.model("Thread", ThreadeSchema)

// const Thread = mongoose.model("Thread", ThreadeSchema)
// export default Thread;