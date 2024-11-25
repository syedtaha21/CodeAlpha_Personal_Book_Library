const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://codemaster:12344321@cluster0.yzjfb.mongodb.net/crudop?retryWrites=true&w=majority&appName=Cluster0"

).then(()=>console.log("Connected"));