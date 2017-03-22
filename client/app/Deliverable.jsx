import React from 'react';

var Deliverable = ({deliverable}) => (
  <div class="deliverable">
    {deliverable.id} Owner: {deliverable.owner} Status: {deliverable.status} Points: {deliverable.points}
  </div>
);

module.exports = Deliverable;
