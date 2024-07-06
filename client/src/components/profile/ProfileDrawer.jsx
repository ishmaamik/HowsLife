import { ArrowBackIcon } from '@chakra-ui/icons';

import './profile.css';
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
import { uploadAbout, getUserBySub } from '../../service/api';





const ProfileDrawer = ({ open, onClose, user, which }) => {
    const { setAccount, setAbout } = useContext(AccountContext);
    const [tempAbout, setTempAbout] = useState('');
    const drawerClass = which === 'left' ? "drawer-left" : "drawer-right";
    

    useEffect(() => {
        if (user && user.sub) {
            const fetchUser = async () => {
                try {
                    const fetchedUser = await getUserBySub(user.sub);
                    setTempAbout(fetchedUser.about || '');
                } catch (error) {
                    console.error('Error fetching user:', error);
                }
            };
            fetchUser();
        }
    }, [user]);

    const handleInputChange = (e) => {
        setTempAbout(e.target.value);
    };

    const setAb = async (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            try {
                await uploadAbout({ sub: user.sub, about: tempAbout });
                setAccount(prev => ({ ...prev, about: tempAbout })); // Update account context
                setAbout(tempAbout); // Update about context if needed
            } catch (error) {
                console.error('Error updating about information:', error);
            }
        }
    };

    return (
        <Drawer
            isOpen={open}
            placement={which}
            onClose={onClose}
        >
            <DrawerOverlay bg="transparent" />
            <DrawerContent 
            sx={{
                width: which === 'left' ? '470px' : '420px',
                maxWidth: which === 'left' ? '470px' : '420px',
                height: '713.5px',
                marginTop: '24px',
                marginLeft: which === 'left' ? '24px' : '0',
                marginRight: which === 'right' ? '24px' : '0',
            }}>
                <Flex overflow={'hidden'} backgroundColor={"mistyrose"} h={"131px"}>
                    <Button variant="link" onClick={onClose} _focus={{ boxShadow: 'none', outline: 'none' }}>
                        <ArrowBackIcon />
                    </Button>
                    <DrawerHeader ml={2} mt={8}>Profile</DrawerHeader>
                </Flex>
                <DrawerBody overflow={'hidden'}>
                    <Box display="flex" justifyContent="center">
                        <Image src={user?.picture} borderRadius={'50%'} justifyContent={"center"} />
                    </Box>

                    <Box backgroundColor={"mistyrose"} ml={-8} mt={3} width={"530px"} height={"120px"} display="flex" flexDirection="column" justifyContent="flex-end">
                        <Box ml={4} mb={8}>
                            <p>Your Name</p>
                            <Box ml={4} mt={6}>
                                <p>{user?.name}</p>
                            </Box>
                        </Box>
                    </Box>
                    <Box backgroundColor={"white"} ml={-8} mt={0} width={"530px"} height={"120px"} display="flex" flexDirection="column">
                        <Box ml={4} mb={1} mt={4}>
                            <Text fontSize="lg" mb={1}>About</Text>
                        </Box>
                        {user.about ? (
                            <Box ml={4}>
                                <Text ml={4} mt={2}>{user.about}</Text>
                            </Box>
                        ) : (
                            <Box ml={4}>
                                <Input
                                    width={"400px"}
                                    value={tempAbout}
                                    onChange={handleInputChange}
                                    onKeyDown={setAb}
                                    placeholder="Tell us something about you..."
                                />
                            </Box>
                        )}
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
