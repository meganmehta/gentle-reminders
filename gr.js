(function(){
    var dailyReminders = [
        "notice patterns & believe them.", 
        "relax. you'll figure that thing out. you'll make it happen.",
        "you don't need to be liked by everybody.",
        "pay more attention to who they really are instead of who you want them to be.",
        "are you really stressing over something real or just making it up?",
        "take a 5 minute break.",
        "you're allowed to be a priority.",
        "i know you're scared, but you can handle this.",
        "you have to stop being afraid of being alone for a while.",
        "you'll never find the right people if you don't let the wrong ones go.",
        "keep it private.",
        "play some music.",
        "knowledge is power.",
        "never feel guilty for changing for the better.",
        "we're so distracted by how things end, we usually forget how beautiful it began.",
        "when a flower doesn't bloom you fix the environment where it grows, not the flower.",
        "you have to keep evolving and recreating yourself.",
        "don't settle for anything or anyone.",
        "how you respond is your power.",
        "imagine how effective you would be if you weren't anxious all the time.",
        "the worst they can say is 'no'",
        "it's okay to be selfish sometimes.",
        "you never really know what people are going through. be kind.",
        "make sure to fuel your body with good food.",
        "take some time to workout",
        "you're overthinking again. you got this.",
        "self care is productive.",
        "just becuase they come back doesn't mean you have to let them back in.",
        "sometimes, you just don't get over it - you move on.",
        "you're almost there, keep pushing.",
        "you are not a burden.",
        "you can do this.",
        "good moods are contagious.",
        "you can stop pretending.",
        "good things take time",
        "not everything will be easy, but not everything will be hard.",
        "it will all eventually make sense",
        "you're worthy of all of the things you want.",
        "what is your heart telling you?",
        "how are you, really?"
    ];

    function select(arr){
        return arr[Math.floor(Math.random() * arr.length)];
    }
    
    window.onload = function(){
        var randomReminder = select(dailyReminders);

        document.getElementById('reminder').innerHTML = randomReminder;
        document.getElementById('reminder').className = 'move';
    };

})();

function generate(){
    var color1 = '#'+ Math.floor(Math.random()*16777215).toString(16);
    var color2 = '#'+ Math.floor(Math.random()*16777215).toString(16);
    var color3 = '#'+ Math.floor(Math.random()*16777215).toString(16);
    var angle = Math.round(Math.random() * 360);

    var gradient = "linear-gradient(" + angle + "deg, " + color1 + ", " + color2 + ", " + color3 + ")";
    document.body.style.background = gradient; 

}

document.onload = generate();