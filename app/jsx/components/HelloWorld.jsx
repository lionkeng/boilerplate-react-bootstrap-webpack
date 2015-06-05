// HellowWorld.jsx
var React = require('react');

// relative app/jsx/components
var exampleImage = require('../../assets/images/example.jpg');

module.exports = React.createClass({
    render: function() {
        return (
          <div className="HelloWorld">
            <h1>Hello World! I am a react component!</h1>
            <img src={exampleImage} width="600px" />
            <p>Picture from <a href="https://unsplash.com/">https://unsplash.com</a></p>
          </div>
        );
    }
}); 