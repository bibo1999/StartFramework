import img1 from "../../assets/Images/img1.png";
import img2 from "../../assets/Images/img2.png";
import img3 from "../../assets/Images/img3.png";

import "./Portfolio.css"
export default function Portfolio() {
    function previewImg(src) {
    document.querySelector("#img-preview").setAttribute("src", src);
    document.querySelector(".preview-img").classList.remove("d-none");
    document.querySelector(".preview-img").classList.add("d-block");
  }

  function closeImg() {
    document.querySelector(".preview-img").classList.remove("d-block");
    document.querySelector(".preview-img").classList.add("d-none");
  }
  return (
      (
    <section
      id="portfolio"
      className="min-vh-100 d-flex justify-content-center align-items-center mt-3 pb-5 bg-info"
    >
      <div className="container mt-5">
        <div className="title mt-5 gold-gradient">
          <h1 className="text-center display-6 fw-bold t-color">
            PORTFOLIO COMPONENT
          </h1>

          <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line"></div>
            <i className="fa fa-solid fa-star t-color"></i>
            <div id="line"></div>
          </div>
        </div>

        <div className="row g-4 mt-3">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(img1)}
            >
              <img src={img1} className="img-fluid" alt="port1" />

              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(img2)}
            >
              <img src={img2} className="img-fluid" alt="port2" />

              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-4">
            <div
              className="card overflow-hidden rounded-3 position-relative"
              onClick={() => previewImg(img3)}
            >
              <img src={img3} className="img-fluid" alt="port3" />

              <div className="overlay d-flex justify-content-center align-items-center position-absolute w-100 h-100">
                <i className="fa fa-solid fa-plus fa-5x text-white"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div
        className="preview-img d-flex justify-content-center align-items-center bg-info bg-opacity75 position-fixed top-0 start-0 w-100 vh-100 d-none"
        onClick={closeImg}
      >
        <img id="img-preview" alt="preview img" className="w-50 mt-5 rounded-3" />
      </div>
    </section>
  )
);
}
