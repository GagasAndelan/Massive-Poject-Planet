import Navbar from "./navbar1";
import Footer from "./footer";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JadwalMember = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const apiUrl = 'http://localhost/api/jadwal.php';

        axios.get(apiUrl)
            .then(response => {
                console.log(response.data);
                // Filter data hanya yang memiliki trainer 1
                const filteredData = response.data.filter(item => item.jenistrainer === 'Trainer 2');
                setData(filteredData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Navbar />

       
      <div class="pjm1">
      </div>
      <img className="imgpjm21" src="img/trainer2.png"/>
      <p className="tpjm21">Revaldi Khairullah</p>
      <p className="tpjm22">Personal Trainer Alphazard Gym</p>
      <p className="tpjm33">Daftar Member</p>
      <div container class="pjm2">
      <div className="App2">
                    <table>
                        <thead>
                            <tr>
                                <th className="tb">Name</th>
                                <th className="tb">No Hp</th>
                                <th className="tb">Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((val, key) => (
                                <tr key={key}>
                                    <td>{val.nama}</td>
                                    <td>{val.telepon}</td>
                                    <td>{val.jenisKelamin}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default JadwalMember;
