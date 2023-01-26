// 

const AppError = require("../../utils/appError");
// 
const Pool = require("./dal")
// create new pool
exports.createPool = async (req, res, next)=>{
    try {

        const {name, numberOfQuestions} = req.body;
        if (!name){
            return next(new AppError("Please fill all the reqiured fields.", 400));
        }
        const pool = await Pool.getPoolByName(name);
        

        if (pool){
            return next(new AppError("Pool already exists.", 400));
        }

        const newPool = await Pool.createPool({name, numberOfQuestions})
        // response
        res.status(201).json({
            success:true,
            data: { newPool },
            message: "Pool successfully created."
        });
    } catch (error) {
        next(error);
    }
};

// get pool by name

exports.getPoolByName = async (req, res, next) =>{
    try {
        const name = req.params.name;
   
        const pool = await Pool.getPoolByName(name);
        
        if (!pool){
            return next(new AppError("Pool does not exist.", 400));
        }

        // response
        res.status(200).json({
            success:true,
            data: { pool }
        });
    } catch (error) {
        next(error)
    }
}