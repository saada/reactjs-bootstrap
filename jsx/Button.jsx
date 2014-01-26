/**
 * @jsx React.DOM
 */

var Button = React.createClass({
	render: function() {
		return (
			<button type="button" className={'btn ' + this.props.className} id={this.props.id} data-toggle={this.props['data-toggle']}>{this.props.children}</button>
		);
	}
});