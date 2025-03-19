import { Link } from "react-router-dom";
import {
  Wifi,
  Book,
  Microscope,
  Library,
  ChevronRight,
  Monitor,
  Users,
  Building,
  Briefcase,
  BookOpen,
} from "lucide-react";

export default function Fasilitas() {
  const facilities = [
    {
      title: "Lab Komputer Terlengkap",
      description:
        "Lab komputer dengan perangkat terbaru untuk mendukung pembelajaran teknologi informasi.",
      icon: <Monitor className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1592424002053-21f369ad7fdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-blue-900",
      size: "large", // Ukuran besar
    },
    {
      title: "Perpustakaan Modern",
      description:
        "Perpustakaan lengkap dengan koleksi buku terbaru dan ruang baca yang nyaman.",
      icon: <Book className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-green-900",
      size: "small", // Ukuran kecil
    },
    {
      title: "Lab IPA Berstandar Nasional",
      description:
        "Lab IPA dengan alat-alat praktikum lengkap untuk mendukung pembelajaran sains.",
      icon: <Microscope className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1575503802870-45de6a6217c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-purple-900",
      size: "small", // Ukuran kecil
    },
    {
      title: "Studio Multimedia",
      description:
        "Studio multimedia dilengkapi dengan peralatan editing profesional untuk pembelajaran desain dan produksi konten.",
      icon: <Library className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-red-900",
      size: "medium", // Ukuran sedang
    },
    {
      title: "Ruang Kelas Nyaman",
      description:
        "Ruang kelas dilengkapi dengan AC, proyektor, dan fasilitas pendukung lainnya.",
      icon: <Building className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-yellow-900",
      size: "medium", // Ukuran sedang
    },
    {
      title: "Wi-Fi Cepat dan Stabil",
      description:
        "Jaringan Wi-Fi berkecepatan tinggi untuk mendukung pembelajaran online dan riset.",
      icon: <Wifi className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-indigo-900",
      size: "large", // Ukuran besar
    },
    {
      title: "Aula Serbaguna",
      description:
        "Aula besar yang dapat digunakan untuk acara sekolah, seminar, dan kegiatan lainnya.",
      icon: <Users className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1522778119026-d647f0596c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-pink-900",
      size: "medium",
    },
    {
      title: "Lapangan Olahraga",
      description: "Lapangan olahraga lengkap untuk basket, voli, dan futsal.",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-teal-900",
      size: "large",
    },
    {
      title: "Kantin Sehat",
      description:
        "Kantin dengan menu sehat dan bergizi untuk mendukung aktivitas siswa.",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-orange-900",
      size: "small",
    },
    {
      title: "Ruang UKS",
      description:
        "Ruang Unit Kesehatan Sekolah yang dilengkapi dengan peralatan medis dasar.",
      icon: <Wifi className="w-8 h-8 text-white" />,
      image:
        "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      bgColor: "bg-cyan-900",
      size: "small",
    },
  ];

  return (
    <div className="pb-16 bg-gradient-to-b from-blue-50 to-white">
      <section className="relative h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-blue-900/75"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">
              Fasilitas Unggulan SMK Permata
            </h1>
            <p className="text-xl">
              Kami menyediakan fasilitas terbaik untuk mendukung proses
              pembelajaran dan pengembangan bakat siswa.
            </p>
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 pt-16">
        {/* Grid Fasilitas dengan Ukuran Berbeda */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className={`relative rounded-lg shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-lg ${
                facility.size === "large"
                  ? "lg:col-span-2"
                  : facility.size === "medium"
                  ? "lg:col-span-1"
                  : "lg:col-span-1"
              }`}
            >
              {/* Gambar Fasilitas */}
              <div className="relative h-64">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {facility.title}
                  </h3>
                </div>
              </div>

              {/* Konten Fasilitas */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-full ${facility.bgColor}`}>
                    {facility.icon}
                  </div>
                  <span className="ml-3 text-blue-900 font-semibold">
                    {facility.title}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{facility.description}</p>
                <Link
                  to={`/fasilitas/${facility.title
                    .toLowerCase()
                    .replace(/ /g, "-")}`}
                  className="text-blue-900 font-medium flex items-center hover:text-blue-700"
                >
                  Lihat detail <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">
            Tertarik Bergabung?
          </h3>
          <p className="text-gray-600 mb-6">
            Daftarkan diri Anda sekarang dan nikmati fasilitas terbaik bersama
            SMK Permata!
          </p>
          <Link
            to="/ppdb"
            className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition inline-block"
          >
            Daftar Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
}
