import { Box, Text } from "@chakra-ui/react"
import { useContext } from "react";
import { AccountContext } from "../../../../context/AccountProvider";
import { formatDate } from "../../../../utils/common-utils";


 const OneMessage=({message})=>{
    const {account}= useContext(AccountContext);

    return(
        <>
        {
            account.sub===message.senderId ?
        <Box  display="flex"
        justifyContent="flex-end"
        mt={3}
        mb={3}
        ml="auto"
        mr={5}
        bgColor={"mistyrose"}
        width={"fit-content"}
        borderRadius={"10px"}>
            <Box pl={5} pr={5} pt={2} pb={2} >
            <p>{message.text}</p>
            <Text fontSize={"13px"} 
            display="flex" justifyContent="flex-end"
            >
                {formatDate(message.createdAt)}</Text>
            </Box>
        </Box>
        :
        <Box  display="flex"
        justifyContent="flex-end"
        mt={3}
        mb={3}
        ml={5}
        mr={"auto"}
        bgColor={"white"}
        width={"fit-content"}
        borderRadius={"10px"}>
            <Box pl={5} pr={5} pt={2} pb={2} >
            <p>{message.text}</p>
            <Text fontSize={"13px"} display="flex" justifyContent="flex-end">{formatDate(message.createdAt)}</Text>
            </Box>
        </Box>
        }
        </>
    )
}

export default OneMessage;