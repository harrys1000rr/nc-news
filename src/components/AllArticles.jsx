import axios from "axios";
import { useEffect,useState } from "react";
import "../App.css";


const AllArticles = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
      axios
        .get(
          "https://nc-news-bb.herokuapp.com/api/articles"
        )
        .then(({ data }) => {
          setArticles(data.articles);
        });
    }, []);
    return (
  
           
        articles.map((article) => {
              return (
                 <div key={article.article_id} className="article">
              <h5>{article.title}</h5>
              <p>Topic: {article.topic}</p>
              <p>Author: {article.author}</p>
              <p>Created at: {new Date(article.created_at).toUTCString()}</p>
              <p>Votes: {article.votes}</p>
            </div>
          )}
              
      
        ))
  };

  export default AllArticles