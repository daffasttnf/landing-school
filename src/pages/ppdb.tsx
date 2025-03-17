
import { Link } from 'react-router-dom';
import { Calendar, Clipboard, UserCheck, ChevronRight} from 'lucide-react';
import { useState } from 'react';

export default function PPDB() {
  const [formData, setFormData] = useState({
    nama: "",
    nisn: "",
    tempatLahir: "",
    tanggalLahir: "",
    alamat: "",
    noHp: "",
    email: "",
    namaAyah: "",
    pekerjaanAyah: "",
    namaIbu: "",
    pekerjaanIbu: "",
    jurusan: "",
    foto: null,
    kartuKeluarga: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Pendaftaran:", formData);
    alert("Pendaftaran berhasil dikirim!");
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Penerimaan Peserta Didik Baru (PPDB)</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Bergabunglah dengan SMK Permata dan raih masa depan gemilang bersama kami. Daftarkan diri Anda sekarang!
        </p>

        {/* Informasi Pendaftaran */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-900 p-3 rounded-full">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold ml-3 text-blue-900">Jadwal Pendaftaran</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Pendaftaran dibuka mulai <strong>1 April 2024</strong> hingga <strong>30 Juni 2024</strong>.
            </p>
            <Link
              to="/ppdb/jadwal"
              className="text-blue-900 font-medium flex items-center hover:text-blue-700"
            >
              Lihat detail <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-900 p-3 rounded-full">
                <Clipboard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold ml-3 text-blue-900">Persyaratan</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Persyaratan pendaftaran meliputi fotokopi rapor, pas foto, dan surat keterangan sehat.
            </p>
            <Link
              to="/ppdb/persyaratan"
              className="text-blue-900 font-medium flex items-center hover:text-blue-700"
            >
              Lihat detail <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-900 p-3 rounded-full">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold ml-3 text-blue-900">Daftar Sekarang</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Daftarkan diri Anda secara online melalui formulir pendaftaran kami.
            </p>
            <Link
              to="/ppdb/daftar"
              className="text-blue-900 font-medium flex items-center hover:text-blue-700"
            >
              Daftar Online <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Formulir Pendaftaran Online */}
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Formulir Pendaftaran Online</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Data Pribadi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  value={formData.nama}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">NISN</label>
                <input
                  type="text"
                  name="nisn"
                  value={formData.nisn}
                  onChange={handleChange}
                  placeholder="Masukkan NISN"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Tempat Lahir</label>
                <input
                  type="text"
                  name="tempatLahir"
                  value={formData.tempatLahir}
                  onChange={handleChange}
                  placeholder="Masukkan tempat lahir"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Tanggal Lahir</label>
                <input
                  type="date"
                  name="tanggalLahir"
                  value={formData.tanggalLahir}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Alamat</label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                placeholder="Masukkan alamat"
                rows="3"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nomor Telepon</label>
                <input
                  type="tel"
                  name="noHp"
                  value={formData.noHp}
                  onChange={handleChange}
                  placeholder="Masukkan nomor telepon"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Data Orang Tua */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nama Ayah</label>
                <input
                  type="text"
                  name="namaAyah"
                  value={formData.namaAyah}
                  onChange={handleChange}
                  placeholder="Masukkan nama ayah"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Pekerjaan Ayah</label>
                <input
                  type="text"
                  name="pekerjaanAyah"
                  value={formData.pekerjaanAyah}
                  onChange={handleChange}
                  placeholder="Masukkan pekerjaan ayah"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nama Ibu</label>
                <input
                  type="text"
                  name="namaIbu"
                  value={formData.namaIbu}
                  onChange={handleChange}
                  placeholder="Masukkan nama ibu"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Pekerjaan Ibu</label>
                <input
                  type="text"
                  name="pekerjaanIbu"
                  value={formData.pekerjaanIbu}
                  onChange={handleChange}
                  placeholder="Masukkan pekerjaan ibu"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Pilihan Jurusan */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Jurusan yang Dipilih</label>
              <select
                name="jurusan"
                value={formData.jurusan}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Pilih Jurusan</option>
                <option value="tkj">Teknik Komputer dan Jaringan (TKJ)</option>
                <option value="rpl">Rekayasa Perangkat Lunak (RPL)</option>
                <option value="multimedia">Multimedia</option>
                <option value="otkp">Otomatisasi dan Tata Kelola Perkantoran (OTKP)</option>
                <option value="akuntansi">Akuntansi</option>
                <option value="pemasaran">Pemasaran</option>
              </select>
            </div>

            {/* Upload File */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Upload Foto</label>
                <input
                  type="file"
                  name="foto"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Upload Kartu Keluarga</label>
                <input
                  type="file"
                  name="kartuKeluarga"
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Tombol Submit */}
            <button
              type="submit"
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition w-full md:w-auto"
            >
              Kirim Pendaftaran
            </button>
          </form>
        </div>

        {/* Informasi Tambahan */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Butuh Bantuan?</h3>
          <p className="text-gray-600 mb-6">
            Hubungi kami di <strong>+62 123 4567 890</strong> atau email ke <strong>info@smkpermata.sch.id</strong>.
          </p>
          <Link
            to="/kontak"
            className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition inline-block"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </div>
  );
}