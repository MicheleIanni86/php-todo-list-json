const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: "!ToDo LIST!",
            lists: [],

            newTodo: {
                text: "",
                done: false
            }
        };
    },


    methods: {
        fetchTodoList() {
            axios.get('../backend/api/get-list.php').then((response) => {
                this.lists = response.data;
            });
        },

        addToDo() {
            const todo = this.newTodo.text;
            this.newTodo.text = '';

            const data = { todo: todo };

            const params = {
                headers: { 'Content-Type': 'multipart/form-data' },
            };

            axios.post('../backend/api/store-list.php', data, params).then((response) => {
                console.log(response.data);
                this.lists = response.data;

            });

        },

    },

    mounted() {
        this.fetchTodoList();
    },
});

app.mount('#root');