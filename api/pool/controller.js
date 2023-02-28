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

// fetch pool by Id

exports.getPoolById = async (req, res, next) =>{
    try {
        const poolId = req.params.id;

        const pool = await Pool.getPoolById(poolId);
    
        if (!pool){
            return next(new AppError("Pool does not exist.", 400));
        }

         // response
         res.status(200).json({
            success:true,
            data: { pool }
        });
    } catch (error) {
        next(error);
    }
}

// get all pools

 exports.getPools =  async (req,res,next)=>{
    try{

        const pools = await Pool.getPools();

        if(!pools){
            return next(new AppError("Pools don't exist.", 400));
        }

        res.status(200).json({
            success:true,
            data:{ pools }
        });

    } catch(error){
        next(error);
    }
 };

//  update pool

exports.updatePool = async (req, res, next) =>{
    try {
        
        const poolId = req.params.id;
        const data = req.body;
      
        // find pool
        const pool = await Pool.getPoolById(poolId);
        
        // check pool existance
        if (!pool){
            return next(new AppError("Pool does not exist.", 400));
        }
        // empty data
        if(Object.keys(data).length === 0){
            return next(new AppError("Provide data to update.", 400));
        }
        // dal
        const updatedPool = await Pool.updatePool(poolId, data);

        // response
        res.status(200).json({
            success:true,
            message: "updated successfully",
            data: { updatedPool }
        });

    } catch (error) {
        next(error)
    }
}