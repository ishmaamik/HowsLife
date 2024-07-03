import { Box, Flex, Input } from "@chakra-ui/react";
import { FiPaperclip, FiSmile, FiMic } from "react-icons/fi";


const ChatFooter=({sendText, setMsg, msg})=>
{
    return(
        <>
        
        <Box pos={"absolute"} bgColor={"#FAF9F6"}mt={592} width={"1050px"} height={"100px"} mr={"-80px"}>
            <Flex mt={3} ml={4}>
                <Box mr={4} mt={1}>
            <FiSmile size={"20px"} />
            </Box>
            <Box mt={1}>
            <FiPaperclip size={"20px"}/>
            </Box>
            <Input zIndex={1000} placeholder="Type a message"   _placeholder={{ color: "#333333", opacity: 1 }} fontWeight={400}   ml={3} height={8} _hover={{outline:'none', boxShadow:'none'}} opacity={0.3} borderColor={"0.5px solid rgba(0, 0, 0, 0.01)"} maxW={"2000px"} width={"900px"} mt={"1px"}
                onChange={(e)=>setMsg(e.target.value)}
                onKeyDown={(e)=>sendText(e)}
                value={msg}
            />
            <Box ml={2} mt={2}>
            <FiMic/>
            </Box>
            </Flex>
        </Box>
        
        
        </>
    )
}

export default ChatFooter;

