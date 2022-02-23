import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const STORAGE_KEY = "todos-vuejs-2.6";
const todoStorage = {
  fetch() {
    const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    todos.forEach(function(todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
};
export default new Vuex.Store({
  state: {
    todos: todoStorage.fetch()
  },
  getters: {
    filteredTodos: state => state.todos,
    remaining: state => {
      const todos = state.todos.filter(todo => !todo.completed);
      return todos.length;
    }
  },
  mutations: {
    addTodo(state, todoTitle) {
      const newTodo = todoTitle && todoTitle.trim();
      if (!newTodo) {
        return;
      }
      state.todos.push({
        id: todoStorage.uid++,
        title: newTodo,
        completed: false
      });
    },
    removeTodo(state, todo) {
      state.todos = state.todos.filter(item => item !== todo);
    },
    done(state, { todo, completed }) {
      state.todos = state.todos.map(item => {
        if (item === todo) {
          item.completed = completed;
        }
        return item;
      });
    },
    save(state) {
      todoStorage.save(state.todos);
    }
  }
});
