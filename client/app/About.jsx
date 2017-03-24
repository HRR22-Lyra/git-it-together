import React from 'react';
import {Row, Col, Image, Button, Tooltip, Popover, OverlayTrigger} from 'react-bootstrap';

//style={{zIndex: 2000}}
//data-backdrop="false"
var About = () => (
  <div>

<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<div className="modal fade show" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'none'}} >
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button  type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">closer</span>
        </button>
      </div>
      <div className="modal-body">
        <p>This is in modal.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
  )

module.exports = About;
