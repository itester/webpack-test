/*
var React = require('react');

var CommentBox = React.createClass({
	render: function() {
		return (
			<div className="commentBox">I am a CommentBox. </div>
		);
	}
});
*/
import React from 'react';

export default class CommentBox extends React.Component {
	render() {
		return (<div className="commentBox">I am a CommentBox. </div>);
	}
}