import { WAIT_DEVICE } from '../constants/actioncTypes';

export const connectingDevice = hasDevice => ({
  type: WAIT_DEVICE,
  hasDevice
});
