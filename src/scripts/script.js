var planetEarth          = document.querySelector(".earth");

planetEarth.addEventListener('click', function(){
    planetEarth.classList.add('clickEffect1')
});


planetEarth.addEventListener('animationend', function(){
    planetEarth.classList.remove('clickEffect1');
});
