import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
import './App.css';  // Ensure this contains the correct path to your CSS file
import SideBar from './components/SideBar';
import ExampleImage from './components/natural.png'
import ExampleImage2 from './components/sky.png'
import LoginSidebar from "./login/LoginSidebar";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
        {/* <Flex w="100vw" h="100vh" overflow={"hidden"} position={"relative"}>
          
           
               

           
            <SideBar className="sidebar" zIndex="3" />

           
<Image  src={ExampleImage2}
                alt="Nature landscape"
                objectFit="cover"
                w="100vw"
                h="100vh"
                
                top="0"
                left="0"
                />

        </Flex> */}

        <LoginSidebar className="sidebar" zIndex="3"/>

</>
    );
}

export default App;
