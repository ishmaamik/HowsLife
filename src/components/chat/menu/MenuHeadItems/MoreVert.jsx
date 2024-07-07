import { HamburgerIcon } from "@chakra-ui/icons";
import { Button, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { useState } from "react";

const MoreVert = () => {
    const [opensProfile, setOpensProfile] = useState(false);

    const handleToggle = () => {
        setOpensProfile(!opensProfile); // Toggle the menu open/close state
    };

    return (
        <Menu isOpen={opensProfile} onClose={() => setOpensProfile(false)}>
            <MenuButton as={Button} variant="link" _focus={{ boxShadow: 'none', outline: 'none' }} onClick={handleToggle}>
                <Icon as={HamburgerIcon} boxSize={7} color="gray.500" mt={6} mr={2} />
            </MenuButton>
            <MenuList position={"relative"} ml={32} mt={-4} pos="fixed" right={0} style={{zIndex:'100'}}>
                <MenuItem>New Window</MenuItem>
                <MenuItem>Open Closed Tab</MenuItem>
                <MenuItem>Open File</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default MoreVert;
