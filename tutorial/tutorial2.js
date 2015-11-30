import React from 'react';
import Comment from './tutorial4.js';

export default class CommentList extends React.Component {
	render(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author} key={comment.id}>
				{comment.text}
				</Comment>
				);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
			);
	}
}


/*
var CommentList = React.createClass({
	render: function(){
		return (
			<div className="commentList">
			Hello, world! I am a CommentList.
			</div>
			);
	}
});
*/