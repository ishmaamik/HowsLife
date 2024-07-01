import React from 'react';
import { Box, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from '@chakra-ui/react';


const ChatModal = ({children}) => {
  const {onClose } = useDisclosure();

    

     //curly braces for useContext, normal braces for create Context, square bracket for useState
  return (
    <>
      

      <Modal  closeOnOverlayClick={false} isOpen={true} onClose={onClose}>
        
        <ModalContent bgColor={"#FAFAFA"} borderRadius={"none"} maxW={"2000px"} w={"1500px"} height="710px" boxShadow={"0 4px 12px rgba(0, 0, 0, 0.4)"} m={5} >
          <ModalHeader fontSize={25} pl={10} pt={16}></ModalHeader>
         
         
          <ModalBody pl={10} pt={3} >
           {children}
          </ModalBody>
            <Box pos={"relative"}>
            
            </Box>
          
          <ModalFooter>
            
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChatModal;
