<template>
  <div :class="['todo-item', { 'bg-accent': isCompleted, 'bg-secondary': !isCompleted }]">
    <h3 class="text-lg font-semibold text-dark">{{ todo.title }} <span>{{ todo.emoji }}</span></h3>
    <p class="text-gray-700">{{ todo.description }}</p>
    <p class="text-gray-500">{{ dueDateMessage }}</p>
    <button @click="toggleComplete" class="mt-2 bg-dark hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      {{ isCompleted ? 'Marcar como Incompleta' : 'Marcar como Completa' }}
    </button>
    <button @click="deleteTodo" class="mt-2 ml-2 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Deletar
    </button>
    <button @click="editTodo" class="mt-2 ml-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Editar
    </button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    todo: Object
  },
  data() {
    return {
      isCompleted: this.todo.completed
    };
  },
  computed: {
    dueDateMessage() {
      const dueDate = new Date(this.todo.dueDate);
      const now = new Date();
      const differenceInDays = Math.floor((dueDate - now) / (1000 * 60 * 60 * 24));
      if (differenceInDays < 0) {
        return 'Expira hoje!';
      } else if (differenceInDays < 1) {
        return `O prazo já expirou há ${-differenceInDays} dias!`;
      } else {
        return `Você tem ${differenceInDays} dias para completar esta tarefa.`;
      }
    }
  },
  methods: {
    async toggleComplete() {
      this.isCompleted = !this.isCompleted;
      try {
        await axios.put(`http://localhost:5000/api/todos/${this.todo._id}`, {
          completed: this.isCompleted
        });
        this.$emit('update');
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTodo() {
      try {
        await axios.delete(`http://localhost:5000/api/todos/${this.todo._id}`);
        this.$emit('update');
      } catch (error) {
        console.error(`Error deleting todo: ${error.message}`);
      }
    },
    editTodo() {
      this.$emit('edit', this.todo);
    }
  }
}
</script>

<style scoped>
/* Estilos adicionais se necessário */
</style>
