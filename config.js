const mongoose = require("mongoose");

async function main(){
    try {
        await mongoose.connect(process.env.url);
    } catch (error) {
        console.log(error);
    }
};

module.exports = main;