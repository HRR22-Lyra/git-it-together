import React from 'react';

var Resource = ({resource}) => (
  <div className = "resource">
    {resource.user}: <a className="right" href={resource.link}>{resource.link}</a>
  </div>
);

module.exports = Resource;
