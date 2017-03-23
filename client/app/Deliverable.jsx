import React from 'react';

var Deliverable = ({deliverable}) => (
  <div className="deliverable">
    {deliverable.id} | {deliverable.owner} | {deliverable.name} | {deliverable.status} | {deliverable.points}
  </div>
);

module.exports = Deliverable;
