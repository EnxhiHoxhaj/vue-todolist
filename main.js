const { createApp } = Vue;

createApp ({
    data() {
        return {
            text : [
                "Portare fuori il cane",
                "Fare la spesa",
                "Fare il bucato",
                "Rinnovare l'abonamento Netflix in scadenza"
            ],
            done : [
                true,
                false
            ]
        }
    },
}).mount("#container")
