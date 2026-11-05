import {cacheLife} from "next/cache";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

async function getUser() {
  "use cache";
  cacheLife("minutes");
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error("fetch gagal");
  }
  const userData: User[] = await response.json();
  console.log("Fetched user data:", userData);
  return userData;
}

export default async function User() {
  const userData = await getUser();

  return (
    <main className="flex flex-col justify-center items-center gap-6 py-32 px-16 ">
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            <Link href={`/latihan/user/${user.id}`}>{user.name}</Link>,
            {user.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
