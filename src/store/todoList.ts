// Utilities
import { defineStore } from 'pinia'

type TodoItemType = {
  title: string,
  done: boolean,
}

interface State {
  list: string[]
  newItem: string
  newList: []
}

function syncLocalStorage(content: TodoItemType[]) {
  localStorage.setItem('todolist', JSON.stringify(content))
},

export const useTodoListStore = defineStore('todoList', {
  state: () => ({
    list: localStorage.getItem('todolist') || [],
    newItem: '',
    newList: [],
  }),
  getters: {
    
  },
  actions: {
    
    add(state:State, text:string) {
      state.list.push({
          title: text,
          done: false,
      })
      syncLocalStorage(state.list)
    },
    removeItem(index:number) {
        this.$state.list.splice(todo, 1)
        syncLocalStorage(state.list)
    },
    removeDone(state) {
        const result = state.list.filter((x) => {
            return x.done === false
        })
        state.list = result
        syncLocalStorage(state.list)
    },
    removeAll(state) {
        state.list = []
        syncLocalStorage(state.list)
    },
    toggle(state, todo) {
        todo.done = !todo.done
        syncLocalStorage(state.list)
    },
    updateTodoList(state) {
        syncLocalStorage(state.list)
    },
  },
})
