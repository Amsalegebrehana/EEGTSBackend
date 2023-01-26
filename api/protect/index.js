// Dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });


// App Error
const AppError = require("../../utils/appError");

// Jwt
const jwt = require("jsonwebtoken");

// admin
const Admin = require("../admin/dal");

module.exports = async(req, res, next) =>{
    try {
    
        let token = "";
          // Check header
        if (
            req.headers.authorization &&
            req.headers.authorization.split(" ")[0] === "Bearer"
        ) {
            token = req.headers.authorization.split(" ")[1];
        }

        // Check token
        if (!token) return next(new AppError("Please login", 400));


        const decode = jwt.verify(token, process.env.JWT_SECRET);

    } catch (error) {
        next(error);
    }
}