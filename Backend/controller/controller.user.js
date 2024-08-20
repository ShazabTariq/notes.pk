import Users from "../model/model.user.js";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";
// const jwt = require("jsonwebtoken");

export const Signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Validation failed", errors: errors.array() });
    }

    const { Name, Email, Password } = req.body;

    const existingUser = await Users.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(Password, 10);

    console.log("Hashed Password:", hashedPassword); 

    const newUser = new Users({
      Name,
      Email,
      Password: hashedPassword,
    });

    const usr = await newUser.save();
    // const token = jwt.sign({ ...usr, id: newUser._id }, "secretkey");

    res.status(200).json({ message: "Signup successful" , user:{
      _id: newUser._id,
      Name: newUser.Name,
      Email: newUser.Email,
    }});
  } catch (error) {
    console.error("Signup failed:", error);
    res.status(500).json({ message: "Signup failed" });
  }
}

export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    const user = await Users.findOne({ Email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    console.log("Entered Password:", Password); 
    

    const isPasswordValid = await bcrypt.compare(Password, user.Password);
  

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        Name: user.Name,
        Email: user.Email,
      },
    });
  } catch (error) {
    console.log("error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}
