import React, { FC } from "react";

import Search from "../users/Search";
import Users from "../users/Users";

const Home: FC = () => {
  return (
    <>
      <Search />
      <Users />
    </>
  );
};

export default Home;
