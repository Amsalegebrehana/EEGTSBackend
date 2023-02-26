
// data access layer for pools
const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()


// data access layer for Admin
const AppError = require("../../utils/appError")
class Pool{

    static async createPool(data){

        try {

            const pool = await prisma.pool.create({
                data:data
            });
            return pool;
        } catch (error) {
            throw error;
        }
    }

    static async getPoolByName(name){
        try {
            
            const pool = await prisma.pool.findUnique({
                where :{
                   name: name
                }
            });
            return pool
        } catch (error) {
            throw error;
        }
    }

    static async getPoolById(poolId){
        try {
             
            const pool = await prisma.pool.findUnique({
                where: {
                     id : poolId
                    }
            });
         
            return pool;
        } catch (error) {
            throw error;
        }
    }

    static async getPools(){
        try{

            const pools = await prisma.pool.findMany();

            return pools;
        } catch(error){
            throw error;
        }
    }
}

module.exports = Pool;
