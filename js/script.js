
Vue.config.devtools = true; 

window.addEventListener("DOMContentLoaded", function(){
    const vueApp = new Vue ({
        el: "#root",
        data: {
            chatList: [
                {
                    userName: "Marco",
                    profilePic: "img/avatar_1.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "sono Marco",
                            status: "received"
                        },
                        {
                            date: "10/01/2020 15:30:55",
                            text: "inviato da me",
                            status: "sent"
                        }
                    ]
                },
                {
                    userName: "Luca",
                    profilePic: "img/avatar_2.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "sono Luca",
                            status: "received"
                        },
                        {
                            date: "10/01/2020 15:30:55",
                            text: "inviato da me",
                            status: "sent"
                        }
                    ]
                },
                {
                    userName: "Giovanni",
                    profilePic: "img/avatar_3.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "sono Giovanni",
                            status: "received"
                        },
                        {
                            date: "10/01/2020 15:30:55",
                            text: "inviato da me",
                            status: "sent"
                        }
                    ]
                },
                {
                    userName: "Luigi",
                    profilePic: "img/avatar_4.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "sono Luigi",
                            status: "received"
                        },
                        {
                            date: "10/01/2020 15:30:55",
                            text: "inviato da me",
                            status: "sent"
                        }
                    ]
                }
            ],
            activeChat: {},
            inputNewMessage: "",
        },
        methods:{
            onChatClick(chat){
                this.activeChat = chat;
                console.log(`questa è la chat di ${this.activeChat.userName}`, this.activeChat);
            },
            sendMessage(){
                /* se activeChat è un oggetto vuoto allora devo bloccare l'input del testo del nuovo messaggio */
                if (Object.keys(this.activeChat).length === 0 ){
                    console.log("blocco il messaggio");
                    return
                }

                console.log(`mando un messaggio a ${this.activeChat.userName}`, this.activeChat.messages);
                /* devo eseguire all'interno dell'array di oggetti: messages, un oggetto contenente il messaggio */
                this.activeChat.messages.push({text: this.inputNewMessage, status: "sent"})
                this.inputNewMessage = "";

                setTimeout(() =>{
                    console.log("risposta");
                    this.activeChat.messages.push({text: "ok", status: "received"})
                }, 1000)
            }
        },
        
    })
})