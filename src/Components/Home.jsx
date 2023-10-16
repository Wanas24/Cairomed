import React, { useState } from "react";
import logoo from "../images/logoo-removebg-preview.png";
import slide1img from "../images/slide1img.png";
import { Link } from "react-router-dom";

function Home() {
  // const[formData,setformData]=useState({
  // email:'',
  // password:''
  // });

  const [email, setemail] = useState("");
  const [password, setpasssword] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [successMsg, setsuccessMsg] = useState("");

  return (
    <>
      <div className="HomeV2 d-flex align-items-center justify-content-center ">
        <div className=" w-100 overflow-hidden">
          <div className=" container h-100   ">
            <div className="row justify-content-around mt-8 ">
              <div className="col-xsm-6 col-sm-6 col-md-5 col-lg-4  align-self-center overflow-hidden ">
                <h1 className="cairomedh1 text-white text-center text-uppercase "></h1>
                <div className="gradiant text-center ">
                  <i>
                    <h2 className=" d-inline-block  text-black ">
                      High Quality Products
                    </h2>
                  </i>
                </div>

                <p className="text-white w-80 m-auto mt-2">
                  Welcome to Cairomed, a leading provider of specialized poultry
                  Products in Egypt...
                </p>
                <div className="w-80 m-auto d-flex">
                  <p className="text-white  d-inline-block ms-auto text-right ">
                    {" "}
                    <a
                      className="text-white text-decoration-none"
                      href="#about"
                    >
                      Read More <i class="fa-solid fa-angles-right"></i>
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xsm-6 col-sm-6 col-md-7 col-lg-6  align-self-center overflow-hidden">
                <div className="imgdiv">
                  <img
                    className="globalImg w-100"
                    src={slide1img}
                    alt=""
                    srcset=""
                  />
                  <div className="w-100 m-auto d-flex">
                    <button className="orderBTN bg-white ms-auto">
                      <Link
                        to="/Products"
                        className="text-decoration-none btncolor"
                      >
                        <i class="fa-solid fa-arrow-right text-white"></i> ORDER
                        NOW
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item " data-bs-interval="10000"></div>
        <div className="carousel-item" data-bs-interval="10000"></div>
      </div>

      <br id="about" />

      {/* <div className='home'>
          <div id="carouselExampleIndicators" className="carousel slide homeSlider" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active " data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/2695703/pexels-photo-2695703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item " data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=600" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/3820303/pexels-photo-3820303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
          </div>
        
          <div class="home-content  text-center py-3 ">
          <h4 class="py-2"> Welcome to</h4>
          <h2  class="fs-2 py-2 text-uppercase">  </h2>
          <p id='about' class="py-3 text-center ">
               Your gate to veterinary</p>
               
            
      </div>

</div> */}

      {/* <Link className=' text-decoration-none ' to="/login">
                    <a  class="download rounded-pill border border-1 bg-transparent text-white  fs-6  text-decoration-none">Stuff Login</a>
                </Link> */}
      {/* <div class="setting d-flex align-items-center justify-content-center ">
     <i class="fa-solid fa-gear fs-3 text-white fa-spin"></i>
     
</div> */}

      {/* <div class="scrol">
     <img src={scrollGif} class="w-100" alt=""/>
</div> */}

      {/* about section */}

      <h2 className="text-center mt-5">About Us</h2>
      <div className="btmBorder"></div>
      <div className="about container">
        <div className="row justify-content-between">
          <div className="col-lg-6 col-md-12 text-center align-self-center">
            "Welcome to Cairomed, a leading provider of specialized poultry
            products in Egypt. With a deep understanding of the unique
            challenges faced by the poultry industry, we are dedicated to
            delivering high-quality products that promote the health and
            well-being of poultry across the country. Our mission at Cairomed is
            to be the trusted partner for poultry farmers and industry
            professionals, offering a comprehensive range of innovative
            medicines and solutions. We strive to ensure the highest standards
            of quality and efficacy in our products, backed by extensive
            research and development. Our commitment extends beyond product
            excellence, as we aim to build long-lasting relationships with our
            customers based on integrity, reliability, and outstanding customer
            service. With an extensive distribution network, we are proud to
            serve customers in every corner of Egypt, ensuring that our poultry
            products are accessible to all. Join us in shaping a healthier and
            more productive poultry industry. Discover the Cairomed difference
            today."{" "}
          </div>
          <div className="col-lg-4 col-md-12 bg align-self-center">
            <img src={logoo} alt="" srcset="" className="w-100 " />
          </div>
        </div>
      </div>

      {/* contact section  */}
      <section class="contact mt-5  pt-3" id="contact">
        <h2 class="text-center mt-5">Contact</h2>
        <div class="btmBorder"></div>
        <br />
        <br />
        <div class="container d-flex justify-content-around flex-wrap">
          <div class="contactDetails  col-sm-12 col-lg-6 align-self-center ">
            <div class="mb-3 w-75">
              <i class="fa-solid fa-phone"></i>
              <br />
              <a href="tel:0504906351" className="text-decoration-none">
                Tel: 050-4906351
              </a>
              <p class="d-inline-block"> </p>
              <br />
              <a href="tel:01011466330" className="text-decoration-none">
                Mobile: 01011466330
              </a>
              <p class="d-inline-block"> </p>
              <br />
              <a href="tel:01551936225" className="text-decoration-none">
                Mobile: 01551936225
              </a>
              <p class="d-inline-block"> </p>
            </div>

            <div class="mb-4 w-75 ">
              <i class="fa-brands fa-facebook"></i>
              <br />
              <a
                class="text-decoration-none"
                href="https://www.facebook.com/profile.php?id=61550614966784"
              >
                Facebook Page
              </a>
            </div>
            <div class="mb-4 w-75 ">
              <i class="fa-solid fa-envelope"></i> <br />
              <a class="text-decoration-none">Email: cairomed30@yahoo.com</a>
            </div>
            <div>
              <i class="fa-solid fa-map-location-dot w-75"></i>
              <br />
              <a href="https://goo.gl/maps/16TPApxK8W9KidD97">
                <p class="d-inline-block">
                  {" "}
                  Geser Al Nile, Madinet Mit Ghamr, Dakahlia Governorate
                </p>
              </a>
            </div>
          </div>
          <br />
          <div class="map col-sm-12 col-lg-3 d-flex justify-content-center align-items-center">
            <div class="text-center mx-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50162.205669614275!2d31.217691626639184!3d30.72340665182138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7c15a7f5d6241%3A0xe566f21b25ab9a8b!2z2LTYsdmD2Kkg2YPYp9mK2LHZiNmF2YrYrw!5e0!3m2!1sen!2seg!4v1693233359715!5m2!1sen!2seg"
                width="400"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
