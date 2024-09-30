import React from "react";
import Logo from "./Logo";
import Version from "./Version";
import UserInform from "./UserInform";
const Header = ({ user, onLogout }) => {
  return (
    <header>
      <nav>
        <Logo />
        {user && <UserInform user={user} onLogout={onLogout} />}
      </nav>
    </header>
  );
};
export default Header;
