import { Box, Image, Flex } from "@chakra-ui/react";





const OneConvo=({user})=>    //{} this is destructuring
{

    return(
        <>
        <Flex mt={1}>
        <Box >
                <Image borderRadius={"50%"} height={"45px"} src={user.picture} alt="display picture" />
            </Box>
            <Box ml={2}>
                <p>{user.name}</p>
            </Box>
            </Flex>
        </>
    )
}

export default OneConvo;