import { ArrowBackIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    Input,
    Flex,
    Box,
    Image,
    Text,
} from '@chakra-ui/react';
import React, { useContext, useState, useEffect } from 'react';
import { AccountContext } from '../../context/AccountProvider';

const ProfileDrawer = ({ open, onClose }) => {
    const { account, setAbout, about } = useContext(AccountContext);
    const [tempAbout, setTempAbout] = useState(about);

    // useEffect(() => {
    //     setTempAbout(about); // Update tempAbout if about changes
    // }, [about]);

    // const handleInputChange = (e) => {
    //     setTempAbout(e.target.value);
    // };

    // const handleKeyDown = (e) => {
    //     if (e.key === 'Enter') {
    //         setAbout(tempAbout); // Update the about state with tempAbout
    //     }
    // };

    const handleInputChange = (e) => {
        setTempAbout(e.target.value);
    };

    const setAb = (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            setAbout(tempAbout); // Use tempAbout to set the about state
        }
    };


    return (
        <Drawer
            isOpen={open}
            placement='left'
            onClose={onClose}
        >
            <DrawerOverlay bg="transparent" />
            <DrawerContent
                ml={6} maxW={"470px"} h={"721.5px"} mt={6}
            >
                <Flex overflow={'hidden'} backgroundColor={"mistyrose"} h={"131px"}>
                    <Button variant="link" onClick={onClose} _focus={{ boxShadow: 'none', outline: 'none' }}>
                        <ArrowBackIcon />
                    </Button>
                    <DrawerHeader ml={2} mt={8}>Profile</DrawerHeader>
                </Flex>
                <DrawerBody overflow={'hidden'}>
                    <Box display="flex" justifyContent="center">
                        <Image src={account.picture} borderRadius={'50%'} justifyContent={"center"} />
                    </Box>

                    <Box backgroundColor={"mistyrose"} ml={-8} mt={3} width={"530px"} height={"120px"} display="flex" flexDirection="column" justifyContent="flex-end">
                        <Box ml={4} mb={8}>
                            <p>Your Name</p>
                            <Box ml={4} mt={6}>
                                <p>{account.name}</p>
                            </Box>
                        </Box>
                    </Box>

                    <Box pos={"relative"} backgroundColor={"white"} ml={-8} mt={0} width={"530px"} height={"120px"} display="flex" flexDirection="column" justifyContent="flex-end">
                        <Box pos={"absolute"} ml={4} mb={8} >
                            <Text style={{marginBottom:'10px'}}>About</Text>
                            <Box ml={4} mt={6}>
                            {about === '' ?
                            
                                        <Input 
                                            width={"400px"}
                                            value={tempAbout} 
                                            onChange={handleInputChange} 
                                            onKeyDown={setAb} 
                                            placeholder="Tell us something about you..."
                                        /> :
                                        <Text>{about}</Text>
                                    }
                            </Box>
                        </Box>
                    </Box>
                    <Box backgroundColor={"mistyrose"} ml={-8} mt={0} width={"530px"} height={"330px"} display="flex" flexDirection="column" justifyContent="flex-end">
                    </Box>
                </DrawerBody>
            </DrawerContent>
            <DrawerFooter>
            </DrawerFooter>
        </Drawer>
    );
};

export default ProfileDrawer;
