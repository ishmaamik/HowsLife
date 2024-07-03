import { Flex, Image, Box } from "@chakra-ui/react";




const EmptyChat=()=>
{
    return(
        <>
        <Box maxW={"2000px"} width={"1200px"}>
        <Flex justify="center" align="center" bgColor={"#fafafa"}>
            <Image justifyContent={"center"} justify="center" height={"250px"} mt={"160px"} src="https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg"/>
        </Flex>
        <Box ml={"300px"} mt={"30px"} width={"500px"} mr={-40}>
        <p>Send and receive messages without keeping your phone online</p>
        </Box>
        </Box>
        </>
    )
}
export default EmptyChat;