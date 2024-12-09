import type { User } from "./user.types";

type UsersDto = { users: User[] };

export async function getUsers() {
  const data = (await fetch("https://dummyjson.com/users").then((res) =>
    res.json(),
  )) as UsersDto;

  return data.users;
}
