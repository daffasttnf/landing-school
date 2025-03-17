import { Award, Target, Users2 } from "lucide-react";

export default function Profile() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
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
            <h1 className="text-5xl font-bold mb-4">Profil Sekolah</h1>
            <p className="text-xl">
              Mengenal lebih dekat SMK Permata 1 dan 2 Bogor
            </p>
          </div>
        </div>
      </section>

      {/* Sejarah Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">
            Sejarah Singkat
          </h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              SMK Permata 1 dan 2 Bogor didirikan pada tahun 1990 dengan visi
              untuk menjadi lembaga pendidikan kejuruan yang unggul dan
              terkemuka di Indonesia. Berawal dari sebuah gedung sederhana
              dengan dua program keahlian, kini SMK Permata telah berkembang
              menjadi institusi pendidikan modern dengan fasilitas lengkap dan
              enam program keahlian yang terakreditasi A.
            </p>
            <p className="text-gray-600 mb-4">
              Selama lebih dari tiga dekade, SMK Permata telah menghasilkan
              ribuan lulusan berkualitas yang kini berkarya di berbagai sektor
              industri, baik di dalam maupun luar negeri. Keberhasilan ini tidak
              lepas dari komitmen sekolah dalam memberikan pendidikan
              berkualitas dan relevan dengan kebutuhan dunia industri.
            </p>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Target className="w-12 h-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Visi</h3>
              <p className="text-gray-600">
                Menjadi lembaga pendidikan kejuruan terkemuka yang menghasilkan
                lulusan berkarakter, kompeten, dan berdaya saing global.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Award className="w-12 h-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Misi</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>
                  • Menyelenggarakan pendidikan berbasis kompetensi dan karakter
                </li>
                <li>• Mengembangkan kerjasama dengan dunia industri</li>
                <li>
                  • Meningkatkan kualitas tenaga pendidik dan kependidikan
                </li>
                <li>• Menyediakan fasilitas pembelajaran modern</li>
              </ul>
            </div>
            <div className="text-center p-8 bg-white rounded-lg shadow-lg">
              <Users2 className="w-12 h-12 mx-auto text-blue-900 mb-4" />
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Tujuan</h3>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Menghasilkan lulusan yang siap kerja</li>
                <li>• Membangun karakter dan kepribadian siswa</li>
                <li>• Mengembangkan potensi dan kreativitas siswa</li>
                <li>• Menciptakan lingkungan belajar yang kondusif</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">
            Struktur Organisasi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. H. Ahmad Supriyadi, M.Pd",
                position: "Kepala Sekolah",
                image:
                  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "Dra. Siti Aminah, M.M",
                position: "Wakil Kepala Sekolah Bidang Kurikulum",
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
              },
              {
                name: "H. Budi Santoso, S.Pd",
                position: "Wakil Kepala Sekolah Bidang Kesiswaan",
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
              },
            ].map((staff, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-blue-900">
                  {staff.name}
                </h3>
                <p className="text-gray-600">{staff.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prestasi Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">
            Prestasi Terkini
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Juara Umum LKS Tingkat Provinsi 2024",
                desc: "Meraih 5 medali emas, 3 perak, dan 2 perunggu",
                date: "Februari 2024",
              },
              {
                title: "Best Innovation Award",
                desc: "Kompetisi Karya Ilmiah Remaja Nasional",
                date: "Januari 2024",
              },
              {
                title: "Juara 1 Web Development",
                desc: "Kompetisi Coding Nasional 2024",
                date: "Januari 2024",
              },
              {
                title: "Penghargaan Sekolah Adiwiyata",
                desc: "Tingkat Nasional 2023",
                date: "Desember 2023",
              },
            ].map((prestasi, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">
                  {prestasi.title}
                </h3>
                <p className="text-gray-600 mb-2">{prestasi.desc}</p>
                <p className="text-sm text-gray-500">{prestasi.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
