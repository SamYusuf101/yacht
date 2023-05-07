"use Client";
import React, { useCallback } from "react";
import { SafeUser } from "../types";
import LoginModal from "./Modals/LoginModal";
import useLoginModal from "../hooks/useLoginModal";
import useRentModel from "../hooks/useRentModel";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const loginModal = useLoginModal();
  const rentModel = useRentModel();

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModel.onOpen();
  }, [currentUser, loginModal]);
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
