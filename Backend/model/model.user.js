import mongoose from 'mongoose';
import bcrypt from "bcrypt";
   
const userSchema =  mongoose.Schema({
    Name: {
        type: String,
        required: true,
      },
      Email: {
        type: String,
        required: true,
        unique: true,
      },
      Password: {
        type: String,
        required: true,
      },
})





const Users = mongoose.model('Users', userSchema);

export default Users;