/**
 * @jsx React.DOM
 */

var InputGroup = React.createClass({
	render: function() {
		return (
			<span className={'input-group ' + this.props.className }>{this.props.children}</span>
		);
	}
});

var InputGroupAddon = React.createClass({
	render: function() {
		return (
			<span className={'input-group-addon ' + this.props.className }>{this.props.children}</span>
		);
	}
});

var InputGroupButton = React.createClass({
	render: function() {
		return (
			<span className={'input-group-btn ' + this.props.className }>{this.props.children}</span>
		);
	}
});