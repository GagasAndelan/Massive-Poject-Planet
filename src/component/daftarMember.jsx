import { useState } from 'react';
import Navbar from "./navbar";
import Axios from 'axios';  // Import Axios library
import Footer from "./footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DaftarMember = () => {
  const notify = () => toast('✅ DAFTAR MEMBER BERHASIL', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    password: '',
    telepon: '',
    jenistrainer: 'Trainer 1', // Default Trainer
    jenisKelamin: 'laki-laki' // Default Laki-Laki
  });
  const [showModal, setShowModal] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit button clicked');

    Axios.post('http://localhost/api/proses_daftar.php', formData)
      .then(response => {
        console.log(response.data);

        if (response.data.success) {
          // Pendaftaran berhasil, tampilkan modal dan atur redirect
          setShowModal(true);
          setRedirect(true);
        } else {
          // Pendaftaran gagal, tambahkan logika atau tindakan jika diperlukan
        }
      })
      .catch(error => {
        console.error('Error sending data:', error);
        // Tambahkan logika atau tindakan jika terjadi kesalahan
      });
  };
  return (
    <>
      <Navbar />
      <img src="img/member.jpg" className="d-block w-100" alt="..." />

      <div className="daftar-member-container">
        <p className="dm1">KOBARKAN <br />SEMANGATMU</p>

        <p className="dm2">DAFTAR MEMBER</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nama" className="dm3">NAMA</label>
            <input id="nama" className="it1" type="text" placeholder="Masukkan Nama" onChange={handleChange}required />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="dm4">EMAIL</label>
            <input id="email" className="it2" type="email" placeholder="Masukkan Email" onChange={handleChange}required />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="dm5">PASSWORD</label>
            <input id="password" className="it3" type="password" placeholder="Masukkan Password" onChange={handleChange}required />
          </div>

          <div className="form-group">
            <label htmlFor="telepon" className="dm6">NO TELEPON</label>
            <input id="telepon" className="it4" type="tel" placeholder="Masukkan No Telepon" onChange={handleChange}required />
          </div>

          <div className="form-group">
            <label htmlFor="jenistrainer" className="dm8">PILIH TRAINER</label>
            <select id="jenistrainer" className="it6" onChange={handleChange} value={formData.jenistrainer}>
              <option value="Trainer 1">Trainer 1</option>
              <option value="Trainer 2">Trainer 2</option>
              <option value="Trainer 3">Trainer 3</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="jenisKelamin" className="dm9">JENIS KELAMIN</label>
            <select id="jenisKelamin" className="it7" onChange={handleChange} value={formData.jenisKelamin}>
              <option value="laki-laki">Laki-Laki</option>
              <option value="perempuan">Perempuan</option>
            </select>
          </div>

          <button onClick={notify} type="submit" className="tombol3" >DAFTAR</button>
          <ToastContainer/>
        </form>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>Pendaftaran berhasil!</p>
              <button onClick={() => setShowModal(false)}>Tutup</button>
            </div>
          </div>
        )}

        {redirect && <Redirect to="/jadwal" />}

        <div className="dmbox1"></div>
      </div>

      <Footer />
    </>
  );
};

export default DaftarMember;
