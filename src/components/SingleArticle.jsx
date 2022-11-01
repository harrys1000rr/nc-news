import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById,changeVotes  } from "../api";



export const SingleArticle = () => {
  const [Article, setArticle] = useState({});
  const { article_id } = useParams();
  const [currentVotes, setCurrentVotes] = useState(0);

  useEffect(() => {
    getArticleById(article_id).then(({ data }) => {
      setArticle(data.article);
    });
  }, [article_id]);

  const handleVotes = (article_id, vote) => {
    setCurrentVotes((currentVotes) => currentVotes + vote.inc_votes);
    changeVotes(article_id, vote).catch((err) => {
      setCurrentVotes((currentVotes) => currentVotes - vote.inc_votes);
   
    });
  };

  return (
    <>
    <div>
      <section className="single-article-card">
        <p className="single-article-topic">Topic | {Article.topic}</p>
        <h2 className="single-article-title">{Article.title}</h2>
        <p className="single-article-body">{Article.body}</p>
        <section className="single-article-date-author">
        <p>Published:{new Date(Article.created_at).toLocaleDateString('en-GB')}</p>
          <p>By {Article.author}</p>
        </section>
      </section>
    </div>
    <div>
            <p>Votes: {Article.votes + currentVotes}</p>
            <button
              onClick={() => {
                handleVotes(article_id, { inc_votes: 1 });
              }}
            >
              Like! 👍 
            </button>
            </div>

    </>
    
  );
};