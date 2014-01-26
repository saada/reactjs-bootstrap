/**
 * @jsx React.DOM
 */
var Demo = React.createClass({displayName: 'Demo',
	render: function() {
		return (
			React.DOM.div( {className:"Demo"}, 
				React.DOM.h3(null, "Everything you need to know is in the jsx/demo.jsx"),
				
				/* Glyph */
				Glyph( {icon:"user"}),
				Glyph( {icon:"search"}),
				Glyph( {icon:"list"}),

				/* Dropdown */
				Dropdown( {label:"My Dropdown"}, 
					MenuItem( {className:"dropdown-header"}, "My Header"),
					MenuItem( {className:"disabled"}, "I am disabled"),
					MenuItem( {className:"divider"} ),
					MenuItem( {className:"dropdown-header"}, "My Other Header"),
					MenuItem(null, "Hey! Click me!")
				)

			)
		);
	}
});
React.renderComponent(
	Demo(null ),
	document.querySelector('.container')
);