import mongoose from 'mongoose';

export const adminSchema = new mongoose.Schema({
	user_id: {
		type: String
	},
	name: {type: String},
	mobile: {type: String},
	personal_details: {
		age: {type: Number},
		gender: {type: String},
		dob: Date
	},
	password: {type: String, required: true}
});

export const adminModel = mongoose.model('admins', adminSchema);
