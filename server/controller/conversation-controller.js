import Conversation from '../model/Conversation.js'

export const addConvo=async(request, response)=>
{
    try{
        const senderId= request.body.senderId;
        const receiverId= request.body.receiverId;

        const exist= await Conversation.findOne({members:{ $all: [receiverId, senderId]}});

        if(exist)
        {
            return response.status(200).json('conversation already exists');
            
        }

        const newConvo= new Conversation({
            members:[senderId, receiverId]
        })
        await newConvo.save();
        return response.status(200).json('Convo saved successfully');
    }
    catch(error)
    {
        return response.status(500).json(error.message);
    }
}


export const getConvo= async(request, response)=>{
    try{
        const senderId= request.body.senderId;
        const receiverId= request.body.receiverId;

        let conversation= await Conversation.findOne({members: {$all: [senderId, receiverId]}})
        return response.status(200).json(conversation);
    }
    catch(error){
        return response.status(500).json(error.message);
    }
}
