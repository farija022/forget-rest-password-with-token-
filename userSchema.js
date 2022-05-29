let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let userSchema = new Schema({
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
        },

    },
    password: {
        type: String,
        required: true,
    },

})

const User = mongoose.model('userInfo', userSchema);

module.exports = User;