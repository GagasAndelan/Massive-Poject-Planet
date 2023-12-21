import Navbar from "./navbar"
import Footer from "./footer"

const trainer2 = () => {

    return (
        <>
        <Navbar/>
        <p class="pt1">TRAINER</p>

        <div class="card1">
            <div class="pt2">Trainer1</div>
          <img src="img/pelatih3.png" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title"></h5>
            <p class="card-text"></p>
            <p class="card-text"><small class="text-body-secondary"></small></p>
            <p className="pt3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos ducimus nulla ratione, laborum, quibusdam ab, est reprehenderit alias veniam praesentium iste quis aliquid? Et cupiditate quam voluptatum ipsa magnam tenetur?</p>
            <a href="/jadwalmember2"><button class="tombol4">Pilih</button></a>
          </div>
        </div>

        <div class="ptbox2">
            <p className="ptr1">JADWAL</p>
            <p className="ptr2">SENIN</p>
            <p className="ptr3">13 Nov | 09:00 - 17.00 </p>
            <p className="ptr4">Kegiatan Yang dilakukan:</p>
            <p className="ptr5">Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit. <br/>Quos ducimus nulla ratione, <br/>laborum, quibusdam ab, est <br/>reprehenderit alias veniam <br/>praesentium iste quis aliquid <br/>Et cupiditate quam voluptatum <br/>ipsa magnam tenetur?</p>
            <p className="ptr6">RABU</p>
            <p className="ptr7">15 Nov | 09:00 - 17.00 </p>
            <p className="ptr8">Kegiatan Yang dilakukan:</p>
            <p className="ptr9">Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit. <br/>Quos ducimus nulla ratione, <br/>laborum, quibusdam ab, est <br/>reprehenderit alias veniam <br/>praesentium iste quis aliquid <br/>Et cupiditate quam voluptatum <br/>ipsa magnam tenetur?</p>
            <p className="ptr10">JUMAT</p>
            <p className="ptr11">17 Nov | 09:00 - 15.00 </p>
            <p className="ptr12">Kegiatan Yang dilakukan:</p>
            <p className="ptr13">Lorem ipsum dolor sit amet, <br/>consectetur adipisicing elit. <br/>Quos ducimus nulla ratione, <br/>laborum, quibusdam ab, est <br/>reprehenderit alias veniam <br/>praesentium iste quis aliquid <br/>Et cupiditate quam voluptatum <br/>ipsa magnam tenetur?</p>
        </div>
        <Footer/>
        </>
    )
}

export default trainer2