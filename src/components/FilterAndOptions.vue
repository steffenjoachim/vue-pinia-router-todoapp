<template>
  <form class="filter-and-options">
    <h2>Filter & Options</h2>

    <div>
      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          name="filter"
          id="all"
          value="all"
          v-model="filter"
          @change="updateFilter('all')"
        />
        <label tabindex="0" for="all"><span id="label-text">All</span></label>
      </div>

      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          name="filter"
          id="open"
          value="open"
          v-model="filter"
          @change="updateFilter('open')"
        />
        <label tabindex="0" for="open"><span id="label-text">Open</span></label>
      </div>

      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          name="filter"
          id="done"
          value="done"
          v-model="filter"
          @change="updateFilter('done')"
        />
        <label tabindex="0" for="done"><span id="label-text">Done</span></label>
      </div>
    </div>

    <button class="remove-btn" @click.prevent="removeDoneTodos">
      Remove Done Todos
    </button>
  </form>
</template>

<script>
import { useTodoStore } from "@/store/store.js";

export default {
  name: "FilterAndOptions",
  setup() {
    const store = useTodoStore();

    const updateFilter = (newFilter) => {
      store.setFilter(newFilter);
    };

    const removeDoneTodos = () => {
      store.removeDoneTodos();
    };

    return {
      filter: store.filter,
      updateFilter,
      removeDoneTodos,
    };
  },
};
</script>

<!-- <template>
  <form class="filter-and-options">
    <h2>Filter & Options</h2>

    <div>
      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          name="filter"
          id="all"
          value="all"
          v-model="filter"
          @change="updateFilter('all')"
        />
        <label tabindex="0" for="all"><span id="label-text">All</span></label>
      </div>

      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          name="filter"
          id="open"
          value="open"
          v-model="filter"
          @change="updateFilter('open')"
        />
        <label tabindex="0" for="open"><span id="label-text">Open</span></label>
      </div>

      <div class="radio-container">
        <input
          class="radio"
          type="radio"
          name="filter"
          id="done"
          value="done"
          v-model="filter"
          @change="updateFilter('done')"
        />
        <label tabindex="0" for="done"><span id="label-text">Done</span></label>
      </div>
    </div>

    <button class="remove-btn" @click="removeDoneTodos">
      Remove Done Todos
    </button>
  </form>
</template>

<script>
import { useTodoStore } from "@/store/store.js"

export default {
  name: "FilterAndOptions",
  setup() {
    const store = useTodoStore();

    const updateFilter = (newFilter) => {
      store.setFilter(newFilter);
    };

    return {
      filter: store.filter,
      updateFilter
    };
  }
};
</script> -->

<style scoped>
.filter-and-options {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.radio-container {
  display: flex;
  align-items: center;

  margin-bottom: calc(1rem + 2vw);
}

input[type="radio"] {
  position: absolute;
  left: -1000rem;
}

input[type="radio"] + label::before {
  content: "";
  display: inline-block;
  width: calc(1rem + 1vw);
  height: calc(1rem + 1vw);
  border-radius: 50%;
  background-color: var(--clr-white);
  border: 0.15rem solid var(--clr-black);
  margin-right: 0.5rem;
}

label::before {
  padding-top: 1rem;
}

input[type="radio"]:checked + label::before {
  background-color: var(--clr-blue);
  border-color: var(--clr-black);
}

input[type="radio"] + label:focus {
  outline: none;
}

input[type="radio"] + label:focus::before {
  border-color: var(--clr-orange);
}

#label-text {
  margin-top: 0.1rem;
}

label:hover::before {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
