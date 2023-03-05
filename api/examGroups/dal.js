const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

const AppError = require("../../utils/appError")

class ExamGroup{
         
    /**
     * Returns an array of all ExamGroup objects in the database
     *
     * @return {examGroups} all exam groups in the database
    */
    static async getExamGroups(){
        try {
            const examGroups = await prisma.examGroup.findMany();
            
            return examGroups; 
        } catch(error){
            throw error;
        }
    }
}

module.exports = ExamGroup;