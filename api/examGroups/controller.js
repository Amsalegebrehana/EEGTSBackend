const AppError = require("../../utils/appError");
// 
const ExamGroup = require("./dal")

//get all exam groups
 exports.getExamGroups =  async (_, res, next)=>{
    try{
        const examGroups = await ExamGroup.getExamGroups();

        res.status(200).json({
            success:true,
            data:{ examGroups }
        });

    } catch(error){
        next(error);
    }
 };