import React from 'react';

class Map extends React.Component {
	render() {
		return (
			<div className="main-map">
				<h1> Hello, {this.props.name}.</h1>
				<ul>
					<li><h3>Bullet 1</h3></li>
					<li>Bullet 2</li>
				</ul>
			</div>
		);
	}
}

export default Map;