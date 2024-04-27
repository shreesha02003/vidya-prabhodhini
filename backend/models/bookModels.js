import mongoose from "mongoose";

const bookSchema=mongoose.Schema(


    {
        title:{
            type:String,
            required:true
        },

        author:{
            type:String,
            required:true
        },

        year:{
            type:Number,
            required:true
        },

        genre:{
            type:String
        },

        about:{
            type:String

        },
    },
    {
        timestamps:true,
    }
)

export const Book=mongoose.model('book',bookSchema);
