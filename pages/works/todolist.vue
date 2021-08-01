<template>
    <div class="px-4 pt-8 pb-10" style="height: 100%">
        <v-row>
            <v-col cols="12" sm="8" class="mx-auto" style="max-width: 700px">
                <Todolist></Todolist>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import Todolist from '@/components/TodoList'

export default {
    page: 'todolist',
    components: {
        Todolist,
    },
    data() {
        return {}
    },
}
</script>
