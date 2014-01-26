/**
 * @jsx React.DOM
 */
var Demo = React.createClass({
	render: function() {
		return (
			<div className="Demo">

				{/* Glyph */}
				<Glyph icon="user"/>
				<Glyph icon="search"/>
				<Glyph icon="list"/>

				{/* Dropdown */}
				<Dropdown label="My Dropdown">
					<MenuItem className="dropdown-header">My Header</MenuItem>
					<MenuItem className="disabled">I am disabled</MenuItem>
					<MenuItem className="divider" />
					<MenuItem className="dropdown-header">My Other Header</MenuItem>
					<MenuItem>Hey! Click me!</MenuItem>
				</Dropdown>

			</div>
		);
	}
});
React.renderComponent(
	<Demo />,
	document.querySelector('.container')
);