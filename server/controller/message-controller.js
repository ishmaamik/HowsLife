import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";
export const newMessage=async(request, response)=>{
    try{
        const message= new Message(request.body);
        await message.save();
        await Conversation.findByIdAndUpdate(request.body.conversationId, {message: request.body.text})
        return response.status(200).json('Message sent successfully');
    }
    catch(error)
    {
        return response.status(500).json('Error while sending Message');
    }
}


export const getMessages=async(id)=>{
    try{
        const messages= await Message.find({conversationId: request.params.id});
        response.status(200).json(messages);
    }
    catch(error){
        response.status(500).json(error.message);
    }
}