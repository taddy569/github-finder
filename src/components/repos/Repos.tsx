import React, { FC, useContext } from "react";

import GithubContext from "../../context/github/githubContext";
import RepoItem from "./RepoItem";
import { RepoType } from "./type";

const Repos: FC = () => {
  const githubContext = useContext(GithubContext);

  const { repos } = githubContext;

  return repos.map((repo: RepoType) => <RepoItem repo={repo} key={repo.id} />);
};

export default Repos;
