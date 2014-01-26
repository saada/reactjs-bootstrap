/**
 * @jsx React.DOM
 */

var Row = React.createClass({displayName: 'Row',
	render: function() {
		return (
			React.DOM.div( {className:"row"}, this.props.children)
		);
	}
});