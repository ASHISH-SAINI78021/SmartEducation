const bcrypt = require("bcrypt");

const hashPassword = async (password , saltRounds)=> {
    const hashedPassword = await bcrypt.hash(password , saltRounds);
    return hashedPassword;
}

module.exports = hashPassword;
