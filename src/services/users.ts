import { pause } from "@/utils/pause";
import type { User } from "./user.types";

type UsersDto = { users: User[] };

export async function getUsers(withError = false) {
  console.log("Fetching users...");
  await pause(5000); // simulate long loading time

  const data = (await fetch("https://dummyjson.com/users").then((res) =>
    res.json(),
  )) as UsersDto;

  if (withError) throw new Error("getUsers error");

  return data.users.sort(() => Math.random() * 2 - 1);
}
