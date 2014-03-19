React :heart: Bootstrap
=================

Simple ReactJS components for Bootstrap 3

[Github Page](http://saada.github.io/reactjs-bootstrap/ "ReactJS-Bootstrap")

###Everything you need to know is in the jsx/demo.jsx

The goal of this repo is to make writing Bootstrap markup fun and intuitive with readable syntax. If there's a feature you want, you're more than welcome to contribute pull-requests. Please submit any issues you face!

# Installation

Just include the script in your html and you're good to go!

	<script src="bower_components/jquery/jquery.min.js"></script>
	<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
	<script src="bower_components/react/react.min.js"></script>
	
	<!-- Add this script to the stack -->
	<script src="dist/reactjs-bootstrap.min.js"></script>

# Implemented components (JSX Examples)

##Jumbotron

	<Jumbotron>
		<h1>React + Bootstrap</h1>
		<p>This is a Jumbotron<Glyph icon='heart-empty'/></p>
	</Jumbotron>

##Buttons

	<Button>Click Me!</Button>
	<Button className="btn-danger">Danger</Button>
	<Button className="btn-success">Success</Button>

##Button Groups

	<ButtonGroup>
		<Button className="btn-default">Default</Button>
		<Button className="btn-danger">Danger</Button>
		<Button className="btn-success">Success</Button>
	</ButtonGroup>

##Button Toolbar

	<ButtonToolbar>
		<ButtonGroup>
			<Button className="btn-default"><Glyph icon="list"/></Button>
			<Button className="btn-danger"><Glyph icon="star"/></Button>
			<Button className="btn-success"><Glyph icon="search"/></Button>
		</ButtonGroup>
		<ButtonGroup>
			<Button className="btn-default"><Glyph icon="globe"/></Button>
			<Button className="btn-danger"><Glyph icon="heart"/></Button>
			<Button className="btn-success"><Glyph icon="music"/></Button>
		</ButtonGroup>
		<ButtonGroup>
			<Button className="btn-default"><Glyph icon="globe"/></Button>
			<Button className="btn-danger"><Glyph icon="heart"/></Button>
			<Button className="btn-success"><Glyph icon="music"/></Button>
		</ButtonGroup>
	</ButtonToolbar>

##Glyphicons

	<Glyph icon="user"/>
	<Glyph icon="search"/>
	<Glyph icon="list"/>

##Dropdown

	<Dropdown label="My Dropdown">
		<MenuItem className="dropdown-header">My Header</MenuItem>
		<MenuItem className="disabled">I am disabled</MenuItem>
		<MenuItem className="divider" />
		<MenuItem className="dropdown-header">My Other Header</MenuItem>
		<MenuItem>Hey! Click me!</MenuItem>
	</Dropdown>


#Helpers

Equivalens of a `<div class="row"></div>`

	<Row>
		...
	</Row>
