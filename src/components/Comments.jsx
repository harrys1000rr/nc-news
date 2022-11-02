import { React, useEffect, useState } from "react";
import { getCommentsByArticleId } from "../api";
import { CommentCard } from "./CommentCard";


export const Comments = ({ article_id }) => {
  
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then(({ data }) => {
      setComments(data.comments.reverse());
    });
  }, [article_id]);

  return (
    <section>
      <h2 className="comment-title">Comments</h2>
      {comments.map((comment) => {
        return (
          <CommentCard
            comments={comments}
            setComments={setComments}
            comment={comment}
            key={comment.comment_id}
          />
        );
      })}
    </section>
  );
};