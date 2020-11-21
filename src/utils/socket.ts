import io from 'socket.io-client';
import { BACKEND } from './config';

const socket = io(BACKEND);
// const socket = io(SERVER || 'http://localhost:9999');

export default socket;
