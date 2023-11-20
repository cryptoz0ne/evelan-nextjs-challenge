export const API_BASE_URL = "https://reqres.in/api";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UsersResponse = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};

export async function fetchUsers(
  page: number
): Promise<UsersResponse | undefined> {
  let data;

  try {
    const res = await fetch(`${API_BASE_URL}/users?page=${page}`);
    data = await res.json();
  } catch (e) {
    console.log("failed to fetch users at page ", page);
  }

  return data;
}
