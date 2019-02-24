import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/boostrap-Overrides.scss'
import './App.css';
import './css/simple-sidebar.css'
import Home from './js/Home'
import AboutMe from './js/AboutMe';
import Portfolio from './js/Portfolio';
import Contact from './js/Contact';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      SidebarExpanded: true,
      CurrentSlice: 0,
    }
  }
  handleToggleSidebar(e) {
    this.setState({ SidebarExpanded: !this.state.SidebarExpanded })
  }

  handleChangeSlice(slice) {
    this.setState({
      CurrentSlice: slice,
      MenuIsExpanded: false,
    })
  }

  clickAnywhere() {
    if (this.state.MenuIsExpanded)
      this.handleToggleMenu(null);
  }
  render() {
    const imgMardel = require('./img/mardel.jpg');
    const imgLaptop = require('./img/laptop.jpg');
    const imgDesktop = require('./img/desktop.jpg');
    let imgSlice
    let slice = (<div></div>)
    switch (this.state.CurrentSlice) {
      case 0:
      imgSlice = imgLaptop;
      slice = <Home></Home>
      break;
      case 1:
      imgSlice = imgMardel;
      slice = <Portfolio></Portfolio>
      break;
      case 2: 
      imgSlice = imgMardel;
      slice = <AboutMe></AboutMe>
      break;
      case 3: 
      imgSlice = imgDesktop;
      slice = <Contact></Contact>
      break;
      default: break;
    }

    return (
      <div className={`App d-flex ${this.state.SidebarExpanded ? '' : 'toggled'}`} id='wrapper'>
        <div className="bg-light border-right" id="sidebar-wrapper">
          <figure>
            <div id="avatar"></div>
            <figcaption>
              <h3 className="text-center">Juan Carbo</h3>
            </figcaption>
          </figure>
          <div className="list-group list-group-flush">
            <button className="list-group-item list-group-item-action bg-light mb-1"onClick={(e) => this.handleChangeSlice(0)}>Home</button>
            <button className="list-group-item list-group-item-action bg-light mb-1"onClick={(e) => this.handleChangeSlice(1)}>Portfolio</button>
            <button className="list-group-item list-group-item-action bg-light mb-1"onClick={(e) => this.handleChangeSlice(2)}>About Me</button>
            <button className="list-group-item list-group-item-action bg-light mb-1"onClick={(e) => this.handleChangeSlice(3)}>Contact</button>
          </div>
        </div>
        <div id="page-content-wrapper" className='my-5' style={{ backgroundImage: `url(${imgSlice})` }}>

          <nav className="navbar navbar-expand-lg navbar-light d-md-none">
            <button className="btn btn-primary" id="menu-toggle" onClick={(e) => this.handleToggleSidebar(e)}><img src={require('./img/menu.svg')} alt='Toggle menu'></img></button>
          </nav>
          {slice}
        </div>
      </div>
    );
  }
}

export default App;
