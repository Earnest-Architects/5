/**
 * ============================================================
 *  notes-config.js — SATU-SATUNYA FILE YANG PERLU DIEDIT
 *  untuk menyambungkan fitur "Catatan Hotspot" ke Worker Cloudflare (D1).
 * ============================================================
 * NOTES_API_URL : alamat Worker (TANPA garis miring "/" di akhir).
 * PROJECT_ID    : ID unik project ini. Harus sudah didaftarkan di
 *                 Worker lewat  POST /projects  dan SAMA PERSIS
 *                 dengan yang terdaftar (huruf, angka, "-" dan "_").
 *                 Setiap project/situs punya PROJECT_ID sendiri,
 *                 jadi catatan antar project tidak tercampur.
 * ============================================================ */
export const NOTES_API_URL = "https://notes-hotspot-api.vtour.workers.dev";
export const PROJECT_ID = "kajanchi";
