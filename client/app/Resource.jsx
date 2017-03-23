import React from 'react';

var Resource = ({resource}) => (
  <div className = "resource">
    {resource.name}: {resource.url}
  </div>
);

module.exports = Resource;
