/**
 * @jsx React.DOM
 */

var ButtonToolbar = React.createClass({
	render: function() {
		return (
			<div className={'btn-toolbar ' + this.props.className} role="toolbar">{this.props.children}</div>
		);
	}
});