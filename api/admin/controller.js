// 
const { PrismaClient } = require("@prisma/client")


const prisma = new PrismaClient()

const Admin = require("./dal")

exports.addAdmin = async (req,res,next) =>{
    try {
        const data = req.body;
     
        const user = await prisma.user.create({
            data: data
          })
        res.json(user)
    } catch (error) {
        next(error)
    }
}