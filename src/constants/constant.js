const isMobileDvice = window.innerHeight < 460 || window.innerHeight < 600;

export const SERVER_API = isMobileDvice
  ? 'http://192.168.0.68:4000'
  : 'http://localhost:4000';

export const SERVER_URL = isMobileDvice
  ? 'http://192.168.0.68:5000'
  : 'http://localhost:5000';

export const FALLING_OBSTACLE = 4;
