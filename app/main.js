import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.js';

function main(){
	ReactDOM.render(<Hello />, document.getElementById('app'));
}

main();