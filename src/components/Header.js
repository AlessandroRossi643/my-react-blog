import React, { Component } from 'react';

class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
       displayMenu: false,
    };
    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('mouseout', this.hideDropdownMenu);
    });

  }

  render () {
    return (
      <div className="container-fluid header">
        <div className="row">
          <div className="col-lg-12 header-first d-flex align-items-center justify-content-center">
            <h2 className="text-center title"> ALESSANDRO ROSSI </h2>
          </div>
          <div className="col-lg-12 header-second">
            <div className="col-lg-6 nav-left d-flex">
              <div className="menu-item">
                <h3 className="menu-title title" onMouseEnter={this.showDropdownMenu}>FOTOGRAFIE</h3>
                { this.state.displayMenu ? (
                  <div className="dropdown-menu d-flex flex-column text-center">
                    <a className="title" href="/">CALCIO</a>
                    <a className="title" href="/">VIAGGI</a>
                    <a className="title" href="/">AMICI</a>
                  </div>
                 ):
                 (
                   null
                 )
                 }
              </div>
              <div className="menu-item">
                <h3 className="menu-title title">BLOG</h3>
              </div>
            </div>
            <div className="col-lg-6 nav-right text-right">
              <a href="/"><i className="fab fa-instagram"></i></a>
              <a href="/"><i className="fab fa-facebook"></i></a>
              <a href="/"><i className="fab fa-linkedin"></i></a>
              <a href="/"><i className="fab fa-github"></i></a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Header;
