import { React, useState, useContext } from "react";
import { deleteCommentByCommentId } from "../api";
import { UserContext } from "./UserContexts";

export const CommentCard = ({ comments, setComments, comment }) => {
  const [deleteButtonDisabled, setDeleteButtonDisabled] = useState(false);
  const { username } = useContext(UserContext);

  const handleDelete = (comment_id) => {
    setDeleteButtonDisabled(true);
    setComments(comments.filter((currentComment) => {
        return currentComment.comment_id !== comment_id;
        
      })
    );

    
    deleteCommentByCommentId(comment_id)
      .then(() => {setDeleteButtonDisabled(false);
      })
      .catch(() => {
        setDeleteButtonDisabled(false);
        alert("something has gone wrong.");
      });
  };
  return (
    <section className="comment" key={comments.comment_id}>
      <p className="comment-body">{comment.body} </p>
      <div className="comment-bar">
        <p className="comment-votes"> {comment.votes}  ❤</p>
        <p className="comment-info">
          by {comment.author} at {new Date(comment.created_at).toLocaleDateString('en-GB')}
        </p>
      </div>

      {username === comment.author && (
      <div className="delete-row"><button
            className="comment-delete-button"
            onClick={() => {
              handleDelete(comment.comment_id);
            }}
            disabled={deleteButtonDisabled}
          >Delete
          </button>
        </div>
      )}
    </section>
  );
};