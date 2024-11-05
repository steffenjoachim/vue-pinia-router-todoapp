<template>
  <div class="overlay" @click="closeDetails">
    <div class="details-card" @click.stop>
      <h2 v-if="todo">Todo Details:</h2>
      <h3 class="mb-1" v-if="todo"><strong>Description:</strong> {{ todo.description }}</h3>
      <p v-if="todo"><strong>Details:</strong> {{ todo.details }}</p>
      <p v-if="todo"><strong>Priority:</strong> {{ todo.priority }}</p>
      <p v-if="todo"><strong>Deadline:</strong> {{ todo.deadline }}</p>
      
      <div class="button-container">
        <button class="close-button" @click="closeDetails">Close</button>
      </div>

      <p v-if="loading">Loading...</p> 
      <p v-if="!loading && !todo">Todo not found.</p> 
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTodoStore } from "@/store/store.js";

export default {
  name: "DetailView",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useTodoStore();
    const todo = ref(null);
    const loading = ref(true);

    const closeDetails = () => {
      router.push('/');
    };

    const loadTodo = async () => {
      const todoId = parseInt(route.params.id);

      if (!store.todos.length) {
        await store.fetchTodos(); 
      }

      todo.value = store.todos.find(t => t.id === todoId);
      loading.value = false;
    };

    onMounted(() => {
      loadTodo();
    });

    return {
      todo,
      loading,
      closeDetails,
    };
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; 
}

.details-card {
  background-color: white;
  padding: 2rem;
  border-radius: 0.5rem;
  width: 80%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column; 
}

.button-container {
  display: flex; 
  justify-content: flex-end; 
  margin-top: auto; 
}

.close-button {
  margin-left: auto; 
  margin-right: 1rem; 
}
</style>
