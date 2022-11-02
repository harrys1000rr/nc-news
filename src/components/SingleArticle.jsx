import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import {Navigate} from 'react-router-dom';
import { getArticleById,changeVotes  } from "../api";
import { Comments } from "./Comments";
import Loading from './Loading';



export const SingleArticle = () => {
  const [Article, setArticle] = useState({});
  const { article_id } = useParams();
  const [currentVotes, setCurrentVotes] = useState(0);
  const [disableVote, setDisableVote] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id)
    .then(({ data }) => {
      setArticle(data.article);
      setIsLoading(false);
    })
    .catch((error) => {
      setError(true);
    });
}, [article_id]);

  const handleVotes = (article_id, vote) => {
    setCurrentVotes((currentVotes) => currentVotes + vote.inc_votes);
    setDisableVote(true)
    changeVotes(article_id, vote)
   .then(setError(false))
   .catch(() => {
      setCurrentVotes((currentVotes) => currentVotes - vote.inc_votes);
      setError(true);
    });
  };
 
  if (error) return <Navigate to='/404' />;
  if (isLoading) return <Loading />;
  return (
    <>
    <div>
      <section className="single-article-card">
        <p className="single-article-topic">Topic | {Article.topic}</p>
        <h2 className="single-article-title">{Article.title}</h2>
        <p className="single-article-body">{Article.body}</p>
        <section className="single-article-date-author">
        <p>Published: {new Date(Article.created_at).toLocaleDateString('en-GB')}</p>
          <p>By: {Article.author}</p>
        </section>
      </section>
    </div>
    <div>
            <p className="votes">Likes: {Article.votes + currentVotes}</p>
            <button className="like-button" disabled={disableVote} onClick={() => {handleVotes(article_id, { inc_votes: 1 });
              }}
            >
             LIKE
            </button>
            {error && <p>Something went wrong, please try again.</p>}

          <Comments article_id={article_id} />
            </div>
            

    </>
    
  );
};

