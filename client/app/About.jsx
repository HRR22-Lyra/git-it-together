import React from 'react';
import {Row, Col, Image, Button, Tooltip, Popover, OverlayTrigger} from 'react-bootstrap';


var About = () => (
  <div>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<div class="modal fade" id="myModal" tabIndex="2000" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'none'}} style={{zIndex: 2000}}>
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button tabIndex="2000" type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">closer</span>
        </button>
      </div>
      <div class="modal-body">
        <p>This is in modal.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
</div>
  )

module.exports = About;
