import {notFound} from "next/navigation";

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

async function getUserById(id: string): Promise<User> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    throw new Error(`gagal mencari user dengan id ${id}`);
  }

  const data: User = await response.json();

  return data;
}

export default async function PageId({
  params,
}: PageProps<"/latihan/user/[id]">) {
  const {id} = await params;
  const user = await getUserById(id);

  return (
    <div className="w-full flex flex-col items-center">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}
