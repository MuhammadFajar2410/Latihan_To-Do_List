# Latihan Membuat To-Do List

<p align="justify">Fokus utama dalam latihan ini adalah dalam logika javascript dan sedikit layouting menggunakan bootstrap.</p>

## Tinjauan Visual

<p align="justifyy">Berikut adalah tampilan dan penjelasan singkat mengenai latihan yang telah dibuat:</p>

- Tampilan Awal
<p align="justify">Pada tampilan awal dibuat cukup sederhana, ada 2 input yang tersedia yaitu Tanggal dan juga Kegiatan. Dibawahnya ada table untuk mengisi data yang telah di input, pada latihan ini juga menerapkan penyimpanan data ke local storage sehingga tidak akan terhapus jika dilakukan refresh.</p>

<img src="/spoiler/tampilan-awal.png">

- Setelah dilakukan Input
<p align="justify">Setelah dilakukan Input maka tampikan pada table akan langsung terupdate, dengan tambahan 2 tombol aksi yaitu edit dan juga delete</p>

<img src="/spoiler/setelah-dilakukan-input.png">

- Checkbox
<p align="justify">Pada bagian checkbox dapat di klik, dan ketika statusnya checked maka akan otomatis mengupdate data pada bahwa statusnya telah completed, selain itu juga akan otomatis menambahkan text-decoraction line-through pada text.</p>

<img src="/spoiler/checkbox.png">

- Melakukan Edit
<p align="justify">Ketika tombol edit ditekan akan otomatis menyembunyikan tombolnya dan memunculkan 2 tombol lainnya yaitu Cancel dan Save. Selain itu akan menambahkan attribut contentEditable pada input Tanggal dan Kegiatan, agar dapat melakukan edit secara langsung.</p>

<img src="/spoiler/edit.png">

- Melakukan Save setelah Edit
<p align="justify">Jika melakukan save setelah edit maka konten akan berubah secara langsung, juga mengembalikan tombol Edit juga menghilangkan tombol Cancel dan Save.</p>

<img src="/spoiler/save.png">
