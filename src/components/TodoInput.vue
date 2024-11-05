<template>
  <form class="input-form" @submit.prevent="handleAddTodo">
    <input
      type="text"
      class="text-input"
      placeholder="Let's get it done!"
      v-model="newTodoDescription"
    />

    <textarea
      class="text-input mt-1"
      placeholder="Tell a bit more about it!"
      v-model="newTodoDetails"
      rows="3"
    ></textarea>

    <label for="priority">Priority</label>
    <select id="priority" v-model="newTodoPriority" class="text-input mt-1">
      <option value="normal">Normal</option>
      <option value="high">High</option>
      <option value="low">Low</option>
    </select>

    <label for="deadline">Deadline</label>
    <input
      type="date"
      id="deadline"
      class="text-input"
      v-model="newTodoDeadline"
    />

    <button type="submit" class="add-btn">Add</button>
  </form>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useTodoStore } from '@/store/store';

export default {
  name: "TodoInput",
  setup() {
    const store = useTodoStore();

    onMounted(async () => {
      await store.fetchTodos();
    });

    const newTodoDescription = computed({
      get: () => store.newTodoDescription,
      set: (value) => (store.newTodoDescription = value),
    });
    const newTodoDetails = computed({
      get: () => store.newTodoDetails,
      set: (value) => (store.newTodoDetails = value),
    });
    const newTodoPriority = computed({
      get: () => store.newTodoPriority,
      set: (value) => (store.newTodoPriority = value),
    });
    const newTodoDeadline = computed({
      get: () => store.newTodoDeadline,
      set: (value) => (store.newTodoDeadline = value),
    });

    const handleAddTodo = async () => {
      await store.addTodo();
    };

    return {
      newTodoDescription,
      newTodoDetails,
      newTodoPriority,
      newTodoDeadline,
      handleAddTodo,
    };
  },
};
</script>

<style scoped>
.input-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-block: calc(1rem + 1vw);
  padding-inline: calc(0.5rem + 1vw);
}

.text-input {
  border: none;
  border-radius: 0.5rem;
  background-color: var(--clr-white);
  padding: calc(0.125rem + 1vw) calc(0.375rem + 3vw);
  font-size: calc(1rem + 2vw);
  font-weight: bold;
  width: calc(20rem + 2vw);
  cursor: pointer;
}

.text-input:focus {
  outline: 0.125rem solid var(--clr-orange);
  outline-offset: 0.125rem;
}

.add-btn {
  margin-top: 1rem;
  color: var(--clr-white);
  background-color: var(--clr-blue);
  box-shadow: calc(0.125rem + 0.5vw) calc(0.125rem + 0.5vw) var(--clr-red);
  border: none;
  border-radius: 0.5rem;
  padding: calc(0.125rem + 1vw) calc(0.375rem + 3vw);
  font-size: calc(1rem + 2vw);
}

select {
  margin-top: 0;
}

label {
  margin-top: 1.5rem;
}
</style>
