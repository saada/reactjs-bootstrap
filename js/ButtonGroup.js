/**
 * @jsx React.DOM
 */

var ButtonGroup = React.createClass({displayName: 'ButtonGroup',
	render: function() {
		return (
			React.DOM.div( {className:"btn-group"}, this.props.children)
		);
	}
});