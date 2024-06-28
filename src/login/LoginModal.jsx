import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import {
    Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Image
} from '@chakra-ui/react';

const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      

      <Modal closeOnOverlayClick={false} isOpen={true} onClose={onClose}>
        
        <ModalContent maxW="800px" height="600px" boxShadow={"0 4px 12px rgba(0, 0, 0, 0.5)"}>
          <ModalHeader fontSize={25} pl={10} pt={16}>To Use HowsLife on your Web:</ModalHeader>
         
         <Flex>
          <ModalBody pl={10} pt={3} >
           <p>1. Open HowsLife on your Phone</p> 
           <p> 2. Tap Menu or Settings and select Linked Devices</p> 
            <p>3. Point your phone to this screen to capture this code</p>
          </ModalBody>

            <Image  pr={20} mt={-16} h={"200px"} src='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg'/>

          </Flex>
          <ModalFooter>
            
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
