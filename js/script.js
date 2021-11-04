
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
                            text: "sono Marco",
                            status: "recieved"
                        },
                        {
                            text: "inviato",
                            status: "sent"
                        }
                    ]
                },
                {
                    userName: "Luca",
                    profilePic: "img/avatar_2.jpg",
                    messages: [
                        {
                            text: "sono Luca",
                            status: "recieved"
                        },
                        {
                            text: "inviato",
                            status: "sent"
                        }
                    ]
                },
                {
                    userName: "Giovanni",
                    profilePic: "img/avatar_3.jpg",
                    messages: [
                        {
                            text: "sono Giovanni",
                            status: "recieved"
                        },
                        {
                            text: "inviato",
                            status: "sent"
                        }
                    ]
                },
                {
                    userName: "Luigi",
                    profilePic: "img/avatar_4.jpg",
                    messages: [
                        {
                            text: "sono Luigi",
                            status: "recieved"
                        },
                        {
                            text: "inviato",
                            status: "sent"
                        }
                    ]
                }
            ],
            activeChat: null
        },
        methods:{
            onChatClick(chat){
                this.activeChat = chat;
                console.log(`questa è la chat di ${this.activeChat.userName}`, this.activeChat);
            }
        }
    })
})