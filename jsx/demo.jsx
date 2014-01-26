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
				<Row>
					<h1>Buttons</h1>
					<Button>Click Me!</Button>
					<Button className="btn-danger">Danger</Button>
					<Button className="btn-success">Success</Button>
				</Row>

				{/* Button Group*/}
				<br/>
				<Row>
					<h1>Button Groups</h1>
					<ButtonGroup>
						<Button className="btn-default">Default</Button>
						<Button className="btn-danger">Danger</Button>
						<Button className="btn-success">Success</Button>
					</ButtonGroup>
				</Row>

				{/* Glyph */}
				<br/>
				<Row>
					<h1>Glyphicons</h1>
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
				</Row>

				{/* Dropdown */}
				<br/>
				<Row>
					<h1>Dropdowns</h1>
					<Dropdown label="My Dropdown">
						<MenuItem className="dropdown-header">My Header</MenuItem>
						<MenuItem className="disabled">I am disabled</MenuItem>
						<MenuItem className="divider" />
						<MenuItem className="dropdown-header">My Other Header</MenuItem>
						<MenuItem>Hey! Click me!</MenuItem>
					</Dropdown>
					<Dropdown className="btn-success" label="Success">
						<MenuItem>Hey! Click me!</MenuItem>
						<MenuItem>And me!!!</MenuItem>
					</Dropdown>
				</Row>

			</div>
		</div>
		);
	}
});
React.renderComponent(
	<Demo />,
	document.querySelector('.page')
);