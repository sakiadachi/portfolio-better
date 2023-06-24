<template>
    <div class="px-4 pt-8 pb-10" style="height: 100%">
        <ul class="d-inline-block">
            <li class="works-link grey--text">
                <a href="works/todolist">todo list</a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.works-link:after {
    content: '/';
    margin-left: 0.5rem;
}
</style>

<script>

export default {
    page: 'works',
    data() {
        return {}
    },
}
</script>
