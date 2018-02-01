'use strict';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from '../../lib/component/listItem';

import './index.css';

class PageCon extends React.Component{
	render(){
		return (
			<div>
				<ListItem />
				<div className="abc">2222</div>
			</div>
		)
	}
}

ReactDOM.render(<PageCon />,document.getElementById('root'));