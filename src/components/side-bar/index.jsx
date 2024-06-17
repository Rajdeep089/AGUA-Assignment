import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)} className={`relative `}>
      <div className={`border-8 h-screen md:h-auto border-white dark:border-black bg-[#6FCCDD] dark:bg-[#131416] w-full rounded-xl md:absolute sticky top-0 duration-300 ${open ? "md:w-56" : "w-24"}`}>
        <ul className="flex flex-col gap-10 p-3 text-white">
          <li onClick={() => setOpen(!open)} className="cursor-pointer flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {open && <span className="hidden md:block" >Menu</span>}
          </li>
          <li>
          <Link to={"/"} className={`flex items-center gap-2`}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-12">
              <path d="M10 3H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1V4a1 1 0 00-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
            </svg>
          {open && <span className="hidden md:block">Dashboard</span>}
          </Link>
          </li>
          <li>
            <Link to={"/time-table"} className={`flex items-center gap-2`}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-12">
              <path d="M14 12h1.5v2.82l2.44 1.41-.75 1.3L14 15.69V12M4 2h14a2 2 0 012 2v6.1c1.24 1.26 2 2.99 2 4.9a7 7 0 01-7 7c-1.91 0-3.64-.76-4.9-2H4a2 2 0 01-2-2V4a2 2 0 012-2m0 13v3h4.67c-.43-.91-.67-1.93-.67-3H4m0-7h6V5H4v3m14 0V5h-6v3h6M4 13h4.29c.34-1.15.97-2.18 1.81-3H4v3m11-2.85A4.85 4.85 0 0010.15 15c0 2.68 2.17 4.85 4.85 4.85A4.85 4.85 0 0019.85 15c0-2.68-2.17-4.85-4.85-4.85z" />
            </svg>
          {open && <span className="hidden md:block">Time Table</span>}
          </Link>
          </li>
          <li>
            <Link to={"/location"} className={`flex items-center gap-2`}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-12">
              <path d="M12 2c-4.42 0-8 .5-8 4v10a3 3 0 001 2.22V20a1 1 0 001 1h1a1 1 0 001-1v-1h6a8 8 0 01-1-3.5 5.55 5.55 0 012.38-4.5H6V6h12v4a4.07 4.07 0 01.5 0 5.34 5.34 0 011.5.22V6c0-3.5-3.58-4-8-4M7.5 14A1.5 1.5 0 116 15.5 1.5 1.5 0 017.5 14m11-2a3.54 3.54 0 00-3.5 3.5c0 2.6 3.5 6.5 3.5 6.5s3.5-3.9 3.5-6.5a3.54 3.54 0 00-3.5-3.5m0 4.8a1.2 1.2 0 110-2.4 1.29 1.29 0 011.2 1.2 1.15 1.15 0 01-1.2 1.2z" />
            </svg>
          {open && <span className="hidden md:block">Location</span>}
          </Link>
          </li>
          <li>
            <Link to={"/settings"} className={`flex items-center gap-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            {open && <span className="hidden md:block">Settings</span>}
            </Link>
          </li>
          <li className={`flex items-center gap-2`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
            {open && <span className="hidden md:block">Logout</span>}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
