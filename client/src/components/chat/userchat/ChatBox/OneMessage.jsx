import { Box, Text, Flex } from "@chakra-ui/react"
import { useContext } from "react";
import { AccountContext } from "../../../../context/AccountProvider";
import { formatDate } from "../../../../utils/common-utils";
import { FiClock, FiDownload } from "react-icons/fi";

const iconPDF = 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Pdf_File_Type_Adobe_logo_logos-512.png';
import { downloadMedia } from "../../../../utils/common-utils";



 const OneMessage=({message})=>{
    const {account}= useContext(AccountContext);

    return(
        <>
        {
            account.sub===message.senderId ?
           
            (
                message.type === 'file'? 
            <SenderImage message={message} /> :
        <SenderText message={message}/>
        
            )
        :
    (
        message.type === 'file'? 
            <ReceiverImage message={message} /> :
        <ReceiverText message={message}/>
    )
 }
        </>
    )
}

const SenderText = ({ message }) => {
    
    return (
        <>
           <Box display="flex" justifyContent="flex-end" mt={3} mb={3} ml="auto" mr={5} bgColor={"mistyrose"} width={"fit-content"} borderRadius={"10px"}>
            <Box pl={5} pr={5} pt={2} pb={2} >
            <p>{message.text}</p>
            <Text fontSize={"13px"} 
            display="flex" justifyContent="flex-end"
            >
                {formatDate(message.createdAt)}</Text>
            </Box>
        </Box>

        </>
    )
}



const ReceiverText = ({ message }) => {
    
    return (
        <>
           <Box  display="flex" justifyContent="flex-end" mt={3} mb={3} ml={5} mr={"auto"} bgColor={"white"} width={"fit-content"} borderRadius={"10px"}>
            <Box pl={5} pr={5} pt={2} pb={2} >
            <p>{message.text}</p>
            <Text fontSize={"13px"} display="flex" justifyContent="flex-end">{formatDate(message.createdAt)}</Text>
            </Box>
        </Box>

        </>
    )
}


const SenderImage = ({ message }) => {

    return (
        <Box display="flex" justifyContent="flex-end" mt={3} mb={3} ml="auto" mr={5} bgColor={"mistyrose"} width={"fit-content"} height={"fit-content"} borderRadius={"10px"}>
            <Box pl={2} pr={2} pt={2} pb={2} >
            {
                message?.text?.includes('.pdf') ?
                    <div 
                    //style={{ display: 'flex' }}
                    >
                        <img style={{
                        maxWidth: '120px',
                        maxHeight: '3000px',
                        objectFit: 'cover',
                        borderRadius: '10px'
                    }} src={iconPDF} alt="pdf-icon" />
                        <Text style={{ fontSize: 14 }} >{message.text.split("/").pop()}</Text>
                    </div>
                : 
                <img  style={{
                    maxWidth: '380px',
                    maxHeight: '3000px',
                    objectFit: 'cover',
                    borderRadius: '10px'
                }} src={message.text} alt={message.text} />
            }
           <Flex mt={1} alignItems="center">
                    <FiDownload
                        onClick={(e) => downloadMedia(e, message.text)}
                        fontSize="large"
                        style={{
                            marginRight: 10,
                            border: '1px solid grey',
                            borderRadius: '50%',
                            cursor: 'pointer'
                        }}
                    />
                    <Flex alignItems="center" ml="auto" mr={2} fontSize={"14px"} color={"gray"}>
                        <FiClock style={{ marginRight: '3px' }} />
                        {formatDate(message.createdAt)}
                    </Flex>
                </Flex>
        </Box>
        </Box>
    )
}



const ReceiverImage = ({ message }) => {

    return (
        <Box  display="flex"  justifyContent="flex-end" mt={3} mb={3} ml={5} mr={"auto"} bgColor={"white"} width={"fit-content"} borderRadius={"10px"}>
            <Box pl={2} pr={2} pt={2} pb={2} >
            {
                message?.text?.includes('.pdf') ?
                    <div 
                    //style={{ display: 'flex' }}
                    >
                        <img src={iconPDF} alt="pdf-icon" style={{ width: 120 }} />
                        <Text style={{ fontSize: 14 }} >{message.text.split("/").pop()}</Text>
                    </div>
                : 
                    <img  style={{
                        maxWidth: '380px',
                        maxHeight: '3000px',
                        objectFit: 'cover',
                        borderRadius: '10px'
                    }} src={message.text} alt={message.text} />
            }
           <Flex mt={1} alignItems="center">
                    <FiDownload
                        onClick={(e) => downloadMedia(e, message.text)}
                        fontSize="large"
                        style={{
                            marginRight: 10,
                            border: '1px solid grey',
                            borderRadius: '50%',
                            cursor: 'pointer'
                        }}
                    />
                    <Flex alignItems="center" ml="auto" mr={2} fontSize={"14px"} color={"gray"}>
                        <FiClock style={{ marginRight: '3px' }} />
                        {formatDate(message.createdAt)}
                    </Flex>
                </Flex>
        </Box>
        </Box>
    )
}

export default OneMessage;