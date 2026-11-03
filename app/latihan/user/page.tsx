import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

export default async function User() {
  const response = await fetch("https://jsonplaceholder.typicode.com/usersz");
  if (!response.ok) {
    throw new Error("fetch gagal");
  }
  const userData: User[] = await response.json();
  console.log("Fetched user data:", userData);

  return (
    <main className="flex flex-col justify-center items-center gap-6 py-32 px-16 ">
      {userData && (
        <ul>
          {userData.map((user) => (
            <li key={user.id}>
              {user.name},{user.email}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
