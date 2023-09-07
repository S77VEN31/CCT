import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://S77VEN:Hailtotheking31*@cctdb.zmwxc6c.mongodb.net/CCTDB?retryWrites=true&w=majority";

export const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Database connected")
    }
    catch (error) {
        console.log(error)
    }
}

