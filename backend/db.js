const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adarshshankar:triffycodes%402097@cluster0.frjqtav.mongodb.net/paytm')

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