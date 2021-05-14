import React, { FC } from "react";

import { RepoItemType } from "./type";

const RepoItem: FC<RepoItemType> = ({ repo }) => {
  return (
    <div className="card">
      <h3>
        <a href={repo.html_url}>{repo.name}</a>
      </h3>
    </div>
  );
};

export default RepoItem;
