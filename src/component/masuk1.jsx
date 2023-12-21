import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function masuk1() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Kirim data login ke backend PHP menggunakan Axios
    axios.post('http://localhost/api/signin.php', {
      email,
      password,
    })
      .then(response => {
        // Handle respons dari backend di sini
        console.log(response.data);

        // Periksa flag success dalam respons
        if (response.data.success) {
          // Login berhasil, arahkan ke halaman Home
          console.log('Login berhasil');
          navigate('/daftarmember');  // Ganti '/home' dengan path yang sesuai
        } else {
          // Login gagal, atur pesan kesalahan
          setLoginError(response.data.message);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Tangani error lain jika diperlukan
      });
  };

  return (
    <div className="container mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card shadow" name="LoginForm">
          <div className="card-body">
            <h1 className="card-title text-center text-primary mb-4">Login Form</h1>
              <form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email:</label>
                  <input type="text" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password:</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="button" className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
              </form>
              {loginError && <p className="text-danger mt-3 text-center">{loginError}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default masuk1;
