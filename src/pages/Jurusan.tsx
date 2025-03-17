import { Link } from 'react-router-dom';
import { Cpu, Code, Wrench, Clipboard, BookOpen, Briefcase, ChevronRight } from 'lucide-react';

export default function Jurusan() {
  const technicalPrograms = [
    {
      title: "Teknik Komputer dan Jaringan (TKJ)",
      description: "Mempelajari perakitan komputer, jaringan, dan sistem operasi.",
      icon: <Cpu className="w-8 h-8 text-blue-900" />,
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      facilities: [
        "Lab Komputer Terlengkap",
        "Jaringan Internet Cepat",
        "Peralatan Jaringan Modern"
      ],
      testimonial: {
        name: "Rizky Pratama",
        quote: "Saya belajar banyak tentang jaringan dan sistem operasi di jurusan ini. Sangat bermanfaat untuk karir saya!"
      }
    },
    {
      title: "Rekayasa Perangkat Lunak (RPL)",
      description: "Mempelajari pemrograman dan pengembangan aplikasi.",
      icon: <Code className="w-8 h-8 text-blue-900" />,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      facilities: [
        "Lab Pemrograman",
        "Proyek Pengembangan Aplikasi",
        "Mentor Berpengalaman"
      ],
      testimonial: {
        name: "Dewi Lestari",
        quote: "Jurusan ini membantu saya menguasai berbagai bahasa pemrograman dan siap terjun ke dunia kerja."
      }
    },
    {
      title: "Teknik Kendaraan Ringan (TKR)",
      description: "Mempelajari perawatan dan perbaikan kendaraan ringan.",
      icon: <Wrench className="w-8 h-8 text-blue-900" />,
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      facilities: [
        "Bengkel Lengkap",
        "Alat Perbaikan Modern",
        "Praktik Langsung di Lapangan"
      ],
      testimonial: {
        name: "Budi Santoso",
        quote: "Saya bisa langsung praktik memperbaiki mobil di bengkel sekolah. Sangat membantu untuk karir saya!"
      }
    }
  ];

  const businessPrograms = [
    {
      title: "Otomatisasi dan Tata Kelola Perkantoran (OTKP)",
      description: "Mempelajari administrasi perkantoran dan manajemen dokumen.",
      icon: <Clipboard className="w-8 h-8 text-blue-900" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      facilities: [
        "Lab Administrasi",
        "Pelatihan Software Perkantoran",
        "Praktik Kerja Lapangan"
      ],
      testimonial: {
        name: "Siti Rahayu",
        quote: "Saya belajar banyak tentang manajemen dokumen dan administrasi. Sangat berguna untuk bekerja di kantor."
      }
    },
    {
      title: "Akuntansi",
      description: "Mempelajari pencatatan keuangan dan pelaporan keuangan.",
      icon: <BookOpen className="w-8 h-8 text-blue-900" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      facilities: [
        "Lab Akuntansi",
        "Software Akuntansi Terbaru",
        "Praktik Kerja di Perusahaan"
      ],
      testimonial: {
        name: "Ahmad Fauzi",
        quote: "Jurusan ini mengajarkan saya cara mengelola keuangan dengan baik. Sangat bermanfaat untuk karir di bidang keuangan."
      }
    },
    {
      title: "Pemasaran",
      description: "Mempelajari strategi pemasaran dan penjualan produk.",
      icon: <Briefcase className="w-8 h-8 text-blue-900" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      facilities: [
        "Lab Pemasaran",
        "Pelatihan Digital Marketing",
        "Praktik Langsung di Dunia Usaha"
      ],
      testimonial: {
        name: "Dian Sastro",
        quote: "Saya belajar banyak tentang strategi pemasaran dan penjualan. Sangat berguna untuk membangun bisnis sendiri."
      }
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Program Jurusan Kami</h2>

        {/* SMK Permata 1 - Teknikal */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">SMK Permata 1 - Teknikal</h3>
          <div className="space-y-12">
            {technicalPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Gambar Jurusan */}
                  <div className="relative h-96">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-white text-center drop-shadow-lg">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Deskripsi dan Fasilitas */}
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      {program.icon}
                      <h3 className="text-2xl font-semibold ml-3 text-blue-900">{program.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{program.description}</p>

                    {/* Fasilitas */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-blue-900 mb-4">Fasilitas Unggulan</h4>
                      <ul className="space-y-2">
                        {program.facilities.map((facility, i) => (
                          <li key={i} className="flex items-center">
                            <ChevronRight className="w-4 h-4 text-blue-900 mr-2" />
                            <span className="text-gray-600">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimoni */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <p className="text-gray-600 italic mb-2">"{program.testimonial.quote}"</p>
                      <p className="text-blue-900 font-semibold">- {program.testimonial.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SMK Permata 2 - Bisnis & Management */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-8">SMK Permata 2 - Bisnis & Management</h3>
          <div className="space-y-12">
            {businessPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Gambar Jurusan */}
                  <div className="relative h-96">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-4xl font-bold text-white text-center drop-shadow-lg">
                        {program.title}
                      </h3>
                    </div>
                  </div>

                  {/* Deskripsi dan Fasilitas */}
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      {program.icon}
                      <h3 className="text-2xl font-semibold ml-3 text-blue-900">{program.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{program.description}</p>

                    {/* Fasilitas */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold text-blue-900 mb-4">Fasilitas Unggulan</h4>
                      <ul className="space-y-2">
                        {program.facilities.map((facility, i) => (
                          <li key={i} className="flex items-center">
                            <ChevronRight className="w-4 h-4 text-blue-900 mr-2" />
                            <span className="text-gray-600">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Testimoni */}
                    <div className="bg-gray-100 p-6 rounded-lg">
                      <p className="text-gray-600 italic mb-2">"{program.testimonial.quote}"</p>
                      <p className="text-blue-900 font-semibold">- {program.testimonial.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Tertarik Bergabung?</h3>
          <p className="text-gray-600 mb-6">Daftarkan diri Anda sekarang dan raih masa depan gemilang bersama SMK Permata!</p>
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