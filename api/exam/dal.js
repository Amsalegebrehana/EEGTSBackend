// data access layer for pools
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()


// data access layer for Admin
const AppError = require("../../utils/appError");

class Exam{

    static async createExam(data){
        try {

            const exam = await prisma.exam.create({
                data:data
            });
            return exam;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Exam;

