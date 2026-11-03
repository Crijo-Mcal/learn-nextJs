@AGENTS.md

# Catatan Belajar React & Next.js

Project ini adalah tempat belajar, bukan aplikasi produksi. Gunakan bahasa Indonesia.

## Tentang saya

- Menguasai dasar HTML, CSS, JavaScript, PHP, MySQL, REST API, dan dasar OOP.
- Pernah belajar React dan Vite. Sekarang mengulang React sambil belajar Next.js untuk pertama kalinya.
- Paham dasar TypeScript.
- Tujuan: mampu menulis kode sendiri, bukan sekadar menghasilkan aplikasi lewat AI.

## Cara membimbing

- Jelaskan konsep dulu, beri contoh sederhana, lalu beri latihan yang saya kerjakan sendiri.
- Jangan menuliskan kode latihan untuk saya. Saya yang menulis, Claude yang mereview.
- Kalau ada kesalahan, beri petunjuk dulu sebelum solusi lengkap.
- Satu konsep dalam satu waktu. Kaitkan dengan JavaScript murni atau PHP bila relevan.
- Pesan harus ringkas. Teks yang terlalu panjang membuat saya melewatkan isinya.
- Jangan mengubah konfigurasi atau struktur folder tanpa menjelaskan alasannya dan meminta persetujuan.

## Roadmap

1. **Review React:** JSX, components, props, useState, event, conditional rendering, list, forms, useEffect, custom hooks. ✅ Selesai (2026-11-02)
2. **Dasar Next.js:** struktur project, App Router, pages & layouts, navigasi (`<Link>`), Server & Client Components, `"use client"`. ⏳ Sedang berjalan
3. **Praktik:** fetching data, API, loading & error, dynamic routes, forms & validasi, auth, pengelolaan data.
4. **Proyek praktik terbimbing.**

## Progres

| No | Materi | File | Status |
|----|--------|------|--------|
| 1 | Props | `app/latihan/components/Card.tsx` | ✅ |
| 2 | useState | `app/latihan/components/Quantity.tsx` | ✅ |
| 3 | Lifting state | `app/latihan/components/ColorPanel.tsx` | ✅ |
| 4 | Conditional rendering | | ✅ |
| 5 | List & `key` | `app/latihan/page.tsx` | ✅ |
| 6 | Forms | `app/latihan/components/NameForm.tsx` | ✅ |
| 7 | useEffect dependency | `app/latihan/components/TitleCounter.tsx` | ✅ |
| 8 | useEffect cleanup | `app/latihan/components/WindowWidth.tsx` | ✅ |
| 9 | Custom hook | `app/latihan/hooks/useWindowWidth.ts` | ✅ |
| 10 | Nested layout & `<Link>` | `app/latihan/layout.tsx` | ✅ |
| 11 | Server & Client Component | `app/latihan/components/WindowWidth.tsx` | ✅ |

**Catatan Latihan 10:** `<a>` melakukan full reload sehingga semua state hilang. `<Link>` hanya mengganti `{children}`, sedangkan layout tetap hidup. Karena `cacheComponents: true` di `next.config.ts`, halaman lama tidak dibuang tetapi disembunyikan (`display: none`) oleh React `<Activity>`, jadi state di page juga bertahan (maksimal 3 halaman). Sudah dibuktikan lewat DevTools.

**Catatan Latihan 11:** Semua komponen di App Router default-nya Server Component. `"use client"` adalah batas: semua yang di-import file client ikut menjadi client, jadi cukup ditulis sekali. Batas harus dipasang di **komponen**, bukan di hook, karena hook berjalan di dalam komponen pemanggilnya (dibuktikan lewat error "Attempted to call ... from the server"). Taruh `"use client"` sedalam mungkin di pohon komponen. `"use server"` adalah direktif lain untuk Server Actions.

**Posisi sekarang:** Latihan 11 selesai. Berikutnya: apa yang bisa dilakukan Server Component tetapi tidak bisa dilakukan Client Component (komponen `async`, akses data langsung di server).

## Hal yang perlu dipantau

- Pernah tertukar antara `onClick={fungsi}` dan `onClick={fungsi()}`.
- Pernah menggabungkan beberapa state dalam satu kondisi tampilan.
- Pernah mengira bilangan negatif bernilai falsy (sudah diluruskan).

> Perbarui bagian **Progres** setiap kali satu latihan selesai.
