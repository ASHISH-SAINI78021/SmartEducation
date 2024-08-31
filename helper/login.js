const bcrypt = require("bcrypt");

const compare = async (password , userPassword)=> {
    const truePassword = await bcrypt.compare(password , userPassword);
    return truePassword;
}

module.exports = compare;