import { React, useEffect, useState} from "react";
import { getCommentsByArticleId } from "../api";
import { CommentCard } from "./CommentCard";
import {Navigate} from 'react-router-dom';
import Loading from './Loading';
import CommentForm from './CommentForm';

export const Comments = ({ article_id }) => {
  
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);


  useEffect(() => {
    getCommentsByArticleId(article_id)
    .then(({ data }) => {
      setComments(data.comments.reverse());
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsError(true);
    });
}, [article_id]);

if (isError) return <Navigate to='/404' />;
  if (isLoading) return <Loading />;
  return (
    <section>
    <CommentForm article_id={article_id} setComments={setComments} />
      <h2 className="comment-title">Comments ({comments.length})</h2>
      {comments.map((comment) => {
        return (
           <CommentCard
            key={comment.comment_id}
            comments={comments}
            setComments={setComments}
            comment={comment}
        
          />
        );
      })}
    </section>
  );
};