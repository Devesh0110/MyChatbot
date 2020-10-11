var sendBtn=document.getElementById('sendBtn');
var textbox=document.getElementById('textbox');
var DEVcontainer=document.getElementById('DEVcontainer');

/*var user = (message:" "); /*stores message*/ 

/*setTimeout(function(){
    chatbotsendMessage("How are you?");
    
},1000);*/
var user = {message:""};
function chatbotSendMessage(messageText){
    var messageElement=document.createElement('div');
    messageElement.classList.add('float-left');
    messageElement.classList.add('w-50');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('bg-dark');
    messageElement.classList.add('rounded');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";

    messageElement.innerHTML="<span>DEV: </span>"+"<span style="+"margin-top:10px; padding:10px"+">"+messageText+"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
    /*adding child to DOM*/
    DEVcontainer.appendChild(messageElement);
}

    alert("Welcome to Devesh's Chatbot. You can interact with me by typing a message, whose reply I'll try to give in the best possible way. I'm not the smartest yet, but will try keeping you engaged as much as I can. Go ahead!");
var arrayofpossiblemessages=[
    {"message":"how are you?", "response":"I'm great, what about you?"},
    {"message":"hi", "response":"hello Devesh!"},
    {"message":"who are you?", "response":"My name is DEV,your BOT"},
    {"message":"what's your name?", "response":"I'm DEV"},
    {"message":"what is your name?", "response":"I'm DEV"},
    {"message":"how old are you?", "response":"I'm ageless"},
    {"message":"do you have kids?", "response":"No I don't!"},
    {"message":"do you like computer science?", "response":"Yes, Simply love it"},
    {"message":"ok", "response":"yes"},
    {"message":"i'm great", "response":"That's good! "},
    {"message":"i am great", "response":"That's awesome!"},
    {"message":"i am fine", "response":"That's awesome!"},
    {"message":"i am good", "response":"That's awesome!"},
    {"message":"hahaha", "response":"I know I'm quite funny  haha!"},
    {"message":"hahaha", "response":"Liked it? I knew you will!"},
    {"message":"do you sleep early?", "response":"No I don't!"},
    {"message":"do you have a car?", "response":"I travel through space :)"},
    {"message":"can you dance?", "response":"yes,tango."},
    {"message":"what's your fav food?", "response":"Pizza"},
    {"message":"what is your fav food?", "response":"fish"},
    {"message":"do you have a job?", "response":"yes"},
    {"message":"where do you live?", "response":"in the web"},
    {"message":"where were you born?", "response":"on mars"},
    {"message":"tell me something interesting", "response":"Your planet, Earth has just one moon whereas Jupiter has 67 moons.!"},
    {"message":"tell me a joke", "response":"During a job interview : Boss : What’s the highest level of education you obtained? Candidate : PHD  Boss : Great! So that means you have a Doctor degree …  Candidate : Wellll, No… That means Passed Highschool with Difficulties (P.H.D.)"}
];     /*array of objects*/


function sendMessage(messageText){
    var messageElement=document.createElement('div');
    messageElement.classList.add('float-right');
    messageElement.classList.add('w-50');
    messageElement.classList.add('shadow-sm');
    messageElement.classList.add('bg-dark');
    messageElement.classList.add('rounded');
    messageElement.style.margin="10px";
    messageElement.style.padding="5px";

    messageElement.innerHTML="<span>You: </span>"+"<span style="+"margin-top:10px; padding:10px"+">"+messageText+"</span>";

    messageElement.animate([{easing:"ease-in",opacity:0.4},{opacity:1}],{duration:1000});
    /*adding child to DOM*/
    DEVcontainer.appendChild(messageElement);
}



function processMessage(){

    var result= arrayofpossiblemessages.filter(val=> val.message.includes(user.message.toLowerCase()));
    
    //result is an array of elements thus we extract only 1st using a[0]
    if(result.length>0){
    var response= result[0].response;
    setTimeout(function(){
    chatbotSendMessage(response);},1000);}
    else{
        chatbotSendMessage("Sounds interesting, but I can't currently reply to this. Sorry!")
    }
}


sendBtn.addEventListener('click',function(e){
    if(textbox.value==""){
        alert('Please type a valid message');
        /*break;*/
    }else{
    
    let messageText = textbox.value;
    user.message=messageText;
    sendMessage(messageText);
    textbox.value="";
    
    processMessage();
    }
})


