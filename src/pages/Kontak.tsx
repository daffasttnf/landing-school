import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight, Send } from 'lucide-react';
import { useState } from 'react';

export default function Kontak() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data Kontak:", formData);
    alert("Pesan berhasil dikirim!");
  };

  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Hubungi Kami</h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Kami siap membantu Anda. Silakan hubungi kami melalui informasi di bawah ini atau kirim pesan melalui formulir kontak.
        </p>

        {/* Informasi Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-blue-900 p-3 rounded-full">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold ml-3 text-blue-900">Lokasi</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Jl. Pendidikan No. 123, Kota Bogor, Jawa Barat
            </p>
            <Link
              to="https://maps.google.com"
              target="_blank"
              className="text-blue-900 font-medium flex items-center hover:text-blue-700"
            >
              Lihat di Peta <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-green-900 p-3 rounded-full">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold ml-3 text-blue-900">Telepon</h3>
            </div>
            <p className="text-gray-600 mb-4">
              +62 123 4567 890
            </p>
            <Link
              to="tel:+621234567890"
              className="text-blue-900 font-medium flex items-center hover:text-blue-700"
            >
              Hubungi Kami <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-purple-900 p-3 rounded-full">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold ml-3 text-blue-900">Email</h3>
            </div>
            <p className="text-gray-600 mb-4">
              info@smkpermata.sch.id
            </p>
            <Link
              to="mailto:info@smkpermata.sch.id"
              className="text-blue-900 font-medium flex items-center hover:text-blue-700"
            >
              Kirim Email <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>

        {/* Formulir Kontak */}
        <div className="bg-white rounded-lg shadow-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Kirim Pesan</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
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
            <div>
              <label className="block text-gray-700 font-medium mb-2">Pesan</label>
              <textarea
                name="pesan"
                value={formData.pesan}
                onChange={handleChange}
                placeholder="Masukkan pesan Anda"
                rows="5"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition w-full md:w-auto"
            >
              Kirim Pesan <Send className="w-5 h-5 ml-2 inline-block" />
            </button>
          </form>
        </div>

        {/* Peta Lokasi */}
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d106.8272863152947!3d-6.595763966478733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5d4e8f5f5b5%3A0x5f5f5f5f5f5f5f5f!2sSMK%20Permata!5e0!3m2!1sid!2sid!4v1621234567890!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Peta Lokasi SMK Permata"
          ></iframe>
        </div>
      </div>
    </div>
  );
}