<template>
   <AppHeader />
   <TodoImput />
   <FilterAndOptions />
   <TodoList />
</template>

<script>
    import AppHeader from '@/components/AppHeader.vue';
    import TodoImput from '@/components/TodoInput.vue';
    import FilterAndOptions from '@/components/FilterAndOptions.vue';
    import TodoList from '@/components/TodoList.vue';
    export default {
  components: {
    AppHeader,
    TodoImput,
    FilterAndOptions,
    TodoList,
  },}
</script>

<style>
    @import url('@/assets/main.css');
</style>