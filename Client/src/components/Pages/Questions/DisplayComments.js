import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
function DisplayComments({ question }) {
  return (
    <div>
      {question?.comment?.map((comment) => (
        <div className="display-comments" key={comment._id}>
          <div>
            <p>{comment.commentBody}</p>
          </div>
          <div className="comment-info">
            <Link
              to={`/Users/${comment?.userId}`}
              className="user-link"
              style={{ color: "#0086d8" }}>
              <div>{comment.userCommented}</div>
            </Link>
            <p className="user-commented"></p>
            <p>- {moment(comment.commentedOn).fromNow()}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayComments;
