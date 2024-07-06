import { Box, Flex, Icon, Image, Link, Text } from "@chakra-ui/react";
import { AccountContext } from "../../../../context/AccountProvider";
import { useContext, useState } from "react";
import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";
import ProfileDrawer from "../../../profile/ProfileDrawer";



const ChatHeader=({person})=>
{
    const [openDrawer, setOpenDrawer] = useState(false);
    const which= 'right';
    const handleClose = () => {
        setOpenDrawer(false);
    };
    const openDraw=()=>{
        setOpenDrawer(true);
    }
    const {activeUsers}= useContext(AccountContext);
    return(
        <>
        <Flex overflow={"hidden"} bgColor={"#FBCEB1"} maxW={"2000px"} width={"1050px"} mr={"-24px"}>
            <Box ml={4} mt={3} mb={2}>
                <Link onClick={openDraw}>
            <Image borderRadius={"50%"} height={"50px"}  src={person.picture} />
            </Link>
            </Box>

            <Box ml={4} mt={2} w={20}>
            <Text
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                    >
                        {person.name}
                    </Text>
                <Text whiteSpace="nowrap"
                        textOverflow="ellipsis">{activeUsers?.find(user=> user.sub===person.sub)? 'Online': 'Offline'}</Text>
            </Box>

            <Icon ml={750} mt={6} as={SearchIcon}/>
            <Icon ml={8} mt={6} as={HamburgerIcon}/>
        </Flex>

        <ProfileDrawer open={openDrawer} onClose={handleClose} user={person} which={which} />

        </>
    )

}

export default ChatHeader;


