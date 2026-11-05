"use server"
import { refresh } from "next/cache";
import { data } from "./data";


export default async function simpanNama(prevState: { message: string }, formData: FormData) {


    const nama = formData.get("nama");
    if (typeof nama !== "string" || nama.trim() === "") {
        return { message: "nama wajib diisi" };
    }

    data.push(nama.trim());
    console.log(nama);
    refresh();
    return { message: "tamu berhasil ditambahkan" };
}