import React from 'react';
import Comment from './tutorial4.js';

export default class CommentList extends React.Component {
	render(){
		return (
			<div className="commentList">
				<Comment author="Pete Hunt">This is one comment</Comment>
				<Comment author="Jordan Walke">This is another comment</Comment>
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