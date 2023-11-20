import Image from "next/image";
import type { User } from "@/utils";

export default function UserCard({ user }: { user: User }) {
  return (
    <div className="flex flex-col gap-1 items-center w-full sm:w-5/12 md:w-4/12 mb-6">
      <Image
        src={user.avatar}
        alt={user.first_name}
        width="100"
        height="100"
        className="rounded-full"
        style={{ width: "60px", height: "60px", objectFit: "cover" }}
        priority
      />
      <p>{user.id}</p>
      <p>{user.email}</p>
      <p>
        {user.first_name} {user.last_name}
      </p>
    </div>
  );
}
