import React from 'react';

export default class Comment extends React.Component{
	render(){
		return (
			<div className="comment">
				<h3 className="commentAuthor">
				{this.props.author}
				</h3>
				{this.props.children}
			</div>
			);
	}
}

/*var Comment = React.createClass({
	render: function(){
		return (
			<div className="comment">
				<h2 className="commentAuthor">
				{this.props.author}
				</h2>
				{this.props.children}
			</div>
			);
	}
});*/