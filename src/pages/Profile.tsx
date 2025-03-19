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

      {/* Sambutan Kepala Sekolah */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-blue-900">
            Sambutan Kepala Sekolah
          </h2>
          <div className="space-y-12">
            {/* Sambutan Kepala SMK Permata 1 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <img
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Kepala SMK Permata 1"
                  className="w-48 h-48 rounded-full object-cover"
                />
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    Sambutan dari Kepala SMK Permata 1 Bogor
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Assalamualaikum Warahmatullahi Wabarakatuh,
                  </p>
                  <p className="text-gray-600 mb-4">
                    Selamat datang di SMK Permata 1 Bogor, sebuah institusi pendidikan yang berkomitmen untuk membentuk generasi muda yang unggul, berkarakter, dan siap bersaing di era global. Sejak berdiri pada tahun 1990, kami telah berupaya memberikan pendidikan berkualitas dengan mengedepankan nilai-nilai kejujuran, disiplin, dan kreativitas.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Kami percaya bahwa setiap siswa memiliki potensi yang dapat dikembangkan. Melalui program keahlian yang relevan dengan kebutuhan industri, fasilitas pembelajaran modern, dan dukungan dari tenaga pendidik yang profesional, kami berharap dapat mencetak lulusan yang siap menghadapi tantangan masa depan.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Terima kasih atas kepercayaan yang diberikan kepada kami. Mari bersama-sama membangun masa depan yang gemilang.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Wassalamualaikum Warahmatullahi Wabarakatuh,
                  </p>
                  <p className="text-gray-600 font-semibold">
                    Dr. Ahmad Fauzi, M.Pd.
                  </p>
                  <p className="text-gray-600">Kepala SMK Permata 1 Bogor</p>
                </div>
              </div>
            </div>

            {/* Sambutan Kepala SMK Permata 2 */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  alt="Kepala SMK Permata 2"
                  className="w-48 h-48 rounded-full object-cover"
                />
                <div className="prose max-w-none">
                  <h3 className="text-2xl font-bold mb-4 text-blue-900">
                    Sambutan dari Kepala SMK Permata 2 Bogor
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Assalamualaikum Warahmatullahi Wabarakatuh,
                  </p>
                  <p className="text-gray-600 mb-4">
                    Puji syukur kehadirat Allah SWT, atas rahmat dan karunia-Nya, SMK Permata 2 Bogor terus berupaya memberikan yang terbaik bagi peserta didik. Sebagai lembaga pendidikan kejuruan, kami berkomitmen untuk menyiapkan siswa menjadi tenaga kerja yang kompeten, kreatif, dan berkarakter.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Dengan dukungan fasilitas yang memadai, kurikulum berbasis kompetensi, dan kerjasama yang erat dengan dunia industri, kami yakin siswa-siswi SMK Permata 2 Bogor akan mampu bersaing di tingkat nasional maupun internasional.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Kami mengajak seluruh siswa untuk memanfaatkan kesempatan belajar sebaik-baiknya. Mari bersama-sama mewujudkan mimpi dan meraih kesuksesan.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Wassalamualaikum Warahmatullahi Wabarakatuh,
                  </p>
                  <p className="text-gray-600 font-semibold">
                    Dra. Siti Rahayu, M.M.
                  </p>
                  <p className="text-gray-600">Kepala SMK Permata 2 Bogor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi Section */}
      <section className="py-16">
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
      <section className="py-16 bg-gray-50">
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
      <section className="py-16">
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