// 

const AppError = require("../../utils/appError");
// 
const Exam = require("./dal");
// create new pool
exports.createExam = async (req, res, next)=>{
    try {

        const {name, numberOfQuestions, duration, testingDate, status, poolId, examGroupId} = req.body;
        if (!name){
            return next(new AppError("Please fill all the reqiured fields.", 400));
        }

        const newExam = await Exam.createExam({name, numberOfQuestions, duration, testingDate, status, poolId, examGroupId})
        // response
        res.status(201).json({
            success:true,
            data: { newExam },
            message: "Exam successfully created."
        });
    } catch (error) {
        next(error);
    }
};