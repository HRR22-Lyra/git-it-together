import React from 'react'



var Nav = () => (
<nav className='navbar navbar-inverse'>
  <div className='container-fluid'>
    <div className='navbar-header'>
      <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#nav-collapse-1' aria-expanded='false'>
        <span className='sr-only'>Toggle navigation</span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>
      <a className="navbar-brand" href="#/"><img src="assets/logo.png" />Git It Together</a>
    </div>

    <div className='collapse navbar-collapse' id='nav-collapse-1'>
      <ul className='nav navbar-nav'>
      {/*
        <li><Link to="/dashboard" activeClassName="active sr-only">Dashboard</Link></li>
        <li><Link to="/projects" activeClassName="active sr-only">Projects</Link></li>
        <li><Link to="/logout">Sign Out</Link></li>
      */}
      </ul>
    </div>
  </div>
</nav>
);

module.exports = Nav;