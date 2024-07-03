import { Flex } from "@chakra-ui/react";
import LoginModal from "./LoginModal";

const LoginSidebar=({className})=>
{
    
   
    
    return(
        <>
                    <Flex position={"absolute"} overflow={"hidden"} className={className} boxShadow={"0 4px 12px rgba(0, 0, 0, 0.2)"} w="100%" h={"250px"} flexDir="row" justifyContent="space-between" maxW="100vw" transition="height 0.3s ease" backgroundColor="mistyrose">
                    <LoginModal/>
                    
                    </Flex>
        </>
    )
}

export default LoginSidebar;