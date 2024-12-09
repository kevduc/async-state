import type { User } from "../services/user.types";

type UserCardProps = {
  user: User;
};

export function UserCard({ user }: UserCardProps) {
  return (
    <div className="grid grid-cols-[4rem_minmax(0,1fr)] items-center gap-2 rounded-md border border-stone-700 bg-stone-900 py-2 pe-4 ps-2 shadow-md hover:bg-stone-700">
      <img src={user.image} alt={user.username} />
      <div>
        <p className="font-mono">{user.username}</p>
        <p className="capitalize italic text-gray-400">{user.role}</p>
      </div>
    </div>
  );
}
