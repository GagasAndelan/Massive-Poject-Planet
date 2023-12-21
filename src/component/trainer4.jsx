import Navbar from "./navbar1"
import Footer from "./footer"

const trainer1 = () => {

    return (
        <>
        <Navbar/>
        <p class="pt1">TRAINER</p>

        <div class="card1">
            <div class="pt2">Trainer1</div>
          <img src="img/pelatih2.png" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <p class="card-text"><small class="text-body-secondary"></small></p>
            <p className="pt3">Saya Faiz, pribadi yang berkomitmen tinggi pada kebugaran, khususnya pelatihan tangan di gym. Dengan semangat dan dedikasi, saya berusaha mencapai kekuatan dan ketahanan optimal. Dengan pengalaman dan pengetahuan, saya terus mengembangkan strategi pelatihan yang efektif. Bergabunglah dengan perjalanan saya untuk mencapai kebugaran yang holistik, dan mari bersama-sama menginspirasi orang lain untuk hidup sehat dan bugar.</p>
            <a href="/jadwalmember"><button class="tombol4">Pilih</button></a>
          </div>
        </div>

        <div class="ptbox2">
            <p className="ptr1">JADWAL</p>
            <p className="ptr2">SENIN</p>
            <p className="ptr3">13 Nov | 09:00 - 17.00 </p>
            <p className="ptr4">Kegiatan Yang dilakukan:</p>
            <p className="ptr5">Hari ini, di gym, saya akan melibatkan <br /> tangan dengan latihan beban untuk <br />otot lengan. Mulai dari pemanasan <br />ringan, saya akan fokus pada latihan <br />seperti curls, tricep dips, dan forearm <br />exercises <br/> <br/></p>
            <p className="ptr6">RABU</p>
            <p className="ptr7">15 Nov | 09:00 - 17.00 </p>
            <p className="ptr8">Kegiatan Yang dilakukan:</p>
            <p className="ptr9">Di sesi gym hari ini, saya akan <br />mengoptimalkan latihan <br />tangan. Setelah pemanasan, <br />program mencakup wrist curls, <br /> hammer curls, dan reverse grip <br />tricep pushdowns untuk merangsang <br /> variasi otot lengan secara holistik.</p>
            <p className="ptr10">JUMAT</p>
            <p className="ptr11">17 Nov | 09:00 - 15.00 </p>
            <p className="ptr12">Kegiatan Yang dilakukan:</p>
            <p className="ptr13">Hari ini di gym, fokus latihan <br />tangan melibatkan variasi baru. <br />Setelah pemanasan, akan ada <br />latihan seperti finger extensions, <br />farmers walks, dan rope climbs <br />untuk menguatkan otot lengan <br />secara menyeluruh.</p>
        </div>
        <Footer/>
        </>
    )
}

export default trainer1