import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './tutorial1.js';
/*
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var CommentBox = require('./tutorial1.js');
*/

/*
var data = [
	{id: 1, author: 'Pete Hunt', text: 'This is one comment'},
	{id: 2, author: 'Jordan Walke', text: 'This is anothor comment'}
];
*/

function main(){
	ReactDOM.render(<CommentBox url="/webpack-test/json.php" pollInterval={10000} />, document.getElementById('content'));
}

$(document).ready(function(){
	main();
});