import Vue from 'vue';
import VueRouter from 'vue-router';
import TodoList from '../components/TodoList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  }
];

const router = new VueRouter({
  routes
});

export default router;