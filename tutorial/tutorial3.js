import React from 'react';

export default class CommentForm extends React.Component{
	constructor(){
		super();
		this.state = {author: '', text: ''};
	};
	handleAuthorChange(e){
		this.setState({author: e.target.value});
	};
	handleTextChange(e){
		this.setState({text: e.target.value});
	};
	handleSubmit(e){
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if(!text || !author){
			return;
		}
		this.props.onCommentSubmit({author: author, text: text});
		this.setState({author: '', text: ''});
	};
	render(){
		return (
			<div className="commentForm">
			<h1>Add a comment</h1>
			<form onSubmit={function(e){this.handleSubmit(e);}.bind(this)}>
				<input type="text" placeholder="Your name" value={this.state.author} onChange={function(e){this.handleAuthorChange(e);}.bind(this)} />
				<input type="text" placeholder="Say something..." value={this.state.text} onChange={function(e){this.handleTextChange(e);}.bind(this)} />
				<input type="submit" value="Post" />
			</form>
			</div>
			); 
	}
}

/*var CommentForm = React.createClass({
	render: function(){
		return (
			<div className="commentForm">
			Hello, world! I am a CommentForm.
			</div>
			); 
	}
});*/