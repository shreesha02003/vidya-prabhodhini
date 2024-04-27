import express from "express";
import {Book} from "../models/bookModels.js";


const router=express.Router();


router.post('/',async (req,res)=>{
    try{
        if(

            !req.body.title ||
            !req.body.author ||
            !req.body.year
        )
        return res.status(400).send({
            message:"Send all required fields"
        });

        const newBook={
            title:req.body.title,
            author:req.body.author,
            year:req.body.year,
            genre:req.body.genre,
            about:req.body.about,
        }

        const book=await Book.create(newBook);
        return res.status(201).send(book);
    }
    catch(err)
    {
        console.log(err.message);
        res.status(500).send({message:err.message});
    }
});

router.get('/:id', async (req,res)=>{
    try{

        const {id}=req.params;
        const books=await Book.findById(id)
        return res.status(200).json({count:books.length,
        data:books});
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({message:err.message});
    }
})

router.get("/", async (req,res)=>{
    try{
        const books=await Book.find({})
        return res.status(200).json({count:books.length,
        data:books});
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({message:err.message});
    }
})

//update a book

router.put('/:id',async (req,res)=>{
    try{
        if(

            !req.body.title ||
            !req.body.author ||
            !req.body.year
        )
        return res.status(400).send({
            message:"Send all required fields: Title,Author and Year"
        });


        const {id}=req.params;

        const result=await Book.findByIdAndUpdate(id,req.body);

        if(!result)
        {
            return res.status(404).json({message:"Book not found"})

        }
        return res.status(200).send({message:"Book updated successfully"});
    }  
    catch(err)
    {
        console.log(err.message);
        res.status(500).send({message:err.message});
    }
});


//delete a book

router.delete('/:id', async (req,res)=>{
    try{

        const {id}=req.params;
        const books=await Book.findByIdAndDelete(id)
        return res.status(200).send({message:"Book deleted successfully"})
    }
    catch(err){
        console.log(err.message)
        res.status(500).send({message:err.message});
    }
})
export default router;