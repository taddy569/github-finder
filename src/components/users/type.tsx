export type UserType = {
  id: string
  login: string
  avatar_url: string
  html_url: string
}

export type UserItemType = {
  user: UserType
}

export type ParamsType = {
  login: string
}

export type MatchType<T> = {
  match: {
    params: T;
    isExact: boolean;
    path: string;
    url: string;
  }
}