import React, {Component} from "react";
import { connect } from "react-redux";

class CommentList extends Component{

    renderComment = () =>
        this.props.comments.map(comment =>
            <li key={comment}>{comment}</li>
        );

    render() {
        return (
            <div>
                <h4>Comment List</h4>
                <ul>{this.renderComment()}</ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ comments: state.comments });

export default connect(mapStateToProps)(CommentList);
