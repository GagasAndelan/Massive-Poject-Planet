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
                const filteredData = response.data.filter(item => item.jenistrainer === 'Trainer 1');
                setData(filteredData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <Navbar />

            <div className="pjm1">
            </div>
            <img className="imgpjm1" src="img/trainer3.png" />
            <p className="tpjm1">Faizzurahman al hakim</p>
            <p className="tpjm2">Personal Trainer Alphazard Gym</p>
            <p className="tpjm3">Daftar Member</p>
            <div container className="pjm2">
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

            <Footer/>

        </>
    );
};

export default JadwalMember;
