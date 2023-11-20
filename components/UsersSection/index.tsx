import type { User } from "@/utils";
import UserCard from "../UserCard";

export default function UsersSection({ users }: { users: User[] }) {
  return (
    <div>
      {/* {chunk(users, 3).map((row, id) => ( */}
        <div className="flex flex-wrap justify-around">
          {users.map((user) => (
            <UserCard user={user} key={user.email} />
          ))}
        </div>
      {/* ))} */}
    </div>
  );
}
