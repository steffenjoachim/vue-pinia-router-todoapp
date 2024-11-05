import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [],
    filter: "all",
    newTodoDescription: "",  
    newTodoDetails: "",       
    newTodoPriority: "normal", 
    newTodoDeadline: "",      
  }),
  actions: {
    async fetchTodos() {
      try {
        const response = await fetch("http://localhost:3010/todos/");
        if (response.ok) {
          this.todos = await response.json();
        } else {
          console.error("Error fetching todos:", response.statusText);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    },

    setFilter(newFilter) {
      this.filter = newFilter;
    },

    async removeDoneTodos() {
      const doneTodos = this.todos.filter(todo => todo.done);
      for (const todo of doneTodos) {
        try {
          await fetch(`http://localhost:3010/todos/${todo.id}`, {
            method: "DELETE",
          });
        } catch (error) {
          console.error("Error removing todo:", error);
        }
      }
      this.todos = this.todos.filter(todo => !todo.done);
    },

    async updateTodoStatus(todo) {
      try {
        await fetch(`http://localhost:3010/todos/${todo.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ done: todo.done }),
        });
      } catch (error) {
        console.error("Error updating todo status:", error);
      }
    },

    async addTodo() {
      const newTodo = {
        description: this.newTodoDescription,
        details: this.newTodoDetails,
        priority: this.newTodoPriority,
        deadline: this.newTodoDeadline,
        done: false, 
      };

      try {
        const response = await fetch("http://localhost:3010/todos/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        });

        if (response.ok) {
          const addedTodo = await response.json();
          this.todos.push(addedTodo); 
          this.newTodoDescription = "";
          this.newTodoDetails = "";
          this.newTodoPriority = "normal"; 
          this.newTodoDeadline = "";
        } else {
          console.error("Error adding todo:", response.statusText);
        }
      } catch (error) {
        console.error("Error adding todo:", error);
      }
    },
  },
  getters: {
    filteredTodos(state) {
      if (state.filter === "all") {
        return state.todos;
      } else if (state.filter === "open") {
        return state.todos.filter(todo => !todo.done);
      } else if (state.filter === "done") {
        return state.todos.filter(todo => todo.done);
      }
      return [];
    },
  },
});
