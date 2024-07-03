import { Box, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { getMessage } from "../../../../service/api";



const ChatBody=({conversation, person})=>
{
    useEffect(()=>{
        const getMessageDetails=async()=>{
            let data= await getMessage(conversation._id);
            console.log(data);
        }
        getMessageDetails();
    }, [conversation._id, person._id]) //whenever person's id changes as well as convo

        return(
            <>
            <Box mt={0}  pos={"absolute"}>
            <Image  width={"1050px"} src="https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"/>
            
            </Box>
            </>
        )

}

export default ChatBody;