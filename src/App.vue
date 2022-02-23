<template>
  <section id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <TodoInput/>
    </header>
    <TodoList/>
    <TodoController />
  </section>
</template>

<script>
import store from "./store";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoController from "./components/TodoController.vue";

export default {
  name: "app",
  components: {
    TodoInput,
    TodoList,
    TodoController,
  },
  mounted() {
		store.watch(
			(state, getters) => state.todos,
			(newValue, oldValue) => store.commit('save')
		);
	}
};
</script>

<style>
@import url("https://unpkg.com/todomvc-app-css@2.2.0/index.css");
</style>
