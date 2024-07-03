import React from 'react';
import { Flex, Text, Button, Icon } from '@chakra-ui/react';

const SideNavItem=({ icon, title, navSize })=> {
    return (
        <Flex
            mt={72}
            flexDir="column"
            w="100%"
            alignItems={navSize === "small" ? "center" : "flex-start"}
        >
            <Button
                p={3}
                borderRadius={8}
                variant="ghost"
                _hover={{ backgroundColor: "#AEC8CA" }}
                w={navSize === "large" ? "100%" : "auto"}
                onClick={() => {}}
                _focus={{ outline: "none", boxShadow: "none" }}
            >
                <Flex align="center">
                    <Icon as={icon} fontSize="xl" color="gray.500" />
                    <Text ml={5} display={navSize === "small" ? "none" : "flex"}>
                        {title}
                    </Text>
                </Flex>
            </Button>
        </Flex>
    );
}

export default SideNavItem;