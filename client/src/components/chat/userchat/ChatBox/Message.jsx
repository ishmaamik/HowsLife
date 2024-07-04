import { useContext, useEffect, useRef, useState } from "react";
import ChatFooter from "./ChatFooter"
import { AccountContext } from "../../../../context/AccountProvider";
import { addMessage, getMessage } from "../../../../service/api";
import ChatBody from "./ChatBody";
import { Box } from "@chakra-ui/react";




const Message = ({person, conversation}) => {

    const {account}= useContext(AccountContext);
    const [msg, setMsg]= useState('');
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    const [newMessageFlag, setNewMessageFlag]= useState(false);
    const messageEndRef= useRef();
    
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
                    text: value
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
            console.log(message);
            await addMessage(message);

            setMsg('');
            setFile();
            setImage('');
            setNewMessageFlag(prev=> !prev);
            messageEndRef.current.scrollIntoView({ behavior: 'smooth', inline:'nearest', block:'end' });
            
        }
    }


    return(
        <>
        <Box >
        <Box >
        <ChatBody messageEndRef={messageEndRef} conversation={conversation} person={person} newMessageFlag={newMessageFlag}/>
        </Box>
        <Box zIndex={25} mb={100} opacity={"100%"} >
        <ChatFooter sendText={sendText} setMsg={setMsg} msg={msg} setFile={setFile}/>
        </Box>
        </Box>
        </>
    )
}
export default Message;