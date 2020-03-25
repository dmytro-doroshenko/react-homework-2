import React, {Component} from "react";
import './CommentListItem.scss';

const CN = 'comment';

export class CommentListItem extends Component {

    render() {

        const {item} = this.props;
        const comment = item;

        return (
            <div className={`${CN}__comment`} key={comment.id}>
                <div className={`${CN}__comment__author`}>{comment.name}</div>
                <div className={`${CN}__comment__text`}>{comment.body}</div>
            </div>
        )
    }
}