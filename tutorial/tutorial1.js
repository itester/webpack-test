import React from 'react';
import CommentList from './tutorial2.js';
import CommentForm from './tutorial3.js';
export default class CommentBox extends React.Component {
	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList />
				<CommentForm />
			</div>
			);
	}
}

/*
var React = require('react');

var CommentBox = React.createClass({
	render: function(){
		return (
			<div className="commentBox">
				<h1>Comments</h1>
			</div>
			);
	}
});*/