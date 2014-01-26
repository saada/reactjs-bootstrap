/**
 * @jsx React.DOM
 */

var Jumbotron = React.createClass({
	render: function() {
		return (
			<div className="jumbotron">{this.props.children}</div>
		);
	}
});