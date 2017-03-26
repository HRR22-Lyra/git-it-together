import React from 'react';

//style={{zIndex: 2000}}
//data-backdrop="false"
var About = () => (
  <div className="container-fluid our-team">

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

          <a target="_blank" href="https://www.linkedin.com/in/laura-meg-viar-216a92114/">
            <div className="profiles">
              <p className="name">Meg Viar</p>
              <img src="/client/assets/AAEAAQAAAAAAAAqZAAAAJGUyZjRkNDhmLWE3NmUtNDMyYy1hOTE4LWU3M2ZjZDFmYjIxNA.jpg" />
            </div>
          </a>

          <a target="_blank" href="https://github.com/Jimmy6strings">
            <div className="profiles">
              <p className="name">James Mitchell</p>
              <img src="/client/assets/7969865.jpeg" />
            </div>
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/jstubblefield7939/">
            <div className="profiles">
              <p className="name">Jordan Stubblefield</p>
              <img src="/client/assets/AAEAAQAAAAAAAAg9AAAAJDRiODRkMWQ4LWE1ZWUtNDdiZC04YmIwLWRkNmMyM2JkNDVhMA.jpg" />
            </div>
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/ansonkyle/">
            <div className="profiles">
              <p className="name">Kyle Anson</p>
              <img src="/client/assets/AAEAAQAAAAAAAAx-AAAAJDhjN2M0MjkzLTI5OGUtNDZhMS04MTk1LTNlN2RkNTQ4YzBlYQ.jpg" />
            </div>
          </a>

          <a target="_blank" href="https://www.linkedin.com/in/simon-de-moor-4b340971/">
            <div className="profiles">
              <p className="name">Simon de Moor</p>
              <img src="/client/assets/AAEAAQAAAAAAAAyAAAAAJGVjZjQyMTQxLTAwNjAtNGYxYy04NjM4LWJhODEwZGZiNDI2ZQ.jpg" />
            </div>
          </a>

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
