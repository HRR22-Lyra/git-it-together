import React from 'react';
import {Row, Col, Image} from 'react-bootstrap';

var Nav = ({profile, logout, handleProjectListEntryClick}) => (
  <nav className='navbar navbar-light bg-faded'>
    <div className='navbar-header'>
      <div className="dropdown">
        <img src="/client/assets/unicorn-head-silhouette.png" className="navbar-brand dropdown" alt="unicorn head" onClick={() => handleProjectListEntryClick(null)}/>
        <div className="card dropdown-content">
          {/* <img className="card-img-top" src={profile.picture} alt="profile picture" /> */}
          <div className="card-block">
            <h4 className="card-title">{profile.name}</h4>
            <p className="caption">
              <small>{profile.nickname}</small>
            </p>
            <hr/>
            <button onClick={logout} className="btn btn-primary">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

module.exports = Nav;
