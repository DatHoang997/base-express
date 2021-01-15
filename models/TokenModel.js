var mongoose = require("mongoose")

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	symbol: {type: String, required: true, unique: false},
	decimal: {type: String, required: true, unique: false},
	address: {type: String, required: false, unique: true},
	logo: {type: String, required: false, unique: false},
	price: {type: Date, required: false, unique: false}
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)
