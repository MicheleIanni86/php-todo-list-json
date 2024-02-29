const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: "!ToDo LIST!",
            lists: []
        };
    },


    methods: {
        fetchTodoList() {
            axios.get('http://localhost/php-todo-list-json/backend/api/get-list.php').then((response) => {
                this.lists = response.data;
            });
        }
    },

    mounted() {
        this.fetchTodoList();
    }
});


app.mount('#root');