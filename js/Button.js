/**
 * @jsx React.DOM
 */

var Button = React.createClass({displayName: 'Button',
	render: function() {
		return (
			React.DOM.button( {type:"button", className:'btn ' + this.props.className, id:this.props.id, 'data-toggle':this.props['data-toggle']}, this.props.children)
		);
	}
});