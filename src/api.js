const axios = require("axios");

const ncEndpoint = axios.create({
  baseURL: "https://news-app-harrys1000rr.herokuapp.com/api",
});

export const fetchArticles = (slug) => {
  return ncEndpoint.get("/articles", {
    params: { topic: slug },
  });
};
 
export const getTopics = () => {
  return ncEndpoint.get("/topics");
};

export const getArticleById = (article_id) => {
  return ncEndpoint.get(`/articles/${article_id}`);
};