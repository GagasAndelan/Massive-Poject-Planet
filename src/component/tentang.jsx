import Navbar from "./navbar"
import Footer from "./footer"

const tentang = () => {

    return (
        <>
        <Navbar/>

        <img src="img/barbel1.jpg" className="d-block w-100" alt="..."></img>

      <h1>WELCOME TO <br/>ALPHAZARD</h1>
      
      <p className="pb1">Owner</p>

      <img className="pbimg1" src="img/owner.jpg" alt=""/>

      <p className="pb2">Danu</p>

      <p className="pb3">OUR MISSION</p>
      <p className="pb4">Menginspirasi gerakan yang penuh kesadaran adalah inti dari apa yang kami <br/>lakukan di saat gym. Ini adalah panggilan kami untuk membantu orang menjadi <br/>sehat melalui gym, ini adalah inspirasi di balik nama kami  "Alphazard". Kami <br/>membantu orang-orang untuk menjalani kehidupan yang lebih sehat untuk <br/>kebugaran, karena kami melibatkan pikiran, tubuh, dan jiwa secara bersamaan <br/>dengan praktik gym kami yang bagus dan inovatif.</p>
      <p className="pb5">ALPHAZARD <br/>Your Trusted Partner in Physical Health</p>
      <p className="pb6">Alphazard adalah platform kesehatan kebugaran jasmani yang inovatif, dirancang <br/>untuk memudahkan member dalam merawat kebugaran jasmani. Melalui <br/>Alphazard pengguna dapat melakukan aktifitas kebugaran yang diinginkan <br/>dan diperlukan oleh masing-masing member. Alphazard menyediakan berbagai <br/>alat berolahraga dalam satu tempat dan Alphazardpun menyediakan instruktur <br/>yang banyak membantu selama latihan dilakukan.</p>

      <p className="pb7">Personal Trainer</p>
      <p className="pb9">Personal Trainer</p>

      <img className="pbimg2" src="img/trainer1.png" alt=""/>
      <img className="pbimg3" src="img/trainer2.png" alt=""/>

      <p className="pb8">Faizzurahman al hakim</p>
      <p className="pb10">Revaldi Khairullah</p>

      <button className="tombol1">Lokasi</button>

      <img className="pbimg4" src="img/lokasi.jpg" alt=""/>

        <Footer/>
        </>
    )
}

export default tentang