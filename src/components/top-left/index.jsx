import React from 'react'
import Logo from "../../Assets/Logo.svg"
import Search from "./search"

const TopLeftBar = () => {
  return (
    <div className="flex gap-4 p-4 md:w-2/3 bg-[#B4E3EB] dark:bg-[#131416] rounded-tr-xl rounded-tl-xl h-full">
    <img src={Logo} />
    <Search />
    
  </div>
  )
}

export default TopLeftBar