var mongoose = require("mongoose")

var UserSchema = new mongoose.Schema({
	wallet_address: {type: String, required: true, unique: true},
	status_plan: {type: String, required: false, unique: false},
	expired_day: {type: Date, required: false, unique: false}
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)
