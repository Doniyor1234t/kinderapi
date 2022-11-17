const {check} = require("express-validator");


module.exports = [
    check('login', "Loginda belgilar 3 tadan kam bo'lmasligi kerak").isLength({min:3, max:32}),
    check('password', "Parolda belgilar 3 tadan kam 12 tadan ko'p bo'lmasligi kerak").isLength({min:3, max: 12}),
    
]