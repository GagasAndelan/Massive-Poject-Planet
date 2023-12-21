import React, { useState } from "react";
import * as Components from './Components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function masuk () {
    const [signIn, toggle] = React.useState(true);
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
          navigate('/jadwal');  // Ganti '/home' dengan path yang sesuai
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

    return(
        <Components.Container className="page">
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Create Account</Components.Title>
                    <img className='signimg' src="img/logo.png" alt="" />
                    <Components.Input type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Button>Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Sign in</Components.Title>
                     <img className='signimg' src="img/logo.png" alt="" />
                     <Components.Input type='email' placeholder='Email' id="email" value={email} onChange={e => setEmail(e.target.value)}required/>
                     <Components.Input type='password' placeholder='Password' id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                     <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                     <Components.Button type="button" className="button20" onClick={handleLogin}>Sign In</Components.Button>
                     {loginError && <p className="text-danger mt-3 text-center">{loginError}</p>}
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel signinIn={signIn}>
                    <Components.Title>Welcome Back!</Components.Title>
                    <Components.Paragraph>
                        To keep connected with us please login with your personal info
                    </Components.Paragraph>
                    <Components.GhostButton onClick={() => toggle(true)}>
                        Sign In
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel signinIn={signIn}>
                      <Components.Title>Hello, Friend!</Components.Title>
                      <Components.Paragraph>
                          
                      </Components.Paragraph>
                          
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
    )
}

export default masuk