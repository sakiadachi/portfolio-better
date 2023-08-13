<script lang="ts" setup>
import { useTodoListStore } from '@/store/todoList'
import { Ref, ref } from 'vue'
import { VForm } from 'vuetify/lib/components/index.mjs'

const store = useTodoListStore()
const toDoForm: Ref<typeof VForm | null> = ref(null)

const validate = () => {
  if (toDoForm.value?.validate()) {
    store.add()
  }
}
</script>

<template>
  <v-row>
    <v-col cols="12">
      <v-sheet
        min-height="20vh"
        rounded="lg"
        class="d-flex flex-column flex-grow-1 pa-6"
        elevation="6"
      >
        <h2 class="mb-3">Todo list</h2>

        <v-form ref="toDoForm" @submit.prevent>
          <v-text-field
            v-model="store.newItemText"
            type="text"
            placeholder="New task"
            :rules="store.toDoRules"
            max-length="80"
            append-inner-icon="mdi-plus"
            @click:append-inner="validate()"
            @keyup.enter="validate()"
          />
        </v-form>

        <div class="pt-4">
          <template v-if="store.todos.length > 0">
            <div class="text-right">
              <v-btn
                class="text-right mr-2"
                color="green"
                elevation="0"
                medium
                @click="store.removeDone()"
                ><v-icon>mdi-delete</v-icon>completed</v-btn
              >
              <v-btn
                class="text-right"
                color="red"
                elevation="0"
                medium
                @click="store.removeAll()"
                ><v-icon>mdi-delete</v-icon>all</v-btn
              >
            </div>
            <div class="pt-4">
              <ul class="tasks-list pl-0">
                <li
                  v-for="item in store.todos"
                  :key="`todo-${item.id}`"
                  class="d-flex align-center justify-space-between pl-0"
                >
                  <v-checkbox
                    :model-value="item.done"
                    @update:model-value="store.toggle(item)"
                    hide-details
                    label="black"
                    color="black"
                  >
                    <template v-slot:label>
                      <span :class="{ 'todo-list__item--done': item.done }">{{
                        item.title
                      }}</span>
                    </template>
                  </v-checkbox>

                  <v-btn
                    small
                    icon
                    tile
                    color=""
                    elevation="0"
                    @click="store.removeItem(item.id)"
                  >
                    <v-icon color="grey">mdi-delete</v-icon>
                  </v-btn>
                </li>
              </ul>
            </div>
          </template>
          <div v-else class="text-center py-8">
            <p class="grey--text text--lighten-1">No tasks yet!</p>
          </div>
        </div>
      </v-sheet>
    </v-col>
    <v-col cols="12" class="mt-12">
      <v-card elevation="0">
        <v-card-text
          >ブラウザのLocalStorageへTodoを作成・管理・削除する。</v-card-text
        >
        <v-card-text> 使用ツール: Vue.js、Pinia</v-card-text>
        <v-card-text>
          See more:
          <a
            href="https://github.com/sakiadachi/portfolio-better"
            target="_blank"
            >GitHub Repo</a
          >
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped>
.todo-list {
  &__item {
    &--done {
      text-decoration: line-through;
    }
  }
}
</style>
