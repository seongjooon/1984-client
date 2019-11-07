import axios from 'axios';
import { SERVER_API } from '../constants/constant';

axios.defaults.withCredentials = true;

export const createUserAPI = userData => {
  return axios
    .post(SERVER_API + '/users/signup', userData)
    .then(res => res)
    .catch(err => console.log(err));
};

export const signinUserAPI = userData => {
  return axios
    .post(SERVER_API + '/users/signin', userData)
    .then(res => res.data)
    .catch(err => console.log(err));
};

export const signoutUserAPI = userData => {
  return axios
    .get(SERVER_API + '/users/signout')
    .then(res => res)
    .catch(err => console.log(err));
};
