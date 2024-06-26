const { createApp } = Vue;

createApp ({
    data() {
        return {
            text : [
                "Portare fuori il cane",
                "Fare la spesa",
                "Fare il bucato",
                "Rinnovare l'abbonamento Netflix in scadenza"
            ],

            done : false
        }
    },
    methods : {
        remuveTask (index) {
         this.text.splice(index, 1);
        }
    }
}).mount("#container")
