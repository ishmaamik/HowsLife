import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../../context/AccountProvider";
import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import { Box } from "@chakra-ui/react";
import Message from "./Message";
import { getConversation } from "../../../../service/api";

const ChatBox=()=>
{
    const {account, person}= useContext(AccountContext);
    const [conversation, setConversation] = useState({});

    useEffect(()=>{ 
        const getConvoDetails=async()=>{
            try {
                let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
                setConversation(data);
            } catch (error) {
                console.error("Error fetching conversation details:", error);
            }
        }
        getConvoDetails();
    }, [person.sub]);    //for everytime a person is clicked
    return(
        <>
        <Box>
        <ChatHeader person={person}/>
        <Box position={"relative"}>
       
        <Message person={person} conversation={conversation}/>
        </Box>
        </Box>
        </>
    )
}

export default ChatBox;