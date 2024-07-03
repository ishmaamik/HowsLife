import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Input,
    Flex,
    Link,
    Box,
    Image,
    Text
    
  } from '@chakra-ui/react'
import React, {  useContext, useState } from 'react'
import AccountProvider, { AccountContext } from '../../context/AccountProvider';
import { motion } from 'framer-motion';


const ProfileDrawer=({open, onClose})=>
{
    // const [isOpen, setOpen]=useState(false);
    // const {onClose}= useDisclosure();
    const MotionDrawerContent = motion(DrawerContent);
    const {account}= useContext(AccountContext);
    
    return(
        <>
         
      <Drawer
        isOpen={open}
        placement='left'
        onClose={onClose}
        
      >
         <DrawerOverlay bg="transparent" />
       <MotionDrawerContent
       
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0 }}
                ml={6} maxW={"470px"} h={"721.5px"} mt={6}
            >
        
        
          <Flex overflow={'hidden'} backgroundColor={"mistyrose"} h={"131px"} >
          <Button variant="link" onClick={onClose} _focus={{boxShadow:'none', outline:'none'}}>
                    <ArrowBackIcon />
                </Button>
                <DrawerHeader ml={2} mt={8}>Profile</DrawerHeader>
          </Flex>
          <DrawerBody overflow={'hidden'}>  {/*drawer body needs the overflow hidden */}
            <Box display="flex" justifyContent="center">
            <Image src={account.picture} borderRadius={'50%'} justifyContent={"center"}/>
            </Box>

            <Box backgroundColor={"mistyrose"}  ml={-8}  mt={3} width={"530px"} height={"120px"} display="flex" flexDirection="column" justifyContent="flex-end" >
                            <Box ml={4} mb={8}>
                              <p>Your Name</p>
                              <Box ml={4} mt={6}>
                              <p>{account.name}</p>
                            </Box>
                          </Box>
            </Box>

            <Box backgroundColor={"white"}  ml={-8}  mt={0} width={"530px"} height={"120px"} display="flex" flexDirection="column" justifyContent="flex-end" >
                            <Box ml={4} mb={8}>
                              <p>About</p>
                              <Box ml={4} mt={6}>
                              <p>Eat, Sleep, Code, Repeat :3</p>
                            </Box>
                          </Box>
            </Box>
            <Box backgroundColor={"mistyrose"}  ml={-8}  mt={0} width={"530px"} height={"330px"} display="flex" flexDirection="column" justifyContent="flex-end" >
                           
            </Box>
          </DrawerBody>

          
        
        </MotionDrawerContent>
        <DrawerFooter>
          
        </DrawerFooter>
      </Drawer>
        </>
    )
}

export default ProfileDrawer;