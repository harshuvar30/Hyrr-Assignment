import express from "express"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/posts.route.js"
import commentRouter from "./routes/comment.route.js"
import connectDB from "./lib/connectDB.js"
import cors from "cors"
const app = express();
app.use(express.json())
// console.log("checking env value",process.env.test)
// app.get("/test",(req,res)=>{
//     res.status(200).send("it works");
// })
app.use(cors(`http://localhost:5173`))
app.use("/users",userRouter)
app.use("/posts",postRouter)
app.use("/comment",commentRouter)

app.use((error,req,res,next)=>{
res.status(error.status || 500)
res.json({
    message:error.message || "Something went wrong!",
    status:error.status,
    stack:error.stack,
})
})
app.listen(3000,()=>{
    connectDB()
    console.log("Server is running on port 3000");
})