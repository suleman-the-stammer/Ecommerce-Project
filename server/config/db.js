import mongoose from 'mongoose'

const connectdb = async () => {
    try {
        await  mongoose.connect(process.env.MongoDB_Url);
        console.log("MongoDB successfully Connected")
    } catch (error) {
        console.log(error , "Face Error In MongoDB connection")
    }

}


export default connectdb