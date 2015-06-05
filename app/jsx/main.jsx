// main.js
var React = require('react');
var ReactBootstrap = require('react-bootstrap');

// CSS
// will pollute the global CSS selector namespace :-(
require('../../bower_components/bootstrap/dist/css/bootstrap.min.css');

// relative to app/jsx
require('../css/styles.css');


var HelloWorldComponent = require('./components/HelloWorld.jsx');

var Button = ReactBootstrap.Button;
var Navbar = ReactBootstrap.Navbar;
var Nav = ReactBootstrap.Nav;
var NavItem = ReactBootstrap.NavItem;
var DropdownButton = ReactBootstrap.DropdownButton;
var MenuItem = ReactBootstrap.MenuItem;

var exampleLogo = require('../assets/images/Pepsi_logo_2008.png');

var icon = (
    <span>
        <a href="/">
         <img className="logo" src={exampleLogo} />
        </a>
    </span>
);

var App = React.createClass({
  render: function() {
    if (__DEV__) {
      console.log('render function in App');
    }
    var message = "Starter Project";
    return (<div>
              <Navbar brand={icon} defaultNavExpanded={false} toggleNavKey={0}>
                <Nav right eventKey={0}>
                  <NavItem eventKey={1} href='#'>Link</NavItem>
                  <NavItem eventKey={2} href='#'>Link</NavItem>
                  <DropdownButton eventKey={3} title='Dropdown'>
                    <MenuItem eventKey='1'>Action</MenuItem>
                    <MenuItem eventKey='2'>Another action</MenuItem>
                    <MenuItem eventKey='3'>Something else here</MenuItem>
                    <MenuItem divider />
                    <MenuItem eventKey='4'>Separated link</MenuItem>
                  </DropdownButton>
                </Nav>
              </Navbar>
              <Button bsStyle='primary'>Primary</Button>
              <p>{message}</p>
              <HelloWorldComponent />
            </div>);
  }
});

// render the containing app
React.render(
  <App client="upperview" />,
  document.getElementById('container')
);
