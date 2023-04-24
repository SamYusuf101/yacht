"use client";
import React, { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

const MenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div
      onClick={toggleOpen}
      className="
  p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row
  items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
    >
      <div className="p-2 gap-2 bg-blue-400 rounded-full items-center text-white flex flex-row ">
        <AiOutlineMenu />
        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>

      {isOpen && (
        <div
          className="absolute rounded-xl shadow-md md:w-[20vw] lg:w-[15vw] xl:w-[13vw]
        w-20 bg-blue-300 overflow-hidden right-2
        top-20 text-sm"
        >
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={() => {}} label="SignUp" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuIcon;
