const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB_URI);


const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}