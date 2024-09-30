import React from "react";
import { Link } from "react-router-dom";
const UserInform = ({ user, onLogout }) => {
  return (
    <div className="user-infrom">
      <button onClick={onLogout}>로그아웃</button>
      <span>접속중인 유저 : {user.username}</span>
    </div>
  );
};

export default UserInform;
