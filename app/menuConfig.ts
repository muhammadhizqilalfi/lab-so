// menuConfig.ts
export interface MenuItem {
  label?: string;
  file?: string;          // isi markdown kalau dia langsung punya konten
  children?: MenuItem[];  // untuk subcourse atau subbab
}

export const menuConfig: MenuItem[] = [
  {
    label: "Pengenalan",
    children: [
      { label: "Apa Itu Sistem Operasi", file: "apa-itu-sistem-operasi.md" },
      { label: "Sejarah Sistem Operasi", file: "sejarah-sistem.md" },
      { label: "Jenis-Jenis Sistem Operasi", file: "jenis-sistem.md" },
      { children: [
          { label: "Open Source", file: "open-source.md" },
          { label: "Closed Source", file: "closed-source.md" },]},
      { label: "Antarmuka", file: "gui-cli.md" },
      { children: [
          { label: "GUI", file: "gui.md" },
          { label: "CLI", file: "cli.md" },
        ],
      },
    ],
  },
  {
    label: "Distribusi Linux",
    children: [
      { label: "Apa Itu Distribusi Linux", file: "distro.md" },
      { label: "Distribusi Linux Populer", file: "pop-distro.md" },
      { label: "DE & WM", file: "dewm.md" },
    ],
  },
  {
    label: "Instalasi",
    children: [
      { label: "Instalasi Windows XP", file: "xp.md" },
      // { label: "Langkah Instalasi", file: "langkah-instalasi.md" },
      // { label: "Konfigurasi Awal", file: "konfigurasi-awal.md" },
    ],
  },
  {
    label: "Tools",
    children: [
      { label: "Virtualiasi", file: "virtualisasi.md" },
      { label: "ISO file", file: "iso.md" },
    ]
  }
];
