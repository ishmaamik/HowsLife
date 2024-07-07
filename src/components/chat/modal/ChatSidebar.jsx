import { Flex, Box} from "@chakra-ui/react";
import ChatModal from "./ChatModal";
import EmptyChat from "../userchat/EmptyChat";
import Menu from "../menu/Menu";



const ChatSidebar=({className})=>
{
    
   
    
    return(
        <>
                    <Flex display={"flex"} position={"absolute"} overflowX={"hidden"} overflowY={"hidden"} overflow={"hidden"} className={className} boxShadow={"0 4px 12px rgba(0, 0, 0, 0.2)"} w="100vw" h={"150px"} flexDir="row" justifyContent="space-between" maxW="100vw" transition="height 0.3s ease" backgroundColor="mistyrose">
                  
                    <ChatModal>
                        <Flex>
                        <Box minW={"100px"}  mt={"-92px"} ml={"-40px"} mr={-16} >
                            <Menu/>

                        </Box>
                        
                        <Box zIndex={100} bgColor={"#fafafa"} mt={"-92px"} borderLeft={"4px solid rgba(0, 0, 0, 0.1)"}>
                            <EmptyChat/>
                        </Box>
                        </Flex>
                        </ChatModal>
                        
                    </Flex>
        </>
    )
}

export default ChatSidebar;