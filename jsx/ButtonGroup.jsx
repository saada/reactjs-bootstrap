/**
 * @jsx React.DOM
 */

var ButtonGroup = React.createClass({
	render: function() {
		return (
			<div className={'btn-group ' + this.props.className }>{this.props.children}</div>
		);
	}
});

var ButtonToolbar = React.createClass({
	render: function() {
		return (
			<div className={'btn-toolbar ' + this.props.className} role="toolbar">{this.props.children}</div>
		);
	}
});