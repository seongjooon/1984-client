import { getRandomNumber } from '../utils';

const isMobileDvice = window.innerHeight < 460 || window.innerHeight < 600;

export const SERVER_API = isMobileDvice
  ? 'http://192.168.0.68:4000'
  : 'http://localhost:4000';

export const SERVER_URL = isMobileDvice
  ? 'http://192.168.0.68:5000'
  : 'http://localhost:5000';

export const FALLING_OBSTACLE = 3;

export const OBSTACLE_LIST = [];

for (let i = 0; i < 10; i++) {
  const initialObstacleSize = getRandomNumber(30);
  const sampleObstacle = {
    color: 'green',
    x: 1,
    y: -1,
    width: initialObstacleSize / 2,
    height: initialObstacleSize / 2
  };
  sampleObstacle.x *= getRandomNumber(82);
  sampleObstacle.y *= getRandomNumber(82);

  OBSTACLE_LIST.push(sampleObstacle);
}
