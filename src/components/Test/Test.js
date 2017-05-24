import React, { Component } from 'react';
import Layout from '../Layout/Layout';
import Collapse from '../Collapse/Collapse';

export default
class Test extends Component{
	
	render() {
		return(
			<Layout title="Collapse component">
				<div>
					<p>Example 1</p>
					<Collapse 
						title="Collapse">
						<div>
							<p>Collapse content...</p>
						</div>
					</Collapse>		
					<p>Examle 2</p>
					<Collapse 
						title="Collapse"
						maxHeight={600}
						open={true}>
						<div>
							<p>Collapse content...</p>
							<p>Collapse content...</p>
							<p>Collapse content...</p>
							<p>Collapse content...</p>
							<p>Collapse content...</p>
							<p>Collapse content...</p>
							<p>Collapse content...</p>
					</div>
				</Collapse>	
				</div>
			</Layout>
		);
	}
}