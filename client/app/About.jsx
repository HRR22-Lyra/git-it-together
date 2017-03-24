import React from 'react';
import {Row, Col, Image, Button, Tooltip, Popover, OverlayTrigger} from 'react-bootstrap';

//style={{zIndex: 2000}}
//data-backdrop="false"
var About = () => (
  <div>

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Our Team
</button>

<div className="modal fade show" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'none'}} >
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">About us</h5>
        <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className="modal-body">
        <div className="profiles">
          <p className="name">Meg Viar</p>
          <img src="/client/assets/23217560.png" ></img>
          <p >Meg Viar lives in Baltimore</p>
          <a target="_blank" href="https://www.linkedin.com/in/laura-meg-viar-216a92114/">Meg on Linkedin</a>
        </div>
        <div className="profiles">
          <p className="name">Frank</p>
          <img src="/client/assets/7969865.jpeg" ></img>
          <p >James is the owner</p>
          <a target="_blank" href="https://www.linkedin.com/in/laura-meg-viar-216a92114/">James on Linkedin</a>
        </div>

        <div className="profiles">
          <p className="name">Jordan Stubblefield</p>
          <img src="/client/assets/AAEAAQAAAAAAAAg9AAAAJDRiODRkMWQ4LWE1ZWUtNDdiZC04YmIwLWRkNmMyM2JkNDVhMA.jpg" ></img>
          <p>CSS Jordan</p>
          <a target="_blank" href="https://www.linkedin.com/in/jstubblefield7939/">Jordan on Linkedin</a>
        </div>
        <div className="profiles">
          <p className="name">Kyle Anson</p>
          <img src="/client/assets/AAEAAQAAAAAAAAx-AAAAJDhjN2M0MjkzLTI5OGUtNDZhMS04MTk1LTNlN2RkNTQ4YzBlYQ.jpg" ></img>
          <p >Kyle from backend</p>
          <a target="_blank" href="https://www.linkedin.com/in/ansonkyle/">Kyle on Linkedin</a>
        </div>
        <div className="profiles">
          <p className="name">Simon de Moor</p>
          <img src="/client/assets/AAEAAQAAAAAAAAyAAAAAJGVjZjQyMTQxLTAwNjAtNGYxYy04NjM4LWJhODEwZGZiNDI2ZQ.jpg" ></img>
          <p>Simon did everything</p>
          <a target="_blank" href="https://www.linkedin.com/in/simon-de-moor-4b340971/">Simon on Linkedin</a>
        </div>

      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>

      </div>
    </div>
  </div>
</div>
</div>
  )

module.exports = About;
