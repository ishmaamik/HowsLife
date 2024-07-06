import React, { useContext, useState } from 'react';
import {
    Flex,
    Avatar,
    Button
} from '@chakra-ui/react';
import SideNavItem from './SideNavItem';
import { MoonIcon } from '@chakra-ui/icons';
import { AccountContext } from '../../../../context/AccountProvider';
import ProfileDrawer from '../../../profile/ProfileDrawer';
import { FiLogOut } from 'react-icons/fi';

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("small");
    const { account, setLogin, setAccount, person } = useContext(AccountContext);
    const [openDrawer, setOpenDrawer] = useState(false);
    const which = 'left';

    const openDraw = () => {
        setOpenDrawer(true);
    };

    const handleClose = () => {
        setOpenDrawer(false);
    };

    const LogOut = () => {
        setAccount(null);
        setLogin('0');
    };

    return (
        <Flex
            pos="sticky"
            height={"93vh"}
            zIndex={20}
            boxShadow="0 2px 5px 0 rgba(0, 0, 0, 0.3)"
            borderRadius={"0"}
            w={navSize === "small" ? "60px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                as="nav"
                onClick={LogOut}
            >
                <SideNavItem navSize={navSize} icon={FiLogOut} title="Calendar" />
            </Flex>

            <Flex
                p="1%"
                flexDir="column"
                w="100%"
                alignItems={navSize === "small" ? "center" : "flex-start"}
                mb={80}
            >
                <Flex mt={1} align="center">
                    <Button variant={"link"} _focus={{ outline: "none", boxShadow: "none" }} onClick={openDraw}>
                        <Avatar size="sm" src={account?.picture} />
                    </Button>
                </Flex>
            </Flex>
            <ProfileDrawer open={openDrawer} onClose={handleClose} user={account} which={which} />
        </Flex>
    );
}
