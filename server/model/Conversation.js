import mongoose, { Mongoose, mongo } from "mongoose";

const convoSchema= new mongoose.Schema({
        members:
        {
            type: Array
        },

        message:
        {
            type: String
        }
    },
        
        {
            timestamps: true
        }
    
    );

    const conversation= mongoose.model('Conversation', convoSchema);
    export default conversation;
