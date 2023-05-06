"use client";
import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import MenuIcon from "./MenuIcon";
import { SafeUser } from "../types";
import Categories from "./Categories";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-gray-100 z-10 shadow-sm">
      <div className="border-4 py-4">
        <Container>
          <div className="justify-between  flex flex-row items-center gap-3 md:gap-0">
            <Logo />
            <UserMenu />
            <Search />
            <MenuIcon currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
};

export default Navbar;
