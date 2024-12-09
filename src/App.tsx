import { Title } from "@/components/ui/Title";
import { UserCard } from "@/components/UserCard";
import { Flex } from "@/components/ui/Flex";
import { Container } from "@/components/ui/Container";

const users = [
  {
    id: 1,
    email: "emily.johnson@x.dummyjson.com",
    username: "emilys",
    image: "https://dummyjson.com/icon/emilys/128",
    role: "user",
  },
  {
    id: 2,
    email: "michael.williams@x.dummyjson.com",
    username: "michaelw",
    image: "https://dummyjson.com/icon/michaelw/128",
    role: "admin",
  },
  {
    id: 3,
    email: "sophia.brown@x.dummyjson.com",
    username: "sophiab",
    image: "https://dummyjson.com/icon/sophiab/128",
    role: "admin",
  },
];

export function App() {
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
