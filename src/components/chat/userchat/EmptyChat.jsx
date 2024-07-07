import { Flex, Image, Box } from "@chakra-ui/react";




const EmptyChat=()=>
{
    return(
        <>
        <Flex justify="center" align="center" bgColor={"#fafafa"}>
            <Image  height={"250px"} ml={"300px"} mt={"160px"} src="https://i.gadgets360cdn.com/large/whatsapp_multi_device_support_update_image_1636207150180.jpg"/>
        </Flex>
        <Box ml={"300px"} mt={"30px"}>
        <p>Send and receive messages without keeping your phone online</p>
        </Box>
        </>
    )
}
export default EmptyChat;