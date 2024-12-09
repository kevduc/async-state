import { Title } from "@/components/ui/Title";
import { UserCard } from "@/components/UserCard";
import { Flex } from "@/components/ui/Flex";
import { Container } from "@/components/ui/Container";
import { useEffect, useState } from "react";
import { getUsers } from "@/services/users";
import type { User } from "@/services/user.types";

export function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const users = await getUsers();
      setUsers(users);
    }

    fetchUsers();
  }, []);

  return (
    <Container>
      <Title>Users</Title>
      <Flex>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Flex>
    </Container>
  );
}
