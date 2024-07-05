import { Box, Divider, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { getMessage } from "../../../../service/api";
import OneMessage from "./OneMessage";



const ChatBody=({conversation, person, newMessageFlag, messageEndRef})=>
{
    

    const url='https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png';
   const [messages, setMessages] = useState([]);
   const scrollRef= useRef();
   
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
            bgImage={url}
            >
                {
                    messages && messages.map(message => (
                        <>
                        <Box  >
                        <OneMessage message={message}/>
                        </Box >
                        
                        </>
                    )
                
                )
                    
                }
                <div ref={scrollRef}/>
            </Box>
            
            {/* <Box mt={0} zIndex={25} pos={"absolute"}>
            <Image  width={"1050px"} src="https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"/>
            </Box> */}
            
            </>
        )

}

export default ChatBody;