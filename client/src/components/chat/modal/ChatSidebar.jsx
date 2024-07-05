import { Flex, Box } from "@chakra-ui/react";
import ChatModal from "./ChatModal";
import EmptyChat from "../userchat/EmptyChat";
import Menu from "../menu/Menu";
import ChatBox from "../userchat/ChatBox/ChatBox";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";



const ChatSidebar = ({ className }) => {
    const { person } = useContext(AccountContext);

    return (
        <>
            <Flex
                position="absolute"
                overflow={"hidden"}
                className={className}
                boxShadow="0 4px 12px rgba(0, 0, 0, 0.2)"
                w="100vw"
                h="25%"
                flexDir="row"
                justifyContent="space-between"
                backgroundColor="#FBCEB1"
                transition="height 0.3s ease"
            >
                <ChatModal>
                    <Flex>
                        <Box>
                            <Menu />
                        </Box>

                        <Box
                            zIndex={100}
                            bgColor="#fafafa"
                           
                            borderLeft="1px solid rgba(0, 0, 0, 0.05)"
                            overflow={"hidden"}
                            // flex="1"
                            // overflowY="auto"
                        >
                            {Object.keys(person).length ? <ChatBox /> : <EmptyChat />}
                        </Box>
                    </Flex>
                </ChatModal>
            </Flex>
        </>
    );
}

export default ChatSidebar;