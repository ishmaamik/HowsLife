import { Box, Divider, Image } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import { getMessage } from "../../../../service/api";
import OneMessage from "./OneMessage";
import { AccountContext } from "../../../../context/AccountProvider";
import ExampleImage from './Shundoraa.jpg';


const ChatBody=({conversation, person, newMessageFlag, messageEndRef})=>
{
    

    const url='https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png';
   const [messages, setMessages] = useState([]);
   const [incomingMessage, setIncomingMessage] = useState(null);
   const {socket}= useContext(AccountContext);

   const scrollRef= useRef();
   
   useEffect(()=>{
    socket.current.on('getMessage', data=>{
        setIncomingMessage({
            ...data,
            createdAt: Date.now()
        })
    })
}, []);

useEffect(() => {
    incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && 
        setMessages((prev) => [...prev, incomingMessage]);
    
}, [incomingMessage, conversation]);

    useEffect(()=>{
        const getMessageDetails=async()=>{
            let data= await getMessage(conversation._id);
            console.log(data);
            setMessages(data);
        }

        
        getMessageDetails();
        
    }, [conversation._id, newMessageFlag]) //whenever person's id changes as well as convo


     useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: 'smooth', block:'nearest'})
    }, [messages]);

        return(
            <>
            <Box zIndex={20} 
            overflowY={"auto"}
            //pos="absolute"
            height={"76vh"}
            bgImage={ExampleImage}
            backgroundSize="cover"
            backgroundPosition="center"
            >
                {
                    messages && messages.map(message => (
                        <>
                        <Box  >
                        <OneMessage message={message}/>
                        </Box >
                        <div ref={scrollRef}/>
                        </>
                    )
                
                )
                    
                }
                
            </Box>
            
            {/* <Box mt={0} zIndex={25} pos={"absolute"}>
            <Image  width={"1050px"} src="https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"/>
            </Box> */}
            
            </>
        )

}


const Shundor=()=>{
    return(
        <>
        <Image src={ExampleImage}/>
        </>
    )
}
export default ChatBody;