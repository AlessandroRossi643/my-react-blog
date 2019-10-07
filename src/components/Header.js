import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div className="container-fluid header">
        <div className="row">
          <div className="col-lg-12 header-first d-flex align-items-center justify-content-center">
            <h2 className="text-center title"> ALESSANDRO ROSSI </h2>
          </div>
          <div className="col-lg-12 header-second">
            <div className="col-lg-6 nav-left">

            </div>
            <div className="col-lg-6 nav-right text-right">
              <a href="/"><i class="fab fa-instagram"></i></a>
              <a href="/"><i class="fab fa-facebook"></i></a>
              <a href="/"><i class="fab fa-linkedin"></i></a>
              <a href="/"><i class="fab fa-github"></i></a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Header;
