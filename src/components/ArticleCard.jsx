import React from "react";
import { Link } from "react-router-dom";

export const ArticleCard = ({
  article_id,
  author,
  comment_count,
  created_at,
  title,
  votes,
}) => {
  return (
    <article className="article-card">
      <Link to={`/${article_id}`}>
        <h2 className="article-card-title">{title}</h2>
        <section className="card-info">
        <p className="article-card-date">{created_at}</p>
        <p className="article-card-author">By: {author}</p>
          <div>
          💬
            {comment_count}
          </div>
          <div>
          ❤ {votes}
          </div>
        </section>
      </Link>
    </article>
  );
};


