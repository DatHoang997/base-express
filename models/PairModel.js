var mongoose = require("mongoose")

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true, unique: true},
	symbol: {type: String, required: true, unique: false},
	address: {type: String, required: true, unique: true},
	token_1_id: {type: Schema.ObjectId, required: true, unique: false},
	token_2_id: {type: Schema.ObjectId, required: true, unique: false},
	pair_balance: {type: Number, required: false, unique: false},
	number_of_wallet: {type: Number, required: false, unique: false},
	bnb_balance: {type: Number, required: false, unique: false},
	liquidity: {type: Number, required: false, unique: false},
	price_fluctuations: {type: Number, required: false, unique: false},
	volume: {type: Number, required: false, unique: false},
	token_1_amount: {type: Number, required: false, unique: false},
	token_2_amount: {type: Number, required: false, unique: false},
	tx_count: {type: Number, required: false, unique: false},
	holder_count: {type: Number, required: false, unique: false},
	created_day: {type: Date, required: false, unique: false},
	vote_up: {type: Number, required: false, unique: false},
	vote_down: {type: Number, required: false, unique: false},
	swap_name: {type: String, required: true, unique: false}
}, {timestamps: true})

module.exports = mongoose.model("User", UserSchema)
