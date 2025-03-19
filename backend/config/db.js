import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://coolaman2407:1mrjomvzcMCWteW4@amanchhonkar.fwie9.mongodb.net/?retryWrites=true&w=majority&appName=Amanchhonkar').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.