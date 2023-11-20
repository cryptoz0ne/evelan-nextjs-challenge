"use client";

import { useState } from "react";
import { fetchUsers } from "@/utils";
import type { User, UsersResponse } from "@/utils";
import UsersSection from "../UsersSection";

export default function LoadMore({
  from,
  total,
}: {
  from: number;
  total: number;
}) {
  const [page, setPage] = useState(from);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMore = async () => {
    setLoading(true);
    let _users: UsersResponse | undefined = await fetchUsers(page);
    if (_users) {
      setUsers([...users, ..._users.data]);
      setPage(page + 1);
    }
    setLoading(false);
  };

  return (
    <>
      {users.length > 0 && <UsersSection users={users} />}

      <div className="flex justify-center">
        <button
          onClick={loadMore}
          disabled={page > total || loading}
          className="bg-teal-600 enabled:hover:bg-teal-700 disabled:opacity-25 text-white rounded-md px-4 py-2 mb-2"
        >
          Load More
        </button>
      </div>
    </>
  );
}
