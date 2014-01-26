/**
 * @jsx React.DOM
 */

var Glyph = React.createClass({
	render: function() {
		var classes = 'glyphicon glyphicon-'+this.props.icon;
		return (
			<span className={classes}>{this.props.children}</span>
		);
	}
});