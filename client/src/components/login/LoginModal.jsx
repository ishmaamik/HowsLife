import React from 'react';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { Box, useDisclosure } from '@chakra-ui/react';
import {
    Flex,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  
  Image
} from '@chakra-ui/react';
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import { addUser } from '../../service/api';

const LoginModal = () => {
  const {onClose } = useDisclosure();
  const {setAccount ,setLogin, login}= useContext(AccountContext);
    const onLoginSuccess= async(res)=>
    {
        
        const decoed= jwtDecode(res.credential);
        console.log(decoed);
        setLogin('2');
        setAccount(decoed);
        await addUser(decoed);
        
        
    }

    const onLoginError=(res)=>
    {
        console.log('Failed authentication', res)
    }

     //curly braces for useContext, normal braces for create Context, square bracket for useState
  return (
    <>
      

      <Modal closeOnOverlayClick={false} isOpen={true} onClose={onClose}>
        
        <ModalContent maxW="800px" height="600px" boxShadow={"0 4px 12px rgba(0, 0, 0, 0.3)"}>
          <ModalHeader fontSize={25} pl={10} pt={16}>To Use HowsLife on your Web:</ModalHeader>
         
         <Flex>
          <ModalBody pl={10} pt={3} >
           <p>1. Open HowsLife on your Phone</p> 
           <p> 2. Tap Menu or Settings and select Linked Devices</p> 
            <p>3. Point your phone to this screen to capture this code</p>
          </ModalBody>
            <Box pos={"relative"}>
            <Image  pr={20} mt={-16} h={"200px"} src='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg'/>
            <Box pos={"absolute"} top={"10%"} right={"35%"}>
                <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError}/>
            </Box>
            </Box>
          </Flex>
          <ModalFooter>
            
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginModal;
