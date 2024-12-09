import { Title } from "@/components/ui/Title";
import { UserCard } from "@/components/UserCard";
import { Flex } from "@/components/ui/Flex";
import { Container } from "@/components/ui/Container";
import { useEffect, useState } from "react";
import { getUsers } from "@/services/users";
import type { User } from "@/services/user.types";
import { Spinner } from "@/components/ui/Spinner";
import { Alert } from "@/components/ui/Alert";

export function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(undefined);

  useEffect(() => {
    async function fetchUsers() {
      setIsLoading(true);

      const users = await getUsers();
      setUsers(users);
      setIsLoading(false);
    }

    fetchUsers().catch((error: unknown) => {
      setIsLoading(false);
      setError(error);
    });
  }, []);

  return (
    <Container>
      <Title>Users</Title>
      {isLoading ? (
        <Spinner />
      ) : error !== undefined ? (
        <Alert error={error} />
      ) : (
        <Flex>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </Flex>
      )}
    </Container>
  );
}
