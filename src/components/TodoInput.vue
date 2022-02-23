<template>
  <input
    v-model="newTodo"
    class="new-todo"
    autofocus
    autocomplete="off"
    placeholder="What needs to be done?"
    @keypress.enter="addTodo"
  >
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      this.$store.commit("addTodo", this.newTodo);
      this.newTodo = "";
    }
  }
};
</script>
