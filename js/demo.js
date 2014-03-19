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
				React.DOM.h1( {className:"page-header"}, "Buttons"),
				Button(null, "Click Me!"),
				Button( {className:"btn-danger"}, "Danger"),
				Button( {className:"btn-success"}, "Success"),

				/* Button Group*/
				React.DOM.h1( {className:"page-header"}, "Button Groups"),
				ButtonGroup(null, 
					Button( {className:"btn-default"}, "Default"),
					Button( {className:"btn-danger"}, "Danger"),
					Button( {className:"btn-success"}, "Success")
				),

				/* ButtonToolbar */
				React.DOM.h1( {className:"page-header"}, "Button Toolbar"),
				ButtonToolbar(null, 
					ButtonGroup(null, 
						Button( {className:"btn-default"}, Glyph( {icon:"list"})),
						Button( {className:"btn-danger"}, Glyph( {icon:"star"})),
						Button( {className:"btn-success"}, Glyph( {icon:"search"}))
					),
					ButtonGroup(null, 
						Button( {className:"btn-default"}, Glyph( {icon:"globe"})),
						Button( {className:"btn-danger"}, Glyph( {icon:"heart"})),
						Button( {className:"btn-success"}, Glyph( {icon:"music"}))
					),
					ButtonGroup(null, 
						Button( {className:"btn-default"}, Glyph( {icon:"globe"})),
						Button( {className:"btn-danger"}, Glyph( {icon:"heart"})),
						Button( {className:"btn-success"}, Glyph( {icon:"music"}))
					)
				),
				React.DOM.br(null),
				ButtonToolbar(null, 
					ButtonGroup( {className:"btn-group-lg"}, 
						Button( {className:"btn-info"}, Glyph( {icon:"list"})),
						Button( {className:"btn-danger"}, Glyph( {icon:"star"})),
						Button( {className:"btn-success"}, Glyph( {icon:"search"}))
					),
					ButtonGroup( {className:"btn-group-lg"}, 
						Button( {className:"btn-info"}, Glyph( {icon:"globe"})),
						Button( {className:"btn-danger"}, Glyph( {icon:"heart"})),
						Button( {className:"btn-success"}, Glyph( {icon:"music"})),
						Button( {className:"btn-warning"}, Glyph( {icon:"cloud"}))
					)
				),

				/* Button Dropdowns */
				React.DOM.h1( {className:"page-header"}, "Button Dropdowns"),
				ButtonGroup(null, 
					Dropdown( {label:"Action"}, 
						React.DOM.li(null, React.DOM.a( {href:"#"}, "Action")),
					    React.DOM.li(null, React.DOM.a( {href:"#"}, "Another action")),
					    React.DOM.li(null, React.DOM.a( {href:"#"}, "Something else here"))
					)
				),

				/* Glyph */
				React.DOM.h1( {className:"page-header"}, "Glyphicons"),
				Glyph( {icon:"user"}),
				Glyph( {icon:"search"}),
				Glyph( {icon:"list"}),
				Glyph( {icon:"earphone"}),
				Glyph( {icon:"file"}),
				Glyph( {icon:"film"}),
				Glyph( {icon:"gift"}),
				Glyph( {icon:"cutlery"}),
				Glyph( {icon:"dashboard"}),
				Glyph( {icon:"download"}),

				/* Dropdown */
				React.DOM.h1( {className:"page-header"}, "Dropdowns"),
				Dropdown( {label:"My Dropdown"}, 
					MenuItem( {className:"dropdown-header"}, "My Header"),
					MenuItem( {className:"disabled"}, "I am disabled"),
					MenuItem( {className:"divider"} ),
					MenuItem( {className:"dropdown-header"}, "My Other Header"),
					MenuItem(null, "Hey! Click me!")
				),
				React.DOM.br(null),
				Dropdown( {className:"btn-success", label:"Success"}, 
					MenuItem(null, "Hey! Click me!"),
					MenuItem(null, "And me!!!")
				),
				React.DOM.br(null),
				Dropdown( {className:"btn-danger", label:"Danger"}, 
					MenuItem(null, "Hey! Click me!"),
					MenuItem(null, "And me!!!")
				),

				/* InputGroup */
				React.DOM.h1( {className:"page-header"}, "Input Groups"),
				InputGroup(null, 
					InputGroupAddon(null, "@"),
					React.DOM.input( {type:"text", className:"form-control"}),
					InputGroupAddon(null, "#")
				),
				React.DOM.br(null),
				InputGroup(null, 
					InputGroupAddon(null, 
						React.DOM.input( {type:"checkbox"})
					),
					React.DOM.input( {type:"text", className:"form-control"})
				),
				React.DOM.br(null),
				InputGroup(null, 
					InputGroupAddon(null, 
						React.DOM.input( {type:"radio"})
					),
					React.DOM.input( {type:"text", className:"form-control"})
				),
				React.DOM.br(null),
				InputGroup(null, 
					InputGroupButton(null, 
						Button( {className:"btn-info"}, "Search!")
					),
					React.DOM.input( {type:"text", className:"form-control"})
				)

			),
			React.DOM.br(null)
		)
		);
	}
});
React.renderComponent(
	Demo(null ),
	document.querySelector('.page')
);