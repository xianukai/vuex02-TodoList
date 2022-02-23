<template>
  <section 
    class="main" 
    v-show="todos.length" 
    v-cloak
  >
    <input
     class="toggle-all" type="checkbox">
    <ul class="todo-list">
      <li
        v-for="todo in filteredTodos"
        :class="['todo', {completed: todo.completed}]"
        :key="todo.id"
      >
        <todo-item :todo="todo"/>
      </li>
    </ul>
  </section>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    filteredTodos() {
      return this.$store.getters.filteredTodos;
    }
  }
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}
</style>
