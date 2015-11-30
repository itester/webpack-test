import $ from 'jquery';
import React from 'react';
import CommentList from './tutorial2.js';
import CommentForm from './tutorial3.js';
export default class CommentBox extends React.Component {
	/*
	getInitialState(){
		return {data: []};
	};
	*/
	loadCommentsFromServer(){
		var url = this.props.url;
		$.ajax({
			url: url,
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({data: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	};
	constructor(props){
		super(props);
		this.state = {data: []};
	};
	componentDidMount(){
		this.loadCommentsFromServer();
		setInterval(function(){this.loadCommentsFromServer();}.bind(this), this.props.pollInterval);
	};
	handleCommentSubmit(comment){
		debugger;
		//TODO update
	};
	render() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={function(comment){this.handleCommentSubmit(comment);}.bind(this)} />
			</div>
			);
	};
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