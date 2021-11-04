
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
                            status: "received"
                        },
                        {
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
                            text: "sono Luca",
                            status: "received"
                        },
                        {
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
                            text: "sono Giovanni",
                            status: "received"
                        },
                        {
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
                            text: "sono Luigi",
                            status: "received"
                        },
                        {
                            text: "inviato da me",
                            status: "sent"
                        }
                    ]
                }
            ],
            activeChat: {}
        },
        methods:{
            onChatClick(chat){
                this.activeChat = chat;
                console.log(`questa è la chat di ${this.activeChat.userName}`, this.activeChat);
                /* console.log(this.activeChat.messages[1].status); */
            }
        }
    })
})