import { useContext, useEffect, useRef, useState } from "react";
import ChatFooter from "./ChatFooter"
import { AccountContext } from "../../../../context/AccountProvider";
import { addMessage, getMessage } from "../../../../service/api";
import ChatBody from "./ChatBody";
import { Box, transition } from "@chakra-ui/react";




const Message = ({person, conversation}) => {

    const {account, socket}= useContext(AccountContext);
    const [msg, setMsg]= useState('');
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [newMessageFlag, setNewMessageFlag]= useState(false);
   
    
    

    const sendText=async(e)=>{
        const code= e.keyCode || e.which;

        if(code===13)
        {
            let message = {};
            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: msg
                };
            } else {
                message = {
                    senderId: account.sub,
                    conversationId: conversation._id,
                    receiverId: person.sub,
                    type: 'file',
                    text: image
                };
            }
            socket.current.emit('sendMessage', message);
            console.log(message);
            await addMessage(message);

            setMsg('');
            setFile();
            setImage('');
            setNewMessageFlag(prev=> !prev);            
        }
    }


    return(
        <>
        <Box >
        <Box >
        <ChatBody conversation={conversation} person={person} newMessageFlag={newMessageFlag}/>
        </Box>
        <Box zIndex={25} mb={100}  height={"300px"} opacity={"100%"} >
        <ChatFooter file={file} sendText={sendText} setMsg={setMsg} msg={msg} setFile={setFile} setImage={setImage}/>
        </Box>
        </Box>
        </>
    )
}
export default Message;