/**
 * @jsx React.DOM
 */

var Glyph = React.createClass({
	render: function() {
		var classes = 'glyphicon glyphicon-'+this.props.icon;
		return (
			<span style={this.props.style} className={classes}>{this.props.children}</span>
		);
	}
});