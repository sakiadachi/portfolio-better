<template>
    <v-card elevation="4" class="mx-auto pa-8" max-width="500">
        <h1>Todo list</h1>
        <v-text-field
            v-model="newItem"
            type="text"
            placeholder="New task"
            color="grey"
            @keyup.enter="addItem"
        >
            <v-btn
                slot="append"
                fab
                small
                tile
                color="white"
                elevation="0"
                @click="addItem"
            >
                <v-icon color="red">mdi-plus</v-icon></v-btn
            >
        </v-text-field>

        <div v-if="items.length > 0" class="text-right pt-4">
            <v-btn
                class="text-right"
                color="green"
                elevation="0"
                medium
                outlined
                @click="clearCompleted"
                ><v-icon>mdi-delete</v-icon>completed tasks</v-btn
            >
            <v-btn
                class="text-right"
                color="orange"
                elevation="0"
                medium
                outlined
                @click="clearItems"
                ><v-icon>mdi-delete</v-icon>all</v-btn
            >
        </div>
        <div v-if="items.length > 0" class="pt-4">
            <ul class="pl-4">
                <li
                    v-for="(item, index) in items"
                    :key="`item-${index}`"
                    class="tasks-list"
                >
                    <div class="d-flex justify-space-between align-center">
                        <v-col cols="auto" class="py-2 px-0">
                            <p
                                class=""
                                :class="{ 'item-done': item.completed }"
                            >
                                {{ item.title }}
                            </p>
                        </v-col>
                        <v-col cols="auto" class="py-2 px-0">
                            <v-btn
                                xsmall
                                icon
                                tile
                                color=""
                                elevation="0"
                                @click="removeItem(index)"
                            >
                                <v-icon color="red">mdi-close</v-icon>
                            </v-btn>

                            <v-btn
                                xsmall
                                icon
                                tile
                                color=""
                                elevation="0"
                                @click="completeItem(item)"
                            >
                                <v-icon color="green">mdi-check</v-icon>
                            </v-btn>
                        </v-col>
                    </div>
                </li>
            </ul>
        </div>
        <div v-else class="text-center py-8">
            <p class="grey--text text--lighten-1">No tasks yet!</p>
        </div>
    </v-card>
</template>
<script>
export default {
    name: 'TodoList',
    data() {
        return {
            newItem: '',
            items: [],
        }
    },
    computed: {
        incomplete() {
            return this.items.filter()
        },
    },
    methods: {
        addItem() {
            if (this.newItem) {
                this.items.push({
                    title: this.newItem,
                    completed: false,
                })
                this.newItem = ''
            }
        },
        removeItem(index) {
            this.items.splice(index, 1)
        },
        completeItem(item) {
            item.completed = !item.completed
        },
        clearItems() {
            this.items = []
        },
        clearCompleted() {
            this.items = this.items.filter(this.inProgress)
        },
        inProgress(item) {
            return !this.isCompleted(item)
        },
        isCompleted(item) {
            return item.completed
        },
    },
}
</script>
