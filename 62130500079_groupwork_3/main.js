const app = {
    data() {
        return {
            tasks: [
            {picture: './images/pic1.jpg',done:false, description: '🌷Picture1'},
            {picture: './images/pic2.jpg',done:false, description: '🌷Picture2'},
            {picture: './images/pic3.jpg',done:false, description: '🌷Picture3'},
            ]
            
   
        }

    },
    methods: {
        toggleDone(index) {
            this.tasks[index].done = !this.tasks[index].done        
        }
    },
    computed: {
        countimage() {
            return this.tasks.length
        }
    }
   
}
mountedApp = Vue.createApp(app).mount('#app')