import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import notesroute from "./routes/route.notes.js";  
import usersroute from "../Backend/routes/route.user.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000; 
const URI = process.env.MongoDBURI;        

// Connecting to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.error("Error connecting to MongoDB:", error));

// Middleware
app.use(express.json()); 
app.use(cors());

// Routes
app.use("/book", notesroute);
app.use("/Users" , usersroute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
