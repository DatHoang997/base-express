var mongoose = require("mongoose")

var UserSchema = new mongoose.Schema({
	pair_id: {type: Schema.ObjectId, required: true, unique: false},
	actions: {type: String, required: false, unique: false},
	tx_hash: {type: String, required: true, unique: true},
	maker: {type: String, required: true, unique: false},
	time: {type: Date, required: true, unique: false},
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)
