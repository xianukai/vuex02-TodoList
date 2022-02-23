<template>
	<footer
	  class="footer"
		v-show="todos.length"
		v-cloak>
		<span class="todo-count">
			<strong>{{remaining}}</strong>
			{{remaining | pluralize}} left
		</span>
	</footer>
</template>

<script>
export default {
	name: 'TodoController',
	filters: {
		pluralize(n) {
			return n === 1 ? 'item' : 'items';
		}
	},
	computed: {
		todos() {
			return this.$store.state.todos;
		},
		remaining() {
			return this.$store.getters.remaining;
		}
	}
};
</script>