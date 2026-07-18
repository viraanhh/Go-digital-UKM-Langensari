export function formatNomorWA(nomor) {
    if (!nomor) return null;

    let hasil = nomor.replace(/[\s-]/g, ''); // hapus spasi & tanda strip

    if (hasil.startsWith('+62')) {
        hasil = hasil.slice(1);
    } else if (hasil.startsWith('0')) {
        hasil = '62' + hasil.slice(1);
    }

    return hasil;
}