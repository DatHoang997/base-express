var mongoose = require("mongoose")

var UserSchema = new mongoose.Schema({
	pair_id: {type: Schema.ObjectId, required: true, unique: true},
	token_1_price: {type: Number, required: false, unique: false},
	token2_price: {type: Number, required: false, unique: false},
	time: {type: Date, required: false, unique: false}
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)
