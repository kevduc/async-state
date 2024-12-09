import { pause } from "@/utils/pause";
import type { User } from "./user.types";

type UsersDto = { users: User[] };

export async function getUsers() {
  console.log("Fetching users...");
  await pause(5000); // simulate long loading time

  const data = (await fetch("https://dummyjson.com/users").then((res) =>
    res.json(),
  )) as UsersDto;

  return data.users;
}
