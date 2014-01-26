reactjs-bootstrap
=================

Simple ReactJS components for Bootstrap 3

###Everything you need to know is in the jsx/demo.jsx

The goal of this repo is to make writing Bootstrap markup fun and intuitive with readable syntax. If there's a feature you want, you're more than welcome to contribute pull-requests. Please submit any issues you face!

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