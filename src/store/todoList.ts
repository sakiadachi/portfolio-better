// Utilities
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

type TodoItemType = {
  id: string
  title: string
  done: boolean
}

type State = {
  todos: TodoItemType[]
  newItemText: string
  toDoRules: [(v: string) => boolean | string]
}

export const useTodoListStore = defineStore('todoList', {
  state: (): State => ({
    todos: localStorage.getItem('todolist')
      ? JSON.parse(localStorage.getItem('todolist') || `[]`)
      : [],
    newItemText: '',
    toDoRules: [(v: string) => !!v || 'Cannot save empty todo'],
  }),
  actions: {
    syncLocalStorage(newTodos: TodoItemType[]) {
      localStorage.setItem('todolist', JSON.stringify(newTodos))
      this.$state.todos = JSON.parse(localStorage.getItem('todolist') || `[]`)
      this.$state.newItemText = ''
    },
    add() {
      const newTodo = {
        id: uuidv4(),
        title: this.$state.newItemText,
        done: false,
      }
      const newArr = [...this.$state.todos, newTodo]
      this.syncLocalStorage(newArr)
    },
    removeItem(id: string) {
      const newArr = this.$state.todos.filter(
        (todo: TodoItemType) => todo.id !== id,
      )
      this.syncLocalStorage(newArr)
    },
    removeDone() {
      const result = this.$state.todos.filter(
        (x: TodoItemType) => x.done === false,
      )
      this.syncLocalStorage(result)
    },
    removeAll() {
      this.syncLocalStorage([])
    },
    toggle(todo: TodoItemType) {
      const arr = [...this.$state.todos]
      const newArr = arr.map((t) => {
        if (t.id === todo.id)
          return {
            ...t,
            done: !t.done,
          }
        return t
      })
      this.syncLocalStorage(newArr)
    },
  },
})
