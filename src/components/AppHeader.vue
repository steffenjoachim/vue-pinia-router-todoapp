<template>
  <header>
    <h1>Todo App</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: calc(2rem + 5vw);
  background-color: var(--clr-red);
}

nav {
    position: absolute;
    bottom: 1rem;
}

nav a {
  color: var(--clr-white); 
  text-decoration: none;
  font-size: 1.25rem; 
  padding: 0.5rem 1rem;
  transition: color 0.3s;
}

nav a:hover {
  color: var(--clr-blue); 
}


@import url("@/assets/main.css");
</style>
