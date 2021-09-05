import data from './data.json';

export const fetchAll = () => new Promise((res) => {
  setTimeout(() => {
    res(data);
  }, 2000);
});

export const fetchById = (postId) => new Promise((res) => {
  setTimeout(() => {
    const post = data.find(({ id }) => id === postId);

    res(post);
  }, 2000);
});
