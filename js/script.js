console.log("Vue OK", Vue);

const {createApp} = Vue;

const app = createApp({
    data(){
        return{
            message: "Hello!",
            img:'https://media.istockphoto.com/id/1133905340/it/vettoriale/segnale-di-saluto-ciao-simbolo.jpg?s=612x612&w=0&k=20&c=CR3G6QFjYd_qRQ_qNPNBLfEmQmCnca_kg0M_YjSTQZo='
        }
    }

});


app.mount('#root');