const axios = require("axios");

export const fetchArticles = (filter) => {
  return axios
    .get(`https://nc-news-bb.herokuapp.com/api/articles?${filter}`)
    .then((res) => {
      return res.data;
    });
};


