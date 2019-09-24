import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-news-ranasinghe.herokuapp.com/api/"
});

export const getArticles = async (topic, sort_by) => {
  const { data } = await request.get("/articles", {
    params: { topic: topic, sort_by: sort_by }
  });
  return data.articles;
};

export const getArticle = async article_id => {
  const { data } = await request.get(`/articles/${article_id}`);
  return data.article;
};

export const getArticlesComments = async article_id => {
  const { data } = await request.get(`/articles/${article_id}/comments`);
  return data.comments;
};

export const articleVote = async (article_id, voteValue) => {
  await request.patch(`/articles/${article_id}`, {
    inc_votes: voteValue
  });
};

export const commentVote = async (comment_id, voteValue) => {
  await request.patch(`/comments/${comment_id}`, {
    inc_votes: voteValue
  });
};

export const getUsers = async () => {
  const { data } = await request.get("/users/");
  return data.users;
};

export const postComment = async (article_id, username, body) => {
  await request.post(`/articles/${article_id}/comments`, {
    username,
    body
  });
};

export const deleteComment = async comment_id => {
  await request.delete(`/comments/${comment_id}`);
};
