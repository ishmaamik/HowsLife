import { Box, Flex, Input } from "@chakra-ui/react";
import { FiPaperclip, FiSmile, FiMic } from "react-icons/fi";
import { uploadFile } from "../../../../service/api";
import { useEffect } from "react";


const ChatFooter=({sendText, setMsg, msg, setFile, file, setImage})=>
{
    const onFileChange = (e) => {
        setMsg(e.target.files[0].name);
        setFile(e.target.files[0]);
    }

    useEffect(() => {
        const getFile = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);

                const response = await uploadFile(data);
                setImage(response.data);
                
            }
        }
        getFile();
        
    }, [file])
    return(
        <>
        
        <Box zIndex={25}  bgColor={"#FAF9F6"}mb={592} width={"1050px"} height={"40px"} mr={"-80px"}>
            <Flex mt={3} ml={4}>
                <Box mr={4} mt={1}>
            <FiSmile size={"20px"} />
            </Box>
            <Box mt={1}>
            <label htmlFor="fileInput">
            <FiPaperclip size={"20px"}/>
            </label>
            <input
                type='file'
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />
            
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


