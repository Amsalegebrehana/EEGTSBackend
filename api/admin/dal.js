
const { PrismaClient } = require("@prisma/client")

// Bcrytpt
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient()
// data access layer for Admin
const AppError = require("../../utils/appError")
class Admin{
    static async addAdmin(data){
        try {
        
            // const ndata = {name, email, hashPassword }
            
            const admin = await prisma.admin.create({
                data: data
              })
            return admin;

        } catch (error) {
            throw error
        }
        
    }
    static async getAllAdmin(){
        try {
            
            const admin = await prisma.admin.findMany()
            return admin;
        } catch (error) {
            throw error
        }
    }
    
    // Admin login 
    static async adminLogin({email, password}) {
        try {
       

        const admin = await prisma.admin.findUnique({
            where: { email },
            select: { email: true, password:true }
            });
       
        // Check if admin exists and compare password
        if (!admin || !bcrypt.compareSync(password, admin.password)) {
            throw new AppError("Invalid email or password.", 400);
        }

        return admin;
        } catch (error) {
        throw error;
        }
    }
    // single admin
    static async getAdmin(id){
        try {
            
            const admin = await prisma.admin.findUnique({
                where:{
                    id
                }
            });

           return admin;

        } catch (error) {
            throw(error);
            
        }
    }
}

module.exports = Admin;