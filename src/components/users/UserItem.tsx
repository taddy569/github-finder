import React, { FC } from "react";
import { Link } from "react-router-dom";

import { UserItemType } from "./type";

const UserItem: FC<UserItemType> = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt={html_url}
        className="round-image"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark-btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
