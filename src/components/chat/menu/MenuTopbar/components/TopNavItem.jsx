import React from 'react';
import {
  Flex,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuList
} from '@chakra-ui/react';
import { FiMessageSquare, FiUsers, FiMail, FiSmile, FiBriefcase } from 'react-icons/fi';
import { useState, useRef } from "react";

const TopNavItem=({title, navSize, mr })=> { // Ensure onClick is listed here
  const features = [
    { title: 'Message Privately', description: 'End-to-end encryption and privacy controls.', icon: FiMessageSquare },
    { title: 'Stay Connected', description: 'Message and call for free* around the world.', icon: FiMail },
    { title: 'Build Community', description: 'Group conversations made simple.', icon: FiUsers },
    { title: 'Express Yourself', description: 'Say it with stickers, voice, GIFs and more.', icon: FiSmile },
    { title: 'WhatsApp Business', description: 'Reach your customers from anywhere.', icon: FiBriefcase }
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <Flex
      mt={15}
      flexDir="row"
      w="100%"
      alignItems="flex-start"
      mr={mr}
    >
      <Menu placement="bottom-end"  isOpen={menuOpen} onOpen={handleMenuToggle} onClose={() => setMenuOpen(false)}>
        <Link
          
          p={3}
          borderRadius={15}
          _hover={{ backgroundColor: "transparent", textDecoration: "none", color: "inherit" }}
          w={navSize === "large" && "100%"}
        >
          <MenuButton
            w="100%"
            _focus={{ outline: 'none', boxShadow: 'none' }}
            _hover={{ outline: 'none' }}            
          >
            <Flex
              _hover={{ outline: 'none', boxShadow: 'none' }}
              _focus={{ outline: 'none', boxShadow: 'none' }}
            >
              <Text fontSize={"20px"} ml={2} display={navSize === "small" ? "none" : "flex"}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList
          py={0}
          border="none"
          boxShadow="xl"
          minW="100%"
          maxW="100vw"
        >
          
        </MenuList>
      </Menu>

      
    </Flex>
  );
}

export default TopNavItem;