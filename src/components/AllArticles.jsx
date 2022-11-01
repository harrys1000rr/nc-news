import { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticles } from "../api.js";

import { ArticleCard } from "./ArticleCard";

import "../App.css";

const AllArticles = () => {

    const [articles, setArticles] = useState([]);
    const { slug } = useParams();
  
    useEffect(() => {
      fetchArticles(slug).then(({ data }) => {
        setArticles(data.allArticles);
      });
    }, [slug]);
   
  
    return (

      <>
        <section className="all-articles">
          {articles.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                created_at={new Date(article.created_at).toLocaleDateString('en-GB')}
                article_id={article.article_id}
                topic={article.topic}
                votes={article.votes}
                author={article.author}
                comment_count={article.comment_count}
                title={article.title}
              />
            );
          })}
        </section>
      </>
    );


  };

  export default AllArticles