import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";



const  App = () => {
  return (
<div>
  <Navbar/>
  <Home/>
  <AboutUs/>
  
  <div className="container-fluid py-5" id="qualification">
    <div className="container">
      <div className="position-relative d-flex align-items-center justify-content-center">
        <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Quality</h1>
        <h1 className="position-absolute text-uppercase text-primary">Education &amp; Expericence</h1>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h3 className="mb-4">My Education</h3>
          <div className="border-left border-primary pt-2 pl-4 ml-2">
            <div className="position-relative mb-4">
              <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
              <h5 className="font-weight-bold mb-1">Master In CSE</h5>
              <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
              <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
            </div>
            <div className="position-relative mb-4">
              <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
              <h5 className="font-weight-bold mb-1">Master In CSE</h5>
              <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
              <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
            </div>
            <div className="position-relative mb-4">
              <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
              <h5 className="font-weight-bold mb-1">Master In CSE</h5>
              <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
              <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <h3 className="mb-4">My Expericence</h3>
          <div className="border-left border-primary pt-2 pl-4 ml-2">
            <div className="position-relative mb-4">
              <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
              <h5 className="font-weight-bold mb-1">Web Designer</h5>
              <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
              <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
            </div>
            <div className="position-relative mb-4">
              <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
              <h5 className="font-weight-bold mb-1">Web Designer</h5>
              <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
              <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
            </div>
            <div className="position-relative mb-4">
              <i className="far fa-dot-circle text-primary position-absolute" style={{top: 2, left: '-32px'}} />
              <h5 className="font-weight-bold mb-1">Web Designer</h5>
              <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
              <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid py-5" id="skill">
    <div className="container">
      <div className="position-relative d-flex align-items-center justify-content-center">
        <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Skills</h1>
        <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
      </div>
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-bold">HTML</h6>
              <h6 className="font-weight-bold">95%</h6>
            </div>
            <div className="progress">
              <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-bold">CSS</h6>
              <h6 className="font-weight-bold">85%</h6>
            </div>
            <div className="progress">
              <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-bold">PHP</h6>
              <h6 className="font-weight-bold">90%</h6>
            </div>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-bold">Javascript</h6>
              <h6 className="font-weight-bold">90%</h6>
            </div>
            <div className="progress">
              <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-bold">Angular JS</h6>
              <h6 className="font-weight-bold">95%</h6>
            </div>
            <div className="progress">
              <div className="progress-bar bg-dark" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
          <div className="skill mb-4">
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-bold">Wordpress</h6>
              <h6 className="font-weight-bold">85%</h6>
            </div>
            <div className="progress">
              <div className="progress-bar bg-info" role="progressbar" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid pt-5" id="service">
    <div className="container">
      <div className="position-relative d-flex align-items-center justify-content-center">
        <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Service</h1>
        <h1 className="position-absolute text-uppercase text-primary">My Services</h1>
      </div>
      <div className="row pb-3">
        <div className="col-lg-4 col-md-6 text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3" />
            <h4 className="font-weight-bold m-0">Web Design</h4>
          </div>
          <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
          <a className="border-bottom border-primary text-decoration-none" href>Read More</a>
        </div>
        <div className="col-lg-4 col-md-6 text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3" />
            <h4 className="font-weight-bold m-0">Web Development</h4>
          </div>
          <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
          <a className="border-bottom border-primary text-decoration-none" href>Read More</a>
        </div>
        <div className="col-lg-4 col-md-6 text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <i className="fab fa-2x fa-android service-icon bg-primary text-white mr-3" />
            <h4 className="font-weight-bold m-0">Apps Design</h4>
          </div>
          <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
          <a className="border-bottom border-primary text-decoration-none" href>Read More</a>
        </div>
        <div className="col-lg-4 col-md-6 text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <i className="fab fa-2x fa-apple service-icon bg-primary text-white mr-3" />
            <h4 className="font-weight-bold m-0">Apps Development</h4>
          </div>
          <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
          <a className="border-bottom border-primary text-decoration-none" href>Read More</a>
        </div>
        <div className="col-lg-4 col-md-6 text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <i className="fa fa-2x fa-search service-icon bg-primary text-white mr-3" />
            <h4 className="font-weight-bold m-0">SEO</h4>
          </div>
          <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
          <a className="border-bottom border-primary text-decoration-none" href>Read More</a>
        </div>
        <div className="col-lg-4 col-md-6 text-center mb-5">
          <div className="d-flex align-items-center justify-content-center mb-4">
            <i className="fa fa-2x fa-edit service-icon bg-primary text-white mr-3" />
            <h4 className="font-weight-bold m-0">Content Creating</h4>
          </div>
          <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
          <a className="border-bottom border-primary text-decoration-none" href>Read More</a>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid pt-5 pb-3" id="portfolio">
    <div className="container">
      <div className="position-relative d-flex align-items-center justify-content-center">
        <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Gallery</h1>
        <h1 className="position-absolute text-uppercase text-primary">My Portfolio</h1>
      </div>
      <div className="row">
        <div className="col-12 text-center mb-2">
          <ul className="list-inline mb-4" id="portfolio-flters">
            <li className="btn btn-sm btn-outline-primary m-1 active" data-filter="*">All</li>
            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Design</li>
            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Development</li>
            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Marketing</li>
          </ul>
        </div>
      </div>
      <div className="row portfolio-container">
        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
          <div className="position-relative overflow-hidden mb-2">
            <img className="img-fluid rounded w-100" src="img/portfolio-1.jpg" alt />
            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href="img/portfolio-1.jpg" data-lightbox="portfolio">
                <i className="fa fa-plus text-white" style={{fontSize: 60}} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
          <div className="position-relative overflow-hidden mb-2">
            <img className="img-fluid rounded w-100" src="img/portfolio-2.jpg" alt />
            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href="img/portfolio-2.jpg" data-lightbox="portfolio">
                <i className="fa fa-plus text-white" style={{fontSize: 60}} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
          <div className="position-relative overflow-hidden mb-2">
            <img className="img-fluid rounded w-100" src="img/portfolio-3.jpg" alt />
            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href="img/portfolio-3.jpg" data-lightbox="portfolio">
                <i className="fa fa-plus text-white" style={{fontSize: 60}} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 portfolio-item first">
          <div className="position-relative overflow-hidden mb-2">
            <img className="img-fluid rounded w-100" src="img/portfolio-4.jpg" alt />
            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href="img/portfolio-4.jpg" data-lightbox="portfolio">
                <i className="fa fa-plus text-white" style={{fontSize: 60}} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 portfolio-item second">
          <div className="position-relative overflow-hidden mb-2">
            <img className="img-fluid rounded w-100" src="img/portfolio-5.jpg" alt />
            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href="img/portfolio-5.jpg" data-lightbox="portfolio">
                <i className="fa fa-plus text-white" style={{fontSize: 60}} />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4 portfolio-item third">
          <div className="position-relative overflow-hidden mb-2">
            <img className="img-fluid rounded w-100" src="img/portfolio-6.jpg" alt />
            <div className="portfolio-btn bg-primary d-flex align-items-center justify-content-center">
              <a href="img/portfolio-6.jpg" data-lightbox="portfolio">
                <i className="fa fa-plus text-white" style={{fontSize: 60}} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid py-5" id="testimonial">
    <div className="container">
      <div className="position-relative d-flex align-items-center justify-content-center">
        <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Review</h1>
        <h1 className="position-absolute text-uppercase text-primary">Clients Say</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="owl-carousel testimonial-carousel">
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita</h4>
              <img className="img-fluid rounded-circle mx-auto mb-3" src="img/testimonial-1.jpg" style={{width: 80, height: 80}} />
              <h5 className="font-weight-bold m-0">Client Name</h5>
              <span>Profession</span>
            </div>
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita</h4>
              <img className="img-fluid rounded-circle mx-auto mb-3" src="img/testimonial-2.jpg" style={{width: 80, height: 80}} />
              <h5 className="font-weight-bold m-0">Client Name</h5>
              <span>Profession</span>
            </div>
            <div className="text-center">
              <i className="fa fa-3x fa-quote-left text-primary mb-4" />
              <h4 className="font-weight-light mb-4">Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet accusam amet eirmod eos, labore diam clita</h4>
              <img className="img-fluid rounded-circle mx-auto mb-3" src="img/testimonial-3.jpg" style={{width: 80, height: 80}} />
              <h5 className="font-weight-bold m-0">Client Name</h5>
              <span>Profession</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid pt-5" id="blog">
    <div className="container">
      <div className="position-relative d-flex align-items-center justify-content-center">
        <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Blog</h1>
        <h1 className="position-absolute text-uppercase text-primary">Latest Blog</h1>
      </div>
      <div className="row">
        <div className="col-lg-4 mb-5">
          <div className="position-relative mb-4">
            <img className="img-fluid rounded w-100" src="img/blog-1.jpg" alt />
            <div className="blog-date">
              <h4 className="font-weight-bold mb-n1">01</h4>
              <small className="text-white text-uppercase">Jan</small>
            </div>
          </div>
          <h5 className="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
          <a className="btn btn-sm btn-outline-primary py-2" href>Read More</a>
        </div>
        <div className="col-lg-4 mb-5">
          <div className="position-relative mb-4">
            <img className="img-fluid rounded w-100" src="img/blog-2.jpg" alt />
            <div className="blog-date">
              <h4 className="font-weight-bold mb-n1">01</h4>
              <small className="text-white text-uppercase">Jan</small>
            </div>
          </div>
          <h5 className="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
          <a className="btn btn-sm btn-outline-primary py-2" href>Read More</a>
        </div>
        <div className="col-lg-4 mb-5">
          <div className="position-relative mb-4">
            <img className="img-fluid rounded w-100" src="img/blog-3.jpg" alt />
            <div className="blog-date">
              <h4 className="font-weight-bold mb-n1">01</h4>
              <small className="text-white text-uppercase">Jan</small>
            </div>
          </div>
          <h5 className="font-weight-medium mb-4">Rebum lorem no eos ut ipsum diam tempor sed rebum elitr ipsum</h5>
          <a className="btn btn-sm btn-outline-primary py-2" href>Read More</a>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid py-5" id="contact">
    <div className="container">
      <div className="position-relative d-flex align-items-center justify-content-center">
        <h1 className="display-1 text-uppercase text-white" style={{WebkitTextStroke: '1px #dee2e6'}}>Contact</h1>
        <h1 className="position-absolute text-uppercase text-primary">Contact Me</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="contact-form text-center">
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="form-row">
                <div className="control-group col-sm-6">
                  <input type="text" className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                  <p className="help-block text-danger" />
                </div>
                <div className="control-group col-sm-6">
                  <input type="email" className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="control-group">
                <input type="text" className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                <p className="help-block text-danger" />
              </div>
              <div className="control-group">
                <textarea className="form-control py-3 px-4" rows={5} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                <p className="help-block text-danger" />
              </div>
              <div>
                <button className="btn btn-outline-primary" type="submit" id="sendMessageButton">Send
                  Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-primary text-white mt-5 py-5 px-sm-3 px-md-5">
    <div className="container text-center py-5">
      <div className="d-flex justify-content-center mb-4">
        <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-twitter" /></a>
        <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-facebook-f" /></a>
        <a className="btn btn-light btn-social mr-2" href="#"><i className="fab fa-linkedin-in" /></a>
        <a className="btn btn-light btn-social" href="#"><i className="fab fa-instagram" /></a>
      </div>
      <div className="d-flex justify-content-center mb-3">
        <a className="text-white" href="#">Privacy</a>
        <span className="px-3">|</span>
        <a className="text-white" href="#">Terms</a>
        <span className="px-3">|</span>
        <a className="text-white" href="#">FAQs</a>
        <span className="px-3">|</span>
        <a className="text-white" href="#">Help</a>
      </div>
      <p className="m-0">© <a className="text-white font-weight-bold" href="#">Domain Name</a>. All Rights Reserved. Designed by <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
      </p>
    </div>
  </div>
  <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom" />
  <a href="#" className="btn btn-outline-dark px-0 back-to-top"><i className="fa fa-angle-double-up" /></a>
</div>

  )

}

export default App;