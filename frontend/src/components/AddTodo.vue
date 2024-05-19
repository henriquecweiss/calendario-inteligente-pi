<template>
  <div>
    <button @click="openModal" class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
      Nova tarefa
    </button>
    <CustomModal :visible="showModal" @close="closeModal">
      <div class="bg-white shadow-md rounded-lg p-6">
        <h2 class="text-2xl font-bold text-primary mb-4">{{ isEditing ? 'Editar Tarefa' : 'Adicionar Tarefa' }}</h2>
        <form @submit.prevent="submitTodo">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="title">Title:</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="title" id="title" required>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="description">Description:</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" v-model="description" id="description">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="dueDate">Due Date:</label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" v-model="dueDate" id="dueDate">
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="emoji">Emoji:</label>
            <select v-model="emoji" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              <option value="📅">📅 Calendar</option>
              <option value="🏋️">🏋️ Exercise</option>
              <option value="💼">💼 Work</option>
              <option value="📚">📚 Study</option>
              <option value="🛠️">🛠️ Chores</option>
              <option value="🛒">🛒 Shopping</option>
            </select>
          </div>
          <div class="flex items-center justify-between">
            <button class="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">{{ isEditing ? 'Save Changes' : 'Add Task' }}</button>
            <button @click="closeModal" class="ml-4 bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Cancel</button>
          </div>
        </form>
      </div>
    </CustomModal>
  </div>
</template>

<script>
import axios from 'axios';
import CustomModal from './CustomModal.vue';

export default {
  components: {
    CustomModal
  },
  data() {
    return {
      title: '',
      description: '',
      dueDate: '',
      emoji: '📅',  // Default emoji
      showModal: false,
      isEditing: false,
      editingTodoId: null
    };
  },
  methods: {
    openModal() {
      this.resetForm();
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    resetForm() {
      this.title = '';
      this.description = '';
      this.dueDate = '';
      this.emoji = '📅';
      this.isEditing = false;
      this.editingTodoId = null;
    },
    async submitTodo() {
      if (this.isEditing) {
        await this.updateTodo();
      } else {
        await this.addTodo();
      }
    },
    async addTodo() {
      try {
        const newTodo = {
          title: this.title,
          description: this.description,
          dueDate: this.dueDate,
          completed: false,
          emoji: this.emoji
        };
        await axios.post('http://localhost:5000/api/todos', newTodo);
        this.$emit('todo-added');
        this.closeModal();
      } catch (error) {
        console.error(error);
      }
    },
    async updateTodo() {
      try {
        const updatedTodo = {
          title: this.title,
          description: this.description,
          dueDate: this.dueDate,
          emoji: this.emoji
        };
        await axios.put(`http://localhost:5000/api/todos/${this.editingTodoId}`, updatedTodo);
        this.$emit('todo-added');
        this.closeModal();
      } catch (error) {
        console.error(error);
      }
    },
    editTodo(todo) {
      this.title = todo.title;
      this.description = todo.description;
      this.dueDate = todo.dueDate;
      this.emoji = todo.emoji;
      this.isEditing = true;
      this.editingTodoId = todo._id;
      this.showModal = true;
    }
  }
}
</script>

<style scoped>
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1001;
  width: 90%;
  max-width: 500px;
}
</style>
