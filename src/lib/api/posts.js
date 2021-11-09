import qs from 'qs';
import client from './client';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

export const readPost = id => client.get(`/api/posts/${id}`);

export const listPosts = ({ page, tag }) => {
  console.log("page   " + page + "    tag    "+ tag);
  const queryString = qs.stringify({
    page,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};