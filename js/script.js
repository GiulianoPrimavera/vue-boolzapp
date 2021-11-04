
Vue.config.devtools = true; 

window.addEventListener("DOMContentLoaded", function(){
    const vueApp = new Vue ({
        el: "#root",
        data: {
            chatList: [
                {
                    userName: "Marco",
                    profilePic: "img/avatar_1.jpg"
                },
                {
                    userName: "Luca",
                    profilePic: "img/avatar_2.jpg"
                },
                {
                    userName: "Giovanni",
                    profilePic: "img/avatar_3.jpg"
                },
                {
                    userName: "Luigi",
                    profilePic: "img/avatar_4.jpg"
                }
            ]
        }
    })
})