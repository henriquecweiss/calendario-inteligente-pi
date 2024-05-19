// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';
import { createVfm } from 'vue-final-modal';

const app = createApp(App);

const vfm = createVfm();
app.use(vfm);

app.mount('#app');
