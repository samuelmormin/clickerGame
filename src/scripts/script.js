var planetEarth          = document.querySelector(".planet");
var activePlanet         = document.querySelectorAll(".planet div");
var currentPercentage    = parseInt(parseFloat(clicker.global_var.purification_current/clicker.global_var.purification*100))
console.log(activePlanet);

planetEarth.addEventListener('click', function(){
    planetEarth.classList.add('clickEffect1')
});


planetEarth.addEventListener('animationend', function(){
    planetEarth.classList.remove('clickEffect1');
});

clicker.global_var.purification_current_percentage.addEventListener('', function(){

});
