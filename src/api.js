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


export const changeVotes = (article_id, voteChange) => {
  return ncEndpoint.patch(`/articles/${article_id}`,voteChange );
};
