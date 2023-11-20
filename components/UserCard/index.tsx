import type { User } from "@/utils";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="flex-1 flex flex-col gap-1 items-center">
      <img
        src={user.avatar}
        alt={user.first_name}
        className="rounded-full w-40"
      />
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>
        {user.first_name} {user.last_name}
      </p>
    </div>
  )
}