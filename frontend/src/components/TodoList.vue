<template>
  <div>
    <h2 class="text-3xl font-bold text-dark mb-6">Calendário Inteligente</h2>
    <AddTodo @todo-added="fetchTodos" ref="addTodoComponent"/>
  <br>
    <div v-for="todo in sortedTodos" :key="todo._id" :class="['shadow-md rounded-lg p-4 mb-4', { 'bg-accent': todo.completed, 'bg-secondary': !todo.completed }]">
      <TodoItem :todo="todo" @update="fetchTodos" @edit="editTodo"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TodoItem from './TodoItem.vue';
import AddTodo from './AddTodo.vue';
import { differenceInDays, parseISO } from 'date-fns';

export default {
  components: {
    TodoItem,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  created() {
    this.fetchTodos();
  },
  computed: {
    sortedTodos() {
      return this.todos.slice().sort((a, b) => {
        const now = new Date();
        const aDueDate = parseISO(a.dueDate);
        const bDueDate = parseISO(b.dueDate);

        const aDifference = differenceInDays(aDueDate, now);
        const bDifference = differenceInDays(bDueDate, now);

        // Tarefas expiradas têm diferença negativa, então ordenamos de forma que
        // a tarefa com a maior diferença negativa (mais atrasada) venha primeiro
        if (aDifference < 0 && bDifference < 0) {
          return aDifference - bDifference;
        } else if (aDifference < 0) {
          return -1;
        } else if (bDifference < 0) {
          return 1;
        } else {
          return aDifference - bDifference;
        }
      });
    }
  },
  methods: {
    async fetchTodos() {
      try {
        const response = await axios.get('http://localhost:5000/api/todos');
        this.todos = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    editTodo(todo) {
      this.$refs.addTodoComponent.editTodo(todo);
    }
  }
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
