/**
 * @jsx React.DOM
 */
var Demo = React.createClass({
	render: function() {
		return (
		<div>	
			<Jumbotron>
				<div className="container">
					<h1>React <Glyph style={{color:'brown'}} icon='heart-empty'/> Bootstrap</h1>
					<p><a href="https://github.com/saada/reactjs-bootstrap">Github Repo</a></p>
					<p>Source : <a href="https://github.com/saada/reactjs-bootstrap/blob/master/jsx/demo.jsx">jsx/demo.jsx</a></p>
				</div>
			</Jumbotron>
			<div className="container">
				{/* Jumbotron */}
				<Jumbotron>
					<h2>My Jumbotron</h2>
					<p>"This is an inspirational quote" ~Dr. Adolf Jumbotron</p>
				</Jumbotron>

				{/* Button */}
				<h1 className="page-header">Buttons</h1>
				<Button>Click Me!</Button>
				<Button className="btn-danger">Danger</Button>
				<Button className="btn-success">Success</Button>

				{/* Button Group*/}
				<h1 className="page-header">Button Groups</h1>
				<ButtonGroup>
					<Button className="btn-default">Default</Button>
					<Button className="btn-danger">Danger</Button>
					<Button className="btn-success">Success</Button>
				</ButtonGroup>

				{/* ButtonToolbar */}
				<h1 className="page-header">Button Toolbar</h1>
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
				<br/>
				<ButtonToolbar>
					<ButtonGroup className="btn-group-lg">
						<Button className="btn-info"><Glyph icon="list"/></Button>
						<Button className="btn-danger"><Glyph icon="star"/></Button>
						<Button className="btn-success"><Glyph icon="search"/></Button>
					</ButtonGroup>
					<ButtonGroup className="btn-group-lg">
						<Button className="btn-info"><Glyph icon="globe"/></Button>
						<Button className="btn-danger"><Glyph icon="heart"/></Button>
						<Button className="btn-success"><Glyph icon="music"/></Button>
						<Button className="btn-warning"><Glyph icon="cloud"/></Button>
					</ButtonGroup>
				</ButtonToolbar>

				{/* Button Dropdowns */}
				<h1 className="page-header">Button Dropdowns</h1>
				<ButtonGroup>
					<Dropdown label='Action'>
						<li><a href="#">Action</a></li>
					    <li><a href="#">Another action</a></li>
					    <li><a href="#">Something else here</a></li>
					</Dropdown>
				</ButtonGroup>

				{/* Glyph */}
				<h1 className="page-header">Glyphicons</h1>
				<Glyph icon="user"/>
				<Glyph icon="search"/>
				<Glyph icon="list"/>
				<Glyph icon="earphone"/>
				<Glyph icon="file"/>
				<Glyph icon="film"/>
				<Glyph icon="gift"/>
				<Glyph icon="cutlery"/>
				<Glyph icon="dashboard"/>
				<Glyph icon="download"/>

				{/* Dropdown */}
				<h1 className="page-header">Dropdowns</h1>
				<Dropdown label="My Dropdown">
					<MenuItem className="dropdown-header">My Header</MenuItem>
					<MenuItem className="disabled">I am disabled</MenuItem>
					<MenuItem className="divider" />
					<MenuItem className="dropdown-header">My Other Header</MenuItem>
					<MenuItem>Hey! Click me!</MenuItem>
				</Dropdown>
				<br/>
				<Dropdown className="btn-success" label="Success">
					<MenuItem>Hey! Click me!</MenuItem>
					<MenuItem>And me!!!</MenuItem>
				</Dropdown>
				<br/>
				<Dropdown className="btn-danger" label="Danger">
					<MenuItem>Hey! Click me!</MenuItem>
					<MenuItem>And me!!!</MenuItem>
				</Dropdown>

				{/* InputGroup */}
				<h1 className="page-header">Input Groups</h1>
				<InputGroup>
					<InputGroupAddon>@</InputGroupAddon>
					<input type="text" className="form-control"/>
					<InputGroupAddon>#</InputGroupAddon>
				</InputGroup>
				<br/>
				<InputGroup>
					<InputGroupAddon>
						<input type="checkbox"/>
					</InputGroupAddon>
					<input type="text" className="form-control"/>
				</InputGroup>
				<br/>
				<InputGroup>
					<InputGroupAddon>
						<input type="radio"/>
					</InputGroupAddon>
					<input type="text" className="form-control"/>
				</InputGroup>
				<br/>
				<InputGroup>
					<InputGroupButton>
						<Button className="btn-info">Search!</Button>
					</InputGroupButton>
					<input type="text" className="form-control"/>
				</InputGroup>

			</div>
			<br/>
		</div>
		);
	}
});
React.renderComponent(
	<Demo />,
	document.querySelector('.page')
);