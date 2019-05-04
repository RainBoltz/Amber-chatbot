
// replies
REPLIES = {
    '你好':[
        '你好'
    ]
}
RANDOM_REPLY = [
    '恩',
    '豪',
    '?',
    '...',
    '......',
    '蛤',
    '喔'
]


// utility functions
function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}
async function sleep(ms = 0) {
    return new Promise(r => setTimeout(r, ms));
}


// interface render functions
function user_send_msg(msg){
    let current_datetime = new Date();
    current_time = current_datetime.toString().split(" ")[4]
    let html_code = `
        <div class="container darker">
            <img src="img/user.png" alt="User Avatar" class="right" style="width:100%;">
            <p>` + msg + `</p>
            <span class="time-left">` + current_time + `</span>
        </div>
    `;
    
    document.getElementById('last_elem').insertAdjacentHTML('beforebegin', html_code);
    window.scrollTo(0,document.body.scrollHeight);
}
function amber_send_msg(msg){
    let current_datetime = new Date();
    current_time = current_datetime.toString().split(" ")[4]
    let html_code = `
        <div class="container">
            <img src="img/amber.png" alt="Amber Avatar" style="width:100%;">
            <p>` + msg + `</p>
            <span class="time-right">` + current_time + `</span>
        </div>
    `;
    
    document.getElementById('last_elem').insertAdjacentHTML('beforebegin', html_code);
    window.scrollTo(0,document.body.scrollHeight);
}


// main functions
function amber_reply(msg){
    for(let k in REPLIES){
        if(msg.includes(k)){
            return choose(REPLIES[k]);
        }
    }
    return choose(RANDOM_REPLY);
}
async function update_msgbox(){
    let msg = document.getElementById('user-text-msg').value;
    document.getElementById('user-text-msg').value = "";
    if(msg != ""){
        user_send_msg(msg);
        let reply = amber_reply(msg);
        await sleep(2000);
        amber_send_msg(reply);
    }
}
window.onload = async function() {
    let inp = document.getElementById("user-text-msg");
    inp.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submit_btn").click();
      }
    });
    
    await sleep(2000);
    amber_send_msg('我已經很努力要跟別人聊天了');
    await sleep(1500);
    amber_send_msg('但我真的還是很有距離感嗎...');
    
};





















