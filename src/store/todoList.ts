// Utilities
import { defineStore } from 'pinia'

export type TodoItemType = {
  title: string
  done: boolean
}

interface State {
  list: string[]
  newItemText: string
  newList: []
}

function syncLocalStorage(content: TodoItemType[]) {
  localStorage.setItem('todolist', JSON.stringify(content))
}

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    list: localStorage.getItem('todolist')
      ? JSON.parse(localStorage.getItem('todolist') || `[]`)
      : [],
    newItemText: '',
    newList: [],
    toDoRules: [(v: string) => !!v || 'Cannot save empty todo'],
  }),
  actions: {
    add(text: string) {
      this.$state.list.push({
        title: text,
        done: false,
      })
      syncLocalStorage(this.$state.list)
    },
    removeItem(index: number) {
      this.$state.list.splice(index, 1)
      syncLocalStorage(this.$state.list)
    },
    removeDone() {
      const result = this.$state.list.filter((x: TodoItemType) => {
        return x.done === false
      })
      this.$state.list = result
      syncLocalStorage(this.$state.list)
    },
    removeAll() {
      this.$state.list = []
      syncLocalStorage(this.$state.list)
    },
    toggle(todo: TodoItemType) {
      todo.done = !todo.done
      syncLocalStorage(this.$state.list)
    },
    updateTodoList() {
      syncLocalStorage(this.$state.list)
    },
  },
})
