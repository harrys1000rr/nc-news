import { useEffect,useState } from "react";
import {  useParams  } from "react-router-dom";
import {Navigate} from 'react-router-dom';
import { fetchArticles } from "../api.js";
import { ArticleCard } from "./ArticleCard";
import {Nav}  from "./Nav";
import Loading from './Loading';

import "../App.css";

const AllArticles = () => {

    const [articles, setArticles] = useState([]);
    const { slug } = useParams();
    const [order, setOrder] = useState("DESC");
    const [isLoading, setIsLoading] = useState(true);
    const [sortBy, setSortBy] = useState("created_at");
    const [isError, setIsError] = useState(false);
    
  
    useEffect(() => {
    fetchArticles(slug, sortBy, order)
    .then(({ data }) => {
    setArticles(data.allArticles)
      setIsLoading(false);
    })
      .catch((err) => {
        setIsError(true);
      });

    }, [slug, order, sortBy]);
   
      
    
    if (isError) return <Navigate to='/404' />;
    if (isLoading) return <Loading />;
    return (
      <>
       <Nav setSortBy={setSortBy} setOrder={setOrder} />
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