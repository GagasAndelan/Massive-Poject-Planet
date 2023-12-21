import { useNavigate } from "react-router-dom"
import Navbar from "./navbar"
import Footer from "../component/footer"


const landing = () => {
    const navigate = useNavigate()
        return (
            <>
            <Navbar/>
            <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="img/carousel2.jpg" class="d-block w-100" alt="..."/>
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

      <p className="pa21">Selamat Datang <br/>Di Alphazard Gym</p>

      <div className="box1"><p class="pa1">35+ <br/>Member<br/></p><p className="pa2">10+ <br/>Penghargaan<br/></p><p className="pa3">15+ <br/>Personal Trainer<br/></p>
      </div>

      <img className="img1" src="img/box2.png"/>
      <img className="img2" src="img/box3.jpg"/>
      <img className="img3" src="img/box4.jpg"/>

      <h6>Mari berlatih di gym dengan fasilitas pilihan pada areafree-weight,strengthdan peralatan fungsional.
        Berlatih dan rasakan sensasi seperti seorang bintang.</h6>

        <img className="img4" src="img/barbel.jpg"/>

        <h5>TERINSPIRASI.
          JALAN LEBIH JAUH DALAM HIDUP.</h5>

          <p className="pa4">inilah yang dapat Anda harapkan ketika Anda bergabung dengan kami hari ini.</p>

        <img className="img5" src="img/barbel2.jpg"/>
        <p className="pa5">Membantu meningkatkan daya tahan fisik,<br/> kekuatan otot,dan fleksibilitas. Ini dapat<br/> membuat aktivitas sehari-hari menjadi<br/> lebih mudah dan efisien.<br/></p>

        <img className="img6" src="img/people.jpg"/>
        <p className="pa6">Mendapatkan teman exercise dan<br/> pengalaman yang bermanfaat<br/></p>

        <img className="img7" src="img/naik.jpg"/>
        <p className="pa7">Lacak kemajuan Anda dengan mudah & akurat </p>

        <a href="/daftarmember"><button class="tombol">Bergabung Sekarang</button></a>

        <div className="box3"><p className="pa8">AKTIVITAS GYM</p>
          <img className="img8" src="img/video1.jpg"/>
          <img className="img9" src="img/video2.jpg"/>
          <img className="img10" src="img/video3.jpg"/>
          <p className="pa9">Static Bicycle</p>
          <p className="pa10">Bench press</p>
          <p className="pa11">Exercise Weightlifting</p>
        </div>
            <Footer/>
            </>
        );
}

export default landing