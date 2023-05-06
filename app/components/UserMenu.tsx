"use Client";
import React, { useCallback } from "react";
import { SafeUser } from "../types";
import LoginModal from "./Modals/LoginModal";
import useLoginModal from "../hooks/useLoginModal";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const LoginModal = useLoginModal();

  const onRent = useCallback(() => {
    if (!currentUser) {
      return LoginModal.onOpen();
    }
  }, [currentUser, LoginModal]);
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full
        hover:bg-neutral-100 transition cursor-pointer"
        >
          Yacht Masters! feel comfortable
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
