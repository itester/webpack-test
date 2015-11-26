import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';
import CommentBox from './commentbox.jsx';

function main() {
	ReactDOM.render(<Hello />, document.getElementById('app'));
	ReactDOM.render(<CommentBox />, document.getElementById('content'));
}

$(document).ready(function(){
	main();
});
