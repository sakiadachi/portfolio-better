<template>
    <div class="d-flex-column">
        <v-sheet min-height="20vh" rounded="lg" class="pa-6" outlined>
            <h2 class="mb-3">Todo list</h2>

            <v-form ref="toDoForm" @submit.prevent>
                <v-text-field
                    v-model="newItem"
                    type="text"
                    placeholder="New task"
                    :rules="toDoRules"
                    color="grey"
                    class=""
                    required
                    max-length="80"
                    @keyup.enter="validate(newItem)"
                >
                    <v-btn
                        slot="append"
                        tile
                        elevation="0"
                        color="red"
                        class="mt-0"
                        :disabled="!newItem.length > 0"
                        @click="submit(newItem)"
                    >
                        <v-icon color="white">mdi-plus</v-icon></v-btn
                    >
                </v-text-field>
            </v-form>

            <div class="pt-4">
                <div v-if="todos.length > 0" class="text-right">
                    <v-btn
                        class="text-right mr-2"
                        color="green"
                        elevation="0"
                        medium
                        text
                        @click="removeDone"
                        ><v-icon>mdi-delete</v-icon>completed</v-btn
                    >
                    <v-btn
                        class="text-right"
                        color="red"
                        elevation="0"
                        medium
                        text
                        @click="clearItems"
                        ><v-icon>mdi-delete</v-icon>all</v-btn
                    >
                </div>
                <div v-if="todos.length > 0" class="pt-4">
                    <ul class="tasks-list pl-0">
                        <li
                            v-for="(item, index) in todos"
                            :key="`item-${index}`"
                            class="pl-0"
                        >
                            <div
                                class="d-flex justify-space-between align-center"
                            >
                                <v-col cols="auto" class="d-flex py-2 px-0">
                                    <div
                                        class="todo-checkbox"
                                        :class="{ checked: item.done }"
                                        @click="toggle(item)"
                                    ></div>
                                    <p
                                        class="ml-4"
                                        :class="{ 'item-done': item.done }"
                                    >
                                        {{ item.title }}
                                    </p>
                                </v-col>

                                <v-col cols="auto" class="py-2 px-0">
                                    <v-btn
                                        small
                                        icon
                                        tile
                                        color=""
                                        elevation="0"
                                        @click="removeItem(index)"
                                    >
                                        <v-icon color="grey">mdi-delete</v-icon>
                                    </v-btn>
                                </v-col>
                            </div>
                        </li>
                    </ul>
                </div>
                <div v-else class="text-center py-8">
                    <p class="grey--text text--lighten-1">No tasks yet!</p>
                </div>
            </div>
        </v-sheet>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'TodoList',
    data() {
        return {
            newItem: '',
            newList: [],
            toDoRules: [(v) => !!v || 'Cannot save empty todo'],
            categories: [
                { id: 0, label: 'work' },
                { id: 0, label: 'shopping' },
            ],
        }
    },
    computed: {
        todos: {
            get() {
                return this.$store.state.todos.list
            },
            set(value) {
                this.$store.commit('updateTodolist', value)
            },
        },
    },
    methods: {
        ...mapMutations({
            toggle: 'todos/toggle',
        }),
        submit(val) {
            this.$store.commit('todos/add', val)
            this.newItem = ''
        },
        removeItem(index) {
            this.$store.commit('todos/remove', index)
        },
        clearItems() {
            this.$store.commit('todos/removeAll')
        },
        removeDone() {
            this.$store.commit('todos/removeDone')
        },
        validate(item) {
            if (this.$refs.toDoForm.validate()) {
                this.submit(item)
            }
        },
    },
}
</script>
