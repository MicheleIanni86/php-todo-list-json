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
            axios.get('http://localhost/php-todo-list-json/backend/api/get-list.php').then((response) => {
                this.lists = response.data;
            });
        },

        addToDo() {
            console.log("Aggiungi questo todo: " + this.newTodo.text);
            this.newTodo.text = '';
        }
    },

    mounted() {
        this.fetchTodoList();
    }
});


app.mount('#root');