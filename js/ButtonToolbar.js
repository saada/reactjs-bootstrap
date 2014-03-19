/**
 * @jsx React.DOM
 */

var ButtonToolbar = React.createClass({displayName: 'ButtonToolbar',
	render: function() {
		return (
			React.DOM.div( {className:'btn-toolbar ' + this.props.className, role:"toolbar"}, this.props.children)
		);
	}
});