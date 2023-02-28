// 

const AppError = require("../../utils/appError");

// Dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "env" });

const Admin = require("./dal")

// Bcrytpt
const bcrypt = require("bcryptjs");

// jwt
const jwt = require("jsonwebtoken");


exports.createAdmin = async (req,res,next) =>{
    try {
        let {name, email, password } = req.body;
        if (!email || !name || !password){
            return next(new AppError("Please fill all the reqiured fields.", 400));
       
        }
        // const data = {name, email, password };
        password =await bcrypt.hash(password, 10);
       
        const admin = await Admin.addAdmin({name, email, password });

        res.status(201).json({
            success:true,
            data: { admin },
            message: "Admin successfully created."
        })
    } catch (error) {
        next(error)
    }
}

// Admin login
exports.adminLogin = async (req, res, next) => {
    try {
      // Get body
      const { email, password } = req.body;
  
      // Check if all necessary inputs exists
      if (!email || !password)
        return next(new AppError("Please fill all required fields", 400));
  
      // Login
      const admin = await Admin.adminLogin({ email, password });
      
      // Create token
      const token = jwt.sign({ id: admin.id, type: "admin"}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN,
      });
  
      // Respond
      res.status(200).json({
        success:true,
        message: "Successfully loggedIn.",
        data: {
          admin,
        },
        token,
      });
    } catch (error) {
      next(error);
    }
  };

exports.getAllAdmin = async (req, res, next) => {
    try {
        
        const admin = await Admin.getAllAdmin()
       
        res.status(200).json({
            success:true,
            data: {admin},
           
        })
    } catch (error) {
        next(error)
    }
}
// get admin by id

exports.getAdminById = async(req, res, next) => {
  try {
   
    const id = req.params.id;

    const admin = await Admin.getAdmin(id);

    // no admin
    if(!admin){
      return next(new AppError("There is no admin with the provided id", 400));
    }

    // response
    res.status(200).json({
      success:true,
      data: {admin},
     
  })
  } catch (error) {
    next(error);
    
  }
};