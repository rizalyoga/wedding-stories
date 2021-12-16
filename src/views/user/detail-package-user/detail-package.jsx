import "./detail-package.css";
import foto from "../../../assets/download.jpeg";
import NavUser from "../../components/navbar-user/navbar-user";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DetailPackage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <NavUser />
      <div className="container">
        <div className="desc-wo">
          <h3 className="fw-bold" style={{ cursor: "pointer" }} onClick={() => navigate("/user/detail/organizer")}>
            Amoretti Wedding Plan
          </h3>
          <h6>Jakarta, Jl.Merdeka, No.67</h6>
        </div>
        <hr />
        <div className="row-foto">
          <div className="image-package">
            <img src={foto} alt="foto-paket" />
          </div>
        </div>
        <div className="name-package">
          <h4 className="fw-bold">All inclusive Package for 100 Person</h4>
          <h5 className="my-3">Detail Package</h5>
        </div>
        <div className="row-content-detail">
          <div className="col-detail">
            <p>
              Wedding Organizer paket Full-day terdiri dari prosesi pagi hingga resepsi makan dan include : - 4 s.d 5 crew pagi - 8 s.d 9 crew resepsi - 50 balon & 2 ekor merpati - semua alat prosesi dipinjamkan (bisa by request sesuai
              adat) - 20 snack roti & 1 dos air mineral - gambar shuang xi & kain merah - bantal cincin dipinjamkan - 2 buku tamu - kotak angpao dipinjamkan - 1 box masker medis dan handasanitizer untuk pintu masuk - nama meja dan kartu MC
              (Quecard) - 4pcs confetti info lebih lanjut silahkan menghubungi kami dan kami sangat welcome dengan pertanyaan kalian. dan dapatkan paket yang lain dari kami maupun paket sesuai kebutuhan kalian. 1 dos air mineral - gambar
              shuang xi & kain merah - bantal cincin dipinjamkan - 2 buku tamu - kotak angpao dipinjamkan - 1 box masker medis dan handasanitizer untuk pintu masuk - nama meja dan kartu MC (Quecard) - 4pcs confetti inf 1 dos air mineral -
              gambar shuang xi & kain merah - bantal cincin dipinjamkan - 2 buku tamu - kotak angpao dipinjamkan - 1 box masker medis dan handasanitizer untuk pintu masuk - nama meja dan kartu MC (Quecard) - 4pcs confetti inf
            </p>
          </div>
          <div className="col-card-price">
            <div className="content-pesan">
              <div className="harga">
                <p>Harga</p>
                <h6 className="fw-bold">Rp 100.000.000,00</h6>
              </div>
              <hr />
              <div className="form-pax">
                <div className="min-pax">
                  <p className="text-center desc-pax">Min pax</p>
                  <input className="text-center" disabled="disable" value="100" type="text" />
                </div>
                <div className="custom-pax">
                  <p className="text-center desc-pax">Custom pax</p>
                  <input className="text-center" type="text" required />
                </div>
              </div>
              <hr />
              <div className="btn-pesan">
                <Button className="w-100">Order</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPackage;
