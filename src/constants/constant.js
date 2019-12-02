import { getRandomNumber } from '../utils';
import Obstacle1 from './obstacle1.png';
import Obstacle2 from './obstacle2.png';

const array = [Obstacle1, Obstacle2];

const isMobileDvice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
);

export const SERVER_API = isMobileDvice
  ? 'http://192.168.0.37:4000'
  : 'http://localhost:4000';

export const SERVER_URL = isMobileDvice
  ? 'http://192.168.0.37:5000'
  : 'http://localhost:5000';

export const FALLING_OBSTACLE = 3;

export const OBSTACLE_LIST = [];

for (let i = 0; i < 10; i++) {
  const initialObstacleSize = getRandomNumber(30);
  const sampleObstacle = {
    src: array[i % 2],
    x: 1 * 30,
    y: -1* 30,
    width: (initialObstacleSize / 2) * 30,
    height: (initialObstacleSize / 2) * 30
  };
  sampleObstacle.x *= getRandomNumber(82);
  sampleObstacle.y *= getRandomNumber(82);

  OBSTACLE_LIST.push(sampleObstacle);
}
