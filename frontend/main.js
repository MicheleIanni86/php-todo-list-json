const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: "!ToDo LIST!",
            lists: ['ciao', 'arrivederci', 'buonasera']
        };
    },
});


app.mount('#root');