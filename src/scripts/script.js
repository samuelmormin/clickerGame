var planetEarth          = document.querySelector(".planet");
var mouseDiv             = document.querySelector("div.mouseClickEffect");
var mouse                = { x : 0, y : 0 };
var mouseDivPosition     = { x : 0, y : 0 };


planetEarth.addEventListener('click', function()
{
    planetEarth.classList.add('clickEffect1')
});

planetEarth.addEventListener('animationend', function()
{
    planetEarth.classList.remove('clickEffect1');
});

document.addEventListener('mousemove', function(event)
{
    mouse.x                 = event.clientX;
    mouse.y                 = event.clientY;
    mouseDivPosition.x      = mouse.x + 10;
    mouseDivPosition.y      = mouse.y - 10;
    mouseDiv.style.left     =  mouseDivPosition.x + "px";
    mouseDiv.style.top      =  mouseDivPosition.y + "px";
});


document.addEventListener('click', function()
{
    var element = document.createElement("P");
    var p = document.createTextNode("+1");
    
});
