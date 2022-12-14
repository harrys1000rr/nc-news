import axios from 'axios';

const ncEndpoint = axios.create({
  baseURL: "https://news-app-harrys1000rr.herokuapp.com/api",
});


export const fetchArticles = (slug, sortBy, order) => {
  return ncEndpoint.get("/articles", {
    params: { topic: slug, sort_by: sortBy, order: order },
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


export const getCommentsByArticleId = (article_id) => {
  return ncEndpoint.get(`/articles/${article_id}/comments`);
};

export const deleteCommentByCommentId = (comment_id) => {
  return ncEndpoint.delete(`comments/${comment_id}`);
};

export const postCommentByArticleId = (articleID, newComment) => {
  return ncEndpoint.post(`/articles/${articleID}/comments`, newComment
  );
};

