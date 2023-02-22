import axios from 'axios';

const token = 'f67b534286db618a7a2a4461de590d5383c13d401a6e45a72c9ce923406bbb3a';

export const loadUserApi = async (page: any, perPage: any) =>
  await axios.get(`https://gorest.co.in/public/v2/users?page=${page}&per_page=${perPage}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const createUserApi = async (user: any) =>
  await axios.post('https://gorest.co.in/public/v2/users', user, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const editUserApi = async (userId: any, userInfo: any) =>
  await axios.put(`https://gorest.co.in/public/v2/users/${userId}`, userInfo, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

export const deleteUserApi = async (userId: any) =>
  await axios.delete(`https://gorest.co.in/public/v2/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
