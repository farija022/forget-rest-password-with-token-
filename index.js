const express = require('express')
const mongoose = require('mongoose');

const User = require('./userp');

mongoose.connect("mongodb+srv://farijaakter:01521226424faru@cluster0.x3pam.mongodb.net/webdev?retryWrites=true&w=majority", () => {
    console.log("mongodb connected");
},
    e => console.error(e)
)
run()
async function run() {

    try {
        const user = await User.create({
            name: "Farija Akter",
            email: "farija@gmail.com",
            password: "1234"

        })
        console.log(user)
    } catch (e) {
        console.log(e.message)
    }
}