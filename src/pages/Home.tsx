import {
  Users,
  GraduationCap,
  Award,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const heroImages = [
    {
      image:
        "https://i.ibb.co/tP1ZWqFj/belajar.jpg",
      title: "Selamat Datang di SMK Permata",
      description:
        "Membentuk generasi unggul yang berkarakter, kompeten, dan siap bersaing di era global",
    },
    {
      image:
        "https://i.ibb.co/PZ9Q0jg3/sekolah.jpg",
      title: "Pendidikan Berkualitas",
      description:
        "Kami menyediakan pendidikan berkualitas dengan fasilitas terbaik",
    },
    {
      image:
        "https://i.ibb.co/vCtjHmvf/perpus.jpg",
      title: "Lingkungan Belajar Nyaman",
      description:
        "Lingkungan belajar yang nyaman dan mendukung perkembangan siswa",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full h-full"
        >
          {heroImages.map((hero, index) => (
            <SwiperSlide key={index} className="relative w-full h-full">
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${hero.image}')` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
              </div>
              <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
                <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
                  {hero.title}
                </h1>
                <p className="text-xl text-white mb-6 drop-shadow-lg max-w-2xl">
                  {hero.description}
                </p>
                <Link
                  to="/ppdb"
                  className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
                >
                  Daftar Sekarang
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-4xl font-bold text-blue-900">2000+</h3>
              <p className="text-gray-600">Siswa Aktif</p>
            </div>
            <div className="text-center">
              <GraduationCap className="w-12 h-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-4xl font-bold text-blue-900">150+</h3>
              <p className="text-gray-600">Guru & Staff</p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-4xl font-bold text-blue-900">100+</h3>
              <p className="text-gray-600">Prestasi</p>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-4xl font-bold text-blue-900">6</h3>
              <p className="text-gray-600">Program Keahlian</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Program Keahlian Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Teknik Komputer dan Jaringan",
                desc: "Mempelajari perakitan komputer, jaringan, dan sistem operasi",
                image:
                  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              },
              {
                title: "Rekayasa Perangkat Lunak",
                desc: "Mempelajari pemrograman dan pengembangan aplikasi",
                image:
                  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              },
              {
                title: "Multimedia",
                desc: "Mempelajari desain grafis, animasi, dan editing video",
                image:
                  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{program.desc}</p>
                  <Link
                    to={`/jurusan#${program.title
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                    className="text-blue-900 font-medium flex items-center hover:text-blue-700"
                  >
                    Pelajari lebih lanjut{" "}
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/jurusan"
              className="inline-flex items-center text-blue-900 font-semibold hover:text-blue-700"
            >
              Lihat Semua Program Keahlian{" "}
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* News & Events Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">
            Berita & Kegiatan Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Kunjungan Industri ke PT Technology Indonesia",
                date: "15 Maret 2024",
                image:
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              },
              {
                title: "Juara Umum Lomba Kompetensi Siswa Tingkat Provinsi",
                date: "10 Maret 2024",
                image:
                  "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              },
              {
                title: "Workshop Digital Marketing bersama Google",
                date: "5 Maret 2024",
                image:
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{news.date}</p>
                  <h3 className="text-xl font-semibold mb-3 text-blue-900">
                    {news.title}
                  </h3>
                  <Link
                    to="/berita"
                    className="text-blue-900 font-medium flex items-center hover:text-blue-700"
                  >
                    Baca selengkapnya <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
