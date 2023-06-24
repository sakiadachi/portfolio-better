export const state = () => ({
    list: localStorage.getItem('todolist')
        ? JSON.parse(localStorage.getItem('todolist'))
        : [],
})

function syncLocalStorage(content) {
    localStorage.setItem('todolist', JSON.stringify(content))
}

export const mutations = {
    add(state, text) {
        state.list.push({
            title: text,
            done: false,
        })
        syncLocalStorage(state.list)
    },
    remove(state, todo) {
        state.list.splice(todo, 1)
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
}
