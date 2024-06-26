import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import './App.css';  // Ensure this contains the correct path to your CSS file
import SideBar from './components/SideBar';

function App() {
    const [count, setCount] = useState(0);

    return (
        <Flex w="100vw" h="100vh" overflow={"hidden"} position={"relative"}>
          
           
                <Image
                    src='https://img.freepik.com/free-photo/nature-colorful-landscape-dusk-cloud_1203-5705.jpg?t=st=1719378657~exp=1719382257~hmac=4f0506bae9898455103f3a1d21dfd7cc58ff5293b7f0636b156bb61150bde941&w=1060'
                    alt="Nature landscape"
                   overflowX={"hidden"}
                   overflowY={"hidden"}
                    w="100%"
                    h="100%"
                    zIndex={-1}
                    position={"absolute"}
                />
            

           
            <SideBar className="sidebar" zIndex="3" />

           
<Image  src='https://img.freepik.com/free-photo/nature-colorful-landscape-dusk-cloud_1203-5705.jpg?t=st=1719378657~exp=1719382257~hmac=4f0506bae9898455103f3a1d21dfd7cc58ff5293b7f0636b156bb61150bde941&w=1060'
                alt="Nature landscape"
                objectFit="cover"
                w="100vw"
                h="100vh"
                
                top="0"
                left="0"
                />

        </Flex>
    );
}

export default App;
