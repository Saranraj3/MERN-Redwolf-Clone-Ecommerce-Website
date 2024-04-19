const mongoose = require('mongoose');

const UserSchema = new mongoose.Shcema({
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: { type: String, default: 'user' }

})

const User = mongoose.model('User',UserSchema);
module.exports = User;