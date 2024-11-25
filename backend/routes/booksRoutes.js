const router= require("express").Router();
const bookModel= require("../models/booksModel");
router.post("/add",async (req, res)=>{
   try{
      const data= req.body;
      const newBook= new bookModel(data);
      await newBook.save().then(()=>{
        res.status(200).json({message: "Book added successfully"});
      });
   } catch(error){
    console.log(error)
   }
});

//GET Req
router.get("/getBooks", async (req, res)=>{
    let books;
    try{
   books= await bookModel.find();
   res.status(200).json({books})
    }catch(error){
        console.log(error);
    }
});

//Get req by ID
router.get("/getBooks/:id", async(req, res)=>{
    let book;
    const id= req.params.id;
    try{
    book= await bookModel.findById(id);
    res.status(200).json({book});
    } catch(error){
        console.log(error)
    }
});
//Update book 
router.put("/updateBook/:id", async(req, res)=>{
    let book;
    const id= req.params.id;
    const {bookname, description, author, image, price}= req.body;
    try{
     book= await bookModel.findByIdAndUpdate(id,{bookname, description, author, image, price})
     await book.save().then(()=>res.json({message:"Data Updated"}));
    } catch(error){
        console.log(error);
    }
});
// Delete book route
router.delete("/deleteBooks/:id", async (req, res) => {
    const { id } = req.params;  // Destructure id from request parameters
    try {
      const deletedBook = await bookModel.findByIdAndDelete(id);
      
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });  // Handle non-existing book
      }
  
      res.status(200).json({ message: "Book deleted successfully", deletedBook });
    } catch (error) {
      console.error("Error deleting book:", error);
      res.status(500).json({ message: "Internal server error", error: error.message });  // Send error response
    }
  });
  
module.exports=router;