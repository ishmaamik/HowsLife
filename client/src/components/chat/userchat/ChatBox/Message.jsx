import { useContext, useState } from "react";
import ChatFooter from "./ChatFooter"
import { AccountContext } from "../../../../context/AccountProvider";
import { addMessage } from "../../../../service/api";



const Message = ({person, conversation}) => {

    const {account}= useContext(AccountContext);
    const [msg, setMsg]= useState('');
    
    const sendText=async(e)=>{
        const code= e.keyCode || e.which;

        if(code===13)
        {
            let message={
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversation._id,
                type: 'text',
                text: msg
            }
            console.log(message);
            await addMessage(message);

            setMsg('');
            
        }
    }


    return(
        <>
        <ChatFooter sendText={sendText} setMsg={setMsg} msg={msg}/>
        </>
    )
}
export default Message;