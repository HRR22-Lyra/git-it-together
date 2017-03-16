var Nav = () => (
<nav className='navbar navbar-inverse'>
  <div className='container-fluid'>
    <div className='navbar-header'>
      <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
        <span className='sr-only'>Toggle navigation</span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>
      <a className="navbar-brand" href="#/"><img src="assets/logo.png" />Git It Together</a>
    </div>

    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
      <ul className='nav navbar-nav'>
        <li className="active"><a href='#/open'>Open <span className='sr-only'>(current)</span></a></li>
        <li><a href='#/archive'>Archive</a></li>
      </ul>
    </div>
  </div>
</nav>
);

window.Nav = Nav;