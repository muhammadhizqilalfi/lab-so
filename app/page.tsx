// app/page.tsx (Next.js 13+ dengan App Router)
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-950 text-white px-4 sm:px-6 md:px-10">
      <div className="text-center max-w-full">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/assets/linux.png"
            alt="Linux Logo"
            width={200}
            height={200}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
          />
        </div>

        {/* Judul */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-mono font-bold tracking-widest mb-4">
          LAB SISTEM OPERASI B
        </h1>

        {/* Deskripsi */}
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-300 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto mb-8 leading-relaxed">
          Sistem Operasi menjadi fondasi utama yang menggerakkan komputer dan
          aplikasi — Mari jelajahi dunia sistem operasi!
        </p>

        {/* Tombol */}
        <a href="/Course">
          <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 border-2 border-gray-400 rounded-full text-sm sm:text-base md:text-lg lg:text-xl hover:bg-gray-800 transition">
            → Mulai
          </button>
        </a>
      </div>
    </main>
  );
}
