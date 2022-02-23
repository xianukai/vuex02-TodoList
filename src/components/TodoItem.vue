<template>
  <div class="view">
		<input
			type="checkbox"
      class="toggle"
			:value="todo.completed"
			:checked="todo.completed"
			@input="onInput"
		>
		<label>{{todo.title}}</label>
		<button
			class="destroy"
			@click="removeTodo"
    >
		</button>
	</div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: Object
  },
  methods: {
    removeTodo() {
			this.$store.commit('removeTodo', this.todo);
		},
		onInput() {
			this.$store.commit('done', {
				todo: this.todo,
				completed: !this.todo.completed
			});
		}
  }
};
</script>
