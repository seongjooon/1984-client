const isMobileDvice = window.innerHeight < 460 || window.innerHeight < 600;

export const SERVER_API = isMobileDvice
  ? 'http://192.168.0.51:4000'
  : 'http://localhost:4000';

export const SERVER_URL =
  window.innerHeight > 460
    ? 'http://localhost:5000'
    : 'http://192.168.0.51:5000';
