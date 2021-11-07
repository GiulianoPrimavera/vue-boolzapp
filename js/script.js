
Vue.config.devtools = true;

window.addEventListener("DOMContentLoaded", function () {
    const vueApp = new Vue({
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
                            status: "received",
                            check: ""
                        },
                        {
                            date: "10/01/2020 15:30:55",
                            text: "inviato da me",
                            status: "sent",
                            check: ""
                        }
                    ],
                    lastSeen: "10/01/2020 15:30:55"
                },
                {
                    userName: "Luca",
                    profilePic: "img/avatar_2.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "sono Luca",
                            status: "received",
                            check: ""
                        },
                        {
                            date: "10/01/2020 15:30:55",
                            text: "inviato da me",
                            status: "sent",
                            check: ""
                        }
                    ],
                    lastSeen: "10/01/2020 15:30:55"
                },
                {
                    userName: "Giovanni",
                    profilePic: "img/avatar_3.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "sono Giovanni",
                            status: "received",
                            check: ""
                        },
                        {
                            date: "10/01/2020 15:30:55",
                            text: "inviato da me",
                            status: "sent",
                            check: ""
                        }
                    ],
                    lastSeen: "10/01/2020 15:30:55"
                },
                {
                    userName: "Luigi",
                    profilePic: "img/avatar_4.jpg",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            text: "sono Luigi",
                            status: "received",
                            check: ""
                        },
                        {
                            date: "10/01/2020 15:30:55",
                            text: "inviato da me",
                            status: "sent",
                            check: ""
                        }
                    ],
                    lastSeen: "10/01/2020 15:30:55"
                }
            ],
            activeChat: {},
            inputNewMessage: "",
            chatSrcText: ""
        },
        methods: {
            onChatClick(chat) {
                this.activeChat = chat;
                console.log(`questa è la chat di ${this.activeChat.userName}`, this.activeChat);
            },
            sendMessage() {
                /* se activeChat è un oggetto vuoto allora devo bloccare l'input del testo del nuovo messaggio */
                if (Object.keys(this.activeChat).length === 0) {
                    console.log("blocco il messaggio");
                    return
                }

                console.log(`mando un messaggio a ${this.activeChat.userName}`, this.activeChat.messages);
                /* devo eseguire all'interno dell'array di oggetti: messages, un oggetto contenente il messaggio */
                this.activeChat.messages.push({ date: dayjs().format("DD/MM/YY HH:mm:ss"), text: this.inputNewMessage, status: "sent", check: ""})
                this.inputNewMessage = "";




                setTimeout(() => {
                    console.log("risposta");
                    this.activeChat.messages.push({ date: dayjs().format("DD/MM/YY HH:mm:ss"), text: "ok", status: "received", check: ""})
                    console.log("questo è lulimo accesso", this.activeChat.lastSeen);
                    this.activeChat.lastSeen = dayjs().format("DD/MM/YY HH:mm:ss");
                }, 1000)
            },
            //questa funzione ritorna un array filtrato
            getFilteredChats() {
                if (!this.chatSrcText) {
                    //se nell'input di testo non ci sono stringhe da utilizzare nella funzione filter() allora ritorno l'intero array dei contatti
                    return this.chatList;
                }
                //la funzione filter() ritorna un array contenente gli elementi che includono il testo digitato nell'input di testo  
                return this.chatList.filter((contact) => {
                    return contact.userName.toLowerCase().includes(this.chatSrcText.toLowerCase().trim())
                })
            },

            onChevronClick(message) {
                console.log(`clicco messaggio in chat di  ${this.activeChat.userName} numero ${message}`, this.activeChat.messages[message]);
                //questo if funziona da toggle per aggiungere o rimuovere la classe
                if(this.activeChat.messages[message].check === ""){
                    this.activeChat.messages[message].check = "attiva"
                }else{
                    this.activeChat.messages[message].check = ""
                }
            }
        },

    })
})