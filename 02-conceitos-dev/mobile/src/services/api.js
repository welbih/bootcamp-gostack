import axios from 'axios';

const api = axios.create({
  baseURL:'http://localhost:3333',
});

export default api;

/**
 * Android com emulador: (localhost) adb reverse tcp:3333 tcp:3333
 * Android com emulador: 10.0.2.2 (Android Studio)
 */