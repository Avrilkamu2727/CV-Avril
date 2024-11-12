const Home = () => {
    return (
        <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{minHeight: '100vh'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 px-5 pl-lg-0 pb-5 pb-lg-0">
              <img className="img-fluid w-100 rounded-circle shadow-sm" src="img/profile.jpg" alt />
            </div>
            <div className="col-lg-7 text-center text-lg-left">
              <h3 className="text-white font-weight-normal mb-3">I'm</h3>
              <h1 className="display-3 text-uppercase text-primary mb-2" style={{WebkitTextStroke: '2px #ffffff'}}>Kate Winslet</h1>
              <h1 className="typed-text-output d-inline font-weight-lighter text-white" />
              <div className="typed-text d-none">I'm a Student In Klabat University</div>
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                  <span />
                <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home ;