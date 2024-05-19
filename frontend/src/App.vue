<template>
  <div id="app">
    <h1>Calendário Inteligente</h1>
    <TodoList />
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
/* Adicione os estilos aqui */
</style>
