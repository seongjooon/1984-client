import axios from 'axios';

axios.defaults.withCredentials = true;

export const createUserAPI = userData => {
  return axios
    .post('http://localhost:4000/users/signup', userData)
    .then(res => res)
    .catch(err => console.log(err));
};

export const signinUserAPI = userData => {
  return axios
    .post('http://localhost:4000/users/signin', userData)
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const signoutUserAPI = userData => {
  return axios
    .get('http://localhost:4000/users/signout')
    .then(res => res)
    .catch(err => console.log(err));
};
