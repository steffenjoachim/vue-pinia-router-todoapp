<template>
  <article class="todos-list-container">
    <h2>Your Todos</h2>
    <ul class="todos-container">
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
        class="todo-card"
        tabindex="0"
      >
        <input
          type="checkbox"
          :name="todo.id"
          :id="todo.id"
          v-model="todo.done"
          @change="updateTodoStatus(todo)"
        />
        <label
          class="todo-description"
          :class="{ 'done-todo': todo.done }"
          :for="todo.id"
        >
          {{ todo.description }}
        </label>
        <p class="details-text" @click="goToDetail(todo.id)">See Details</p>
      </li>
    </ul>
  </article>
</template>

<script>
import { onMounted, computed } from "vue";
import { useTodoStore } from "@/store/store.js";
import { useRouter } from 'vue-router';

export default {
  name: "TodoList",
  setup() {
    const store = useTodoStore();
    const router = useRouter();

    onMounted(async () => {
      await store.fetchTodos();
    });

    const filteredTodos = computed(() => store.filteredTodos);

    const goToDetail = (id) => {
      router.push(`/todo/${id}`); 
    };

    return {
      filteredTodos,
      updateTodoStatus: store.updateTodoStatus,
      goToDetail,
    };
  },
};
</script>

<style scoped>
.todos-list-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: calc(2rem + 2vw);
}

.todos-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  margin-inline: auto;
}

.todo-card {
  display: flex;
  align-items: center;

  padding: calc(0.25rem + 1vw) calc(0.75rem + 1vw);
  width: calc(20rem + 3vw);
  background-color: var(--clr-white);
  border-radius: 0.5rem;
}

.todo-card:focus {
  outline: calc(0.125rem + 0.5vw) solid var(--clr-orange);
  box-shadow: calc(0.25rem + 1vw) calc(0.25rem + 1vw) var(--clr-red);
}

.todo-card + .todo-card {
  margin-top: calc(0.5rem + 1vw);
}

.todo-description {
  margin-left: calc(1rem + 1vw);
  margin-top: 0.125rem;
}

input[type="checkbox"] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--clr-black);
  border-radius: 4px;
  position: relative;
  cursor: pointer;
  background-color: white;
}

input[type="checkbox"]:checked {
  background-color: var(--clr-green);
}

input[type="checkbox"]:checked::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 6px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.done-todo {
  text-decoration: line-through;
  color: var(--clr-gray);
}

.details-text {
  margin-left: auto; 
  margin-right: 1rem; 
  font-weight: bold; 
  cursor: pointer;
}

</style>
