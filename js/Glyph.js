/**
 * @jsx React.DOM
 */

var Glyph = React.createClass({displayName: 'Glyph',
	render: function() {
		var classes = 'glyphicon glyphicon-'+this.props.icon;
		return (
			React.DOM.span( {className:classes}, this.props.children)
		);
	}
});