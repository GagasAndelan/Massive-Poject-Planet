import Navbar from "./navbar1"
import Footer from "./footer"
import Calendar from 'react-calendar';
import '../css/calender.css'

const jadwal = () => {

    return (
        <>
        <Navbar/>
        <div id="carouselExampleIndicators" class="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/carousel4.png" class="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="img/gym2.png" class="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="img/gym3.png" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

        <h1>Selamat Datang <br/> Di Alphazard Gym</h1>

      <p className="pj1">Jadwal</p>

      <div class="pjbox1">
        <img className="imgpj1" src="img/trainer1.png"/>
        <p className="pj2">Personal Trainer Spesialis</p>
        <p className="pj3">Faizzurahman al hakim</p>
        <p className="pj4">Kam, 13 Nov | 09.00 - 17.00</p>
      </div>

      <div class="pjbox2">
        <img className="imgpj2" src="img/trainer2.png"/>
        <p className="pj5">Personal Trainer Spesialis</p>
        <p className="pj6">Revaldi Khairullah</p>
        <p className="pj7">Kam, 13 Nov | 09.00 - 17.00</p>
      </div>

      <div class="pjbox3">
        <img className="imgpj3" src="img/trainer1.png"/>
        <p className="pj8">Personal Trainer Spesialis</p>
        <p className="pj9">Faizzurahman al hakim</p>
        <p className="pj10">Kam, 13 Nov | 09.00 - 17.00</p>
      </div>

      <div id="idx-calendar">
        <div id="calendar-control">
        </div>
        <div id="dayNames">
        </div>
        <div id="daysNum">
        <Calendar />
        </div>
       </div>

        <div class="pjbox4"><p className="pj11">Trainer</p>
          <img className="imgpj4" src="img/trainer1.png"/>
          <img className="imgpj5" src="img/trainer2.png"/>
          <img className="imgpj6" src="img/trainer1.png"/>
          <p className="pj12">Faizzurahman al hakim</p>
          <p className="pj13">Revaldi Khairullah</p>
          <p className="pj14">Faizzurahman al hakim</p>
          <a href="/trainer3"><button class="tombol2">Pilih Trainer</button></a>
        </div>
        <Footer/>
        </>
    )
}

export default jadwal