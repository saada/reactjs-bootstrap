/**
 * @jsx React.DOM
 */
var Demo = React.createClass({displayName: 'Demo',
	render: function() {
		return (
		React.DOM.div(null, 	
			Jumbotron(null, 
				React.DOM.div( {className:"container"}, 
					React.DOM.h1(null, "React ", Glyph( {style:{color:'brown'}, icon:"heart-empty"}), " Bootstrap"),
					React.DOM.p(null, React.DOM.a( {href:"https://github.com/saada/reactjs-bootstrap"}, "Github Repo")),
					React.DOM.p(null, "Source : ", React.DOM.a( {href:"https://github.com/saada/reactjs-bootstrap/blob/master/jsx/demo.jsx"}, "jsx/demo.jsx"))
				)
			),
			React.DOM.div( {className:"container"}, 
				/* Jumbotron */
				Jumbotron(null, 
					React.DOM.h2(null, "My Jumbotron"),
					React.DOM.p(null, "\"This is an inspirational quote\" ~Dr. Adolf Jumbotron")
				),

				/* Button */
				Row(null, 
					React.DOM.h1(null, "Buttons"),
					Button(null, "Click Me!"),
					Button( {className:"btn-danger"}, "Danger"),
					Button( {className:"btn-success"}, "Success")
				),

				/* Button Group*/
				React.DOM.br(null),
				Row(null, 
					React.DOM.h1(null, "Button Groups"),
					ButtonGroup(null, 
						Button( {className:"btn-default"}, "Default"),
						Button( {className:"btn-danger"}, "Danger"),
						Button( {className:"btn-success"}, "Success")
					)
				),

				/* Glyph */
				React.DOM.br(null),
				Row(null, 
					React.DOM.h1(null, "Glyphicons"),
					Glyph( {icon:"user"}),
					Glyph( {icon:"search"}),
					Glyph( {icon:"list"}),
					Glyph( {icon:"earphone"}),
					Glyph( {icon:"file"}),
					Glyph( {icon:"film"}),
					Glyph( {icon:"gift"}),
					Glyph( {icon:"cutlery"}),
					Glyph( {icon:"dashboard"}),
					Glyph( {icon:"download"})
				),

				/* Dropdown */
				React.DOM.br(null),
				Row(null, 
					React.DOM.h1(null, "Dropdowns"),
					Dropdown( {label:"My Dropdown"}, 
						MenuItem( {className:"dropdown-header"}, "My Header"),
						MenuItem( {className:"disabled"}, "I am disabled"),
						MenuItem( {className:"divider"} ),
						MenuItem( {className:"dropdown-header"}, "My Other Header"),
						MenuItem(null, "Hey! Click me!")
					),
					Dropdown( {className:"btn-success", label:"Success"}, 
						MenuItem(null, "Hey! Click me!"),
						MenuItem(null, "And me!!!")
					)
				)

			)
		)
		);
	}
});
React.renderComponent(
	Demo(null ),
	document.querySelector('.page')
);