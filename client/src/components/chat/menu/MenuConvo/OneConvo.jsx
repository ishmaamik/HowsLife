import { Box, Image, Flex, Link, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AccountContext } from "../../../../context/AccountProvider";
import { setConversation } from "../../../../service/api";





const OneConvo=({user})=>    //{} this is destructuring
{
    const {setPerson, account}=useContext(AccountContext);
    const getAUser= async()=>
    {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    }

    return(
        <>
        <Flex mt={1} onClick={()=> getAUser()} cursor="pointer">
            
        <Box mt={3}>
                <Image borderRadius={"50%"} height={"45px"} src={user.picture} alt="display picture" />
            </Box>
            <Box ml={3} mt={5}>
                <p>{user.name}</p>
            </Box>
            
            </Flex>
        </>
    )
}

export default OneConvo;