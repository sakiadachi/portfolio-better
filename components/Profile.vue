<template>
    <div class="text-left mt-2">
        <a href="mailto:hello@sakiadachi.com" color="primary"
            ><h3>Say hi <span style="font-size: 22px">👋</span></h3></a
        >
    </div>
</template>

<script>
export default {
    name: 'Profile',
    components: {},
    data() {
        return {
            fav: true,
            menu: false,
            message: false,
            valid: false,
            firstname: '',
            lastname: '',
            nameRules: [
                (v) => !!v || 'Name is required',
                (v) => v.length <= 10 || 'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                (v) => !!v || 'E-mail is required',
                (v) => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            category: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        }
    },
}
</script>
