import React, { useState} from "react";
import TopLeftBar from "./components/top-left";
import TopRightBar from "./components/top-right";
import Design from "./Assets/Light_Mode_TopImage.svg";
import Design2 from "./Assets/Dark_Mode_TopImage.svg";
import MainBody from "./components/main-section";
import SideBar from "./components/side-bar";

function App() {
  const [dark, setDark] = useState(false);
  
  return (
    <div  className="p-2 dark:bg-black">
      <div className="flex md:flex-row flex-col-reverse relative">
        <TopLeftBar />
        <TopRightBar setDark={setDark} />
      </div>
      <div className="w-full bg-[#B4E3EB] dark:bg-[#131416] h-20 rounded-tr-xl rounded-bl-xl relative z-0">
        <span className="absolute top-0 right-0 w-1/4 bg-white dark:bg-black h-4 md:block hidden"></span>
        <img src={dark ? Design2 : Design} className="absolute md:top-4 right-0 w-[32.5%]" />
      </div>
      <div className="flex justify-between">
      <SideBar />
      <MainBody />
      </div>
    </div>
  );
}

export default App;
