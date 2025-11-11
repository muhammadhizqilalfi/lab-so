// menuConfig.ts
export interface MenuItem {
  label?: string;
  file?: string; // isi markdown kalau dia langsung punya konten
  children?: MenuItem[]; // untuk subcourse atau subbab
}

export const menuConfig: MenuItem[] = [
  {
    label: "Pengenalan",
    children: [
      { label: "Apa Itu Sistem Operasi", file: "apa-itu-sistem-operasi.md" },
      { label: "Sejarah Sistem Operasi", file: "sejarah-sistem.md" },
      { label: "Jenis-Jenis Sistem Operasi", file: "jenis-sistem.md" },
      {
        children: [
          { label: "Open Source", file: "open-source.md" },
          { label: "Closed Source", file: "closed-source.md" },
        ],
      },
      { label: "Antarmuka", file: "gui-cli.md" },
      {
        children: [
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
      { label: "Struktur Folder di Linux", file: "folder.md" },
      // { label: "Manajemen Paket", file: "manajemen-paket.md" },
      // { label: "Repository", file: "repo.md" },
      // { label: "Kernel Linux", file: "kernel.md" },
    ],
  },
  {
    label: "Instalasi",
    children: [
      { label: "Instalasi Windows XP", file: "xp.md" },
      { label: "Instalasi Linux Ubuntu", file: "linux.md" },
    ],
  },
  {
    label: "Materi",
    children: [
      { label: "1. Basic Command Linux", file: "basic.md" },
      { label: "2. Folder & File", file: "adv1.md" },
      { label: "3. User & Permission", file: "adv2.md" },
      {
        children: [
          { label: "3.a. Command User & Permission", file: "subadv2.md" },
        ],
      },
      { label: "4. Process & Service", file: "adv3.md" },
      { label: "5. Network", file: "adv4.md" },
      { label: "6. Disk & Filesystem", file: "adv5.md" },
      { label: "7. Shell Scripting", file: "adv6.md" },
    ],
  },

  {
    label: "Mini Server",
    children: [
      { label: "IP Static", file: "submini4.md" },
      { label: "SSH", file: "submini3.md" },
      { label: "Web Server", file: "submini1.md" },
      { label: "FTP", file: "submini2.md"},
      { label: "Samba Server", file: "submini5.md"}
    ],
  },
  {
    label: "Tools",
    children: [
      { label: "Virtualiasi", file: "virtualisasi.md" },
      { label: "ISO file", file: "iso.md" },
    ],
  },
];
