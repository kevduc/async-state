import { Title } from "@/components/ui/Title";
import { UserCard } from "@/components/UserCard";
import { Flex } from "@/components/ui/Flex";
import { Container } from "@/components/ui/Container";
import { useEffect, useState } from "react";
import { getUsers } from "@/services/users";
import type { User } from "@/services/user.types";
import { Spinner } from "@/components/ui/Spinner";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";

export function App() {
  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const [error, setError] = useState<unknown>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchUsers() {
    try {
      setError(undefined);
      setIsLoading(true);

      const users = await getUsers();

      setIsLoading(false);
      setUsers(users);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <Title>Users</Title>
      {isLoading ? (
        <Spinner />
      ) : error !== undefined ? (
        <Alert error={error} />
      ) : (
        <>
          <Button onClick={fetchUsers}>Refresh</Button>
          {users !== undefined ? (
            <Flex>
              {users.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </Flex>
          ) : null}
        </>
      )}
    </Container>
  );
}
