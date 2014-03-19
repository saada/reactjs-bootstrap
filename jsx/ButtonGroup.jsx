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