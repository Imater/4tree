import { handleActions } from 'redux-actions';

const initialState = {
  icons: [
    { name: 'map' },
    { name: 'flag' },
    { name: 'beer' },
    { name: 'bed' },
    { name: 'bicycle' },
    { name: 'bomb' },
    { name: 'bug' },
    { name: 'cab' },
    { name: 'blind' },
    { name: 'bus' },
    { name: 'globe' },
    { name: 'heart' },
    { name: 'map' },
    { name: 'flag' },
    { name: 'beer' },
    { name: 'bed' },
    { name: 'bicycle' },
    { name: 'bomb' },
    { name: 'bug' },
    { name: 'cab' },
    { name: 'blind' },
    { name: 'bus' },
    { name: 'globe' },
    { name: 'heart' },
    { name: 'car' }
  ]
};

const iconsStore = handleActions({
}, initialState);

export default iconsStore;
