var React = require('react');
var Gif = require('react-gif');
 
var Component = React.createClass({
  render: function() {
    return (
      <Gif src={url} />
    );
  }
});