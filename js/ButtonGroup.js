/**
 * @jsx React.DOM
 */

var ButtonGroup = React.createClass({displayName: 'ButtonGroup',
	render: function() {
		return (
			React.DOM.div( {className:'btn-group ' + this.props.className }, this.props.children)
		);
	}
});

var ButtonToolbar = React.createClass({displayName: 'ButtonToolbar',
	render: function() {
		return (
			React.DOM.div( {className:'btn-toolbar ' + this.props.className, role:"toolbar"}, this.props.children)
		);
	}
});