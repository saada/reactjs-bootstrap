/**
 * @jsx React.DOM
 */

var InputGroup = React.createClass({displayName: 'InputGroup',
	render: function() {
		return (
			React.DOM.span( {className:'input-group ' + this.props.className }, this.props.children)
		);
	}
});

var InputGroupAddon = React.createClass({displayName: 'InputGroupAddon',
	render: function() {
		return (
			React.DOM.span( {className:'input-group-addon ' + this.props.className }, this.props.children)
		);
	}
});

var InputGroupButton = React.createClass({displayName: 'InputGroupButton',
	render: function() {
		return (
			React.DOM.span( {className:'input-group-btn ' + this.props.className }, this.props.children)
		);
	}
});