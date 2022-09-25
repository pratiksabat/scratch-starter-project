import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ReactDOM from 'react-dom';
import 'tailwindcss/tailwind.css';
import MyTab from './components/MyTab';
import Navbar from './components/Navbar';

console.log('hi');

ReactDOM.render(
	<DndProvider backend={HTML5Backend}>
		{/* <App /> */}
		<Navbar />
		<MyTab />
	</DndProvider>,
	document.getElementById('root')
);
