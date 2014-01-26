/**
 * @jsx React.DOM
 */

var Jumbotron = React.createClass({displayName: 'Jumbotron',
	render: function() {
		return (
			React.DOM.div( {className:"jumbotron"}, this.props.children)
		);
	}
});